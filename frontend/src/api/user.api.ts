// Helpers
import { fetchUrlHelper } from "../helpers";

// Interfaces
import { IAuthUser, IChangePassword, IUserToken, IUser, IUserData } from "../interfaces";

// Global Consts
/**
 * Endpoint for the Auth Users
 * @date 4/3/2023 - 23:35:17
 *
 * @type {string}
 */
const userAuthEndPoint: string = "AuthUser";
/**
 * Endpoint for the Users
 * @date 4/3/2023 - 23:35:17
 *
 * @type {string}
 */
const userEndPoint: string = "User";

/**
 * Function to change the User Password
 * @date 4/3/2023 - 23:35:17
 *
 * @export
 * @async
 * @param {IChangePassword} { token, data }
 * @returns {Promise<Response>}
 */
export async function changePassword({ token, data }: IChangePassword): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userEndPoint}/Password/${data.user.userId}`, {
		method: "PUT",
		body: JSON.stringify({ newPassword: data.newPassword, user: data.user }),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

/**
 * Function to delete an User
 * @date 4/3/2023 - 23:35:17
 *
 * @export
 * @async
 * @param {IUserData} { token, userId }
 * @returns {Promise<Response>}
 */
export async function deleteUser({ token, userId }: IUserData): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userEndPoint}/${userId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

/**
 * Function to get an User
 * @date 4/3/2023 - 23:35:17
 *
 * @export
 * @async
 * @param {IUserData} { token, userId }
 * @returns {Promise<Response>}
 */
export async function getUser({ token, userId }: IUserData): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userEndPoint}/${userId}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

/**
 * Function to sign in an user
 * @date 4/3/2023 - 23:35:17
 *
 * @export
 * @async
 * @param {IAuthUser} authUser
 * @returns {Promise<Response>}
 */
export async function signIn(authUser: IAuthUser): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userAuthEndPoint}/SignIn`, {
		method: "POST",
		body: JSON.stringify(authUser),
		headers: {
			"Content-Type": "application/json; charset=UTF-8"
		}
	});
}

/**
 * Function to create an User
 * @date 4/3/2023 - 23:35:16
 *
 * @export
 * @async
 * @param {IUser} user
 * @returns {Promise<Response>}
 */
export async function signUp(user: IUser): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userAuthEndPoint}/SignUp`, {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json; charset=UTF-8"
		}
	});
}

/**
 * Function to update an User
 * @date 4/3/2023 - 23:35:16
 *
 * @export
 * @async
 * @param {IUserToken} { token, user }
 * @returns {Promise<Response>}
 */
export async function updateUser({ token, user }: IUserToken): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${userEndPoint}/${user.userId}`, {
		method: "PUT",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}
