// Own React
import { Dispatch, SetStateAction } from "react";

// PrimeReact
import { PrimeButton, PrimeInputMask, PrimeInputText, PrimeProgressSpinner } from "../../imports/prime-react";

// Shared Components
import { FieldInputComponent } from "../shared";

// Form & Validation
import { Controller, FieldError, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { updateUser } from "../../store/slices/users";

// Interfaces
import { IUser } from "../../interfaces";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 23:27:31
 *
 * @interface EditFormProps
 * @typedef {EditFormProps}
 */
interface EditFormProps {
	/**
	 * Function to make visible the dialog component or not
	 * @date 4/3/2023 - 23:27:31
	 *
	 * @type {Dispatch<SetStateAction<boolean>>}
	 */
	visibleFunction: Dispatch<SetStateAction<boolean>>;
}

/**
 * Description placeholder
* Interface to use into functional component* @date 4/3/2023 - 23:27:31
 *
 * @interface FormData
 * @typedef {FormData}
 */
interface FormData {
	/**
	 * User DNI
	 * @date 4/3/2023 - 23:27:31
	 *
	 * @type {string}
	 */
	dni: string;
	/**
	 * User First Name
	 * @date 4/3/2023 - 23:27:31
	 *
	 * @type {string}
	 */
	firstName: string;
	/**
	 * User Last Name
	 * @date 4/3/2023 - 23:27:31
	 *
	 * @type {string}
	 */
	lastName: string;
	/**
	 * User Phone Number
	 * @date 4/3/2023 - 23:27:31
	 *
	 * @type {string}
	 */
	phoneNumber: string;
	/**
	 * User Email
	 * @date 4/3/2023 - 23:27:30
	 *
	 * @type {string}
	 */
	email: string;
}

/**
 * Component to display a form to edit the User data
 * @date 4/3/2023 - 23:27:30
 *
 * @export
 * @param {EditFormProps} { visibleFunction }
 * @returns {JSX.Element}
 */
export default function EditForm({ visibleFunction }: EditFormProps): JSX.Element {
	const { isLoading, token, userAuthenticated } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const inputTextClasses = (error: FieldError): string => `input input-text border-transition ${error ? "border-danger-color" : ""}`;

	const schema = yup
		.object<FormData>({
			firstName: yup
				.string()
				.required("Nombre requerido")
				.matches(/^([a-zA-Z]+\s)*[a-zA-Z]+/, "Solo letras"),
			lastName: yup
				.string()
				.required("Apellido requerido")
				.matches(/^([a-zA-Z]+\s)*[a-zA-Z]+/, "Solo letras"),
			phoneNumber: yup.string().required("Celular requerida").length(10, "Ingrese 10 dígitos exactos").matches(/^\d/, "Solo números").matches(/^09\d/, "Debe empezar con 09"),
			email: yup
				.string()
				.required("Correo requerido")
				.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Formato de correo inválido"),
			password: yup.string().required("Contraseña requerida")
		})
		.required();

	const { control, formState, handleSubmit } = useForm<FormData>({
		defaultValues: { ...userAuthenticated },
		resolver: yupResolver(schema)
	});

	const toggleAnimate = (error: FieldError): string => (error ? "animate__animated animate__shakeX" : "");

	const onSubmit: SubmitHandler<FormData> = (data: FormData): void => {
		const userData: IUser = {
			...userAuthenticated!,
			...data,
			updatedAt: new Date().toLocaleString()
		};

		dispatch(updateUser({ token, user: userData }));
	};

	if (isLoading)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="rounded">
			<div className="sm:flex sm:gap-5">
				<div className="flex-1">
					<Controller
						name="dni"
						control={control}
						render={({ field }): JSX.Element => (
							<FieldInputComponent htmlFor={field.name} label="Cédula" errorMessage={formState.errors[field.name]!}>
								<PrimeInputMask id={field.name} {...field} mask="9999999999" placeholder="9999999999" className={inputTextClasses(formState.errors[field.name]!)} disabled />
							</FieldInputComponent>
						)}
					/>

					<Controller
						name="firstName"
						control={control}
						render={({ field }): JSX.Element => (
							<FieldInputComponent htmlFor={field.name} label="Nombre" errorMessage={formState.errors[field.name]!}>
								<PrimeInputText id={field.name} {...field} placeholder="Nombre" className={`${inputTextClasses(formState.errors[field.name]!)} ${toggleAnimate(formState.errors[field.name]!)}`} />
							</FieldInputComponent>
						)}
					/>

					<Controller
						name="lastName"
						control={control}
						render={({ field }): JSX.Element => (
							<FieldInputComponent htmlFor={field.name} label="Apellido" errorMessage={formState.errors[field.name]!}>
								<PrimeInputText id={field.name} {...field} placeholder="Apellido" className={`${inputTextClasses(formState.errors[field.name]!)} ${toggleAnimate(formState.errors[field.name]!)}`} />
							</FieldInputComponent>
						)}
					/>
				</div>

				<div className="flex-1">
					<Controller
						name="phoneNumber"
						control={control}
						render={({ field }): JSX.Element => (
							<FieldInputComponent htmlFor={field.name} label="Celular" errorMessage={formState.errors[field.name]!}>
								<PrimeInputMask id={field.name} {...field} mask="0999999999" placeholder="0999999999" className={`${inputTextClasses(formState.errors[field.name]!)} ${toggleAnimate(formState.errors[field.name]!)}`} />
							</FieldInputComponent>
						)}
					/>

					<Controller
						name="email"
						control={control}
						render={({ field }): JSX.Element => (
							<FieldInputComponent htmlFor={field.name} label="Correo" errorMessage={formState.errors[field.name]!}>
								<PrimeInputText id={field.name} {...field} placeholder="example.example@mail.com" className={`${inputTextClasses(formState.errors[field.name]!)} ${toggleAnimate(formState.errors[field.name]!)}`} />
							</FieldInputComponent>
						)}
					/>
				</div>
			</div>

			<div className="flex flex-col gap-3 xs:flex-row sm:w-1/3 sm:ml-auto">
				<PrimeButton type="submit" label="Guardar" className="p-button-help button background-color-transition w-full xs:w-1/2 xs:order-2" disabled={!formState.isDirty} />

				<PrimeButton type="submit" label="Cancelar" className="p-button-help p-button-outlined button background-color-transition w-full xs:w-1/2 xs:order-1" onClick={() => visibleFunction(false)} />
			</div>
		</form>
	);
}
