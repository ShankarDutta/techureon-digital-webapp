import Image from "next/image";
import { Button } from "../shadcnui/button";

type HeroProps = {
	heading?: string;
	paragraph?: string;
	img?: string;
	btnvalue?: string;
};

const CustomHero = ({
	heading = "",
	paragraph = "",
	img = "",
	btnvalue = " ",
}: HeroProps) => {
	return (
		<>
			<section className="flex flex-col items-center gap-10 md:flex-row">
				{/* text block */}
				<div className="order-2 flex-1 lg:order-1">
					<h1 className="mb-2 text-2xl font-bold md:text-3xl lg:text-5xl">
						{heading}
					</h1>
					<p className="md:text-md text-sm text-black/80 lg:text-lg dark:text-white/80">
						{paragraph}
					</p>
					<Button className="mt-4 bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
						{btnvalue}
					</Button>
				</div>

				{/* image block */}
				<div className="order-1 h-full w-full flex-1 md:order-2">
					<Image
						src={img}
						alt="UI/UX Service"
						width={500}
						height={500}
						className="mx-auto h-full w-full max-w-md rounded-3xl md:h-[200] md:w-auto lg:h-[290]"
					/>
				</div>
			</section>
		</>
	);
};

export default CustomHero;
