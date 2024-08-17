using Microsoft.OpenApi.Models;
using Pomelo.EntityFrameworkCore.MySql;
using Dapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
   options.AddPolicy(name: "_myAllowSpecificOrigins",
                     policy =>
                     {
                        policy.WithOrigins("http://localhost:5173")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                     });
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
   c.SwaggerDoc("v1", new OpenApiInfo { Title = "UserService API", Description = "User related services", Version = "v1" });
});

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddAuthorization();
builder.Services.AddAuthentication().AddCookie(IdentityConstants.ApplicationScheme);


builder.Services.AddDbContext<ApplicationDbContext>(dbContextOptions =>
   dbContextOptions.UseMySql(connectionString,new MySqlServerVersion(new Version(8, 0, 23))));



builder.Services.AddIdentityCore<IdentityUser>()
   .AddEntityFrameworkStores<ApplicationDbContext>()
   .AddApiEndpoints();

var app = builder.Build();

app.MapIdentityApi<IdentityUser>().RequireCors("_myAllowSpecificOrigins");

app.UseCors();
app.UseAuthentication();

if (app.Environment.IsDevelopment())
{
   app.UseSwagger();
   app.UseSwaggerUI(c =>
   {
      c.SwaggerEndpoint("/swagger/v1/swagger.json", "UserService API V1");
   });
}
app.UseAuthorization();

app.MapGet("/", () => "Hello World!");

app.Run();
