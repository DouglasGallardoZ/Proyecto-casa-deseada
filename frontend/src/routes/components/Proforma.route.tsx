// Own react
import { Navigate, Route, Routes } from "react-router-dom";

// Pages
import { ProformaPage } from "../../pages/proforma";

/**
 * Component to set the Proforma Routes
 * @date 5/3/2023 - 0:16:03
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Proforma(): JSX.Element {
	return (
		<Routes>
			<Route path="" element={<ProformaPage />} />

			<Route path="*" element={<Navigate to="/not-found" />} />
		</Routes>
	);
}
