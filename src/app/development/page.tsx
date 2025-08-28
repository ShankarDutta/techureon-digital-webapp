import WebDevelopmentHero from "@/components/Hero/WebDevelopmentHero";
import OurMotive from "@/components/WebDevelopment/OurMotive";

const page = () => {
	return (
		<>
			<section className="mx-auto px-6">
				<main className="pt-36">
					<WebDevelopmentHero />
				</main>

				<section className="pt-20">
					<OurMotive />
				</section>
			</section>
		</>
	);
};

export default page;
