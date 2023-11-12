// Own react
import { FieldError } from "react-hook-form";

// Shared Components
import { InputErrorMessageComponent } from ".";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 22:56:38
 *
 * @interface FieldInputProps
 * @typedef {FieldInputProps}
 */
interface FieldInputProps {
	/**
	 * For property for the label tag
	 * @date 4/3/2023 - 22:56:38
	 *
	 * @type {string}
	 */
	htmlFor: string;
	/**
	 * Label for the lable tag
	 * @date 4/3/2023 - 22:56:38
	 *
	 * @type {string}
	 */
	label: string;
	/**
	 * Child param for the functional component
	 * @date 4/3/2023 - 22:56:38
	 *
	 * @type {JSX.Element}
	 */
	children: JSX.Element;
	/**
	 * Errors ocurred in the input field
	 * @date 4/3/2023 - 22:56:38
	 *
	 * @type {FieldError}
	 */
	errorMessage: FieldError;
}

/**
 * Component to display fields into a form
 * @date 4/3/2023 - 22:56:38
 *
 * @export
 * @param {FieldInputProps} { htmlFor, label, children, errorMessage }
 * @returns {JSX.Element}
 */
export default function FieldInput({ htmlFor, label, children, errorMessage }: FieldInputProps): JSX.Element {
	return (
		<div className="mb-3">
			<label htmlFor={htmlFor} className="ml-1 text-lg font-medium inline-block sm:text-xl">
				{label}
			</label>

			{children}

			<InputErrorMessageComponent errorMessage={errorMessage!} message={errorMessage?.message!} />
		</div>
	);
}
