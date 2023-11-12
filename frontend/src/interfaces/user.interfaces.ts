/**
 * Interface for Auth User
 * @date 5/3/2023 - 0:01:44
 *
 * @export
 * @interface AuthUser
 * @typedef {AuthUser}
 */
export interface AuthUser {
	/**
	 * User Email
	 * @date 5/3/2023 - 0:01:44
	 *
	 * @type {string}
	 */
	email: string;
	/**
	 * User Password
	 * @date 5/3/2023 - 0:01:44
	 *
	 * @type {string}
	 */
	password: string;
}

/**
 * Interface
 * @date 5/3/2023 - 0:01:44
 *
 * @export
 * @interface ChangePassword
 * @typedef {ChangePassword}
 */
export interface ChangePassword {
	/**
	 * Data for changing the User Password
	 * @date 5/3/2023 - 0:01:44
	 *
	 * @type {{
			newPassword: string;
			user: User;
		}}
	 */
	data: {
		newPassword: string;
		user: User;
	};
	/**
	 * Token to be authorized
	 * @date 5/3/2023 - 0:01:44
	 *
	 * @type {string}
	 */
	token: string;
}

/**
 * Interface for sign-in response
 * @date 5/3/2023 - 0:01:44
 *
 * @export
 * @interface SignInResponse
 * @typedef {SignInResponse}
 */
export interface SignInResponse {
	/**
	 * Token to be authorized
	 * @date 5/3/2023 - 0:01:44
	 *
	 * @type {string}
	 */
	token: string;
	/**
	 * Authorized User
	 * @date 5/3/2023 - 0:01:44
	 *
	 * @type {User}
	 */
	userAuthenticated: User;
}

/**
 * Interface for the User
 * @date 5/3/2023 - 0:01:44
 *
 * @export
 * @interface User
 * @typedef {User}
 */
export interface User {
	/**
	 * User Created Date
	 * @date 5/3/2023 - 0:01:44
	 *
	 * @type {string}
	 */
	createdAt: string;
	/**
	 * User DNI
	 * @date 5/3/2023 - 0:01:43
	 *
	 * @type {string}
	 */
	dni: string;
	/**
	 * User Email
	 * @date 5/3/2023 - 0:01:43
	 *
	 * @type {string}
	 */
	email: string;
	/**
	 * User First Name
	 * @date 5/3/2023 - 0:01:43
	 *
	 * @type {string}
	 */
	firstName: string;
	/**
	 * User Last Name
	 * @date 5/3/2023 - 0:01:43
	 *
	 * @type {string}
	 */
	lastName: string;
	/**
	 * User Password
	 * @date 5/3/2023 - 0:01:43
	 *
	 * @type {string}
	 */
	password: string;
	/**
	 * User Phone Number
	 * @date 5/3/2023 - 0:01:43
	 *
	 * @type {string}
	 */
	phoneNumber: string;
	/**
	 * User Updated Date
	 * @date 5/3/2023 - 0:01:43
	 *
	 * @type {string}
	 */
	updatedAt: string;
	/**
	 * User ID
	 * @date 5/3/2023 - 0:01:43
	 *
	 * @type {?number}
	 */
	userId?: number;
}

/**
 * Interface for the User ID with Token
 * @date 5/3/2023 - 0:01:43
 *
 * @export
 * @interface UserData
 * @typedef {UserData}
 */
export interface UserData {
	/**
	 * Token to be authorized
	 * @date 5/3/2023 - 0:01:43
	 *
	 * @type {string}
	 */
	token: string;
	/**
	 * User ID
	 * @date 5/3/2023 - 0:01:43
	 *
	 * @type {number}
	 */
	userId: number;
}

/**
 * Interface for the Proforma with Token
 * @date 5/3/2023 - 0:01:42
 *
 * @export
 * @interface UserToken
 * @typedef {UserToken}
 */
export interface UserToken {
	/**
	 * Token to be authorized
	 * @date 5/3/2023 - 0:01:42
	 *
	 * @type {string}
	 */
	token: string;
	/**
	 * User data
	 * @date 5/3/2023 - 0:01:42
	 *
	 * @type {User}
	 */
	user: User;
}
