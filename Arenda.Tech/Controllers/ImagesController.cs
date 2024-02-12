using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Arenda.Tech.Data;
using Arenda.Tech.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;

namespace Arenda.Tech.Controllers
{
    [Authorize]
    public class ImagesController : Controller
    {
        private readonly ApplicationDbContext _context;
        private Microsoft.AspNetCore.Hosting.IHostingEnvironment Environment;


        public ImagesController(ApplicationDbContext context, Microsoft.AspNetCore.Hosting.IHostingEnvironment _environment)
        {
            Environment = _environment;
            _context = context;
        }

        // GET: Images
        public async Task<IActionResult> Index()
        {

            string wwwPath = Environment.WebRootPath;
            string contentPath = this.Environment.ContentRootPath;

            string path = Path.Combine(this.Environment.WebRootPath, "Uploads");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            var images =  Directory.EnumerateFiles(path);
            if (images.Any()) return View(images.Select(t => new FileInfo(t).Name));
            else return Problem("Entity set 'ApplicationDbContext.Images'  is null.");
        }

        // GET: Images/Details/5
        // [Route("Images/Details/{name}")]
        public async Task<IActionResult> Details(string id)
        {
            var findName = id.Replace("%2F", "/");
            string wwwPath = Environment.WebRootPath;
            string contentPath = this.Environment.ContentRootPath;

            string path = Path.Combine(this.Environment.WebRootPath, "Uploads");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            var files = Directory.EnumerateFiles(path);
            var images = files.FirstOrDefault(t => t.Contains(findName));
            if (images != null) 
                return View(model:id);
            else return NotFound();
        }

        // GET: Images/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Images/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(IEnumerable<IFormFile> postedFiles)
        {
            if (ModelState.IsValid)
            {
                string wwwPath =  Environment.WebRootPath;
                string contentPath = this.Environment.ContentRootPath;

                string path = Path.Combine(this.Environment.WebRootPath, "Uploads");
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                List<string> uploadedFiles = new List<string>();
                foreach (IFormFile postedFile in postedFiles)
                {
                    string fileName = Path.GetFileName(postedFile.FileName);
                    using (FileStream stream = new FileStream(Path.Combine(path, fileName), FileMode.Create))
                    {
                        postedFile.CopyTo(stream);
                        uploadedFiles.Add(fileName);
                        ViewBag.Message += string.Format("<b>{0}</b> uploaded.<br />", fileName);
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(postedFiles.Select(t=> t.Name));
        }

        // GET: Images/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Images == null)
            {
                return NotFound();
            }

            var image = await _context.Images.FindAsync(id);
            if (image == null)
            {
                return NotFound();
            }
            return View(image);
        }

        

        // GET: Images/Delete/5
        public async Task<IActionResult> Delete(string? id)
        {
            var findName = id.Replace("%2F", "/");
            string wwwPath = Environment.WebRootPath;
            string contentPath = this.Environment.ContentRootPath;

            string path = Path.Combine(this.Environment.WebRootPath, "Uploads");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            var files = Directory.EnumerateFiles(path);
            var images = files.FirstOrDefault(t => t.Contains(findName));
            if (images != null)
                return View(model: id);
            else return NotFound();
        }

        // POST: Images/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var findName = id.Replace("%2F", "/");
            string wwwPath = Environment.WebRootPath;
            string contentPath = this.Environment.ContentRootPath;

            string path = Path.Combine(this.Environment.WebRootPath, "Uploads");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            string filePath = Path.Combine(path, (string)id);

            try
            {
                System.IO.File.Delete(filePath);
            }
            catch { }
                return RedirectToAction(nameof(Index));

        }
    }
}
