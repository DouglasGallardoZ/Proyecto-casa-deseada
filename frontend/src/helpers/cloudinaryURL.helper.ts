/**
 * Helper to set the path link to get image from Cloudinary
 * @date 4/3/2023 - 23:37:35
 *
 * @export
 * @param {string} imageName
 * @returns {string}
 */
export default function cloudinaryUrl(imageName: string): string {
	return `${import.meta.env.VITE_CLOUDINARY_PATH}/${imageName}`;
}
