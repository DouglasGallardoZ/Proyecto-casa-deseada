// Own react
import { Dispatch, SetStateAction } from "react";

// PrimeReact
import { PrimeButton, PrimePassword, PrimeProgressSpinner } from "../../imports/prime-react";

// Shared Components
import { FieldInputComponent } from "../shared";

// Form & Validation
import { Controller, FieldError, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { changePassword } from "../../store/slices/users";

// Interfaces
import { IChangePassword } from "../../interfaces/";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 23:24:40
 *
 * @interface ChangePasswordFormProps
 * @typedef {ChangePasswordFormProps}
 */
interface ChangePasswordFormProps {
	/**
	 * Function to make visible the dialog component or not
	 * @date 4/3/2023 - 23:24:40
	 *
	 * @type {Dispatch<SetStateAction<boolean>>}
	 */
	visibleFunction: Dispatch<SetStateAction<boolean>>;
}

/**
 * Interface to use into functional component
 * @date 4/3/2023 - 23:24:40
 *
 * @interface FormData
 * @typedef {FormData}
 */
interface FormData {
	/**
	 * Current User Password
	 * @date 4/3/2023 - 23:24:40
	 *
	 * @type {string}
	 */
	password: string;
	/**
	 * New User Password
	 * @date 4/3/2023 - 23:24:40
	 *
	 * @type {string}
	 */
	newPassword: string;
}

// Global Consts
/**
 * Default values for the form
 * @date 4/3/2023 - 23:24:40
 *
 * @type {FormData}
 */
const defaultValues: FormData = {
	password: "",
	newPassword: ""
};

/**
 * Component to display a form to change the User Password
 * @date 4/3/2023 - 23:24:40
 *
 * @export
 * @param {ChangePasswordFormProps} { visibleFunction }
 * @returns {JSX.Element}
 */
export default function ChangePasswordForm({ visibleFunction }: ChangePasswordFormProps): JSX.Element {
	const { isLoading, token, userAuthenticated } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const inputPasswordClasses = (error: FieldError): { className: string; inputClassName: string } => ({
		className: "input input-password border-transition",
		inputClassName: error ? "border-danger-color enabled:focus:border-danger-color" : ""
	});

	const schema = yup
		.object<FormData>({
			password: yup.string().required("Contraseña requerida"),
			newPassword: yup
				.string()
				.required("Contraseña requerida")
				.min(8, "Mínimo 8 caracteres")
				.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, "Al menos una mayúscula, una minúscula y un número")
		})
		.required();

	const { control, formState, handleSubmit } = useForm<FormData>({
		defaultValues,
		resolver: yupResolver(schema)
	});

	const toggleAnimate = (error: FieldError): string => (error ? "animate__animated animate__shakeX" : "");

	const onSubmit: SubmitHandler<FormData> = (data: FormData): void => {
		const userData: IChangePassword = {
			data: {
				newPassword: data.newPassword,
				user: {
					...userAuthenticated!,
					password: data.password,
					updatedAt: new Date().toLocaleString()
				}
			},
			token
		};

		dispatch(changePassword(userData));
	};

	if (isLoading)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="rounded">
			<Controller
				name="password"
				control={control}
				render={({ field }): JSX.Element => (
					<FieldInputComponent htmlFor={field.name} label="Contraseña" errorMessage={formState.errors[field.name]!}>
						<PrimePassword inputId={field.name} {...field} inputRef={field.ref} placeholder="Contraseña" className={`${inputPasswordClasses(formState.errors[field.name]!).className} ${toggleAnimate(formState.errors[field.name]!)}`} inputClassName={inputPasswordClasses(formState.errors[field.name]!).inputClassName} feedback={false} toggleMask />
					</FieldInputComponent>
				)}
			/>

			<Controller
				name="newPassword"
				control={control}
				render={({ field }): JSX.Element => (
					<FieldInputComponent htmlFor={field.name} label="Nueva contraseña" errorMessage={formState.errors[field.name]!}>
						<PrimePassword inputId={field.name} {...field} inputRef={field.ref} placeholder="Nueva contraseña" className={`${inputPasswordClasses(formState.errors[field.name]!).className} ${toggleAnimate(formState.errors[field.name]!)}`} inputClassName={inputPasswordClasses(formState.errors[field.name]!).inputClassName} toggleMask />
					</FieldInputComponent>
				)}
			/>

			<div className="flex flex-col gap-3 xs:flex-row sm:w-1/3 sm:ml-auto">
				<PrimeButton type="submit" label="Guardar" className="p-button-help button background-color-transition w-full xs:w-1/2 xs:order-2" />

				<PrimeButton type="submit" label="Cancelar" className="p-button-help p-button-outlined button background-color-transition w-full xs:w-1/2 xs:order-1" onClick={() => visibleFunction(false)} />
			</div>
		</form>
	);
}
