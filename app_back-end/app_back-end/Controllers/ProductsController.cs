using app_back_end.Handlers;
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
    }
}
