using app_back_end.Models;
using System.Data;
using System.Data.SqlClient;
using static System.Net.Mime.MediaTypeNames;

namespace app_back_end.Handlers
{
    public class ProductHandler
    {
        private SqlConnection conexion;
        private string rutaConexion;
        public ProductHandler()
        {
            var builder = WebApplication.CreateBuilder();
            rutaConexion =
            builder.Configuration.GetConnectionString("BaseDeDatos");
            conexion = new SqlConnection(rutaConexion);
        }
        private DataTable CrearTablaConsulta(string consulta)
        {
            SqlCommand comandoParaConsulta = new SqlCommand(consulta,
            conexion);
            SqlDataAdapter adaptadorParaTabla = new
            SqlDataAdapter(comandoParaConsulta);
            DataTable consultaFormatoTabla = new DataTable();
            conexion.Open();
            adaptadorParaTabla.Fill(consultaFormatoTabla);
            conexion.Close();
            return consultaFormatoTabla;
        }

        public List<ProductModel> GetProducts()
        {
            List<ProductModel> productos = new List<ProductModel>();
            string consulta = "SELECT * FROM PRODUCT";
            DataTable tablaResultado = CrearTablaConsulta(consulta);
            foreach (DataRow columna in tablaResultado.Rows)
            {
                productos.Add(
                new ProductModel
                {
                    Id = Convert.ToInt32(columna["id"]),
                    Name = Convert.ToString(columna["name"]),
                    Price = Convert.ToDecimal(columna["price"]),
                    Type = Convert.ToString(columna["type"]),
                    Calories = Convert.ToInt32(columna["calories"]),
                    Imagen = Convert.ToString(columna["image"])
            });
            }
            return productos;
        }

        public List<string> GetIngredients(int productId)
        {
            List<string> ingredientes = new List<string>();
            string consulta = "Select ingredient from INGREDIENT where productId = " + productId.ToString() + "";
            DataTable tabla = CrearTablaConsulta(consulta);

            foreach (DataRow columna in tabla.Rows)
            {
                ingredientes.Add(Convert.ToString(columna["ingredient"]));
            }

            return ingredientes;
        }

        public ProductModel GetProductById(int id)
        {
            ProductModel result = new ProductModel();
            string consulta = $"SELECT * FROM PRODUCT WHERE id = {id}";

            DataTable tablaResultado = CrearTablaConsulta(consulta);

            foreach (DataRow columna in tablaResultado.Rows)
            {
                result.Id = Convert.ToInt32(columna["id"]);
                result.Name = Convert.ToString(columna["name"]);
                result.Price = Convert.ToDecimal(columna["price"]);
                result.Type = Convert.ToString(columna["type"]);
                result.Calories = Convert.ToInt32(columna["calories"]);
                result.Imagen = Convert.ToString(columna["image"]);
            }

            return result;
        }

        public bool InsertProduct(ProductModel product)
        {
            string consulta = $"INSERT INTO PRODUCT (name, price, type, calories, image) VALUES ('{product.Name}', {product.Price}, '{product.Type}', {product.Calories}, '{product.Imagen}')";
            var comandoParaConsulta = new SqlCommand(consulta, conexion);

            try
            {
                conexion.Open();
                bool exito = comandoParaConsulta.ExecuteNonQuery() >= 1;
                conexion.Close();
                return exito;
            }
            catch
            {
                return false;
            }
        }

        public bool InsertIngredients(List<string> ingredientes, int productId)
        {
            bool exito = false;
            foreach (string ingrediente in ingredientes)
            {
                string consulta = $"INSERT INTO INGREDIENT (productId, ingredient) VALUES ({productId}, '{ingrediente}')";
                var comandoParaConsulta = new SqlCommand(consulta, conexion);

                try
                {
                    conexion.Open();
                    exito = comandoParaConsulta.ExecuteNonQuery() >= 1;
                    conexion.Close();
                }
                catch
                {
                    return false;
                }
            }
            return exito;
        }

        public bool UpdateProduct(ProductModel product)
        {
            string consulta = $"UPDATE PRODUCT " +
                $"SET name = '{product.Name}', price = {product.Price}, type = '{product.Type}', calories = {product.Calories}, image = '{product.Imagen}'" +
                $" WHERE id = {product.Id}";
            var comandoParaConsulta = new SqlCommand(consulta, conexion);

            try
            {
                conexion.Open();
                bool exito = comandoParaConsulta.ExecuteNonQuery() >= 1;
                conexion.Close();
                return exito;
            }
            catch
            {
                return false;
            }
        }

        public bool DeleteProduct(int id)
        {
            string consulta = $"DELETE FROM PRODUCT WHERE id = {id}";
            var comandoParaConsulta = new SqlCommand(consulta, conexion);

            try
            {
                conexion.Open();
                bool exito = comandoParaConsulta.ExecuteNonQuery() >= 1;
                conexion.Close();
                return exito;
            }
            catch
            {
                return false;
            }
        }

        public int GetLastId()
        {
            string consulta = "SELECT MAX(id) AS maximo FROM PRODUCT";
            DataTable tablaResultado = CrearTablaConsulta(consulta);
            int result = 0;  // Valor por omisión (inicial)
            // Verifica que haya devuelto una tupla
            if (tablaResultado.Rows.Count > 0)
            {
                // Verifica que no sea nulo
                DataRow lastId = tablaResultado.Rows[0];
                if (!lastId.IsNull("maximo"))
                {
                    result = Convert.ToInt32(lastId["maximo"]);
                }
            }
            return result;
        }

        public bool UpdateIngredients(List<string> ingredientes, int id)
        {
            bool exito = false;
            string consulta = $"DELETE FROM INGREDIENT WHERE productId = {id}";
            var comandoParaConsulta = new SqlCommand(consulta, conexion);

            try
            {
                conexion.Open();
                exito = comandoParaConsulta.ExecuteNonQuery() >= 1;
                conexion.Close();
            }
            catch
            {
                return false;
            }

            foreach (string ingrediente in ingredientes)
            {
                consulta = $"INSERT INTO INGREDIENT (productId, ingredient) VALUES ({id}, '{ingrediente}')";
                comandoParaConsulta = new SqlCommand(consulta, conexion);

                try
                {
                    conexion.Open();
                    exito = comandoParaConsulta.ExecuteNonQuery() >= 1;
                    conexion.Close();
                }
                catch
                {
                    return false;
                }
            }
            return exito;
        }
    }
}
