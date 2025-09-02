import Awards from "@/components/About/Awards";
import TeamSlide from "@/components/About/TeamSlide";
import WorkFlow from "@/components/About/WorkFlow";
import AboutHero from "@/components/Hero/AboutHero";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "About Us | TeachUreon",
	description:
		"Discover TeachUreon’s journey as a leading IT solutions company. Learn about our mission, values, and expertise in web development, digital transformation, cloud services, and custom software solutions.",
	keywords: [
		"TeachUreon",
		"About TeachUreon",
		"IT company",
		"technology solutions",
		"digital transformation",
		"cloud services",
		"software development",
		"IT consulting",
	],
	openGraph: {
		title: "About Us | TeachUreon",
		description:
			"Get to know TeachUreon — an innovative IT solutions provider helping businesses achieve growth with web development, cloud, and digital transformation services.",
		url: "https://teachureon.com/about",
		siteName: "TeachUreon",
	},
};

const page = () => {
	return (
		<section className="mx-auto px-6">
			<section className="pt-36">
				<AboutHero />
			</section>

			<section className="mx-auto pt-20 text-center">
				<h1 className="pb-10 text-3xl font-medium md:text-4xl">
					How We Work: Painless, Proven, Pixel-Perfect
				</h1>
				<WorkFlow />
			</section>

			<section className="pt-20 text-center">
				<h1 className="pb-10 text-4xl font-medium">
					Recognitions & Awards
				</h1>
				<Awards />
			</section>

			<section className="pt-20 pb-20">
				<h1 className="pb-10 text-center text-4xl font-medium">
					The Brains Behind Techureon
				</h1>
				<TeamSlide />
			</section>
		</section>
	);
};

export default page;
