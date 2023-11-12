using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using DreamedHouse.Data;
using DreamedHouse.Models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	/// <summary>
	/// Class <c>AuthUserController</c> set the endpoints to work with the authentication
	/// </summary>
	public class AuthUserController : ControllerBase
	{
		private readonly AppDbContext _context;
		private readonly IConfiguration _configuration;

		public AuthUserController(AppDbContext context, IConfiguration configuration)
		{
			_context = context;
			_configuration = configuration;
		}

		// POST: api/AuthUser/SignIn
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost("SignIn")]
		/// <summary>
		/// Endpoint to sign in an User
		/// </summary>
		/// <param name="authUser">Data which the user needs to be authenticated</param>
		/// <returns>An object representing the token generated and the User data</returns>
		public async Task<ActionResult<SignInResponse>> PostAuthUser(AuthUser authUser)
		{
			var user = await _context.Users.FirstOrDefaultAsync(user => user.Email == authUser.Email && user.Password == authUser.Password);

			if (user == null)
				return BadRequest("Combinación no encontrada");
			else
			{
				SignInResponse signInresponse = new SignInResponse();

				signInresponse.Token = GenerateToken(user);
				signInresponse.UserAuthenticated = user;

				return Ok(signInresponse);
			}
		}

		// POST: api/AuthUser/SingUp
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost("SignUp")]
		/// <summary>
		/// Endpoint to sign up an User
		/// </summary>
		/// <param name="user">User data to be registered</param>
		/// <returns>A string indicating whether the User was registered or not</returns>
		public async Task<ActionResult<string>> PostUser(User user)
		{
			if (_context.Users == null)
				return Problem("La entidad 'Usuarios' no existe");

			if (UserDniExists(user.Dni) || UserPhoneNumberExists(user.PhoneNumber) || UserEmailExists(user.Email))
				return BadRequest("Cédula, número de celular o correo electrónico ya registrados");

			user.CreatedAt = DateTime.Now;
			user.UpdatedAt = DateTime.Now;

			_context.Users.Add(user);
			await _context.SaveChangesAsync();

			return Ok(JsonConvert.SerializeObject("Usuario ingresado correctamente"));
		}

		/// <summary>
		/// Generate a JWT (JSON Web Token)
		/// </summary>
		/// <param name="user">User data which the token will be generated from</param>
		/// <returns>A string with the JWT generated</returns>
		private string GenerateToken(User user)
		{
			var claims = new List<Claim>
			{
				new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
				new Claim(ClaimTypes.Email, user.Email)
			};

			var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value!));

			var tokenDescriptor = new SecurityTokenDescriptor
			{
				Subject = new ClaimsIdentity(claims),
				Expires = System.DateTime.Now.AddDays(1),
				SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature)
			};

			var tokenHandler = new JwtSecurityTokenHandler();

			return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
		}

		/// <summary>
		/// Checks whether the new User DNI already exists or not
		/// </summary>
		/// <param name="userDni">User DNI to be checked</param>
		/// <returns>A boolean indicating whethe the new User DNI already exists or not</returns>
		private bool UserDniExists(string userDni)
		{
			return (_context.Users?.Any(user => user.Dni == userDni)).GetValueOrDefault();
		}

		/// <summary>
		/// Checks whether the new User Phone Number already exists or not
		/// </summary>
		/// <param name="userPhoneNumber">User Phone Number to be checked</param>
		/// <returns>A boolean indicating whethe the new User Phone Number already exists or not</returns>
		private bool UserPhoneNumberExists(string userPhoneNumber)
		{
			return (_context.Users?.Any(user => user.PhoneNumber == userPhoneNumber)).GetValueOrDefault();
		}

		/// <summary>
		/// Checks whether the new User Email already exists or not
		/// </summary>
		/// <param name="userEmail">User Email to be checked</param>
		/// <returns>A boolean indicating whethe the new User Email already exists or not</returns>
		private bool UserEmailExists(string userEmail)
		{
			return (_context.Users?.Any(user => user.Email == userEmail)).GetValueOrDefault();
		}
	}
}