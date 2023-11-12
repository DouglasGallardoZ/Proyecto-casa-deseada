namespace DreamedHouse.Models;

/// <summary>
/// Class <c>DoorType</c> models the Door Finish data for the Houses
/// </summary>
public partial class DoorType
{
	/// <value>Property <c>DoorTypeId</c> represents the ID for the Door Finish</value>
	public int DoorTypeId { get; set; }

	/// <value>Property <c>Name</c> represents the Name for the Door Finish</value>
	public string Name { get; set; } = null!;

	/// <value>Property <c>Price</c> represents the Price for the Door Finish</value>
	public double Price { get; set; }

	/// <value>Property <c>CreatedAt</c> represents the Created Date for the Door Finish</value>
	public DateTime CreatedAt { get; set; }

	/// <value>Property <c>UpdatedAt</c> represents the Updated Date for the Door Finish</value>
	public DateTime UpdatedAt { get; set; }
}
