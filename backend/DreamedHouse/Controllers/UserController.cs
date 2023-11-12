using System.Reflection.Metadata;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[Authorize]
	/// <summary>
	/// Class <c>UserController</c> set the endpoints to work with the User entity
	/// </summary>
	public class UserController : ControllerBase
	{
		private readonly AppDbContext _context;

		public UserController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/User/5
		[HttpGet("{userId}")]
		// <summary>
		/// Edpoint to get an User
		/// </summary>
		/// <param name="userId">User ID which the data will be obtained from</param>
		/// <returns>A User that matches the <paramref name="userId"/></returns>
		public async Task<ActionResult<User>> GetUser(int userId)
		{
			if (_context.Users == null)
				return NotFound("No se encontraron usuarios registrados");

			var user = await _context.Users.FindAsync(userId);

			if (user == null)
				return NotFound("Usuario no registrado");

			return user;
		}

		// PUT: api/User/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{userId}")]
		/// <summary>
		/// Endpoint to update an User
		/// </summary>
		/// <param name="userId">User ID whose data will be updated</param>
		/// <param name="user">User data that will be saved</param>
		/// <returns>A string indicating whether the User was updated or not</returns>
		public async Task<ActionResult<string>> PutUser(int userId, User user)
		{
			if (userId != user.UserId)
				return BadRequest("El usuario no coincide con el ID");

			if (UserPhoneNumberExists(user.UserId, user.PhoneNumber) || UserEmailExists(user.UserId, user.Email))
				return BadRequest("Cédula, número de celular o correo electrónico ya registrados");

			user.UpdatedAt = DateTime.Now;

			_context.Entry(user).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!UserExists(userId))
					return NotFound("Usuario no encontrado");
				else
					throw;
			}

			return Ok(JsonConvert.SerializeObject("Usuario actualizado correctamente"));
		}

		// PUT: api/User/Password/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("Password/{userId}")]
		/// <summary>
		/// Endpoint to change the User Password
		/// </summary>
		/// <param name="userId">User ID whose data will be updated</param>
		/// <param name="data">Data with the new Password and the User data</param>
		/// <returns>A string indicating whether the password was changed or not</returns>
		public async Task<ActionResult<string>> PutUserPassword(int userId, ChangePassword data)
		{
			if (userId != data.User.UserId)
				return BadRequest("El usuario no coincide con el ID");

			if (!ValidateUserPassword(userId, data.User.Password))
				return BadRequest("Contraseña actual no coincide");

			data.User.Password = data.NewPassword;
			data.User.UpdatedAt = DateTime.Now;

			_context.Entry(data.User).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!UserExists(userId))
					return NotFound("Usuario no encontrado");
				else
					throw;
			}

			return Ok(JsonConvert.SerializeObject("Contraseña actualizada correctamente"));
		}

		// DELETE: api/User/5
		[HttpDelete("{userId}")]
		/// <summary>
		/// Endpoint to delete an User
		/// </summary>
		/// <param name="userId">User ID whose data will be remove</param>
		/// <returns>A string indicating whether the User was deleted or not</returns>
		public async Task<IActionResult> DeleteUser(int userId)
		{
			if (_context.Users == null)
				return NotFound("No se encontraron usuarios registrados");

			var user = await _context.Users.FindAsync(userId);

			if (user == null)
				return NotFound("Usuario no encontrado");

			_context.Users.Remove(user);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		/// <summary>
		/// Checks whether the User exists or not
		/// </summary>
		/// <param name="userId">User ID which will be evaluated</param>
		/// <returns>A boolean indicating whether the User exists or not</returns>
		private bool UserExists(int userId)
		{
			return (_context.Users?.Any(e => e.UserId == userId)).GetValueOrDefault();
		}

		/// <summary>
		/// Checks whether the User Phone Number exists in other user
		/// </summary>
		/// <param name="userId">User ID of the current User</param>
		/// <param name="userPhoneNumber">User Phone Number which will be evaluated</param>
		/// <returns>A boolean indicating whether the User Number not in the current User or not</returns>
		private bool UserPhoneNumberExists(int userId, string userPhoneNumber)
		{
			return (_context.Users?.Any(user => user.PhoneNumber == userPhoneNumber && user.UserId != userId)).GetValueOrDefault();
		}

		/// <summary>
		/// Checks whether the User Email exists in other user
		/// </summary>
		/// <param name="userId">User ID of the current User</param>
		/// <param name="userEmail">User Email which will be evaluated</param>
		/// <returns>A boolean indicating whether the User Number not in the current User or not</returns>
		private bool UserEmailExists(int userId, string userEmail)
		{
			return (_context.Users?.Any(user => user.Email == userEmail && user.UserId != userId)).GetValueOrDefault();
		}

		/// <summary>
		/// Checks whether the Password belongs to an User
		/// </summary>
		/// <param name="userId">User ID of the current User</param>
		/// <param name="password">User Password which will be evaluated</param>
		/// <returns>A boolean indicating whether the User data to exists Users or not</returns>
		private bool ValidateUserPassword(int userId, string password)
		{
			return (_context.Users?.Any(user => user.Password == password && user.UserId == userId)).GetValueOrDefault();
		}
	}
}
