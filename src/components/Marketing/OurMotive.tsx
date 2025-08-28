import Image from "next/image";

const OurMotive = () => {
	return (
		<section className="space-y-6 text-center lg:px-10">
			<h1 className="text-4xl font-bold">
				Marketing That Works as Hard as You Hustle
			</h1>
			<p className="text-sm md:text-lg">
				We create digital experiences that put users first—where design
				meets functionality to deliver real impact. By combining
				research-driven insights with wireframing, prototyping, and
				usability testing, we transform complex ideas into seamless
				interactions. From SaaS platforms to mobile apps and e-commerce
				solutions, our designs reduce friction, enhance engagement, and
				drive measurable growth for your business.
			</p>
			<Image
				src={"/Services/marketing/market.jpg"}
				alt="model.jpg"
				height={720}
				width={1080}
				className="mx-auto h-auto w-full rounded-4xl object-cover"
			/>
		</section>
	);
};

export default OurMotive;
