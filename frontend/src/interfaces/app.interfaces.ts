/**
 * Interface for Background Images
 * @date 4/3/2023 - 23:40:50
 *
 * @export
 * @interface BackgroundImageStyle
 * @typedef {BackgroundImageStyle}
 */
export interface BackgroundImageStyle {
	/**
	 * Background Image URL
	 * @date 4/3/2023 - 23:40:47
	 *
	 * @type {string}
	 */
	backgroundImage: string;
	/**
	 * Background Image Position
	 * @date 4/3/2023 - 23:40:47
	 *
	 * @type {string}
	 */
	backgroundPosition: string;
	/**
	 * Background Image Repeat
	 * @date 4/3/2023 - 23:40:47
	 *
	 * @type {string}
	 */
	backgroundRepeat: string;
	/**
	 * Background Image Size
	 * @date 4/3/2023 - 23:40:47
	 *
	 * @type {string}
	 */
	backgroundSize: string;
}

/**
 * Interface for CSS classes
 * @date 4/3/2023 - 23:40:46
 *
 * @export
 * @interface ClassName
 * @typedef {ClassName}
 */
export interface ClassName {
	/**
	 * CSS classes for any component
	 * @date 4/3/2023 - 23:40:46
	 *
	 * @type {?string}
	 */
	className?: string;
}

/**
 * Interface for the Hero Image
 * @date 4/3/2023 - 23:40:46
 *
 * @export
 * @interface HeroImage
 * @typedef {HeroImage}
 */
export interface HeroImage {
	/**
	 * Hero Image URL
	 * @date 4/3/2023 - 23:40:46
	 *
	 * @type {string}
	 */
	imageSrc: string;
	/**
	 * Hero Image Text
	 * @date 4/3/2023 - 23:40:45
	 *
	 * @type {?string}
	 */
	text?: string;
}

/**
 * Interface for a Title
 * @date 4/3/2023 - 23:40:45
 *
 * @export
 * @interface Title
 * @typedef {Title}
 */
export interface Title {
	/**
	 * Title
	 * @date 4/3/2023 - 23:40:43
	 *
	 * @type {string}
	 */
	title: string;
}
