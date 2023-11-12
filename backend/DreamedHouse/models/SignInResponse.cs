namespace DreamedHouse.Models;

/// <summary>
/// Class <c>SignInResponse</c> models the SignIn response data for authentication
/// </summary>
public class SignInResponse
{
	/// <value>Property <c>Token</c> represents the Token for authentication</value>
	public string Token { get; set; } = null!;

	/// <value>Property <c>UserAuthenticated</c> represents the User authenticated</value>
	public User UserAuthenticated { get; set; } = null!;
}
