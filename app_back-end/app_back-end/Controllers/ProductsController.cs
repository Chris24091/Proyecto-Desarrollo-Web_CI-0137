using app_back_end.Handlers;
using app_back_end.Models;
using Microsoft.AspNetCore.Mvc;

namespace app_back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {

        [HttpGet("GetProductos")]
        public async Task<IActionResult> GetProduct()
        {
            ProductHandler productHandler = new ProductHandler();

            var result = productHandler.GetProducts();

            return Ok(result);
        }

        [HttpGet("GetProductos/{idProducto}")]
        public async Task<IActionResult> GetProductById(int  idProducto)
        {
            ProductHandler productHandler = new ProductHandler();

            var result = productHandler.GetProductById(idProducto);

            return Ok(result);
        }

        [HttpGet("GetIngredientes/{idProducto}")]
        public async Task<IActionResult> GetIngredients(int idProducto)
        {
            ProductHandler productHandler = new ProductHandler();

            var result = productHandler.GetIngredients(idProducto);

            return Ok(result);
        }

        [HttpPost]
        [Route("AgregarProducto")]
        public async Task<IActionResult> InsertProduct([FromBody] ProductoCompleto producto)
        {
            ProductHandler productHandler = new();

            ProductModel nuevoProducto = new()
            {
                Name = producto.Name,
                Price = producto.Price,
                Calories = producto.Calories,
                Type = producto.Type,
                Imagen = producto.Imagen
            };

            productHandler.InsertProduct(nuevoProducto);

            int id = productHandler.GetLastId();

            Console.WriteLine(id);

            var resultProduct = productHandler.InsertIngredients(producto.Ingredientes, id);

            return Ok(resultProduct);
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> UpdateProduct([FromBody] ProductoCompleto producto)
        {
            ProductHandler productHandler = new();

            ProductModel nuevoProducto = new()
            {
                Id = producto.Id,
                Name = producto.Name,
                Price = producto.Price,
                Calories = producto.Calories,
                Type = producto.Type,
                Imagen = producto.Imagen
            };

            productHandler.UpdateProduct(nuevoProducto);

            var resultProduct = productHandler.UpdateIngredients(producto.Ingredientes, producto.Id);

            return Ok(resultProduct);
        }

        [HttpDelete]
        [Route("Eliminar/{idProduct:int}")]
        public async Task<IActionResult> DeleteProduct(int idProduct)
        {
            ProductHandler productHandler = new ProductHandler();

            var result = productHandler.DeleteProduct(idProduct);

            return Ok(result);
        }
    }
}
