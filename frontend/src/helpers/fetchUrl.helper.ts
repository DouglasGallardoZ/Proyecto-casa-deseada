/**
 * Helper to set the backend URL for fetching
 * @date 4/3/2023 - 23:38:25
 *
 * @export
 * @returns {string}
 */
export default function fetchUrl(): string {
	return `${import.meta.env.VITE_BASE_URL}`;
}
