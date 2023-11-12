// Shared Components
import { ImagesliderComponent } from "../shared";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 22:31:38
 *
 * @interface GalleriaProps
 * @typedef {GalleriaProps}
 */
interface GalleriaProps {
	/**
	 * Image URLs for the gallery
	 * @date 4/3/2023 - 22:31:38
	 *
	 * @type {string[]}
	 */
	imageUrls: string[];
}

/**
 * CComponent to display a gallery with House Images
 * @date 4/3/2023 - 22:31:38
 *
 * @export
 * @param {GalleriaProps} { imageUrls }
 * @returns {JSX.Element}
 */
export default function Gallery({ imageUrls }: GalleriaProps): JSX.Element {
	return (
		<div className="lg:basis-3/4">
			<ImagesliderComponent imageUrls={imageUrls!} />

			<div className="bg-dark-color text-white-color p-3 text-sm">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto quae quos nisi pariatur magni esse ad, cumque velit! Iste eveniet assumenda veniam explicabo voluptatibus quia tenetur sed dolorum soluta!</p>
			</div>
		</div>
	);
}
