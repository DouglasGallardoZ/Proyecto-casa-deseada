// Own React
import { Navigate, Outlet } from "react-router-dom";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 5/3/2023 - 0:12:59
 *
 * @interface AccessProps
 * @typedef {AccessProps}
 */
interface AccessProps {
	/**
	 * Path link to redirect the user
	 * @date 5/3/2023 - 0:12:59
	 *
	 * @type {string}
	 */
	redirectTo: string;
	/**
	 * Whether there is an User authenticated
	 * @date 5/3/2023 - 0:12:59
	 *
	 * @type {boolean}
	 */
	signedIn: boolean;
	/**
	 * Child param for the functional component
	 * @date 5/3/2023 - 0:12:59
	 *
	 * @type {JSX.Element}
	 */
	children: JSX.Element;
}

/**
 * Component to set Private Routes
 * @date 5/3/2023 - 0:12:59
 *
 * @export
 * @param {AccessProps} { redirectTo, signedIn, children }
 * @returns {JSX.Element}
 */
export function Private({ redirectTo, signedIn, children }: AccessProps): JSX.Element {
	return signedIn ? children || <Outlet /> : <Navigate to={redirectTo} />;
}

/**
 * Components to set Public Routes
 * @date 5/3/2023 - 0:12:59
 *
 * @export
 * @param {AccessProps} { redirectTo, signedIn, children }
 * @returns {JSX.Element}
 */
export function Public({ redirectTo, signedIn, children }: AccessProps): JSX.Element {
	return signedIn ? <Navigate to={redirectTo} /> : children || <Outlet />;
}
