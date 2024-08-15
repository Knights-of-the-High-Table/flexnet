using Microsoft.OpenApi.Models;
using Microsoft.Data.SqlClient;
using Dapper;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
   c.SwaggerDoc("v1", new OpenApiInfo { Title = "UserService API", Description = "User related services", Version = "v1" });
});

var connectionString = builder.Configuration.GetConnectionString("DefaultConnecion");

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
   app.UseSwagger();
   app.UseSwaggerUI(c =>
   {
      c.SwaggerEndpoint("/swagger/v1/swagger.json", "UserService API V1");
   });
}

app.MapGet("/", () => "Hello World!");

app.MapPost("/register", async (User user) =>
{
   string sql = "INSERT INTO Users (Name, Email, Password, Height, Weight, Birthdate) VALUES (@Name, @Email, @Password, @Height, @Weight, @Birthdate);";
   object[] parameters = [new { user.Name, user.Email, user.Password, user.Height, user.Weight, user.Birthdate }];
    await using var connection = new SqlConnection(connectionString);
    connection.Execute(sql, parameters);
});

app.Run();
