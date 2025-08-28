import OurMotive from "@/components/BrandDesign/OurMotive";
import BrandDesignHero from "@/components/Hero/BrandDesignHero";

const page = () => {
	return (
		<>
			<section className="mx-auto px-6">
				<main className="pt-36">
					<BrandDesignHero />
				</main>

				<section className="pt-20">
					<OurMotive />
				</section>
			</section>
		</>
	);
};

export default page;
