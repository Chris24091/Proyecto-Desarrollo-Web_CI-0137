﻿namespace app_back_end.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public decimal Price { get; set; }

        public string Type { get; set; }

        public int Calories { get; set; }

        public string Imagen { get; set; }
    }
}