using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	/// <summary>
	/// Class <c>DoorTypeController</c> set the endpoints to work with the Door Type entity
	/// </summary>
	public class DoorTypeController : ControllerBase
	{
		private readonly AppDbContext _context;

		public DoorTypeController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/DoorType
		[HttpGet]
		/// <summary>
		/// Endpoint to get all Door Finishes
		/// </summary>
		/// <returns>A list with all Door Finishes</returns>
		public async Task<ActionResult<IEnumerable<DoorType>>> GetDoorTypes()
		{
			if (_context.DoorTypes == null)
				return NotFound("La entidad 'Tipos de Puerta' no existe");

			return await _context.DoorTypes.ToListAsync();
		}

		// GET: api/DoorType/5
		[HttpGet("{doorTypeId}")]
		/// <summary>
		/// Edpoint to get a Door Finish
		/// </summary>
		/// <param name="doorTypeId">Door Finish ID which the data will be obtained from</param>
		/// <returns>A Door Finish that matches the <paramref name="doorTypeId"/></returns>
		public async Task<ActionResult<DoorType>> GetDoorType(int doorTypeId)
		{
			if (_context.DoorTypes == null)
				return NotFound("La entidad 'Tipos de Puerta' no existe");

			var doorType = await _context.DoorTypes.FindAsync(doorTypeId);

			if (doorType == null)
				return NotFound("Tipo de Puerta no encontrado");

			return doorType;
		}
	}
}
