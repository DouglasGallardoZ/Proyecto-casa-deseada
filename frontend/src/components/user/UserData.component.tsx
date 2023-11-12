// Own Interface
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 23:28:50
 *
 * @interface UserDataProps
 * @typedef {UserDataProps}
 */
interface UserDataProps {
	/**
	 * User data
	 * @date 4/3/2023 - 23:28:50
	 *
	 * @type {string}
	 */
	text: string;
	/**
	 * Title for the User data
	 * @date 4/3/2023 - 23:28:50
	 *
	 * @type {string}
	 */
	title: string;
}

/**
 * Component to display the User data
 * @date 4/3/2023 - 23:28:50
 *
 * @export
 * @param {UserDataProps} { text, title }
 * @returns {JSX.Element}
 */
export default function UserData({ text, title }: UserDataProps): JSX.Element {
	return (
		<div className={`mb-3 p-1 rounded bg-gray-200`}>
			<h3 className="text-xl font-semibold">{title}</h3>

			<p className="text-lg">{text}</p>
		</div>
	);
}
