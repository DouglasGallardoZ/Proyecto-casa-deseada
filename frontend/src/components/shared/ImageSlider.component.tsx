// PrimeReact
import { PrimeGalleria } from "../../imports/prime-react";

// Helpers
import { cloudinaryUrlHelper } from "../../helpers";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 23:10:59
 *
 * @interface ImageSliderProps
 * @typedef {ImageSliderProps}
 */
interface ImageSliderProps {
	/**
	 * Image URLs for the gallery
	 * @date 4/3/2023 - 23:10:59
	 *
	 * @type {string[]}
	 */
	imageUrls: string[];
}

/**
 * Component to display an Image Slider
 * @date 4/3/2023 - 23:10:59
 *
 * @export
 * @param {ImageSliderProps} { imageUrls }
 * @returns {JSX.Element}
 */
export default function ImageSlider({ imageUrls }: ImageSliderProps): JSX.Element {
	const item = (imageSrc: string): JSX.Element => <img src={cloudinaryUrlHelper(imageSrc)} alt={imageSrc} className="w-full h-full object-cover" />;

	return <PrimeGalleria value={imageUrls} circular showThumbnails={false} showItemNavigators item={item} className="galleria" />;
}
