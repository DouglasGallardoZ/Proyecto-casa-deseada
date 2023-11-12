namespace DreamedHouse.Models;

/// <summary>
/// Class <c>House</c> models the House data
/// </summary>
public partial class House
{
	/// <value>Property <c>HouseId</c> represents the ID for the House</value>
	public int HouseId { get; set; }

	/// <value>Property <c>Name</c> represents the Name for the House</value>
	public string Name { get; set; } = null!;

	/// <value>Property <c>SquareMeters</c> represents the Square Meters for the House</value>
	public int SquareMeters { get; set; }

	/// <value>Property <c>RoomsNumber</c> represents the Rooms Number for the House</value>
	public int RoomsNumber { get; set; }

	/// <value>Property <c>FloorsNumber</c> represents the Floors Number for the House</value>
	public int FloorsNumber { get; set; }

	/// <value>Property <c>BathroomsNumber</c> represents the Bathrooms Number for the House</value>
	public int BathroomsNumber { get; set; }

	/// <value>Property <c>Price</c> represents the Price for the House</value>
	public double Price { get; set; }

	/// <value>Property <c>CreatedAt</c> represents the Created Date for the House</value>
	public DateTime CreatedAt { get; set; }

	/// <value>Property <c>UpdatedAt</c> represents the Updated Date for the House</value>
	public DateTime UpdatedAt { get; set; }

	/// <value>Property <c>HouseImages</c> represents the List of Images for the House</value>
	public virtual ICollection<HouseImage> HouseImages { get; } = new List<HouseImage>();
}
