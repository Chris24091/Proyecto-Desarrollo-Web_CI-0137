namespace app_back_end.Models
{
    public class ProductModel
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Type { get; set; }

        public int Calories { get; set; }

        public List<string> Ingredients { get; set; }
    }
}