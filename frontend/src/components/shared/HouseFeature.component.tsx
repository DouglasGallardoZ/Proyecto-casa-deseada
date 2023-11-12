// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 23:00:47
 *
 * @interface HouseFeatureProps
 * @typedef {HouseFeatureProps}
 */
interface HouseFeatureProps {
	/**
	 * House Feature to display
	 * @date 4/3/2023 - 23:00:47
	 *
	 * @type {JSX.Element}
	 */
	feature: JSX.Element;
	/**
	 * Icon to represente the house Feature
	 * @date 4/3/2023 - 23:00:47
	 *
	 * @type {JSX.Element}
	 */
	icon: JSX.Element;
}

/**
 * Component to display a House Feature
 * @date 4/3/2023 - 23:00:47
 *
 * @export
 * @param {HouseFeatureProps} { icon, feature }
 * @returns {JSX.Element}
 */
export default function HouseFeature({ feature, icon }: HouseFeatureProps): JSX.Element {
	return (
		<div className="rounded-full py-1 px-1 border-2 border-neutral-400 text-center flex justify-center items-center gap-1">
			<span className="shrink-0">{icon}</span> <span className="text-sm">{feature}</span>
		</div>
	);
}
