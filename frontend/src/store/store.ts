// Redux
import { configureStore } from "@reduxjs/toolkit";

// Slices
import { user } from "./slices/users";
import { house } from "./slices/houses";
import { proforma } from "./slices/proformas";

/**
 * The Store Config
 * @date 5/3/2023 - 0:41:35
 *
 * @type {*}
 */
export const store = configureStore({
	reducer: {
		houses: house.reducer,
		proforma: proforma.reducer,
		user: user.reducer
	}
});

/**
 * Create the AppDispatch type
 * @date 5/3/2023 - 0:41:35
 *
 * @export
 * @typedef {AppDispatch}
 */
export type AppDispatch = typeof store.dispatch;
/**
 * Create the RootState type
 * @date 5/3/2023 - 0:41:35
 *
 * @export
 * @typedef {RootState}
 */
export type RootState = ReturnType<typeof store.getState>;
