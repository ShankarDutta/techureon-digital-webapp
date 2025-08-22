"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Spotlight } from "../ui/spotlight";

const BlogHero = () => {
	const { resolvedTheme } = useTheme();
	const [isMountend, setMountend] = useState(false);
	useEffect(() => {
		setMountend(true);
	}, []);

	if (!isMountend) {
		return null;
	}
	return (
		<section className="pt-34 text-center md:pt-40">
			<Spotlight
				className="-top-40 left-0 md:-top-20 md:left-60"
				fill={resolvedTheme === "light" ? "#ffef00" : "white"}
			/>
			<h1 className="text-2xl font-bold md:text-4xl">
				Unfolding the Next Era of Technology
			</h1>
			<p className="mx-auto mt-4 text-sm text-black/80 md:w-2xl md:text-xl dark:text-white/80">
				Actionable tips, proven strategies, and real war stories—no
				fluff, just fuel. Trusted by 5,000+ builders and creators.
			</p>
		</section>
	);
};

export default BlogHero;
