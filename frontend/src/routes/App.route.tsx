// Own React
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Pages
import { NotFoundPage } from "../pages/main";
import { useAppSelector } from "../store";

// Routes
import { AuthRoutes, HouseRoutes, PrivateRoutes, PublicRoutes, UserRoutes } from "./components";

/**
 * App Routes
 * @date 5/3/2023 - 0:12:47
 *
 * @export
 * @returns {JSX.Element}
 */
export default function AppRoutes(): JSX.Element {
	const { userAuthenticated } = useAppSelector(state => state.user);

	const signIn = userAuthenticated ? true : false;

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/house/*" element={<HouseRoutes />} />
				<Route path="/" element={<Navigate to="/house" />} />

				<Route
					path="/auth/*"
					element={
						<PublicRoutes redirectTo="/user" signedIn={signIn}>
							<AuthRoutes />
						</PublicRoutes>
					}
				/>

				<Route
					path="/user/*"
					element={
						<PrivateRoutes redirectTo="/auth" signedIn={signIn}>
							<UserRoutes />
						</PrivateRoutes>
					}
				/>

				<Route path="/not-found" element={<NotFoundPage />} />

				<Route path="*" element={<Navigate to="/not-found" />} />
			</Routes>
		</BrowserRouter>
	);
}
