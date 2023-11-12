// Own React
import { Navigate, Route, Routes } from "react-router-dom";

// Shared Components
import { PageLayoutComponent } from "../../components/shared";

// Pages
import { HomePage, HouseDetailPage } from "../../pages/main";

/**
 * Component to set the House Routes
 * @date 5/3/2023 - 0:15:49
 *
 * @export
 * @returns {JSX.Element}
 */
export default function House(): JSX.Element {
	return (
		<PageLayoutComponent>
			<div className="mb-10">
				<Routes>
					<Route path="" element={<HomePage />} />
					<Route path="house-detail/:houseId" element={<HouseDetailPage />} />

					<Route path="*" element={<Navigate to="/not-found" />} />
				</Routes>
			</div>
		</PageLayoutComponent>
	);
}
