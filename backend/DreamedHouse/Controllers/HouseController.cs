using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	/// <summary>
	/// Class <c>HouseController</c> set the endpoints to work with the House entity
	/// </summary>
	public class HouseController : ControllerBase
	{
		private readonly AppDbContext _context;

		public HouseController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/House
		[HttpGet]
		/// <summary>
		/// Endpoint to get all Houses
		/// </summary>
		/// <returns>A list with all Houses</returns>
		public async Task<ActionResult<IEnumerable<House>>> GetHouses()
		{
			if (_context.Houses == null)
				return NotFound("La entidad 'Casas' no existe");

			return await _context.Houses
				.Include(house => house.HouseImages)
				.ToListAsync();
		}

		// GET: api/House/5
		[HttpGet("{houseId}")]
		// <summary>
		/// Edpoint to get a House
		/// </summary>
		/// <param name="houseId">House ID which the data will be obtained from</param>
		/// <returns>A House that matches the <paramref name="houseId"/></returns>
		public async Task<ActionResult<House>> GetHouse(int houseId)
		{
			if (_context.Houses == null)
				return NotFound("La entidad 'Casas' no existe");

			var house = await _context.Houses
				.Include(house => house.HouseImages)
				.FirstOrDefaultAsync(house => house.HouseId == houseId);

			if (house == null)
				return NotFound("Casa no encontrada");

			return house;
		}
	}
}
