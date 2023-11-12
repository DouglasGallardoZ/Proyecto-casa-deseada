namespace DreamedHouse.Models;

/// <summary>
/// Class <c>HouseImage</c> models the Images data for the House
/// </summary>
public partial class HouseImage
{
	/// <value>Property <c>HouseImageId</c> represents the ID for the Image</value>
	public int ImageId { get; set; }

	/// <value>Property <c>ImageUrl</c> represents the URL for the Image</value>
	public string ImageUrl { get; set; } = null!;

	/// <value>Property <c>CreatedAt</c> represents the Created Date for the Image</value>
	public DateTime CreatedAt { get; set; }

	/// <value>Property <c>UpdatedAt</c> represents the Updated Date for the Image</value>
	public DateTime UpdatedAt { get; set; }

	/// <value>Property <c>HouseId</c> represents the House ID which the image belongs to</value>
	public int HouseId { get; set; }

	/// <value>Property <c>House</c> represents the House data which the image belongs to</value>
	public virtual House House { get; set; } = null!;
}
