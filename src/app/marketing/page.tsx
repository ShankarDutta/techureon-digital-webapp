import MarketingHero from "@/components/Hero/MarketingHero";
import OurMotive from "@/components/Marketing/OurMotive";

const page = () => {
	return (
		<>
			<section className="mx-auto px-6">
				<main className="pt-36">
					<MarketingHero />
				</main>

				<section className="pt-14">
					<OurMotive />
				</section>
			</section>
		</>
	);
};

export default page;
