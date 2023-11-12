// Own react
import { useEffect, useRef, useState } from "react";

// PrimeReact
import { PrimeButton, PrimeColumn, primeConfirmDialog, PrimeDataTable, PrimeDialog, PrimeToast } from "../../imports/prime-react";

// Own Components
import { ProformaEditDialogComponent } from ".";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { getDoorTypes, getFaucetTypes, getFloorTypes, getHouse } from "../../store/slices/houses";
import { deleteProforma, removeRequestMessage, setSelectedProforma } from "../../store/slices/proformas";

// Interfaces
import { IProforma } from "../../interfaces";

/**
 * Component to display a table with all user proformas
 * @date 4/3/2023 - 22:46:56
 *
 * @export
 * @returns {JSX.Element}
 */
export default function ProformaTable(): JSX.Element {
	const { proformas, requestMessage } = useAppSelector(state => state.proforma);
	const { token } = useAppSelector(state => state.user);

	const [visible, setVisible] = useState<boolean>(false);

	const toast = useRef<PrimeToast>(null!);

	const dispatch = useAppDispatch();

	useEffect((): (() => void) => {
		if (requestMessage.startsWith("Proforma")) toast.current?.show({ severity: "success", summary: "Éxito", detail: requestMessage, life: 3000 });
		else if (requestMessage.startsWith("Error:")) toast.current?.show({ severity: "error", summary: "Error", detail: requestMessage, life: 3000 });

		dispatch(getDoorTypes());
		dispatch(getFaucetTypes());
		dispatch(getFloorTypes());

		return () => {
			setTimeout(() => {
				dispatch(removeRequestMessage());
			}, 2000);
		};
	}, [requestMessage]);

	const accept = (rowData: IProforma): void => {
		dispatch(deleteProforma({ token, proformaId: rowData.proformaId! }));
	};

	const confirmDeleteProforma = (rowData: IProforma): void => {
		primeConfirmDialog({
			message: "¿Está seguro de eliminar esta proforma?",
			header: "Confirmación",
			icon: "pi pi-exclamation-triangle",
			acceptClassName: "p-button-danger button",
			accept: () => accept(rowData)
		});
	};

	const handleEditProforma = (rowData: IProforma): void => {
		dispatch(setSelectedProforma(rowData));

		dispatch(getHouse(rowData.houseId));

		setVisible(true);
	};

	const columnNumberBodyTemplate = (rowData: IProforma): JSX.Element => <p className="text-center">{proformas.indexOf(rowData) + 1}</p>;

	const columnDateBodyTemplate = (rowData: IProforma): JSX.Element => <p className="text-center">{new Intl.DateTimeFormat(document.documentElement.lang || navigator.language).format(new Date(rowData.updatedAt!))}</p>;

	const columnActionBodyTemplate = (rowData: IProforma): JSX.Element => (
		<div className="w-auto mx-auto flex items-center gap-3 xs:ml-auto xs:mr-0 lg:mx-auto lg:justify-evenly">
			<PrimeButton icon="pi pi-pencil" className="p-button-warning p-button-rounded p-button-outlined button" onClick={(): void => handleEditProforma(rowData)} />

			<PrimeButton icon="pi pi-trash" className="p-button-danger p-button-rounded p-button-outlined button" onClick={() => confirmDeleteProforma(rowData)} />
		</div>
	);

	return (
		<>
			<PrimeToast ref={toast} className="z-50" />

			<PrimeDialog header="Proforma" visible={visible} className="w-full px-2 max-w-sm" onHide={() => setVisible(false)}>
				<ProformaEditDialogComponent visibleFunction={setVisible} />
			</PrimeDialog>

			<PrimeDataTable value={proformas} size="small" showGridlines stripedRows>
				<PrimeColumn body={columnNumberBodyTemplate} header="N°"></PrimeColumn>
				<PrimeColumn field="house.name" header="Casa"></PrimeColumn>
				<PrimeColumn field="doorType.name" header="Puerta"></PrimeColumn>
				<PrimeColumn field="floorType.name" header="Piso"></PrimeColumn>
				<PrimeColumn field="faucetType.name" header="Grifería"></PrimeColumn>
				<PrimeColumn body={columnDateBodyTemplate} header="Última actualización"></PrimeColumn>
				<PrimeColumn body={columnActionBodyTemplate} header="Acciones" className="min-w-[12rem] text-center"></PrimeColumn>
			</PrimeDataTable>
		</>
	);
}
