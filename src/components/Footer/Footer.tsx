import Image from "next/image";
import Link from "next/link";
import {
	FaFacebookF,
	FaInstagram,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa6";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
	return (
		<>
			<div className="bg-[url('/footer-bg.jpg')] bg-cover bg-center opacity-90">
				<div className="h-auto bg-black/14 px-6 pt-6 backdrop-blur-sm">
					<div className="mx-auto grid max-w-7xl grid-cols-1 px-6">
						<div className="block space-y-4 lg:hidden">
							{/* Logo  */}
							<Link href={"/"}>
								<Image
									src={"/logo.svg"}
									alt="logo"
									height={400}
									width={400}
									priority
									className="h-[40] w-[100]"
								/>
							</Link>

							{/* discription  */}
							<p className="mt-4 text-white">
								We craft high-performance digital experiences
								that drive real business results.
							</p>

							{/* Icons  */}
							<div className="flex gap-2">
								<div className="cursor-pointer rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
									<FaFacebookF />
								</div>
								<div className="cursor-pointer rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
									<FaInstagram />
								</div>
								<div className="cursor-pointer rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
									<FaYoutube />
								</div>
								<div className="cursor-pointer rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
									<FaWhatsapp />
								</div>
							</div>
						</div>
						{/* mobile nav  */}
						<div className="mt-4 block lg:hidden">
							<MobileFooter />
						</div>
						{/* Desktop nav  */}
						<div className="mt-6 hidden lg:block">
							<DesktopFooter />
						</div>
					</div>

					<div className="mx-auto mt-4 max-w-7xl border-t-3 border-white px-6 py-4 text-center text-white">
						Copyright © 2025 Agency All rights reserved
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
