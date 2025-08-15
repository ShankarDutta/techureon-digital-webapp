import Image from "next/image";
import Link from "next/link";
import {
	FaFacebookF,
	FaInstagram,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa6";
import { Button } from "../shadcnui/button";
import { Input } from "../shadcnui/input";

const DesktopFooter = () => {
	return (
		<>
			<section className="grid grid-cols-2 space-y-4">
				<div className="w-md space-y-4">
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
						We craft high-performance digital experiences that drive
						real business results.
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
				<div className="grid w-full grid-cols-3">
					{/* Quick-links  */}
					<div className="text-white">
						<h1 className="text-2xl font-medium">Quick Links</h1>
						<div className="flex w-auto flex-col">
							<Link
								href={"/"}
								className="hover:px-4">
								Home
							</Link>
							<Link href={"/about"}>About</Link>
							<Link href={"/blog"}>Blog</Link>
							<Link href={"/contact"}>Contact</Link>
						</div>
					</div>
					{/* Services  */}
					<div className="text-white">
						<h1 className="text-2xl font-medium">Our Services</h1>
						<div className="flex flex-col">
							<Link href={"/brand-design"}>Brand Design</Link>
							<Link href={"/ui-ux-design"}>Ui/Ux Design</Link>
							<Link href={"/development"}>Development</Link>
							<Link href={"/marketing"}>Marketing</Link>
						</div>
					</div>

					{/* input field  */}
					<div className="space-y-4">
						<h1 className="text-xl font-bold text-white">
							Get the Latest Inspiration
						</h1>
						<Input placeholder="Enter Your Email" />
						<Button className="w-full">Subscribe Now</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default DesktopFooter;
