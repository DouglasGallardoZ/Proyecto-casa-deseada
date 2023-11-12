// Helpers
import { cloudinaryUrlHelper } from "../../helpers";

// Interfaces
import { IHeroImage } from "../../interfaces";

/**
 * Component to display a Hero Image
 * @date 4/3/2023 - 23:00:29
 *
 * @export
 * @param {IHeroImage} { imageSrc, text = "Title" }
 * @returns {JSX.Element}
 */
export default function HeroImage({ imageSrc, text = "Title" }: IHeroImage): JSX.Element {
	return (
		<div className="relative mb-10">
			<img src={cloudinaryUrlHelper(imageSrc)} alt="header page image" className="w-full object-cover height-transition max-h-60 sm:max-h-64 md:max-h-80 lg:max-h-96 xl:max-h-[28rem] 2xl:max-h-[32rem]" />

			<div className="absolute top-0 right-0 bottom-0 left-0 m-auto flex justify-center items-center bg-dark-color/70">
				<p className="responsive-container width-transition text-center inline-block font-bold text-white-color text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
					<span className="font-transition">{text}</span>
				</p>
			</div>
		</div>
	);
}
