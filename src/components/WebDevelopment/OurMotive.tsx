import Image from "next/image";

const OurMotive = () => {
	return (
		<>
			<section className="space-y-6 text-center lg:px-10">
				<h1 className="text-4xl font-bold">
					Websites Built for Speed & Results
				</h1>
				<p className="text-sm md:text-lg">
					Websites Built for Speed & Results Say goodbye to slow,
					clunky websites. We build lightning-fast, SEO-optimized
					Webflow sites with custom CMS architectures, sleek
					animations, and editor-friendly interfaces. Whether you need
					a marketing site or a scalable web app, we deliver
					performance and polish without bloated code.
				</p>
				<Image
					src={"/Services/webdev/Webfloe-Img.png"}
					alt="model.jpg"
					height={720}
					width={1080}
					className="mx-auto h-auto w-full rounded-4xl object-cover"
				/>
			</section>
		</>
	);
};

export default OurMotive;
