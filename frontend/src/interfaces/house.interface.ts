/**
 * Interface for the Door Finish
 * @date 4/3/2023 - 23:45:45
 *
 * @export
 * @interface DoorType
 * @typedef {DoorType}
 */
export interface DoorType {
	/**
	 * Door Finish ID
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {number}
	 */
	doorTypeId: number;
	/**
	 * Door Finish Name
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {string}
	 */
	name: string;
	/**
	 * Door Finish Price
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {number}
	 */
	price: number;
	/**
	 * Door Finish Created Date
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {string}
	 */
	createdAt: string;
	/**
	 * Door Finish Updated Date
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {string}
	 */
	updatedAt: string;
}

/**
 * Interface for the Faucet Finish
 * @date 4/3/2023 - 23:45:45
 *
 * @export
 * @interface FaucetType
 * @typedef {FaucetType}
 */
export interface FaucetType {
	/**
	 * Faucer Finish ID
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {number}
	 */
	faucetTypeId: number;
	/**
	 * Faucer Finish Name
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {string}
	 */
	name: string;
	/**
	 * Faucer Finish Price
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {number}
	 */
	price: number;
	/**
	 * Faucer Finish Created Date
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {string}
	 */
	createdAt: string;
	/**
	 * Faucer Finish Updated Date
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {string}
	 */
	updatedAt: string;
}

/**
 * Interface for the Floor Finish
 * @date 4/3/2023 - 23:45:45
 *
 * @export
 * @interface FloorType
 * @typedef {FloorType}
 */
export interface FloorType {
	/**
	 * Floor Finish ID
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {number}
	 */
	floorTypeId: number;
	/**
	 * Floor Finish Name
	 * @date 4/3/2023 - 23:45:45
	 *
	 * @type {string}
	 */
	name: string;
	/**
	 * Floor Finish Price
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {number}
	 */
	price: number;
	/**
	 * Floor Finish Created Date
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {string}
	 */
	createdAt: string;
	/**
	 * Floor Finish Updated Date
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {string}
	 */
	updatedAt: string;
}

/**
 * Interface for the House
 * @date 4/3/2023 - 23:45:44
 *
 * @export
 * @interface House
 * @typedef {House}
 */
export interface House {
	/**
	 * House Bathrooms Number
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {number}
	 */
	bathroomsNumber: number;
	/**
	 * House Created Date
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {string}
	 */
	createdAt: string;
	/**
	 * House Floors Number
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {number}
	 */
	floorsNumber: number;
	/**
	 * House ID
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {number}
	 */
	houseId: number;
	/**
	 * House Images
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {HouseImage[]}
	 */
	houseImages: HouseImage[];
	/**
	 * House Name
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {string}
	 */
	name: string;
	/**
	 * House Price
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {number}
	 */
	price: number;
	/**
	 * House Rooms Number
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {number}
	 */
	roomsNumber: number;
	/**
	 * House Square Meters
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {number}
	 */
	squareMeters: number;
	/**
	 * House Updated Date
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {string}
	 */
	updatedAt: string;
}

/**
 * Interface for the House Features
 * @date 4/3/2023 - 23:45:44
 *
 * @export
 * @interface HouseFeatures
 * @typedef {HouseFeatures}
 */
export interface HouseFeatures {
	/**
	 * House Features Bathrooms Number
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {number}
	 */
	bathroomsNumber: number;
	/**
	 * House Features Floors Number
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {number}
	 */
	floorsNumber: number;
	/**
	 * House Features Square Meters
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {number}
	 */
	squareMeters: number;
	/**
	 * House Features Rooms Number
	 * @date 4/3/2023 - 23:45:44
	 *
	 * @type {number}
	 */
	roomsNumber: number;
}

/**
 * Interface for the House Images
 * @date 4/3/2023 - 23:45:43
 *
 * @export
 * @interface HouseImage
 * @typedef {HouseImage}
 */
export interface HouseImage {
	/**
	 * House Image Created Date
	 * @date 4/3/2023 - 23:45:43
	 *
	 * @type {string}
	 */
	createdAt: string;
	/**
	 * House Image ID
	 * @date 4/3/2023 - 23:45:43
	 *
	 * @type {number}
	 */
	houseId: number;
	/**
	 * House Images 
	 * @date 4/3/2023 - 23:45:43
	 *
	 * @type {number}
	 */
	imageId: number;
	/**
	 * House Images URL
	 * @date 4/3/2023 - 23:45:43
	 *
	 * @type {string}
	 */
	imageUrl: string;
	/**
	 * House Images Updated Date
	 * @date 4/3/2023 - 23:45:43
	 *
	 * @type {string}
	 */
	updatedAt: string;
}
