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


        public IndexModel(ILogger<IndexModel> logger, ApplicationDbContext applicationDbContext)
        {
            _logger = logger;
            _applicationDbContext = applicationDbContext;
        }
        public IList<Product> Products { get; set; }

        public async Task OnGetAsync()
        {
            Products = await _applicationDbContext.Products
                .AsNoTracking()
                .ToListAsync();
        }
    }
}