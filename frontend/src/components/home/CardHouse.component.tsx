// Own React
import { Link } from "react-router-dom";

// PrimeReact
import { PrimeButton, PrimeCard } from "../../imports/prime-react";

// React Icons
import { AiOutlineEyeIcon } from "../../imports/react-icons";

// Shared Components
import { FeaturesLayoutComponent } from "../shared";

// Helpers
import { cloudinaryUrlHelper } from "../../helpers";

// Interfaces
import { IHouse, IHouseFeatures } from "../../interfaces";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 22:30:44
 *
 * @interface CardHouseProps
 * @typedef {CardHouseProps}
 */
interface CardHouseProps {
	/**
	 * House data to diplay in card
	 * @date 4/3/2023 - 22:30:44
	 *
	 * @type {IHouse}
	 */
	house: IHouse;
}

/**
 * Component to structure Cards to display House data
 * @date 4/3/2023 - 22:30:44
 *
 * @export
 * @param {CardHouseProps} { house }
 * @returns {JSX.Element}
 */
export default function CardHouse({ house }: CardHouseProps): JSX.Element {
	const houseFeatures: IHouseFeatures = {
		bathroomsNumber: house.bathroomsNumber,
		floorsNumber: house.floorsNumber,
		roomsNumber: house.roomsNumber,
		squareMeters: house.squareMeters
	};

	const header: JSX.Element = <img src={cloudinaryUrlHelper(house.houseImages[0].imageUrl)} alt="Card" className="h-60 object-cover rounded-t-md" />;

	const footer: JSX.Element = (
		<Link to={`house-detail/${house.houseId}`} className="card-footer-link">
			<PrimeButton label="Más información" icon={<AiOutlineEyeIcon className="mr-2 text-xl" />} className="p-button-help p-button-sm button background-color-transition" />
		</Link>
	);

	return (
		<PrimeCard title={house.name} subTitle={`Última actualización: ${new Date(house.updatedAt).toLocaleDateString("en-GB")}`} footer={footer} header={header} className="card-house shadow-transition">
			<FeaturesLayoutComponent houseFeatures={houseFeatures} className="2xs:grid-cols-2" />
		</PrimeCard>
	);
}
