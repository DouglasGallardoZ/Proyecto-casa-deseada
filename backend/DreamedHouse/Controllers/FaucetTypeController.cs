using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	/// <summary>
	/// Class <c>FaucetTypeController</c> set the endpoints to work with the Faucet Type entity
	/// </summary>
	public class FaucetTypeController : ControllerBase
	{
		private readonly AppDbContext _context;

		public FaucetTypeController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/FaucetType
		[HttpGet]
		/// <summary>
		/// Endpoint to get all Faucet Finishes
		/// </summary>
		/// <returns>A list with all Faucet Finishes</returns>
		public async Task<ActionResult<IEnumerable<FaucetType>>> GetFaucetTypes()
		{
			if (_context.FaucetTypes == null)
				return NotFound("La entidad 'Tipos de Grifería' no existe");

			return await _context.FaucetTypes.ToListAsync();
		}

		// GET: api/FaucetType/5
		[HttpGet("{faucetTypeId}")]
		/// <summary>
		/// Edpoint to get a Faucet Finish
		/// </summary>
		/// <param name="faucetTypeId">Faucet Finish ID which the data will be obtained from</param>
		/// <returns>A Faucet Finish that matches the <paramref name="faucetTypeId"/></returns>
		public async Task<ActionResult<FaucetType>> GetFaucetType(int faucetTypeId)
		{
			if (_context.FaucetTypes == null)
				return NotFound("La entidad 'Tipos de Grifería' no existe");

			var faucetType = await _context.FaucetTypes.FindAsync(faucetTypeId);

			if (faucetType == null)
				return NotFound("Tipo de Grifería no encontrado");

			return faucetType;
		}
	}
}
