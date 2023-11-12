// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 23:30:03
 *
 * @interface UserOptionProps
 * @typedef {UserOptionProps}
 */
interface UserOptionProps {
	/**
	 * Button to be displayed in every User Option
	 * @date 4/3/2023 - 23:30:02
	 *
	 * @type {JSX.Element}
	 */
	button: JSX.Element;
	/**
	 * CSS classes for the component
	 * @date 4/3/2023 - 23:30:02
	 *
	 * @type {string}
	 */
	className: string;
	/**
	 * Title for eery User option
	 * @date 4/3/2023 - 23:30:02
	 *
	 * @type {JSX.Element}
	 */
	title: JSX.Element;
}

/**
 * Component to display Options in the User page
 * @date 4/3/2023 - 23:30:02
 *
 * @export
 * @param {UserOptionProps} { button, className, title }
 * @returns {JSX.Element}
 */
export default function UserOption({ button, className, title }: UserOptionProps): JSX.Element {
	return (
		<div className={`mb-5 p-2 border-2 ${className} rounded-md xs:flex xs:justify-between xs:items-center md:block lg:flex`}>
			{title}

			{button}
		</div>
	);
}
