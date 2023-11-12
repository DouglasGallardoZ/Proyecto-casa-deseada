namespace DreamedHouse.Models;

/// <summary>
/// Class <c>FaucetType</c> models the Faucet Finish data for the Houses
/// </summary>
public partial class FaucetType
{
	/// <value>Property <c>FaucetTypeId</c> represents the ID for the Faucet Finish</value>
	public int FaucetTypeId { get; set; }

	/// <value>Property <c>Name</c> represents the Name for the Faucet Finish</value>
	public string Name { get; set; } = null!;

	/// <value>Property <c>Price</c> represents the Price for the Faucet Finish</value>
	public double Price { get; set; }

	/// <value>Property <c>CreatedAt</c> represents the Created Date for the Faucet Finish</value>
	public DateTime CreatedAt { get; set; }

	/// <value>Property <c>UpdatedAt</c> represents the Updated Date for the Faucet Finish</value>
	public DateTime UpdatedAt { get; set; }
}
