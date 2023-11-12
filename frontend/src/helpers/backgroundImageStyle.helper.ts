// Helpers
import { cloudinaryUrlHelper } from ".";

// Interfaces
import { IBackgroundImageStyle } from "../interfaces";

/**
 * Helper to set CSS classes for a background image
 * @date 4/3/2023 - 23:37:16
 *
 * @export
 * @param {string} imagePath
 * @returns {IBackgroundImageStyle}
 */
export default function backgroundImageStyle(imagePath: string): IBackgroundImageStyle {
	return {
		backgroundImage: `url(${cloudinaryUrlHelper(imagePath)})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover"
	};
}
