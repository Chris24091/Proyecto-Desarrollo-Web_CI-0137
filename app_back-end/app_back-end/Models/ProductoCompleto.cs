using System.Collections;

namespace app_back_end.Models
{
    public class ProductoCompleto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Type { get; set; }

        public int Calories { get; set; }

        public List<string> Ingredientes { get; set; }

        public string Imagen { get; set; }
    }
}
