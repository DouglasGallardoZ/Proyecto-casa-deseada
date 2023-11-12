/**
 * Interface for the Proformas
 * @date 4/3/2023 - 23:58:23
 *
 * @export
 * @interface Proforma
 * @typedef {Proforma}
 */
export interface Proforma {
	/**
	 * Proforma ID
	 * @date 4/3/2023 - 23:58:23
	 *
	 * @type {?number}
	 */
	proformaId?: number;
	/**
	 * Proforma House ID
	 * @date 4/3/2023 - 23:58:23
	 *
	 * @type {number}
	 */
	houseId: number;
	/**
	 * Proforma Door Finish ID
	 * @date 4/3/2023 - 23:58:23
	 *
	 * @type {number}
	 */
	doorTypeId: number;
	/**
	 * Proforma Floor Finish ID
	 * @date 4/3/2023 - 23:58:23
	 *
	 * @type {number}
	 */
	floorTypeId: number;
	/**
	 * Proforma Faucet Finish ID
	 * @date 4/3/2023 - 23:58:23
	 *
	 * @type {number}
	 */
	faucetTypeId: number;
	/**
	 * Proforma User ID
	 * @date 4/3/2023 - 23:58:23
	 *
	 * @type {number}
	 */
	userId: number;
	/**
	 * Proforma Created Date
	 * @date 4/3/2023 - 23:58:23
	 *
	 * @type {?string}
	 */
	createdAt?: string;
	/**
	 * Proforma Updated Date
	 * @date 4/3/2023 - 23:58:23
	 *
	 * @type {?string}
	 */
	updatedAt?: string;
}

/**
 * Interface for the Proforma ID with Token
 * @date 4/3/2023 - 23:58:22
 *
 * @export
 * @interface ProformaData
 * @typedef {ProformaData}
 */
export interface ProformaData {
	/**
	 * Token to be authorized
	 * @date 4/3/2023 - 23:58:22
	 *
	 * @type {string}
	 */
	token: string;
	/**
	 * Proforma ID
	 * @date 4/3/2023 - 23:58:22
	 *
	 * @type {number}
	 */
	proformaId: number;
}

/**
 * Interface for the Proforma with Token
 * @date 4/3/2023 - 23:58:22
 *
 * @export
 * @interface ProformaToken
 * @typedef {ProformaToken}
 */
export interface ProformaToken {
	/**
	 * Token to be authorized
	 * @date 4/3/2023 - 23:58:22
	 *
	 * @type {string}
	 */
	token: string;
	/**
	 * Proforma data
	 * @date 4/3/2023 - 23:58:22
	 *
	 * @type {Proforma}
	 */
	proforma: Proforma;
}
