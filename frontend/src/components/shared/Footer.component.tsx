// PrimeReact
import { PrimeDivider } from "../../imports/prime-react";

// Shared Components
import { LogoLinkComponent, SocialLinksComponent } from ".";

/**
 * Component to display the Footer page
 * @date 4/3/2023 - 22:59:58
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Footer(): JSX.Element {
	return (
		<div className="bg-dark-color w-full py-7">
			<div className="responsive-container width-transition">
				<div className="mb-10 sm:flex sm:justify-between sm:items-center">
					<LogoLinkComponent className="max-w-max mx-auto mb-5 sm:mb-0 sm:mx-0" />

					<SocialLinksComponent />
				</div>

				<PrimeDivider />

				<p className="mt-10 text-neutral-400 text-center">&copy; Todos los derechos reservados - Casa Soñada</p>
			</div>
		</div>
	);
}
