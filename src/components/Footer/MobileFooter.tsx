import Link from "next/link";
import { Button } from "../shadcnui/button";
import { Input } from "../shadcnui/input";
const MobileFooter = () => {
	return (
		<section className="space-y-4">
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
		</section>
	);
};

export default MobileFooter;
