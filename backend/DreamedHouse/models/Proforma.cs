namespace DreamedHouse.Models;

/// <summary>
/// Class <c>Proforma</c> models the Proforma data
/// </summary>
public partial class Proforma
{
	/// <value>Property <c>ProformaId</c> represents the ID for the Proforma</value>
	public int ProformaId { get; set; }

	/// <value>Property <c>UserId</c> represents the User ID for the Proforma</value>
	public int UserId { get; set; }

	/// <value>Property <c>HouseId</c> represents the House ID for the Proforma</value>
	public int HouseId { get; set; }

	/// <value>Property <c>FloorTypeId</c> represents the Floor Type ID for the Proforma</value>
	public int FloorTypeId { get; set; }

	/// <value>Property <c>DoorTypeId</c> represents the Door Type ID for the Proforma</value>
	public int DoorTypeId { get; set; }

	/// <value>Property <c>FaucetTypeId</c> represents the Faucet Type ID for the Proforma</value>
	public int FaucetTypeId { get; set; }

	/// <value>Property <c>CreatedAt</c> represents the Created Date for the Proforma</value>
	public DateTime CreatedAt { get; set; }

	/// <value>Property <c>UpdatedAt</c> represents the Updated Date for the Proforma</value>
	public DateTime UpdatedAt { get; set; }

	/// <value>Property <c>DoorType</c> represents the Door Type data which the Proforma has</value>
	public virtual DoorType? DoorType { get; set; } = null!;

	/// <value>Property <c>FaucetType</c> represents the Faucet Type data which the Proforma has</value>
	public virtual FaucetType? FaucetType { get; set; } = null!;

	/// <value>Property <c>FloorType</c> represents the Floor Type data which the Proforma has</value>
	public virtual FloorType? FloorType { get; set; } = null!;

	/// <value>Property <c>House</c> represents the House data which the Proforma has</value>
	public virtual House? House { get; set; } = null!;

	/// <value>Property <c>User</c> represents the User data which the Proforma has</value>
	public virtual User? User { get; set; } = null!;
}
