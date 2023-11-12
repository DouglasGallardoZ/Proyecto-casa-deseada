namespace DreamedHouse.Models;

/// <summary>
/// Class <c>ChangePassword</c> models the data for the user to change their password
/// </summary>
public class ChangePassword
{
	/// <value>Property <c>NewPassword</c> represents the New Password that User will set</value>
	public string NewPassword { get; set; } = null!;

	/// <value>Property <c>User</c> represents the User data which will change the password</value>
	public User User { get; set; } = null!;
}
