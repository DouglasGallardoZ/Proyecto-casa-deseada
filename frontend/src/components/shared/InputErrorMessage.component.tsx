// From & Validation
import { FieldError } from "react-hook-form";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 23:18:32
 *
 * @interface InputErrorMessageProps
 * @typedef {InputErrorMessageProps}
 */
interface InputErrorMessageProps {
	/**
	 * Errors ocurred in the input field
	 * @date 4/3/2023 - 23:18:31
	 *
	 * @type {FieldError}
	 */
	errorMessage: FieldError;
	/**
	 * Error Message to display the error in the input
	 * @date 4/3/2023 - 23:18:31
	 *
	 * @type {string}
	 */
	message: string;
}

/**
 * Component to display the Message Error in the input field
 * @date 4/3/2023 - 23:18:31
 *
 * @export
 * @param {InputErrorMessageProps} { errorMessage, message }
 * @returns {JSX.Element}
 */
export default function InputErrorMessage({ errorMessage, message }: InputErrorMessageProps): JSX.Element {
	return <div className="pl-3 h-auto" style={{ minHeight: "1.5rem" }}>{errorMessage && <span className="text-danger-color">{message}</span>}</div>;
}
