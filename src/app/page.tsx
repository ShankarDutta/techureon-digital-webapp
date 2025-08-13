import HomeHero from "@/components/Hero/HomeHero";
import AboutBrief from "@/components/Home/AboutBrief";
import BrandSlide from "@/components/Home/BrandSlide";
import OurAchivements from "@/components/Home/OurAchivements";
import ServiceSec from "@/components/Home/ServiceSec";
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

			<section className="pt-14 lg:px-14">
				<Slider />
			</section>

			<section className="pt-14">
				<BrandSlide />
			</section>

			<section className="pt-14">
				<AboutBrief />
			</section>

			<section className="pt-14">
				<OurAchivements />
			</section>
			<section className="grid grid-cols-1 gap-6 pt-14 lg:grid-cols-2">
				<ServiceSec />
			</section>
		</section>
	);
};

export default page;
