// Own react
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// PrimeReact
import { PrimeButton } from "../../imports/prime-react";

// Store
import { useAppDispatch } from "../../store";
import { removeRequestMessage as removeHouseErrors } from "../../store/slices/houses";
import { removeRequestMessage as removeUserErrors } from "../../store/slices/users";

/**
 * Component to display the Not-Found <Page></Page>
 * @date 5/3/2023 - 0:08:53
 *
 * @export
 * @returns {JSX.Element}
 */
export default function NotFound(): JSX.Element {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	useEffect((): (() => void) => {
		return (): void => {
			dispatch(removeHouseErrors());
			dispatch(removeUserErrors());
		};
	}, []);

	return (
		<div className="w-full min-h-screen flex justify-center items-center">
			<div className="p-20 inline-block rounded-lg border-2 border-primary-color text-center">
				<div className="mb-10 text-9xl font-extrabold text-primary-color">¡Rayos!</div>

				<div className="mb-10 p-5 text-2xl bg-primary-color/25 rounded-md text-dark-color">
					<p>Algo anduvo mal</p>

					<p>No encontramos esta página</p>
				</div>

				<PrimeButton label="Volver al inicio" className="p-button-warning button background-color-transition w-full xs:w-auto xs:flex-1 xs:order-2 sm:order-3" onClick={() => navigate("/")} />
			</div>
		</div>
	);
}
