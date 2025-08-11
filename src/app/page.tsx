import HomeHero from "@/components/Hero/HomeHero";
import Slider from "@/components/Home/Slider";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = () => {
	return (
		<section className="mx-auto max-w-7xl px-6">
			<section className="pt-30">
				<HomeHero />
			</section>

			<section className="py-14">
				<Slider />
			</section>
		</section>
	);
};

export default page;
