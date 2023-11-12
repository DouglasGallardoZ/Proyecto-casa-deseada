using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	/// <summary>
	/// Class <c>FloorTypeController</c> set the endpoints to work with the Floor Type entity
	/// </summary>
	public class FloorTypeController : ControllerBase
	{
		private readonly AppDbContext _context;

		public FloorTypeController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/FloorType
		[HttpGet]
		/// <summary>
		/// Endpoint to get all Floor Finishes
		/// </summary>
		/// <returns>A list with all Floor Finishes</returns>
		public async Task<ActionResult<IEnumerable<FloorType>>> GetFloorTypes()
		{
			if (_context.FloorTypes == null)
				return NotFound("La entidad 'Tipos de Piso' no existe");

			return await _context.FloorTypes.ToListAsync();
		}

		// GET: api/FloorType/5
		[HttpGet("{id}")]
		/// <summary>
		/// Edpoint to get a Floor Finish
		/// </summary>
		/// <param name="floorTypeId">Floor Finish ID which the data will be obtained from</param>
		/// <returns>A Floor Finish that matches the <paramref name="floorTypeId"/></returns>
		public async Task<ActionResult<FloorType>> GetFloorType(int floorTypeId)
		{
			if (_context.FloorTypes == null)
				return NotFound("La entidad 'Tipos de Piso' no existe");

			var floorType = await _context.FloorTypes.FindAsync(floorTypeId);

			if (floorType == null)
				return NotFound("Tipo de Piso no encontrado");

			return floorType;
		}

	}
}
