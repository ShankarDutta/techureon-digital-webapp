import Awards from "@/components/About/Awards";
import WorkFlow from "@/components/About/WorkFlow";
import AboutHero from "@/components/Hero/AboutHero";

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

			<section className="pt-20 pb-20 text-center">
				<h1 className="pb-10 text-4xl font-medium">
					Recognitions & Awards
				</h1>
				<Awards />
			</section>
		</section>
	);
};

export default page;
