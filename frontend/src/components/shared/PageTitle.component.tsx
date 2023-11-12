// Interfaces
import { ITitle } from "../../interfaces";

/**
 * Component to display the title page
 * @date 4/3/2023 - 23:23:03
 *
 * @export
 * @param {ITitle} { title = "Title" }
 * @returns {JSX.Element}
 */
export default function PageTitle({ title = "Title" }: ITitle): JSX.Element {
	return (
		<div className="bg-dark-color h-16 py-3 flex items-center mb-10 lg:h-20">
			<h2 className="responsive-container width-transition text-primary-color font-bold text-3xl lg:text-4xl">
				<span className="font-transition">{title}</span>
			</h2>
		</div>
	);
}
