import Image from "next/image";

const OurMotive = () => {
	return (
		<section className="space-y-6 text-center lg:px-10">
			<h1 className="text-4xl font-bold">
				Design That Works as Hard as You Do
			</h1>
			<p className="text-sm md:text-lg">
				We craft user-centric interfaces that blend aesthetics with
				functionality, turning complex workflows into intuitive
				experiences. Through wireframing, prototyping, and usability
				testing, we design digital products that reduce friction, boost
				engagement, and drive conversions—whether it’s a SaaS dashboard,
				mobile app, or e-commerce platform.
			</p>
			<Image
				src={"/Services/uiux/Service-1-Img-1.png"}
				alt="model.jpg"
				height={720}
				width={1080}
				className="mx-auto h-auto w-full rounded-4xl object-cover"
			/>
		</section>
	);
};

export default OurMotive;
