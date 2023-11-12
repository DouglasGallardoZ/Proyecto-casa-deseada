// PrimeReact
import { PrimeInputMask, PrimeInputText, PrimePassword, PrimeProgressSpinner } from "../../imports/prime-react";

// React Icons
import { CgArrowLeftOIcon } from "../../imports/react-icons";

// Shared Components
import { FieldInputComponent } from "../shared";

// Form & Validation
import { Controller, FieldError, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Own Components
import { FormButtonsComponent, HeaderAuthFormComponent } from ".";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { signUp } from "../../store/slices/users";

// Interfaces
import { IUser } from "../../interfaces";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 22:29:30
 *
 * @interface FormData
 * @typedef {FormData}
 */
interface FormData {
	/**
	 * User DNI
	 * @date 4/3/2023 - 22:29:30
	 *
	 * @type {string}
	 */
	dni: string;
	/**
	 * User First Name
	 * @date 4/3/2023 - 22:29:30
	 *
	 * @type {string}
	 */
	firstName: string;
	/**
	 * User Last Name
	 * @date 4/3/2023 - 22:29:30
	 *
	 * @type {string}
	 */
	lastName: string;
	/**
	 * User Phone Number
	 * @date 4/3/2023 - 22:29:30
	 *
	 * @type {string}
	 */
	phoneNumber: string;
	/**
	 * User Email
	 * @date 4/3/2023 - 22:29:30
	 *
	 * @type {string}
	 */
	email: string;
	/**
	 * User Password
	 * @date 4/3/2023 - 22:29:30
	 *
	 * @type {string}
	 */
	password: string;
}

// Global Consts
/**
 * Default values for the form
 * @date 4/3/2023 - 22:29:30
 *
 * @type {FormData}
 */
const defaultValues: FormData = {
	dni: "",
	firstName: "",
	lastName: "",
	phoneNumber: "",
	email: "",
	password: ""
};

/**
 * Component to display a SingUp Form
 * @date 4/3/2023 - 22:29:30
 *
 * @export
 * @returns {JSX.Element}
 */
export default function SignUpForm(): JSX.Element {
	const inputTextClasses = (error: FieldError): string => `input input-text border-transition ${error ? "border-danger-color" : ""}`;

	const inputPasswordClasses = (error: FieldError): { className: string; inputClassName: string } => ({
		className: "input input-password border-transition",
		inputClassName: error ? "border-danger-color enabled:focus:border-danger-color" : ""
	});

	const { isLoading } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const schema = yup
		.object<FormData>({
			dni: yup.string().required("Cédula requerida").length(10, "Ingrese 10 dígitos exactos").matches(/^\d/, "Solo números"),
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
			password: yup
				.string()
				.required("Contraseña requerida")
				.min(8, "Mínimo 8 caracteres")
				.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "Al menos una mayúscula, una minúscula y un número")
		})
		.required();

	const { control, formState, handleSubmit, reset } = useForm<FormData>({
		defaultValues,
		resolver: yupResolver(schema)
	});

	const toggleAnimate = (error: FieldError): string => (error ? "animate__animated animate__shakeX" : "");

	const onSubmit: SubmitHandler<FormData> = (data: FormData): void => {
		const userData: IUser = {
			...data,
			createdAt: new Date().toLocaleString(),
			updatedAt: new Date().toLocaleString()
		};

		dispatch(signUp(userData));
	};

	if (isLoading)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<>
			<HeaderAuthFormComponent title="Registrarse" link="/auth/sign-in">
				<>
					<CgArrowLeftOIcon className="inline text-2xl" /> Iniciar sesión
				</>
			</HeaderAuthFormComponent>

			<form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()} className="rounded">
				<div className="sm:flex sm:gap-5">
					<div className="flex-1">
						<Controller
							name="dni"
							control={control}
							render={({ field }): JSX.Element => (
								<FieldInputComponent htmlFor={field.name} label="Cédula" errorMessage={formState.errors[field.name]!}>
									<PrimeInputMask id={field.name} {...field} mask="9999999999" placeholder="9999999999" className={`${inputTextClasses(formState.errors[field.name]!)} ${toggleAnimate(formState.errors[field.name]!)}`} />
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

						<Controller
							name="password"
							control={control}
							render={({ field }): JSX.Element => (
								<FieldInputComponent htmlFor={field.name} label="Contraseña" errorMessage={formState.errors[field.name]!}>
									<PrimePassword inputId={field.name} {...field} inputRef={field.ref} placeholder="Contraseña" className={`${inputPasswordClasses(formState.errors[field.name]!).className} ${toggleAnimate(formState.errors[field.name]!)}`} inputClassName={inputPasswordClasses(formState.errors[field.name]!).inputClassName} toggleMask />
								</FieldInputComponent>
							)}
						/>
					</div>
				</div>

				<FormButtonsComponent submitButton="Registrarse" cancelButton="Limpiar" />
			</form>
		</>
	);
}
