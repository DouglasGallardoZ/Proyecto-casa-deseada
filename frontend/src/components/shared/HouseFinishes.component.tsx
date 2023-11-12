// Own React
import { useEffect } from "react";

// Store
import { useAppDispatch, useAppSelector } from "../../store";

// PrimeReact
import { PrimeDropdown, PrimeDropdownChangeEvent, PrimeProgressSpinner } from "../../imports/prime-react";

// Interfaces
import { IDoorType, IFaucetType, IFloorType } from "../../interfaces";

// Store
import { setSelectedDoorType, setSelectedFaucetType, setSelectedFloorType } from "../../store/slices/houses";

// Own Interface
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 23:08:10
 *
 * @interface HouseFinishesData
 * @typedef {HouseFinishesData}
 */
interface HouseFinishesData {
	/**
	 * The House Finish selected
	 * @date 4/3/2023 - 23:08:10
	 *
	 * @type {(IDoorType | IFaucetType | IFloorType)}
	 */
	selectedTypeValue: IDoorType | IFaucetType | IFloorType;
	/**
	 * Function to set the selected House Finish
	 * @date 4/3/2023 - 23:08:10
	 *
	 * @type {((doorType: IDoorType) => void) | ((faucetType: IFaucetType) => void) | ((floorType: IFloorType) => void)}
	 */
	setType: ((doorType: IDoorType) => void) | ((faucetType: IFaucetType) => void) | ((floorType: IFloorType) => void);
	/**
	 * Title for the House Finishes
	 * @date 4/3/2023 - 23:08:10
	 *
	 * @type {string}
	 */
	title: string;
	/**
	 * The House Finishes
	 * @date 4/3/2023 - 23:08:10
	 *
	 * @type {(IDoorType[] | IFaucetType[] | IFloorType[])}
	 */
	types: IDoorType[] | IFaucetType[] | IFloorType[];
}

/**
 * Component to display dropdowns to select a House Finish
 * @date 4/3/2023 - 23:08:10
 *
 * @export
 * @returns {JSX.Element}
 */
export default function HouseFinishes(): JSX.Element {
	const { doorTypes, faucetTypes, floorTypes, isLoading, selectedDoorType, selectedFaucetType, selectedFloorType } = useAppSelector(state => state.houses);
	const { selectedProforma } = useAppSelector(state => state.proforma);

	const dispatch = useAppDispatch();

	useEffect((): void => {
		dispatch(setSelectedDoorType(doorTypes.find((doorType: IDoorType): boolean => doorType.doorTypeId === selectedProforma?.doorTypeId)!));
		dispatch(setSelectedFloorType(floorTypes.find((floorType: IFloorType): boolean => floorType.floorTypeId === selectedProforma?.floorTypeId)!));
		dispatch(setSelectedFaucetType(faucetTypes.find((faucetType: IFaucetType): boolean => faucetType.faucetTypeId === selectedProforma?.faucetTypeId)!));
	}, [doorTypes, faucetTypes, floorTypes]);

	const setDoor = (doorType: IDoorType): void => {
		dispatch(setSelectedDoorType(doorType));
	};

	const setFloor = (floorType: IFloorType): void => {
		dispatch(setSelectedFloorType(floorType));
	};

	const setFaucet = (faucetType: IFaucetType): void => {
		dispatch(setSelectedFaucetType(faucetType));
	};

	const dropdownTemplates: HouseFinishesData[] = [
		{
			title: "Piso",
			selectedTypeValue: selectedFloorType!,
			setType: setFloor,
			types: floorTypes
		},
		{
			title: "Grifería",
			selectedTypeValue: selectedFaucetType!,
			setType: setFaucet,
			types: faucetTypes
		},
		{
			title: "Puerta",
			selectedTypeValue: selectedDoorType!,
			setType: setDoor,
			types: doorTypes
		}
	];

	if (isLoading)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<>
			{dropdownTemplates.map(
				({ selectedTypeValue, setType, title, types }: HouseFinishesData): JSX.Element => (
					<div key={title} className="mb-3">
						<div className="mb-1 flex justify-between items-center px-2">
							<p className="text-lg font-bold">{title}</p>

							<p className="text-lg font-semibold">$ {selectedTypeValue?.price || 0}</p>
						</div>

						<PrimeDropdown value={selectedTypeValue!} onChange={(event: PrimeDropdownChangeEvent): void => setType(event.value)} options={types} optionLabel="name" placeholder="Seleccione uno..." className="dropdown w-full text-sm" />
					</div>
				)
			)}
		</>
	);
}
