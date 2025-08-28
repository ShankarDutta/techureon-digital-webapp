import Image from "next/image";

const OurMotive = () => {
	return (
		<>
			<section className="space-y-6 text-center lg:px-10">
				<h1 className="text-4xl font-bold">
					Branding That Demands Attention
				</h1>
				<p className="text-sm md:text-lg">
					Your brand is more than a logo—it’s your story. We build
					memorable visual identities from the ground up, including
					logos, color systems, typography, and style guides. Our
					strategic approach ensures your brand stands out, resonates
					with your audience, and scales seamlessly as you grow.
				</p>
				<Image
					src={"/Services/brand-design/Brand-Design.png"}
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
