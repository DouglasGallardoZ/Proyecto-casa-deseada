// PrimeReact
import { PrimeButton, PrimeFieldset, PrimeProgressSpinner } from "../../imports/prime-react";

// Shared Components
import { LogoLinkComponent } from "../shared";

// Own Components
import { ProformaDataComponent } from ".";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { createProforma } from "../../store/slices/proformas";

/**
 * Dialog to display Proforma Data
 * @date 4/3/2023 - 22:45:30
 *
 * @export
 * @returns {JSX.Element}
 */
export default function ProformaDialog(): JSX.Element {
	const { isLoading } = useAppSelector(state => state.proforma);
	const { selectedDoorType, selectedFaucetType, selectedFloorType, selectedHouse } = useAppSelector(state => state.houses);
	const { token, userAuthenticated } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const createProformaHandler = (): void => {
		dispatch(
			createProforma({
				token,
				proforma: {
					houseId: selectedHouse?.floorsNumber!,
					doorTypeId: selectedDoorType?.doorTypeId!,
					floorTypeId: selectedFloorType?.floorTypeId!,
					faucetTypeId: selectedFaucetType?.faucetTypeId!,
					userId: userAuthenticated?.userId!
				}
			})
		);
	};

	if (isLoading)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<div>
			<div className="sticky top-0 shadow-md w-full bg-white p-1 rounded-b-lg">
				<PrimeButton label="Guardar proforma" className="p-button-help button background-color-transition w-full" onClick={createProformaHandler} />
			</div>

			<LogoLinkComponent className="mb-3" />

			<PrimeFieldset legend="Usuario" className="mb-3">
				<ProformaDataComponent title="Cédula:" className="mb-3">
					<p>{userAuthenticated?.dni!}</p>
				</ProformaDataComponent>

				<ProformaDataComponent title="Nombre:" className="mb-3">
					<p>{userAuthenticated?.firstName!}</p>
				</ProformaDataComponent>

				<ProformaDataComponent title="Apellido:">
					<p>{userAuthenticated?.lastName!}</p>
				</ProformaDataComponent>
			</PrimeFieldset>

			<PrimeFieldset legend="Casa">
				<ProformaDataComponent title="Casa:" className="mb-3">
					<p>{selectedHouse?.name!}</p>
				</ProformaDataComponent>

				<ProformaDataComponent title="Precio:" className="mb-3">
					<p>{selectedHouse?.price!}</p>
				</ProformaDataComponent>

				<ProformaDataComponent title="Características:" className="mb-3">
					<>
						<div className="mb-2">
							<h4 className="font-medium">Metros cuadrados:</h4>

							<p>
								{selectedHouse?.squareMeters} m<sup>2</sup>
							</p>
						</div>

						<div className="mb-2">
							<h4 className="font-medium">Pisos:</h4>

							<p>{selectedHouse?.floorsNumber} pisos</p>
						</div>

						<div className="mb-2">
							<h4 className="font-medium">Cuartos:</h4>

							<p>{selectedHouse?.roomsNumber}</p>
						</div>

						<div>
							<h4 className="font-medium">Baños:</h4>

							<p>{selectedHouse?.bathroomsNumber}</p>
						</div>
					</>
				</ProformaDataComponent>

				<ProformaDataComponent title={selectedFloorType?.name!} className="mb-3">
					<p>$ {selectedFloorType?.price}</p>
				</ProformaDataComponent>

				<ProformaDataComponent title={selectedFaucetType?.name!} className="mb-3">
					<p>$ {selectedFaucetType?.price}</p>
				</ProformaDataComponent>

				<ProformaDataComponent title={selectedDoorType?.name!} className="mb-3">
					<p>$ {selectedDoorType?.price}</p>
				</ProformaDataComponent>

				<ProformaDataComponent title="Total:" className="mb-3">
					<p className="font-semibold text-xl">$ {selectedHouse?.price! + selectedDoorType?.price! + selectedFaucetType?.price! + selectedFloorType?.price!}</p>
				</ProformaDataComponent>
			</PrimeFieldset>
		</div>
	);
}
