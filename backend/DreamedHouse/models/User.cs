namespace DreamedHouse.Models;

/// <summary>
/// Class <c>User</c> models the User data
/// </summary>
public partial class User
{
	/// <value>Property <c>UserId</c> represents the ID for the User</value>
	public int UserId { get; set; }

	/// <value>Property <c>Dni</c> represents the DNI for the User</value>
	public string Dni { get; set; } = null!;

	/// <value>Property <c>FirstName</c> represents the First Name for the User</value>
	public string FirstName { get; set; } = null!;

	/// <value>Property <c>LastName</c> represents the Last Name for the User</value>
	public string LastName { get; set; } = null!;

	/// <value>Property <c>PhoneNumber</c> represents the Phone Number for the User</value>
	public string PhoneNumber { get; set; } = null!;

	/// <value>Property <c>Email</c> represents the Email for the User</value>
	public string Email { get; set; } = null!;

	/// <value>Property <c>Password</c> represents the Password for the User</value>
	public string Password { get; set; } = null!;

	/// <value>Property <c>CreatedAt</c> represents the Created Date for the User</value>
	public DateTime CreatedAt { get; set; }

	/// <value>Property <c>UpdatedAt</c> represents the Updated Date for the User</value>
	public DateTime UpdatedAt { get; set; }
}
