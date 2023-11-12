namespace DreamedHouse.Models;

/// <summary>
/// Class <c>FloorType</c> models the Floor Finish data for the Houses
/// </summary>
public partial class FloorType
{
	/// <value>Property <c>FloorTypeId</c> represents the ID for the Floor Finish</value>
	public int FloorTypeId { get; set; }

	/// <value>Property <c>Name</c> represents the Name for the Floor Finish</value>
	public string Name { get; set; } = null!;

	/// <value>Property <c>Price</c> represents the Price for the Floor Finish</value>
	public double Price { get; set; }

	/// <value>Property <c>CreatedAt</c> represents the Created Date for the Floor Finish</value>
	public DateTime CreatedAt { get; set; }

	/// <value>Property <c>UpdatedAt</c> represents the Updated Date for the Floor Finish</value>
	public DateTime UpdatedAt { get; set; }
}
