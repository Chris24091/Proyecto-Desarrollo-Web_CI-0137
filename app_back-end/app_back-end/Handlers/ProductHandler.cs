using app_back_end.Models;

namespace app_back_end.Handlers
{
    public class ProductHandler
    {
        public List<ProductModel> getProducts()
        {
            List<ProductModel> products = new List<ProductModel>();
            products.Add(new ProductModel
            {
                Id = "producto2",
                Name = "The double trouble",
                Price = 7.99m,
                Type = "Hamburguesa",
                Calories = 660,
            });
            products.Add(new ProductModel
            {
                Id = "producto1",
                Name = "The moody bacon",
                Price = 2.99m,
                Type = "Hamburguesa",
                Calories = 660,
            });
            products.Add(new ProductModel
            {
                Id = "producto5",
                Name = "The crispy risky",
                Price = 4.99m,
                Type = "Hamburguesa",
                Calories = 660,
            });
            products.Add(new ProductModel
            {
                Id = "producto7",
                Name = "The tasty rings",
                Price = 1.99m,
                Type = "rings",
                Calories = 660,
            });
            return products;
        }
    }
}
