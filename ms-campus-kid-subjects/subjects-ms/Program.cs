using DataBase;
using Microsoft.EntityFrameworkCore;
using System;
using System.IO;
using System.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<SubjectsContext>(options => {
    string dbUser = Environment.GetEnvironmentVariable("DB_USER");
    string dbPassword = Environment.GetEnvironmentVariable("DB_PASSWORD");
    string dbHost = Environment.GetEnvironmentVariable("DB_HOST");
    string dbPort = Environment.GetEnvironmentVariable("DB_PORT");
    string dbName = Environment.GetEnvironmentVariable("DB_NAME");
    var conString = $"Server={dbHost};Port={dbPort};Uid={dbUser};Pwd={dbPassword};Database={dbName};";
    options.UseMySql(conString, ServerVersion.AutoDetect(conString));
}) ;

    var app = builder.Build();



using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<SubjectsContext>();
    context.Database.Migrate();
}



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
