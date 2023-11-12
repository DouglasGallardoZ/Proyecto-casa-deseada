// Helpers
import { fetchUrlHelper } from "../helpers";

// Global Consts
/**
 * Endpoint for the Houses
 * @date 4/3/2023 - 23:31:26
 *
 * @type {string}
 */
const houseEndPoint: string = "House";
/**
 * Endpoint for the Door Finish
 * @date 4/3/2023 - 23:31:26
 *
 * @type {string}
 */
const doorTypeEndPoint: string = "DoorType";
/**
 * Endpoint for the Faucet Finish
 * @date 4/3/2023 - 23:31:26
 *
 * @type {string}
 */
const faucetTypeEndPoint: string = "FaucetType";
/**
 * Endpoint for the Floor Finish
 * @date 4/3/2023 - 23:31:26
 *
 * @type {string}
 */
const floorTypeEndPoint: string = "FloorType";

/**
 * Function to get the Door Finishes
 * @date 4/3/2023 - 23:31:26
 *
 * @export
 * @returns {Promise<Response>}
 */
export function getDoorTypes(): Promise<Response> {
	return fetch(`${fetchUrlHelper()}/${doorTypeEndPoint}`);
}

/**
 * Function to get the Faucet Finishes
 * @date 4/3/2023 - 23:31:26
 *
 * @export
 * @returns {Promise<Response>}
 */
export function getFaucetTypes(): Promise<Response> {
	return fetch(`${fetchUrlHelper()}/${faucetTypeEndPoint}`);
}

/**
 * Function to get the Floor Finishes
 * @date 4/3/2023 - 23:31:26
 *
 * @export
 * @returns {Promise<Response>}
 */
export function getFloorTypes(): Promise<Response> {
	return fetch(`${fetchUrlHelper()}/${floorTypeEndPoint}`);
}

/**
 * Function to get a House
 * @date 4/3/2023 - 23:31:26
 *
 * @export
 * @async
 * @param {number} houseId
 * @returns {Promise<Response>}
 */
export async function getHouse(houseId: number): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${houseEndPoint}/${houseId}`);
}

/**
 * Function to get the Houses
 * @date 4/3/2023 - 23:31:26
 *
 * @export
 * @async
 * @returns {Promise<Response>}
 */
export async function getHouses(): Promise<Response> {
	return await fetch(`${fetchUrlHelper()}/${houseEndPoint}`);
}
