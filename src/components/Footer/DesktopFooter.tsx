"use client";
import Image from "next/image";
import Link from "next/link";
import {
	FaFacebookF,
	FaInstagram,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa6";
import SubscribeForm from "../Forms/SubscribeForm";

const DesktopFooter = () => {
	return (
		<>
			<section className="grid grid-cols-3 gap-10 space-y-4 lg:gap-32">
				<div className="space-y-4">
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
						<Link
							href={"/"}
							className="cursor-pointer rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
							<FaFacebookF />
						</Link>
						<Link
							href={"/"}
							className="cursor-pointer rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
							<FaInstagram />
						</Link>
						<Link
							href={"/"}
							className="cursor-pointer rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
							<FaYoutube />
						</Link>
						<Link
							href={"/"}
							className="cursor-pointer rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-600">
							<FaWhatsapp />
						</Link>
					</div>
				</div>
				<div className="col-span-2 grid grid-cols-3 md:gap-10 lg:gap-0">
					{/* Quick-links  */}
					<div className="text-white">
						<h1 className="text-lg font-medium lg:text-2xl">
							Quick Links
						</h1>
						<div className="flex w-auto flex-col">
							<div className="">
								<Link
									href={"/"}
									className="translate-2.5 transition-all ease-in hover:px-2 hover:text-fuchsia-300">
									Home
								</Link>
							</div>
							<div className="">
								<Link
									href={"/about"}
									className="translate-2.5 transition-all ease-in hover:px-2 hover:text-fuchsia-300">
									About
								</Link>
							</div>
							<div className="">
								<Link
									href={"/blog"}
									className="translate-2.5 transition-all ease-in hover:px-2 hover:text-fuchsia-300">
									Blog
								</Link>
							</div>
							<div className="">
								<Link
									href={"/contact"}
									className="translate-2.5 transition-all ease-in hover:px-2 hover:text-fuchsia-300">
									Contact
								</Link>
							</div>
						</div>
					</div>
					{/* Services  */}
					<div className="text-white">
						<h1 className="font-medium md:text-lg lg:text-2xl">
							Our Services
						</h1>
						<div className="flex flex-col">
							<div className="">
								<Link
									href={"/brand-design"}
									className="translate-2.5 transition-all ease-in hover:px-2 hover:text-fuchsia-300">
									Brand Design
								</Link>
							</div>
							<div className="">
								<Link
									href={"/ui-ux-design"}
									className="translate-2.5 transition-all ease-in hover:px-2 hover:text-fuchsia-300">
									Ui/Ux Design
								</Link>
							</div>
							<div className="">
								<Link
									href={"/development"}
									className="translate-2.5 transition-all ease-in hover:px-2 hover:text-fuchsia-300">
									Development
								</Link>
							</div>
							<div className="">
								<Link
									href={"/marketing"}
									className="translate-2.5 transition-all ease-in hover:px-2 hover:text-fuchsia-300">
									Marketing
								</Link>
							</div>
						</div>
					</div>

					{/* input field  */}
					<div>
						<h1 className="mb-4 text-lg font-bold text-white lg:text-2xl">
							Get the Latest Inspiration
						</h1>
						<SubscribeForm />
					</div>
				</div>
			</section>
		</>
	);
};

export default DesktopFooter;
