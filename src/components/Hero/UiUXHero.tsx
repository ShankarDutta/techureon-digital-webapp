import Image from "next/image";
import { Button } from "../shadcnui/button";

const UiUXHero = () => {
	return (
		<section className="flex flex-col items-center gap-10 md:flex-row">
			{/* text block */}
			<div className="order-2 flex-1 lg:order-1">
				<h1 className="mb-2 text-2xl font-bold md:text-3xl lg:text-5xl">
					UI/UX Design
				</h1>
				<p className="md:text-md text-sm text-black/80 lg:text-lg dark:text-white/80">
					We craft user experiences that drive action, not just
					admiration. Whether it’s a conversion-focused SaaS dashboard
					or a mobile app that users can’t put down, our process
					blends behavioral psychology with pixel-perfect execution.
				</p>
				<Button className="mt-4 bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
					Get a Free UX Audit
				</Button>
			</div>

			{/* image block */}
			<div className="order-1 h-full w-full flex-1 md:order-2">
				<Image
					src="/Services/uiux/service-01.jpg"
					alt="UI/UX Service"
					width={500}
					height={500}
					className="mx-auto h-full w-full max-w-md rounded-3xl md:h-[200] md:w-auto lg:h-[290]"
				/>
			</div>
		</section>
	);
};

export default UiUXHero;
