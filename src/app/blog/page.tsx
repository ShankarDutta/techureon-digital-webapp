import CardsSec from "@/components/Blog/CardsSec";
import BlogHero from "@/components/Hero/BlogHero";
import { Button } from "@/components/shadcnui/button";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog | TeachUreon Insights & Tech Articles",
	description:
		"Stay updated with the latest insights from TeachUreon. Explore articles on IT solutions, web development, digital transformation, cloud services, and emerging technologies.",
	keywords: [
		"TeachUreon Blog",
		"IT insights",
		"tech articles",
		"software development trends",
		"cloud computing",
		"digital transformation blogs",
		"IT consulting resources",
	],
	openGraph: {
		title: "Blog | TeachUreon Insights & Tech Articles",
		description:
			"Read expert insights from TeachUreon on technology, IT solutions, software development, and cloud innovations.",
		url: "https://teachureon.com/blog",
		siteName: "TeachUreon",
		type: "article",
	},
};

const page = () => {
	return (
		<section className="mx-auto max-w-7xl overflow-hidden px-6">
			{/* hero sec  */}
			<BlogHero />

			{/* Cards sec  */}
			<CardsSec />
			<div className="flex justify-center pt-10 pb-10">
				<Button
					variant={"outline"}
					className="cursor-pointer text-black/60 hover:text-black/90 dark:text-white/60 dark:hover:text-white/90">
					No More Post To Show
				</Button>
			</div>
		</section>
	);
};

export default page;
