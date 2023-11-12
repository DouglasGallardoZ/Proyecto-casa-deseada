// Own React
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ProformaDialogComponent } from ".";

// PrimeReact
import { PrimeButton, PrimeDialog, PrimeMessage, PrimeToast } from "../../imports/prime-react";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { removeRequestMessage } from "../../store/slices/proformas";

/**
 * CComponent to display footer buttons for the House Detail
 * @date 4/3/2023 - 22:33:51
 *
 * @export
 * @returns {JSX.Element}
 */
export default function HouseDetailFooter(): JSX.Element {
	const { selectedDoorType, selectedFaucetType, selectedFloorType } = useAppSelector(state => state.houses)
	const { requestMessage } = useAppSelector(state => state.proforma);
	const { userAuthenticated } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const toast = useRef<PrimeToast>(null);

	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		if (requestMessage.startsWith("Proforma")) {
			toast.current?.show({ severity: "success", summary: "Éxito", detail: requestMessage, life: 3000 });

			setVisible(false);
		}

		return () => {
			dispatch(removeRequestMessage());
		};
	}, [requestMessage]);

	return (
		<>
			<PrimeToast ref={toast} />

			<PrimeDialog header="Proforma" visible={visible} className="w-full px-2 max-w-sm" onHide={() => setVisible(false)}>
				<ProformaDialogComponent />
			</PrimeDialog>

			<div className="flex items-center gap-5 flex-wrap lg:ml-auto">
				{!userAuthenticated ? (
					<>
						<PrimeMessage severity="warn" text="Iniciar sesión para generar proforma" className="basis-full sm:basis-1/2 lg:basis-full" />

						<Link to="/auth/sign-in" className="basis-full 2xs:order-5 2xs:flex-1">
							<PrimeButton label="Iniciar sesión" className="p-button-help button background-color-transition w-full" />
						</Link>
					</>
				) : (
					<PrimeButton label="Generar proforma" className="p-button-help button background-color-transition w-full basis-full 2xs:order-5 2xs:flex-1" onClick={(): void => setVisible(true)} disabled={!selectedDoorType || !selectedFaucetType || !selectedFloorType} />
				)}

				<Link to="/" className="basis-full 2xs:flex-1">
					<PrimeButton label="Cancelar" className="p-button-outlined p-button-help button background-color-transition w-full" />
				</Link>
			</div>
		</>
	);
}
