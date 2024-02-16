using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace Arenda.Tech.Models
{
    
    public class Product
    {
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Название товара")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Краткое описание товара")]
        public string? ShortDescription { get; set; }
        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Полное описание продукта")]
        public string? Description { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Цена продукта")]
        public double Price { get; set; }

        [Display(Name = "Залог")]
        public double? NowPrice { get; set; }

        [Display(Name = "Изображение продукта")]
        public string? Images { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Тип продукта")]
        public string? Type { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Рэйтинг продукта")]
        public double Rating { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Видеообзор видео ссылка")]
        public string? PreviewVideoLink { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Количество свободных позиций")]
        public int FreeCount { get; set; }
    }
}
