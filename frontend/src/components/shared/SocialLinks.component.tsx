// React Icons
import { BsFacebookIcon, BsInstagramIcon, BsTwitterIcon } from "../../imports/react-icons";

// Own Interfaces
/**
 * Interface for the functional component params
 * @date 4/3/2023 - 23:23:19
 *
 * @interface SocialLinkProps
 * @typedef {SocialLinkProps}
 */
interface SocialLinkProps {
	/**
	 * Path link for every social icon
	 * @date 4/3/2023 - 23:23:19
	 *
	 * @type {string}
	 */
	link: string;
	/**
	 * Icon to represent every social media
	 * @date 4/3/2023 - 23:23:19
	 *
	 * @type {JSX.Element}
	 */
	icon: JSX.Element;
}

/**
 * Component to display links for every social media
 * @date 4/3/2023 - 23:23:19
 *
 * @export
 * @returns {JSX.Element}
 */
export default function SocialLinks(): JSX.Element {
	const socialLinks: SocialLinkProps[] = [
		{
			link: "https://www.instagram.com/",
			icon: <BsInstagramIcon className="text-rose-500" />
		},
		{
			link: "https://www.facebook.com/",
			icon: <BsFacebookIcon className="text-blue-600" />
		},
		{
			link: "https://twitter.com/",
			icon: <BsTwitterIcon className="text-sky-600" />
		}
	];

	return (
		<div className="flex justify-center items-center gap-5 text-2xl">
			{socialLinks.map(
				({ link, icon }: SocialLinkProps): JSX.Element => (
					<a key={link} href={link} target="_blank">
						{icon}
					</a>
				)
			)}
		</div>
	);
}
