import CardsSec from "@/components/Blog/CardsSec";
import BlogHero from "@/components/Hero/BlogHero";
import { Button } from "@/components/shadcnui/button";

const page = () => {
	return (
		<section className="mx-auto max-w-7xl px-6">
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
