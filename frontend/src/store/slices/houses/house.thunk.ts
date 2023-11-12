// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// API's
import { getDoorTypesApi, getFaucetTypesApi, getFloorTypesApi, getHouseApi, getHousesApi } from "../../../api";

// Custom Hooks
import { useFetch } from "../../../hooks";

// Interfaces
import { IDoorType, IFaucetType, IFloorType, IHouse } from "../../../interfaces";

/**
 * Thunk to get the Door Finishes
 * @date 5/3/2023 - 0:19:28
 *
 * @type {*}
 */
export const getDoorTypes = createAsyncThunk("house/getDoorTypes", async (): Promise<string | IDoorType[]> => await useFetch<IDoorType[]>(getDoorTypesApi));

/**
 * Thunk to get the Faucet Finishes
 * @date 5/3/2023 - 0:19:28
 *
 * @type {*}
 */
export const getFaucetTypes = createAsyncThunk("house/getFaucetTypes", async (): Promise<string | IFaucetType[]> => await useFetch<IFaucetType[]>(getFaucetTypesApi));

/**
 * Thunk to get the Floor Finishes
 * @date 5/3/2023 - 0:19:28
 *
 * @type {*}
 */
export const getFloorTypes = createAsyncThunk("house/getFloorTypes", async (): Promise<string | IFloorType[]> => await useFetch<IFloorType[]>(getFloorTypesApi));

/**
 * Thunk to get a House
 * @date 5/3/2023 - 0:19:28
 *
 * @type {*}
 */
export const getHouse = createAsyncThunk("house/getHouse", async (houseId: number): Promise<string | IHouse> => await useFetch<IHouse>((): Promise<Response> => getHouseApi(houseId)));

/**
 * Thunk to get the Houses
 * @date 5/3/2023 - 0:19:27
 *
 * @type {*}
 */
export const getHouses = createAsyncThunk("house/getHouses", async (): Promise<string | IHouse[]> => await useFetch<IHouse[]>(getHousesApi));
