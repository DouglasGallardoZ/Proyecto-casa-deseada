import { FieldError } from "react-hook-form";

/**
 * Interface for the Errors in Input Fields
 * @date 4/3/2023 - 23:56:24
 *
 * @export
 * @interface FieldInput
 * @typedef {FieldInput}
 */
export interface FieldInput {
	/**
	 * Child for the component
	 * @date 4/3/2023 - 23:56:24
	 *
	 * @type {JSX.Element}
	 */
	children: JSX.Element;
	/**
	 * Errors ocurred in the input field
	 * @date 4/3/2023 - 23:56:24
	 *
	 * @type {FieldError}
	 */
	errorMessage: FieldError;
	/**
	 * For property for the label tag
	 * @date 4/3/2023 - 23:56:24
	 *
	 * @type {string}
	 */
	htmlFor: string;
	/**
	 * Label for the lable tag
	 * @date 4/3/2023 - 23:56:24
	 *
	 * @type {string}
	 */
	label: string;
}
