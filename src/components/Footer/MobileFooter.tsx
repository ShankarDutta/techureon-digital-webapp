import Link from "next/link";
import SubscribeForm from "../Forms/SubscribeForm";
const MobileFooter = () => {
	return (
		<section className="space-y-4">
			{/* Quick-links  */}
			<div className="text-white">
				<h1 className="text-2xl font-medium">Quick Links</h1>
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
				<h1 className="text-2xl font-medium">Our Services</h1>
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
		</section>
	);
};

export default MobileFooter;
