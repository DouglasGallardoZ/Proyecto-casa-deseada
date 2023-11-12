import { fetchUrlHelper } from "../helpers";
import { IProformaData, IProformaToken, IUserData } from "../interfaces";

/**
 * Endpoint for the Proformas
 * @date 4/3/2023 - 23:34:04
 *
 * @type {string}
 */
const proformaEndPoint: string = "Proforma";

/**
 * Function to create a Proforma
 * @date 4/3/2023 - 23:34:04
 *
 * @export
 * @async
 * @param {IProformaToken} { token, proforma }
 * @returns {Promise<Response>}
 */
export async function createProforma({ token, proforma }: IProformaToken): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${proformaEndPoint}`, {
		method: "POST",
		body: JSON.stringify(proforma),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

/**
 * Function to delete a Proforma
 * @date 4/3/2023 - 23:34:04
 *
 * @export
 * @async
 * @param {IProformaData} { token, proformaId }
 * @returns {Promise<Response>}
 */
export async function deleteProforma({ token, proformaId }: IProformaData): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${proformaEndPoint}/${proformaId}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

/**
 * Function to get the User Proformas
 * @date 4/3/2023 - 23:34:04
 *
 * @export
 * @async
 * @param {IUserData} { token, userId }
 * @returns {Promise<Response>}
 */
export async function getProformas({ token, userId }: IUserData): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${proformaEndPoint}/${userId}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}

/**
 * Function to update a Proforma
 * @date 4/3/2023 - 23:34:04
 *
 * @export
 * @async
 * @param {IProformaToken} { token, proforma }
 * @returns {Promise<Response>}
 */
export async function updateProforma({ token, proforma }: IProformaToken): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${proformaEndPoint}/${proforma.proformaId}`, {
		method: "PUT",
		body: JSON.stringify(proforma),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
			Authorization: `Bearer ${token}`
		}
	});
}
