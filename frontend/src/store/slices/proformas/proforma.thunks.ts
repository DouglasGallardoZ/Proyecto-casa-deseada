// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// API's
import { createProformaApi, deleteProformaApi, getProformasApi, updateProformaApi } from "../../../api";

// Custom Hooks
import { useFetch } from "../../../hooks";

// Interfaces
import { IProforma, IProformaData, IProformaToken, IUserData } from "../../../interfaces";

/**
 * Thunk to create a Proforma
 * @date 5/3/2023 - 0:31:59
 *
 * @type {*}
 */
export const createProforma = createAsyncThunk("proforma/create", async (data: IProformaToken): Promise<string> => await useFetch<string>((): Promise<Response> => createProformaApi(data)));

/**
 * Thunk to get all User Proformas
 * @date 5/3/2023 - 0:31:59
 *
 * @type {*}
 */
export const getProformas = createAsyncThunk("proforma/getProformas", async (data: IUserData): Promise<IProforma[] | string> => await useFetch<IProforma[]>((): Promise<Response> => getProformasApi(data)));

/**
 * Thunk to delete a Proforma
 * @date 5/3/2023 - 0:31:59
 *
 * @type {*}
 */
export const deleteProforma = createAsyncThunk("proforma/delete", async (data: IProformaData): Promise<string> => await useFetch<string>((): Promise<Response> => deleteProformaApi(data)));

/**
 * Thunk to update a Proforma
 * @date 5/3/2023 - 0:31:59
 *
 * @type {*}
 */
export const updateProforma = createAsyncThunk("proforma/update", async (data: IProformaToken): Promise<string> => await useFetch<string>((): Promise<Response> => updateProformaApi(data)));
