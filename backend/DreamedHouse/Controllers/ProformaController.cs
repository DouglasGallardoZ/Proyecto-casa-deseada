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
	// <summary>
	/// Class <c>ProformaController</c> set the endpoints to work with the Proforma entity
	/// </summary>
	public class ProformaController : ControllerBase
	{
		private readonly AppDbContext _context;

		public ProformaController(AppDbContext context)
		{
			_context = context;
		}

		// POST: api/Proforma
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		/// <summary>
		/// Endpoiny to create a Ptofoma
		/// </summary>
		/// <param name="proforma">Proforma data whicg will be saved</param>
		/// <returns>A string indicating whether the Proforma was saved or not</returns>
		public async Task<ActionResult<string>> PostProforma(Proforma proforma)
		{
			if (_context.Proformas == null)
				return Problem("La Entidad 'Proformas' no existe");

			proforma.CreatedAt = DateTime.Now;
			proforma.UpdatedAt = DateTime.Now;

			_context.Proformas.Add(proforma);
			await _context.SaveChangesAsync();

			return Ok(JsonConvert.SerializeObject("Proforma guardada correctamente"));
		}

		// GET: api/Proforma/5
		[HttpGet("{userId}")]
		/// <summary>
		/// Endpoint to get a Proforma
		/// </summary>
		/// <param name="userId">Proforma ID which the data will be obtained from</param>
		/// <returns>A List of Proformas that matches the <paramref name="userId"/></returns>
		public async Task<ActionResult<IEnumerable<Proforma>>> GetProformas(int userId)
		{
			if (_context.Proformas == null)
				return NotFound("No se encontraron proformas");

			return await _context.Proformas
				.Where(proforma => proforma.UserId == userId)
				.Include(proforma => proforma.DoorType)
				.Include(proforma => proforma.FloorType)
				.Include(proforma => proforma.FaucetType)
				.Include(proforma => proforma.House)
				.Include(proforma => proforma.User)
				.ToListAsync();
		}

		// PUT: api/Proforma/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{proformaId}")]
		/// <summary>
		/// Endpoint to update a Proforma
		/// </summary>
		/// <param name="proformaId">Proforma ID whose data will be updated</param>
		/// <param name="proforma">Proforma data that will be saved</param>
		/// <returns>A string indicating whether the Proforma was updated or not</returns>
		public async Task<ActionResult<string>> PutProforma(int proformaId, Proforma proforma)
		{
			if (proformaId != proforma.ProformaId)
				return BadRequest("La proforma no coincide con el ID");

			proforma.UpdatedAt = DateTime.Now;

			_context.Entry(proforma).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!ProformaExists(proformaId))
					return NotFound("Proforma no encontrada");
				else
					throw;
			}

			return Ok(JsonConvert.SerializeObject("Proforma actualizada correctamente"));
		}

		// DELETE: api/Proforma/5
		[HttpDelete("{proformaId}")]
		/// <summary>
		/// Endpoint to delete an Proforma
		/// </summary>
		/// <param name="proformaId">Proforma ID whose data will be remove</param>
		/// <returns>A string indicating whether the Proforma was deleted or not</returns>
		public async Task<ActionResult<string>> DeleteProforma(int proformaId)
		{
			if (_context.Proformas == null)
				return NotFound("No se encontraron proformas");

			var proforma = await _context.Proformas.FindAsync(proformaId);

			if (proforma == null)
				return NotFound("Proforma no encontrada");

			_context.Proformas.Remove(proforma);
			await _context.SaveChangesAsync();

			return Ok(JsonConvert.SerializeObject("Proforma eliminada correctamente"));
		}

		/// <summary>
		/// Checks whether the Proforma exists or not
		/// </summary>
		/// <param name="proformaId">Proforma ID which will be evaluated</param>
		/// <returns>A boolean indicating whether the Proforma exists or not</returns>
		private bool ProformaExists(int proformaId)
		{
			return (_context.Proformas?.Any(proforma => proforma.ProformaId == proformaId)).GetValueOrDefault();
		}
	}
}
