// Interfaces
import { ITitle } from "../../interfaces";

/**
 * Component to display a title
 * @date 4/3/2023 - 23:24:23
 *
 * @export
 * @param {ITitle} { title = "Title" }
 * @returns {JSX.Element}
 */
export default function Title({ title = "Title" }: ITitle): JSX.Element {
	return (
		<h3 className="text-primary-color text-xl text-center font-bold mb-5 sm:text-2xl lg:text-3xl">
			<span className="font-transition">{title}</span>
		</h3>
	);
}
