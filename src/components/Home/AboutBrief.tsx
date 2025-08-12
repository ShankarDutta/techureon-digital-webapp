import Image from "next/image";
import { Button } from "../shadcnui/button";

const AboutBrief = () => {
	return (
		<section className="flex flex-col items-center gap-8 lg:flex-row">
			<div className="space-y-6">
				<h1 className="text-2xl font-bold">
					Unforgettable, Websites, Brands & Visuals for Bold
					Visionaries.
				</h1>

				<p className="text-black/70 dark:text-white/70">
					We are not your typical design agency. Founded in 2014, we
					are a collective of designers, developers, and strategists
					who believe great digital experiences should be beautiful,
					functional, and human-centered. From startups to global
					brands, we help ambitious businesses stand out.
				</p>

				<Button className="border-2 border-blue-500 bg-transparent text-black hover:cursor-pointer hover:bg-blue-600 hover:text-white dark:text-white">
					Know More About Us
				</Button>
			</div>

			<Image
				src={"/home/about .jpg"}
				alt="about-us.jpg"
				height={500}
				width={500}
				className="h-auto w-full rounded-3xl lg:h-[300]"
			/>
		</section>
	);
};

export default AboutBrief;
