// Own React
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// PrimeReact
import { PrimeDivider, PrimeProgressSpinner } from "../../imports/prime-react";

// Shared Components
import { FeaturesLayoutComponent, HeroImageComponent, HouseFinishesComponent, PageTitleComponent, TitleComponent } from "../../components/shared";

// Own Components
import { GalleryComponent, HouseDetailFooterComponent } from "../../components/house_details";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { getDoorTypes, getFaucetTypes, getFloorTypes, getHouse, removeDoorTypes, removeFaucetTypes, removeFloorTypes, removeSelectedDoorType, removeSelectedFaucetType, removeSelectedFloorType, removeSelectedHouse, setSelectedHouse } from "../../store/slices/houses";

// Interfaces
import { IHouseFeatures, IHouseImage } from "../../interfaces";

/**
 * Component to display the Hose Detail Page
 * @date 5/3/2023 - 0:08:38
 *
 * @export
 * @returns {JSX.Element}
 */
export default function HouseDetail(): JSX.Element {
	const { selectedDoorType, selectedFaucetType, selectedFloorType, isLoading, houses, selectedHouse, requestMessage } = useAppSelector(state => state.houses);

	const dispatch = useAppDispatch();

	const { pathname } = useLocation();

	const navigate = useNavigate();

	useEffect((): (() => void) => {
		if (houses.length === 0) dispatch(getHouse(Number(pathname.substring(1).split("/").pop()!)));
		else dispatch(setSelectedHouse(pathname.substring(1).split("/").pop()!));

		dispatch(getDoorTypes());
		dispatch(getFaucetTypes());
		dispatch(getFloorTypes());

		if (requestMessage) navigate("/not-found");

		return (): void => {
			dispatch(removeDoorTypes());
			dispatch(removeFaucetTypes());
			dispatch(removeFloorTypes());
			dispatch(removeSelectedHouse());
			dispatch(removeSelectedDoorType());
			dispatch(removeSelectedFaucetType());
			dispatch(removeSelectedFloorType());
		};
	}, [requestMessage]);

	const houseFeatures: IHouseFeatures = {
		bathroomsNumber: selectedHouse?.bathroomsNumber!,
		floorsNumber: selectedHouse?.floorsNumber!,
		roomsNumber: selectedHouse?.roomsNumber!,
		squareMeters: selectedHouse?.squareMeters!
	};

	const imageUrls: string[] = selectedHouse?.houseImages.map((houseImage: IHouseImage): string => houseImage!.imageUrl)!;

	if (isLoading)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<>
			<TitleComponent title="Detalles de la casa"  />

			<PageTitleComponent title={selectedHouse?.name!} />

			<div className="responsive-container width-transition lg:flex">
				<GalleryComponent imageUrls={imageUrls!} />

				<PrimeDivider className="lg:hidden" />

				<PrimeDivider layout="vertical" className="hidden lg:block" />

				<div>
					<div className="md:flex md:justify-center md:gap-10 md:flex-wrap lg:gap-1">
						<div className="md:flex-1">
							<TitleComponent title="Características" />

							<FeaturesLayoutComponent houseFeatures={houseFeatures} className="2xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4" />
						</div>

						<PrimeDivider className="md:hidden lg:block" />

						<PrimeDivider layout="vertical" className="hidden md:block lg:hidden" />

						<div className="md:flex-auto">
							<TitleComponent title="Acabados" />

							<HouseFinishesComponent />
						</div>
					</div>

					<PrimeDivider />

					<TitleComponent title="Total" />

					<div className="mb-1 flex justify-between items-center">
						<p className="text-lg font-bold">Total</p>

						<p className="text-lg font-semibold">$ {selectedHouse?.price! + selectedDoorType?.price! + selectedFaucetType?.price! + selectedFloorType?.price! || 0}</p>
					</div>

					<PrimeDivider />

					<HouseDetailFooterComponent />
				</div>
			</div>
		</>
	);
}
