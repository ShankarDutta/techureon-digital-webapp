import Image from "next/image";
import UsableBtn from "../customui/UsableBtn";

const AboutHero = () => {
	return (
		<>
			{/* heading  */}
			<div className="text-center text-2xl font-bold md:text-5xl lg:text-6xl">
				We Design & Build Digital Experiences That Move the Needle
			</div>

			{/* text + img  */}
			<div className="flex flex-col items-center pt-8 md:flex-row md:gap-10">
				<div className="order-2 mt-6 md:order-1 md:w-7xl lg:w-auto">
					{/* text  */}
					<div className="mb-2 text-2xl font-bold">
						Building Brands That Stand Out—and Stand Strong
					</div>
					<div className="text-sm text-black/80 md:text-lg dark:text-white/80">
						Since 2017, we’ve helped 100+ startups, agencies, and
						scale-ups turn bold ideas into websites, apps, and
						brands that blend striking design with ruthless
						functionality—and convert. We don’t just design things
						that look good; we build experiences that drive growth
						and leave a lasting mark.
					</div>
					<div className="mt-3 flex justify-start">
						<UsableBtn
							className=""
							href="/contact">
							Contact Us
						</UsableBtn>
					</div>
				</div>

				{/* images  */}
				<div className="order-1 w-full md:order-2">
					<Image
						src={"/about/about-us-01.jpg"}
						alt="About/image-1"
						height={500}
						width={500}
						className="mx-auto h-auto w-full rounded-4xl object-cover"
					/>
				</div>
			</div>
		</>
	);
};

export default AboutHero;
