namespace DreamedHouse.Models;

/// <summary>
/// Class <c>AuthUser</c> models the User data for authentication
/// </summary>
public class AuthUser
{
	/// <value>Property <c>Email</c> represents the User Email</value>
	public string Email { get; set; } = null!;

	/// <value>Property <c>Password</c> represents the User Password</value>
	public string Password { get; set; } = null!;
}
