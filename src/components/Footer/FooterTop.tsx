import { Button } from "../shadcnui/button";
import { AuroraBackground } from "../ui/aurora-background";

const FooterTop = () => {
	return (
		<AuroraBackground>
			<div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
				<div className="text-3xl font-bold md:text-5xl dark:text-white">
					Your Partner in Digital Growth
				</div>
				<div className="px-4 py-2 text-lg font-extralight md:px-32 dark:text-neutral-200">
					Techneoro delivers innovative digital solutions that empower
					businesses to thrive in the modern world. We combine
					technology, creativity, and strategy to drive your success.
					for this para suggest a heading
				</div>
				<Button className="hover: mt-2 bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600">
					Contact Now
				</Button>
			</div>
		</AuroraBackground>
	);
};
export default FooterTop;
