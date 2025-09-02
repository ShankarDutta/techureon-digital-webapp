import ContactUi from "@/components/Contact/ContactUi";
import FindUsCard from "@/components/Contact/FindUsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | TeachUreon",
	description:
		"Get in touch with TeachUreon for IT solutions, software development, cloud services, and digital transformation consulting. We’re here to help your business grow.",
	keywords: [
		"TeachUreon Contact",
		"contact IT company",
		"IT support",
		"software development services",
		"cloud consulting",
		"digital transformation contact",
	],
	openGraph: {
		title: "Contact Us | TeachUreon",
		description:
			"Reach out to TeachUreon for expert IT solutions and consulting tailored to your business needs.",
		url: "https://teachureon.com/contact",
		siteName: "TeachUreon",
		type: "website",
	},
};

const page = () => {
	return (
		<>
			<ContactUi />
			<section className="mt-20 pb-20 text-center lg:mt-0">
				<FindUsCard />
			</section>
		</>
	);
};

export default page;
