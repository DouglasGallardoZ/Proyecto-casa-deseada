// Shared Components
import { HouseFeatureComponent } from ".";
import { FaBedIcon, FaBuildingIcon, FaHomeIcon, FaToiletIcon } from "../../imports/react-icons";

// Interfaces
import { IHouseFeatures } from "../../interfaces";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 22:53:48
 *
 * @interface FeaturesLayoutProps
 * @typedef {FeaturesLayoutProps}
 */
interface FeaturesLayoutProps {
	/**
	 * CSS classes for the component
	 * @date 4/3/2023 - 22:53:48
	 *
	 * @type {?string}
	 */
	className?: string;
	/**
	 * House Features to display
	 * @date 4/3/2023 - 22:53:48
	 *
	 * @type {IHouseFeatures}
	 */
	houseFeatures: IHouseFeatures;
}

/**
 * Interface to use into functional component
 * @date 4/3/2023 - 22:53:48
 *
 * @interface FeaturesLayoutData
 * @typedef {FeaturesLayoutData}
 */
interface FeaturesLayoutData {
	/**
	 * House Feature to display in component
	 * @date 4/3/2023 - 22:53:48
	 *
	 * @type {JSX.Element}
	 */
	feature: JSX.Element;
	/**
	 * Icon to represent the House Fewature
	 * @date 4/3/2023 - 22:53:47
	 *
	 * @type {JSX.Element}
	 */
	icon: JSX.Element;
}

/**
 * Component to structure the House Features in page
 * @date 4/3/2023 - 22:53:47
 *
 * @export
 * @param {FeaturesLayoutProps} { className, houseFeatures }
 * @returns {JSX.Element}
 */
export default function FeaturesLayout({ className, houseFeatures }: FeaturesLayoutProps): JSX.Element {
	const houseFeaturesTemplate: FeaturesLayoutData[] = [
		{
			feature: (
				<>
					{houseFeatures.squareMeters!} m<sup>2</sup>
				</>
			),
			icon: <FaHomeIcon className="text-primary-color inline-block m-0" />
		},
		{
			feature: (
				<>
					{houseFeatures.floorsNumber} {houseFeatures.floorsNumber >= 2 ? "pisos" : "piso"}
				</>
			),
			icon: <FaBuildingIcon className="text-primary-color inline-block m-0" />
		},
		{
			feature: <>{houseFeatures.roomsNumber} cuartos</>,
			icon: <FaBedIcon className="text-primary-color inline-block m-0" />
		},
		{
			feature: (
				<>
					{houseFeatures.bathroomsNumber} {houseFeatures.bathroomsNumber >= 2 ? "baños" : "baño"}
				</>
			),
			icon: <FaToiletIcon className="text-primary-color inline-block m-0" />
		}
	];

	return (
		<div className={`grid grid-cols-1 gap-3 ${className}`}>
			{houseFeaturesTemplate.map(
				(houseFeatureTemplate: FeaturesLayoutData, index: number): JSX.Element => (
					<HouseFeatureComponent key={index} icon={houseFeatureTemplate.icon} feature={houseFeatureTemplate.feature} />
				)
			)}
		</div>
	);
}
