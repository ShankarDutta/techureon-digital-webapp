"use client";

import { BiTargetLock } from "react-icons/bi";
import { FaLightbulb } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { HyperText } from "../magicui/hyper-text";
const OurAchivements = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	return (
		<div
			ref={ref}
			className="grid grid-cols-1 place-items-center gap-10 rounded-xl py-10 md:grid-cols-3 md:gap-0">
			{/* 1st column */}
			<div className="space-y-2">
				<div className="flex items-center justify-center gap-2 text-3xl font-bold">
					<BiTargetLock size={34} />
					{inView && (
						<HyperText animateOnHover={false}>72+</HyperText>
					)}
				</div>
				<div className="font-medium">Hour Prototype Guarantee</div>
			</div>

			{/* 2nd column */}
			<div className="space-y-2">
				<div className="flex items-center justify-center gap-2 text-3xl font-bold">
					<FaFire size={34} />
					{inView && (
						<HyperText animateOnHover={false}>100+</HyperText>
					)}
				</div>
				<div className="font-medium">Brands Transformed</div>
			</div>

			{/* 3rd column */}
			<div className="space-y-2">
				<div className="flex items-center justify-center gap-2 text-3xl font-bold">
					<FaLightbulb size={34} />
					{inView && (
						<HyperText animateOnHover={false}>10+</HyperText>
					)}
				</div>
				<div className="font-medium">Years of Pixel-Perfect Craft</div>
			</div>
		</div>
	);
};

export default OurAchivements;
