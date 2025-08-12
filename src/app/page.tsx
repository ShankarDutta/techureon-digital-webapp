import HomeHero from "@/components/Hero/HomeHero";
import AboutBrief from "@/components/Home/AboutBrief";
import BrandSlide from "@/components/Home/BrandSlide";
import Slider from "@/components/Home/Slider";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = () => {
	return (
		<section className="mx-auto max-w-7xl px-6">
			<section className="pt-35">
				<HomeHero />
			</section>

			<section className="mx-auto max-w-7xl px-6 pt-14 lg:px-14">
				<Slider />
			</section>

			<section className="mx-auto max-w-7xl px-6 pt-14">
				<BrandSlide />
			</section>

			<section className="mx-auto max-w-7xl px-6 pt-14">
				<AboutBrief />
			</section>
		</section>
	);
};

export default page;
