﻿using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace Arenda.Tech.Models
{
    public class Product
    {
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Название продукта")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Краткое описание продукта")]
        public string ShortDescription { get; set; }
        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Описание продукта")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Цена продукта")]
        public double Price { get; set; }

        [Display(Name = "Старая цена продукта")]
        public double? OldPrice { get; set; }

        [Display(Name = "Изображение продукта")]
        public string Images { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Тип продукта")]
        public string Type { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Рэйтинг курса")]
        public double Rating { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Вступительное видео ссылка")]
        public string PreviewVideoLink { get; set; }
    }
}
