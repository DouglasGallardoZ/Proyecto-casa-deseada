// Shared Components
import { FooterComponent, MenuBarComponent } from ".";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 23:22:34
 *
 * @interface PageLayoutProps
 * @typedef {PageLayoutProps}
 */
interface PageLayoutProps {
	/**
	 * Child param for the functional component
	 * @date 4/3/2023 - 23:22:34
	 *
	 * @type {JSX.Element}
	 */
	children: JSX.Element;
}

/**
 * Component to structure all pages
 * @date 4/3/2023 - 23:22:34
 *
 * @export
 * @param {PageLayoutProps} { children }
 * @returns {JSX.Element}
 */
export default function PageLayout({ children }: PageLayoutProps): JSX.Element {
	return (
		<div className="flex flex-col justify-between items-stretch min-h-screen">
			<div>
				<div className="sticky top-0 left-0 right-0 z-10 w-full bg-white-color">
					<MenuBarComponent />
				</div>

				{children}
			</div>

			<FooterComponent />
		</div>
	);
}
