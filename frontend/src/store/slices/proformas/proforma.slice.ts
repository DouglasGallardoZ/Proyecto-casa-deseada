import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createProforma, deleteProforma, getProformas, updateProforma } from ".";
import { IProforma } from "../../../interfaces";

// Own Interfaces
/**
 * Interface for the slice
 * @date 5/3/2023 - 0:21:50
 *
 * @interface ProformaState
 * @typedef {ProformaState}
 */
interface ProformaState {
	/**
	 * Whether the state is loading or not
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {boolean}
	 */
	isLoading: boolean;
	/**
	 * Proformas in State
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {IProforma[]}
	 */
	proformas: IProforma[];
	/**
	 * Messae got from HTTP request
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {string}
	 */
	requestMessage: string;
	/**
	 * Selected Proforma in State
	 * @date 4/3/2023 - 23:21:21
	 *
	 * @type {IHouse}
	 */
	selectedProforma?: IProforma;
}

// Global Consts
/**
 * Initial values for the state
 * @date 5/3/2023 - 0:18:00
 *
 * @type {HouseState}
 */
const initialState: ProformaState = {
	isLoading: false,
	requestMessage: "",
	proformas: [],
	selectedProforma: undefined
};

/**
 * Create the slice for the Proformas
 * @date 5/3/2023 - 0:18:42
 *
 * @type {*}
 */
export const proforma = createSlice({
	name: "proforma",
	initialState,
	reducers: {
		removeProformas: (state): void => {
			state.proformas = [];
		},
		removeRequestMessage: (state): void => {
			state.requestMessage = "";
		},
		setSelectedProforma: (state, action: PayloadAction<IProforma>): void => {
			state.selectedProforma = action.payload;
		}
	},
	extraReducers: builder => {
		builder.addCase(deleteProforma.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(deleteProforma.fulfilled, (state, action): void => {
			state.requestMessage = action.payload;

			state.isLoading = false;
		});
		builder.addCase(getProformas.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getProformas.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.proformas = action.payload as IProforma[];

			state.isLoading = false;
		});
		builder.addCase(createProforma.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(createProforma.fulfilled, (state, action): void => {
			state.requestMessage = action.payload;

			state.isLoading = false;
		});
		builder.addCase(updateProforma.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(updateProforma.fulfilled, (state, action): void => {
			state.requestMessage = action.payload;

			state.isLoading = false;
		});
	}
});

export const { setSelectedProforma, removeProformas, removeRequestMessage } = proforma.actions;
