// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// API's
import { changePasswordApi, deleteUserApi, getUserApi, signInApi, signUpApi, updateUserApi } from "../../../api";

// Custom Hooks
import { useFetch } from "../../../hooks";

// Interfaces
import { IAuthUser, ISignInResponse, IUserToken, IUser, IChangePassword, IUserData } from "../../../interfaces";

/**
 * Thunk to Change the User Password
 * @date 5/3/2023 - 0:36:40
 *
 * @type {*}
 */
export const changePassword = createAsyncThunk("user/changePassword", async (data: IChangePassword): Promise<string> => await useFetch<string>((): Promise<Response> => changePasswordApi(data)));

/**
 * Thunk to delete an User
 * @date 5/3/2023 - 0:36:40
 *
 * @type {*}
 */
export const deleteUser = createAsyncThunk("user/delete", async (data: IUserData): Promise<string> => await useFetch<string>((): Promise<Response> => deleteUserApi(data)));

/**
 * Thunk to get an User
 * @date 5/3/2023 - 0:36:40
 *
 * @type {*}
 */
export const getUser = createAsyncThunk("user/getUser", async (data: IUserData): Promise<IUser | string> => await useFetch<IUser>((): Promise<Response> => getUserApi(data)));

/**
 * Thunk to SignIn an User
 * @date 5/3/2023 - 0:36:40
 *
 * @type {*}
 */
export const signIn = createAsyncThunk("user/signIn", async (authUser: IAuthUser): Promise<ISignInResponse | string> => await useFetch<ISignInResponse>((): Promise<Response> => signInApi(authUser)));

/**
 * Thunk to Thunk to SignUp an User
 * @date 5/3/2023 - 0:36:40
 *
 * @type {*}
 */
export const signUp = createAsyncThunk("user/signUp", async (user: IUser): Promise<string> => await useFetch<string>((): Promise<Response> => signUpApi(user)));

/**
 * Thunk to Thunk to update an User
 * @date 5/3/2023 - 0:36:40
 *
 * @type {*}
 */
export const updateUser = createAsyncThunk("user/update", async (data: IUserToken): Promise<string> => await useFetch<string>((): Promise<Response> => updateUserApi(data)));
