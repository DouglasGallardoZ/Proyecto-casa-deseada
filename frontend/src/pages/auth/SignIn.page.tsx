// Own React
import { useEffect, useRef } from "react";

// PrimeReact
import { PrimeToast } from "../../imports/prime-react";

// Own Components
import { AuthLayoutComponent, SignInFormComponent } from "../../components/auth";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { removeRequestMessage } from "../../store/slices/users";

/**
 * Component to display the SignIn Page
 * @date 5/3/2023 - 0:07:16
 *
 * @export
 * @returns {JSX.Element}
 */
export default function SignIn(): JSX.Element {
	const { requestMessage } = useAppSelector(state => state.user);

	const dispatch = useAppDispatch();

	const toast = useRef<PrimeToast>(null);

	useEffect((): (() => void) => {
		if (requestMessage.startsWith("Error:")) toast.current?.show({ severity: "error", summary: "Error", detail: requestMessage, life: 3000 });

		return (): void => {
			dispatch(removeRequestMessage());
		};
	}, [requestMessage]);

	return (
		<>
			<PrimeToast ref={toast} />

			<AuthLayoutComponent>
				<SignInFormComponent />
			</AuthLayoutComponent>
		</>
	);
}
