// Own React
import { useNavigate } from "react-router-dom";

// PrimeReact
import { PrimeButton } from "../../imports/prime-react";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 22:24:53
 *
 * @interface FormButtonsProps
 * @typedef {FormButtonsProps}
 */
interface FormButtonsProps {
	/**
	 * Label for the Cancel button
	 * @date 4/3/2023 - 22:24:53
	 *
	 * @type {string}
	 */
	cancelButton: string;
	/**
	 * Label for the Submit button
	 * @date 4/3/2023 - 22:24:53
	 *
	 * @type {string}
	 */
	submitButton: string;
}

/**
 * Component to display the footer buttons for the Auth Form
 * @date 4/3/2023 - 22:24:53
 *
 * @export
 * @param {FormButtonsProps} { cancelButton, submitButton }
 * @returns {JSX.Element}
 */
export default function FormButtons({ cancelButton, submitButton }: FormButtonsProps): JSX.Element {
	const navigate = useNavigate();

	return (
		<div className="flex items-center flex-wrap gap-3">
			<PrimeButton type="submit" label={submitButton} className="p-button-help button background-color-transition w-full xs:w-auto xs:flex-1 xs:order-2 sm:order-3" />

			<PrimeButton type="reset" label={cancelButton} className="p-button-outlined p-button-help button background-color-transition w-full xs:w-auto xs:flex-1 xs:order-1 sm:order-2" />

			<PrimeButton type="button" label="Volver al inicio" className="p-button-text p-button-help button background-color-transition w-full xs:order-3 sm:order-1 sm:w-auto sm:flex-1" onClick={(): void => navigate("/house")} />
		</div>
	);
}
