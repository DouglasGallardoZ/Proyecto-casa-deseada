// Own React
import { useEffect } from "react";

// PrimeReact
import { PrimeProgressSpinner } from "../../imports/prime-react";

// Shared Components
import { CardLayoutComponent, HeroImageComponent, PageTitleComponent } from "../../components/shared";

// Own Components
import { CardHouseComponent } from "../../components/home";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { getHouses } from "../../store/slices/houses";

// Interfaces
import { IHouse } from "../../interfaces";

/**
 * Component to display the House (main) Page
 * @date 5/3/2023 - 0:08:02
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
	const { houses, isLoading } = useAppSelector(state => state.houses);

	const dispatch = useAppDispatch();

	useEffect((): void => {
		if (houses.length === 0) dispatch(getHouses());
	}, []);

	if (isLoading)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<>
			<PageTitleComponent title="Inicio" />

			<PageTitleComponent title="Lista de casas" />

			<CardLayoutComponent>
				<>
					{houses.map(
						(house: IHouse): JSX.Element => (
							<CardHouseComponent key={house.houseId} house={house} />
						)
					)}
				</>
			</CardLayoutComponent>
		</>
	);
}
