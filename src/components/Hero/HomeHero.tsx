import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import BadgeLogoChanger from "../customui/BadgeLogoChanger";
import { Button } from "../shadcnui/button";
const HomeHero = () => {
	return (
		<section className="grid place-items-center space-y-6 text-center">
			{/* badge sec  */}
			<div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
				<span
					className={cn(
						"animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
					)}
					style={{
						WebkitMask:
							"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
						WebkitMaskComposite: "destination-out",
						mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
						maskComposite: "subtract",
						WebkitClipPath: "padding-box",
					}}
				/>

				<BadgeLogoChanger />
				<hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
				<AnimatedGradientText className="text-xs font-medium uppercase md:text-sm">
					Top 100 Design Studios in USA
				</AnimatedGradientText>
				<ChevronRight className="ml-1 hidden size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 md:block" />
			</div>

			{/* text heading   */}
			<div className="">
				<h1 className="mx-auto w-auto text-[22px] font-bold md:text-5xl lg:w-3xl">
					Where Stunning Design Meets Flawless Functionality
				</h1>
				<p className="mx-auto mt-6 mb-6 w-auto text-sm text-black/70 md:w-xl md:text-[16px] dark:text-white/70">
					We craft high-converting websites, apps, and brands for
					startups, agencies, and businesses that refuse to settle for
					good enough.
				</p>

				<Button className="bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600">
					Book a Meeting
				</Button>
			</div>
		</section>
	);
};

export default HomeHero;
