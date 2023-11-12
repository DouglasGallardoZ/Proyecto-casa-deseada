// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 22:52:34
 *
 * @interface CardLayoutProps
 * @typedef {CardLayoutProps}
 */
interface CardLayoutProps {
	/**
	 * Child param for the functional component
	 * @date 4/3/2023 - 22:52:34
	 *
	 * @type {JSX.Element}
	 */
	children: JSX.Element;
}

/**
 * Component to structure Cards in page
 * @date 4/3/2023 - 22:52:34
 *
 * @export
 * @param {CardLayoutProps} { children }
 * @returns {JSX.Element}
 */
export default function CardLayout({ children }: CardLayoutProps): JSX.Element {
	return (
		<div className="card-layout responsive-container width-transition">
			{children}
		</div>
	);
}
