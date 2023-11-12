// Own React
import { useEffect } from "react";

// PrimeReact
import { PrimeButton, PrimeDivider, PrimeProgressSpinner } from "../../imports/prime-react";

// Shared Components
import { FeaturesLayoutComponent, HouseFinishesComponent, TitleComponent } from "../shared";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { setSelectedDoorType, setSelectedFaucetType, setSelectedFloorType } from "../../store/slices/houses";
import { updateProforma } from "../../store/slices/proformas";

// Interfaces
import { IHouseFeatures } from "../../interfaces";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 22:45:56
 *
 * @interface ProformaEditDialogProps
 * @typedef {ProformaEditDialogProps}
 */
interface ProformaEditDialogProps {
	/**
	 * Function to make visible the dialog component or not
	 * @date 4/3/2023 - 22:45:55
	 *
	 * @type {*}
	 */
	visibleFunction: any;
}

/**
 * Component to display a dialog to edit the Proforma Data
 * @date 4/3/2023 - 22:45:55
 *
 * @export
 * @param {ProformaEditDialogProps} { visibleFunction }
 * @returns {JSX.Element}
 */
export default function ProformaEditDialog({ visibleFunction }: ProformaEditDialogProps): JSX.Element {
	const { doorTypes, faucetTypes, floorTypes, isLoading: isLoadingHouse, selectedHouse, selectedDoorType, selectedFaucetType, selectedFloorType } = useAppSelector(state => state.houses);
	const { isLoading: isLoadingProforma, selectedProforma } = useAppSelector(state => state.proforma);
	const { isLoading: isLoadingUser, token, userAuthenticated } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setSelectedDoorType(doorTypes[selectedProforma?.doorTypeId!]));
		dispatch(setSelectedFaucetType(faucetTypes[selectedProforma?.faucetTypeId!]));
		dispatch(setSelectedFloorType(floorTypes[selectedProforma?.floorTypeId!]));
	}, []);

	const houseFeatures: IHouseFeatures = {
		bathroomsNumber: selectedHouse?.bathroomsNumber!,
		floorsNumber: selectedHouse?.floorsNumber!,
		roomsNumber: selectedHouse?.roomsNumber!,
		squareMeters: selectedHouse?.squareMeters!
	};

	const createProformaHandler = (): void => {
		dispatch(
			updateProforma({
				token,
				proforma: {
					...selectedProforma!,
					houseId: selectedHouse?.floorsNumber!,
					doorTypeId: selectedDoorType?.doorTypeId!,
					floorTypeId: selectedFloorType?.floorTypeId!,
					faucetTypeId: selectedFaucetType?.faucetTypeId!,
				}
			})
		);
	};

	if (isLoadingHouse || isLoadingProforma || isLoadingUser)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<>
			<div className="sticky top-0 shadow-md w-full bg-white p-1 rounded-b-lg flex flex-col justify-center items-center gap-3 2xs:flex-row">
				<PrimeButton label="Guardar" className="p-button-help button background-color-transition w-full xs:w-auto xs:flex-1 2xs:order-2" onClick={createProformaHandler} />

				<PrimeButton label="Cancelar" className="p-button-danger p-button-outlined button background-color-transition w-full xs:w-auto xs:flex-1 2xs:order-1" onClick={() => visibleFunction(false)} />
			</div>

			<TitleComponent title={selectedHouse?.name!} />

			<FeaturesLayoutComponent houseFeatures={houseFeatures} className="2xs:grid-cols-2" />

			<PrimeDivider />

			<HouseFinishesComponent />

			<PrimeDivider />

			<div className="mb-1 flex justify-between items-center">
				<p className="text-lg font-bold">Total</p>

				<p className="text-lg font-semibold">$ {selectedHouse?.price! + selectedDoorType?.price! + selectedFaucetType?.price! + selectedFloorType?.price!}</p>
			</div>
		</>
	);
}
