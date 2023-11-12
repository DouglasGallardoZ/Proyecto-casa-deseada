import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/**
 * Create and export the Selector Hook
 * @date 5/3/2023 - 0:40:46
 *
 * @type {() => AppDispatch}
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
/**
 * Create and export the Dispatch Hook
 * @date 5/3/2023 - 0:40:46
 *
 * @type {TypedUseSelectorHook<RootState>}
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
