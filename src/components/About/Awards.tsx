import Image from "next/image";

const Awards = () => {
	return (
		<section className="gap-4 lg:flex lg:gap-20">
			<Image
				src={"/about/awards.jpg"}
				height={600}
				width={600}
				alt="Awards Image"
				className="h-auto w-full rounded-xl lg:h-[500] lg:w-auto"
			/>

			<div className="mt-8 w-full space-y-6 text-start lg:mt-0">
				{/* 1st award  */}
				<div className="border-b-2 pb-6">
					<div className="flex justify-between">
						<div className="text-2xl font-bold">Awwwards FWA</div>
						<div className="">2024</div>
					</div>
					<div className="text-black/70 dark:text-white/70">
						Site of the Day for LawLex’s innovative Webflow build
					</div>
				</div>
				{/* 2nd award  */}
				<div className="border-b-2 pb-6">
					<div className="flex justify-between">
						<div className="text-2xl font-bold">
							CSS Design Awards
						</div>
						<div className="">2024</div>
					</div>
					<div className="text-black/70 dark:text-white/70">
						UI Design Excellence
					</div>
				</div>
				{/* 3rd award  */}
				<div className="border-b-2 pb-6">
					<div className="flex justify-between">
						<div className="text-2xl font-bold">Clutch Top 100</div>
						<div className="">2025</div>
					</div>
					<div className="text-black/70 dark:text-white/70">
						Ranked among top B2B design studios globally
					</div>
				</div>
				{/* 4th award  */}
				<div className="border-b-2 pb-6">
					<div className="flex justify-between">
						<div className="text-2xl font-bold">
							Adobe Design Awards
						</div>
						<div className="">2025</div>
					</div>
					<div className="text-black/70 dark:text-white/70">
						Finalist – Branding Category
					</div>
				</div>
				{/* 5th award  */}
				<div className="">
					<div className="flex justify-between">
						<div className="text-2xl font-bold">
							Adobe Design Awards
						</div>
						<div className="">2025</div>
					</div>
					<div className="text-black/70 dark:text-white/70">
						Finalist – Branding Category
					</div>
				</div>
			</div>
		</section>
	);
};

export default Awards;
