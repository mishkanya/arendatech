using Arenda.Tech.Data;
using Arenda.Tech.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace Arenda.Tech.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly ApplicationDbContext _applicationDbContext;
        public IList<Product> Products { get; set; }
        public IList<Review> Reviews{ get; set; }


        public IndexModel(ILogger<IndexModel> logger, ApplicationDbContext applicationDbContext)
        {
            _logger = logger;
            _applicationDbContext = applicationDbContext;
        }

        public async Task OnGetAsync()
        {
            Products = await _applicationDbContext.Products
                .AsNoTracking()
                .ToListAsync();
            Reviews = await _applicationDbContext.Reviews
                .AsNoTracking()
                .ToListAsync();
        }
    }
}