// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 22:44:14
 *
 * @interface ProformaDataProps
 * @typedef {ProformaDataProps}
 */
interface ProformaDataProps {
	/**
	 * CSS classes for the component
	 * @date 4/3/2023 - 22:44:14
	 *
	 * @type {?string}
	 */
	className?: string;
	/**
	 * Child param for the functional component
	 * @date 4/3/2023 - 22:44:13
	 *
	 * @type {JSX.Element}
	 */
	children: JSX.Element;
	/**
	 * Title for the component
	 * @date 4/3/2023 - 22:44:13
	 *
	 * @type {string}
	 */
	title: string;
}

/**
 * Component to display data in the Proforma Dialog
 * @date 4/3/2023 - 22:44:13
 *
 * @export
 * @param {ProformaDataProps} { className, children, title }
 * @returns {JSX.Element}
 */
export default function ProformaData({ className, children, title }: ProformaDataProps): JSX.Element {
	return (
		<div className={`border border-black rounded-md p-1 ${className}`}>
			<h3 className="font-medium text-lg">{title}</h3>

			<div>{children}</div>
		</div>
	);
}
