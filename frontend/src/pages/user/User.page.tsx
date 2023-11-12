// Own React
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// PrimeReact
import { PrimeButton, primeConfirmDialog, PrimeConfirmDialog, PrimeDialog, PrimeToast } from "../../imports/prime-react";

// Shared Components
import { HeroImageComponent, TitleComponent } from "../../components/shared";

// Own Components
import { ChangePasswordFormComponent, EditFormComponent, UserDataComponent, UserOptionComponent } from "../../components/user";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { deleteUser, getUser, removeRequestMessage } from "../../store/slices/users";

// Own Interfaces
/**
 * Interface to use into functional component
 * @date 5/3/2023 - 0:09:44
 *
 * @interface UserData
 * @typedef {UserData}
 */
interface UserData {
	/**
	 * User Data
	 * @date 5/3/2023 - 0:09:44
	 *
	 * @type {string}
	 */
	text: string;
	/**
	 * Title for the User data
	 * @date 5/3/2023 - 0:09:44
	 *
	 * @type {string}
	 */
	title: string;
}

/**
 * Interface to use into functional component
 * @date 5/3/2023 - 0:09:44
 *
 * @interface OptionData
 * @typedef {OptionData}
 */
interface OptionData {
	/**
	 * Button to be displayed in every User Option
	 * @date 5/3/2023 - 0:09:44
	 *
	 * @type {JSX.Element}
	 */
	button: JSX.Element;
	/**
	 * CSS classes for the component
	 * @date 5/3/2023 - 0:09:44
	 *
	 * @type {string}
	 */
	className: string;
	/**
	 * Title for eery User option
	 * @date 5/3/2023 - 0:09:44
	 *
	 * @type {JSX.Element}
	 */
	title: JSX.Element;
}

/**
 * Component to display the User Page
 * @date 5/3/2023 - 0:09:44
 *
 * @export
 * @returns {JSX.Element}
 */
export default function User(): JSX.Element {
	const { requestMessage, token, userAuthenticated } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const [editForm, setEditForm] = useState<boolean>(false);

	const [changePassword, setChangePassword] = useState<boolean>(false);

	const toast = useRef<PrimeToast>(null!);

	useEffect((): (() => void) => {
		if (requestMessage.startsWith("Error:")) toast.current?.show({ severity: "error", summary: "Error", detail: requestMessage, life: 3000 });
		else if (requestMessage.startsWith("Usuario") || requestMessage.startsWith("Contraseña")) {
			toast.current.show({ severity: "success", summary: "Éxito", detail: requestMessage, life: 3000 });

			setEditForm(false);

			setChangePassword(false);

			dispatch(getUser({ token, userId: userAuthenticated?.userId! }));
		}

		return (): void => {
			dispatch(removeRequestMessage());
		};
	}, [requestMessage]);

	const optionDataTitleClassName = (className: string = " "): string => `text-xl font-semibold${" " + className + " "}mb-3 xs:mb-0 md:mb-3 lg:mb-0 xl:mb-0`;

	const optionDataButtonClassName = (): string => "w-full xs:w-1/3 md:w-full lg:w-1/2";

	const accept = (): void => {
		dispatch(deleteUser({ token, userId: userAuthenticated?.userId! }));

		if (!requestMessage.startsWith("Error:")) navigate("/");
	};

	const deleteAccount = () => {
		primeConfirmDialog({
			message: "¿Estás seguro de eliminar tu cuenta?",
			header: "Eliminación de cuenta",
			icon: "pi pi-info-circle",
			acceptClassName: "p-button-danger",
			accept
		});
	};

	const userData: UserData[] = [
		{ title: "Cédula", text: userAuthenticated?.dni! },
		{ title: "Nombre", text: userAuthenticated?.firstName! },
		{ title: "Apellido", text: userAuthenticated?.lastName! },
		{ title: "Celular", text: userAuthenticated?.phoneNumber! },
		{ title: "Correo", text: userAuthenticated?.email! }
	];

	const optionsData: OptionData[] = [
		{
			className: "border-warning-color",
			title: <h2 className={optionDataTitleClassName("text-warning-color")}>Contraseña</h2>,
			button: <PrimeButton label="Cambiar" className={`p-button-warning button background-color-transition ${optionDataButtonClassName()}`} onClick={(): void => setChangePassword(true)} />
		},
		{
			className: "border-danger-color",
			title: <h2 className={optionDataTitleClassName("text-danger-color")}>Eliminar</h2>,
			button: <PrimeButton label="Eliminar" className={`p-button-danger button background-color-transition ${optionDataButtonClassName()}`} onClick={deleteAccount} />
		},
		{
			className: "border-gray-500",
			title: <h2 className={optionDataTitleClassName()}>Proformas</h2>,
			button: (
				<Link to="/user/proformas" className={optionDataButtonClassName()}>
					<PrimeButton label="Ver todas" className="p-button-secondary button background-color-transition w-full" />
				</Link>
			)
		}
	];

	return (
		<>
			<PrimeToast ref={toast} />

			<PrimeDialog header="Editar usuario" visible={editForm} className="w-full px-2 max-w-3xl" onHide={(): void => setEditForm(false)}>
				<EditFormComponent visibleFunction={setEditForm} />
			</PrimeDialog>

			<PrimeDialog header="Cambiar contraseña" visible={changePassword} className="w-full px-2 max-w-lg" onHide={(): void => setChangePassword(false)}>
				<ChangePasswordFormComponent visibleFunction={setChangePassword} />
			</PrimeDialog>

			<PrimeConfirmDialog />

			<TitleComponent title={`${userAuthenticated?.firstName} ${userAuthenticated?.lastName}`} />

			<h1 className="font-bold text-4xl text-center mb-10">Datos personales</h1>

			<div className="responsive-container width-transition lg:max-w-5xl sm:flex sm:gap-5">
				<div className="mb-5 p-2 border-2 border-gray-500 rounded-md sm:flex-1">
					{userData.map(
						({ text, title }: UserData, index: number): JSX.Element => (
							<UserDataComponent key={index} title={title} text={text} />
						)
					)}

					<div className="text-right">
						<PrimeButton label="Editar" className="p-button-help button background-color-transition w-full xs:w-1/3 md:w-1/5" onClick={(): void => setEditForm(true)} />
					</div>
				</div>

				<div className="sm:w-1/2 md:w-1/3">
					{optionsData.map(
						({ className, title, button }: OptionData, index: number): JSX.Element => (
							<UserOptionComponent key={index} title={title} button={button} className={className} />
						)
					)}
				</div>
			</div>
		</>
	);
}
