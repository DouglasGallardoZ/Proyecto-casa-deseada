/**
 * Custom Hook to return data after using Fetch
 * @date 4/3/2023 - 23:39:11
 *
 * @export
 * @template T
 * @param {() => Promise<Response>} fetchFunction
 * @returns {Promise<string | T>}
 */
export default function useFetch<T>(fetchFunction: () => Promise<Response>): Promise<string | T> {
	return fetchFunction()
		.then((res: Response): Promise<T> => {
			if (!res.ok)
				return res.text().then((text: string): never => {
					throw new Error(text);
				});
			else return res?.json();
		})
		.then((data: T): T => data)
		.catch((err: string): string => err.toString());
}
