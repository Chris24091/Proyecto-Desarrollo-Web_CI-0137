using app_back_end.Models;
using System.Data;
using System.Data.SqlClient;

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
                    Name = Convert.ToString(columna["name"]),
                    Price = Convert.ToDecimal(columna["price"]),
                    Type = Convert.ToString(columna["type"]),
                    Calories = Convert.ToInt32(columna["calories"])
                });
            }
            return productos;
        }

        public List<IngredienteModel> GetIngredients(string productName)
        {
            List<IngredienteModel> ingredientes = new List<IngredienteModel>();
            string consulta = "Select ingredient from INGREDIENT where productName = '" + productName.ToString() + "'";
            DataTable tabla = CrearTablaConsulta(consulta);

            foreach (DataRow columna in tabla.Rows)
            {
                ingredientes.Add(
                    new IngredienteModel 
                    { 
                        ProductName = productName,
                        Ingredient = Convert.ToString(columna["ingredient"]) 
                    });
            }

            return ingredientes;
        }
    }
}
