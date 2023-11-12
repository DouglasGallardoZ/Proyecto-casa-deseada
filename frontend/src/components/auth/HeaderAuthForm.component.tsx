// Own react
import { Link } from "react-router-dom";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 22:26:32
 *
 * @interface HeaderAuthFormProps
 * @typedef {HeaderAuthFormProps}
 */
interface HeaderAuthFormProps {
	/**
	 * Child param for the functional component
	 * @date 4/3/2023 - 22:26:32
	 *
	 * @type {JSX.Element}
	 */
	children: JSX.Element;
	/**
	 * Link to redirect Auth Form
	 * @date 4/3/2023 - 22:26:32
	 *
	 * @type {string}
	 */
	link: string;
	/**
	 * Title for the Auth Form
	 * @date 4/3/2023 - 22:26:32
	 *
	 * @type {string}
	 */
	title: string;
}

/**
 * Component to display links to redirect to Auth Form
 * @date 4/3/2023 - 22:26:32
 *
 * @export
 * @param {HeaderAuthFormProps} { children, link, title }
 * @returns {JSX.Element}
 */
export default function HeaderAuthForm({ children, link, title }: HeaderAuthFormProps): JSX.Element {
	return (
		<div className="mb-5 flex flex-col justify-between items-center xs:flex-row">
			<h2 className="text-3xl font-bold">{title}</h2>

			<Link to={link} className="font-semibold text-purple-600 hover:underline hover:underline-offset-4">
				{children}
			</Link>
		</div>
	);
}
