using Arenda.Tech.Data;
using Microsoft.AspNetCore.Authentication.Negotiate;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication;
using Arenda.Tech;
using System.Diagnostics;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Principal;
using Microsoft.Extensions.Options;
using System.Net.Http.Headers;
using Arenda.Tech.Models;
using System.Net;

var builder = WebApplication.CreateBuilder(args);

var folder = Environment.SpecialFolder.LocalApplicationData;
var path = Environment.GetFolderPath(folder);
var dbPath = System.IO.Path.Join(path, "blogging.db");

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite($"Data Source={dbPath}"));


builder.Services.AddDatabaseDeveloperPageExceptionFilter();


builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddAuthentication("BasicAuthentication")
    .AddScheme<AuthenticationSchemeOptions, BasicAuthenticationHandler>("BasicAuthentication", null);

builder.Services.AddMvc(options => options.EnableEndpointRouting = false);
builder.Services.AddRazorPages();
builder.Services.AddControllersWithViews();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.Use(async (context, next) =>
{
    await next();

    if (context.Response.StatusCode == (int)HttpStatusCode.Unauthorized) 
    {
        context.Response.ContentType = "text/html; charset=utf-8";
        await context.Response.WriteAsync("<a href='/'>Вы успешно вышли! На главную </a>");
    }
});

app.UseAuthentication();
app.UseAuthorization();

app.MapGet("/logon", async (HttpContext context, BasicAuthenticationHandler s) =>
{
    return Results.Unauthorized();
});

app.MapRazorPages();
app.MapControllers();
builder.Services.AddControllersWithViews();



app.UseMvc(routes =>
{
    routes.MapRoute(
        name: "default",
        template: "{controller}/{action=Index}/{id?}");
});

app.Run();
