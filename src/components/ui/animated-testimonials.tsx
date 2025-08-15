"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

type Testimonial = {
	quote: string;
	name: string;
	designation: string;
	src: string;
};

export const AnimatedTestimonials = ({
	testimonials,
	autoplay = false,
}: {
	testimonials: Testimonial[];
	autoplay?: boolean;
}) => {
	const [active, setActive] = useState(0);
	const [rotations, setRotations] = useState<number[]>([]);

	// Generate rotations on mount only (avoids SSR randomness mismatch)
	useEffect(() => {
		setRotations(
			testimonials.map(() => Math.floor(Math.random() * 21) - 10),
		);
	}, [testimonials]);

	const handleNext = useCallback(() => {
		setActive((prev) => (prev + 1) % testimonials.length);
	}, [testimonials.length]);

	const handlePrev = useCallback(() => {
		setActive(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length,
		);
	}, [testimonials.length]);

	const isActive = (index: number) => index === active;

	// Autoplay effect
	useEffect(() => {
		if (!autoplay) return;
		const interval = setInterval(handleNext, 5000);
		return () => clearInterval(interval);
	}, [autoplay, handleNext]);

	// Avoid rendering until rotations are generated (fixes hydration errors)
	if (!rotations.length) return null;

	return (
		<div className="mx-auto pt-20 font-sans antialiased md:max-w-6xl">
			<div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
				{/* Left Side - Image Stack */}
				<div>
					<div className="relative h-80 w-full">
						<AnimatePresence>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.src}
									initial={{
										opacity: 0,
										scale: 0.9,
										z: -100,
										rotate: rotations[index],
									}}
									animate={{
										opacity: isActive(index) ? 1 : 0.7,
										scale: isActive(index) ? 1 : 0.95,
										z: isActive(index) ? 0 : -100,
										rotate: isActive(index)
											? 0
											: rotations[index],
										zIndex: isActive(index)
											? 40
											: testimonials.length + 2 - index,
										y: isActive(index) ? [0, -80, 0] : 0,
									}}
									exit={{
										opacity: 0,
										scale: 0.9,
										z: 100,
										rotate: rotations[index],
									}}
									transition={{
										duration: 0.4,
										ease: "easeInOut",
									}}
									className="absolute inset-0 origin-bottom">
									<img
										src={testimonial.src}
										alt={testimonial.name}
										width={500}
										height={500}
										draggable={false}
										className="h-full w-full rounded-3xl object-cover object-center"
									/>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>

				{/* Right Side - Text & Controls */}
				<div className="flex flex-col py-4 md:justify-center">
					<motion.div
						key={active}
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -20, opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeInOut" }}>
						<h3 className="text-2xl font-bold text-black dark:text-white">
							{testimonials[active].name}
						</h3>
						<p className="text-sm text-gray-500 dark:text-neutral-500">
							{testimonials[active].designation}
						</p>

						<motion.p className="mt-4 mb-4 text-lg text-gray-500 dark:text-neutral-300">
							{testimonials[active].quote
								.split(" ")
								.map((word, index) => (
									<motion.span
										key={index}
										initial={{
											filter: "blur(10px)",
											opacity: 0,
											y: 5,
										}}
										animate={{
											filter: "blur(0px)",
											opacity: 1,
											y: 0,
										}}
										transition={{
											duration: 0.2,
											ease: "easeInOut",
											delay: 0.02 * index,
										}}
										className="inline-block">
										{word}&nbsp;
									</motion.span>
								))}
						</motion.p>
					</motion.div>

					{/* Controls */}
					<div className="flex gap-4 pt-2">
						<button
							aria-label="Previous testimonial"
							onClick={handlePrev}
							className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
							<IconArrowLeft className="group-hover/ h-5 w-5 text-black transition-transform duration-300 dark:text-neutral-400" />
						</button>
						<button
							aria-label="Next testimonial"
							onClick={handleNext}
							className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
							<IconArrowRight className="group-hover/ h-5 w-5 text-black transition-transform duration-300 dark:text-neutral-400" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
