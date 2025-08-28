import UiUXHero from "@/components/Hero/UiUXHero";
import OurMotive from "@/components/Ui-Ux/OurMotive";

const page = () => {
	return (
		<section className="mx-auto px-6">
			<main className="pt-36">
				<UiUXHero />
			</main>

			<section className="pt-20">
				<OurMotive />
			</section>
		</section>
	);
};

export default page;
