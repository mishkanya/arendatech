using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace Arenda.Tech.Models
{
    public class Admin
    {
        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "Это свойство обязательно к заполнению")]
        [Display(Name = "Название продукта")]
        public string? Login { get; set; }
        public string? Password { get; set; }

    }
}
