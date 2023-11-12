// Own React
import { Link } from "react-router-dom";

// Helpers
import { cloudinaryUrlHelper } from "../../helpers";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 23:20:34
 *
 * @interface LogoLinkProps
 * @typedef {LogoLinkProps}
 */
interface LogoLinkProps {
	/**
	 * CSS classes for the component
	 * @date 4/3/2023 - 23:20:34
	 *
	 * @type {?string}
	 */
	className?: string;
	/**
	 * CSS classes for the image in the component
	 * @date 4/3/2023 - 23:20:34
	 *
	 * @type {?string}
	 */
	imgClassName?: string;
}

/**
 * Component to display the Logo as a link
 * @date 4/3/2023 - 23:20:34
 *
 * @export
 * @param {LogoLinkProps} { className, imgClassName }
 * @returns {JSX.Element}
 */
export default function LogoLink({ className, imgClassName }: LogoLinkProps): JSX.Element {
	return (
		<Link to="/" className={`flex justify-center items-center ${className}`}>
			<img src="resources/logo.jpg" alt="logo" className={imgClassName} width={65} />
		</Link>
	);
}
