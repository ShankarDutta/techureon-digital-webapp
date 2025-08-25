import { Badge } from "@/components/shadcnui/badge";
import { Card } from "@/components/shadcnui/card";
import { BlogCardsDatas } from "@/lib/mapdata";
import Image from "next/image";

interface BlogProps {
	params: { slug: string };
}

const page = async ({ params }: BlogProps) => {
	const { slug } = await params;
	const blog = BlogCardsDatas.find((b) => b.slug === slug);
	if (!blog) {
		return (
			<h1 className="text-center text-2xl font-bold">Blog not found</h1>
		);
	}

	return (
		<section className="mx-auto max-w-4xl">
			<Card className="border-0 px-5 shadow-lg md:px-10">
				<h1 className="text-5xl leading-14 font-bold">{blog?.title}</h1>
				<Badge className="text-[14px]">{blog.subtitle}</Badge>
				<Image
					src={`/blog/${blog?.img}`}
					alt="blog-posts"
					height={720}
					width={1080}
					className="mx-auto h-auto w-full max-w-4xl rounded-xl object-cover"
				/>
				<h1 className="text-2xl font-bold">{blog?.Content.heading1}</h1>
				<p className="text-lg text-black/60 dark:text-white/70">
					{blog?.Content.paragraph1}
				</p>
				<p className="text-lg text-black/60 dark:text-white/70">
					{blog?.Content.paragraph2}
				</p>
				<blockquote className="text-3xl font-medium text-gray-500/75 italic dark:text-white/85">
					{blog?.Content.qoute}
				</blockquote>
				<h1 className="text-2xl font-bold">{blog?.Content.heading2}</h1>
				<p className="text-lg text-black/60 dark:text-white/70">
					{blog?.Content.paragraph3}
				</p>
				<h1 className="text-2xl font-bold">{blog?.Content.heading3}</h1>
				<p className="text-lg text-black/60 dark:text-white/70">
					{blog?.Content.paragraph4}
				</p>
			</Card>
		</section>
	);
};

export default page;
