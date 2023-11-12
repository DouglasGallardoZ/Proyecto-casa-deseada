using DreamedHouse.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(builder.Configuration.GetSection("AppSettings:Token").Value!)),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAny", builder => builder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
});

builder.Services.AddSwaggerGen(x =>
{
    x.OperationFilter<SecurityRequirementsOperationFilter>();

    x.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Authorization: Use Bearer this way \"Bearer {token}\"",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });
});

builder.Services.AddControllers().AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

builder.Services.AddDbContext<AppDbContext>(options => options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"), Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.15-mysql")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Redirect HTTP to HTTPS (if using HTTPS)
// Ensure your certificate is properly configured on the server.
// app.UseHttpsRedirection();

app.UseCors("AllowAny");

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();

