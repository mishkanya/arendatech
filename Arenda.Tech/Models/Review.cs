using System.ComponentModel.DataAnnotations;

namespace Arenda.Tech.Models
{
    public class Review
    {
        [Required]
        public int Id { get; set; }
        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Имя клиента")]

        public string Name { get; set; }
        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Название ариндуемого товара")]
        public string Product { get; set; }
        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "текст отзыва")]
        public string Text { get; set; }
        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Путь к картинке-аватару")]
        public string Image { get; set; }


    }
}
