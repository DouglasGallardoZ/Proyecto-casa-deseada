// Redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Thunks
import { getFaucetTypes, getHouse, getHouses } from ".";

// Interfaces
import { IDoorType, IFaucetType, IFloorType, IHouse } from "../../../interfaces";
import { getDoorTypes, getFloorTypes } from "./house.thunk";

// Own Interfaces
/**
 * Interface for the slice
 * @date 5/3/2023 - 0:17:38
 *
 * @interface HouseState
 * @typedef {HouseState}
 */
interface HouseState {
	/**
	 * Door Types in State
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {IDoorType[]}
	 */
	doorTypes: IDoorType[];
	/**
	 * Faucet Types in State
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {IFaucetType[]}
	 */
	faucetTypes: IFaucetType[];
	/**
	 * Floor Types in State
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {IFloorType[]}
	 */
	floorTypes: IFloorType[];
	/**
	 * Houses in State
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {IHouse[]}
	 */
	houses: IHouse[];
	/**
	 * Whether the state is loading or not
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {boolean}
	 */
	isLoading: boolean;
	/**
	 * Messae got from HTTP request
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {string}
	 */
	requestMessage: string;
	/**
	 * Selected Door Type in State
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {IDoorType}
	 */
	selectedDoorType?: IDoorType;
	/**
	 * Selected Faucet Type in State
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {IFaucetType}
	 */
	selectedFaucetType?: IFaucetType;
	/**
	 * Selected Floor Type in State
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {IFloorType}
	 */
	selectedFloorType?: IFloorType;
	/**
	 * Selected House in State
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {IHouse}
	 */
	selectedHouse?: IHouse;
}

// Global Consts
/**
 * Initial values for the state
 * @date 5/3/2023 - 0:18:00
 *
 * @type {HouseState}
 */
const initialState: HouseState = {
	houses: [],
	selectedHouse: undefined,
	doorTypes: [],
	faucetTypes: [],
	floorTypes: [],
	selectedDoorType: undefined,
	selectedFaucetType: undefined,
	selectedFloorType: undefined,
	isLoading: true,
	requestMessage: ""
};

/**
 * Create the slice for the Houses
 * @date 5/3/2023 - 0:18:42
 *
 * @type {*}
 */
export const house = createSlice({
	name: "house",
	initialState,
	reducers: {
		removeDoorTypes: (state): void => {
			state.doorTypes = [];
		},
		removeFaucetTypes: (state): void => {
			state.faucetTypes = [];
		},
		removeFloorTypes: (state): void => {
			state.floorTypes = [];
		},
		removeHouses: (state): void => {
			state.houses = [];
		},
		removeRequestMessage: (state): void => {
			state.requestMessage = "";
		},
		removeSelectedDoorType: (state): void => {
			state.selectedDoorType = undefined;
		},
		removeSelectedFloorType: (state): void => {
			state.selectedFloorType = undefined;
		},
		removeSelectedFaucetType: (state): void => {
			state.selectedFaucetType = undefined;
		},
		removeSelectedHouse: (state): void => {
			state.selectedHouse = undefined;
		},
		setHouses: (state, action: PayloadAction<IHouse[]>): void => {
			state.isLoading = false;
			state.houses = action.payload;
		},
		setSelectedDoorType: (state, action: PayloadAction<IDoorType>): void => {
			state.selectedDoorType = state.doorTypes!.find((doorType: IDoorType) => doorType.doorTypeId === action.payload?.doorTypeId);
		},
		setSelectedFaucetType: (state, action: PayloadAction<IFaucetType>): void => {
			state.selectedFaucetType = state.faucetTypes!.find((faucetType: IFaucetType) => faucetType.faucetTypeId === action.payload?.faucetTypeId);
		},
		setSelectedFloorType: (state, action: PayloadAction<IFloorType>): void => {
			state.selectedFloorType = state.floorTypes!.find((floorType: IFloorType) => floorType.floorTypeId === action.payload?.floorTypeId);
		},
		setSelectedHouse: (state, action: PayloadAction<string>): void => {
			state.isLoading = false;
			state.selectedHouse = state.houses.find((house: IHouse) => house.houseId === parseInt(action.payload));
		},
		startLoadingHouses: (state): void => {
			state.isLoading = true;
		}
	},
	extraReducers: builder => {
		builder.addCase(getDoorTypes.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getDoorTypes.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.doorTypes = action.payload as IDoorType[];

			state.isLoading = false;
		});
		builder.addCase(getFaucetTypes.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getFaucetTypes.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.faucetTypes = action.payload as IFaucetType[];

			state.isLoading = false;
		});
		builder.addCase(getFloorTypes.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getFloorTypes.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.floorTypes = action.payload as IFloorType[];

			state.isLoading = false;
		});
		builder.addCase(getHouse.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getHouse.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.selectedHouse = action.payload;

			state.isLoading = false;
		});
		builder.addCase(getHouses.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getHouses.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.houses = action.payload as IHouse[];

			state.isLoading = false;
		});
	}
});

export const { removeDoorTypes, removeFaucetTypes, removeFloorTypes, removeHouses, removeRequestMessage, removeSelectedDoorType, removeSelectedFloorType, removeSelectedFaucetType, removeSelectedHouse, setSelectedDoorType, setSelectedFaucetType, setSelectedFloorType, setHouses, setSelectedHouse, startLoadingHouses } = house.actions;
