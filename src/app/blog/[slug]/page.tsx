import { Badge } from "@/components/shadcnui/badge";
import { Button } from "@/components/shadcnui/button";
import { Card } from "@/components/shadcnui/card";
import { BlogCardsDatas } from "@/lib/mapdata";
import { MoveLeft, MoveRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface BlogProps {
	params: Promise<{ slug: string }>;
}

const Page = async ({ params }: BlogProps) => {
	const { slug } = await params;
	await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate loading
	const blog = BlogCardsDatas.find((b) => b.slug === slug);

	if (!blog) {
		return (
			<h1 className="text-center text-2xl font-bold">Blog not found</h1>
		);
	}

	const index = BlogCardsDatas.indexOf(blog);
	const prevBlog = BlogCardsDatas.at(index - 1) || null;
	const nextBlog = BlogCardsDatas.at(index + 1) || null;

	return (
		<section className="mx-auto max-w-7xl md:max-w-4xl">
			<Card className="border-0 px-5 shadow-lg md:px-10">
				<h1 className="text-3xl font-bold md:text-5xl md:leading-14">
					{blog.title}
				</h1>
				<Badge className="text-[14px]">{blog.subtitle}</Badge>
				<Image
					src={`/blog/${blog.img}`}
					alt={blog.title}
					height={720}
					width={1080}
					className="mx-auto h-auto w-full max-w-4xl rounded-xl object-cover"
				/>
				<h1 className="text-2xl font-bold">{blog.Content.heading1}</h1>
				<p className="text-lg text-black/60 dark:text-white/70">
					{blog.Content.paragraph1}
				</p>
				<p className="text-lg text-black/60 dark:text-white/70">
					{blog.Content.paragraph2}
				</p>
				<blockquote className="text-xl font-medium text-gray-500/75 italic md:text-3xl dark:text-white/85">
					{blog.Content.qoute}
				</blockquote>
				<h1 className="text-2xl font-bold">{blog.Content.heading2}</h1>
				<p className="text-lg text-black/60 dark:text-white/70">
					{blog.Content.paragraph3}
				</p>
				<h1 className="text-2xl font-bold">{blog.Content.heading3}</h1>
				<p className="text-lg text-black/60 dark:text-white/70">
					{blog.Content.paragraph4}
				</p>
			</Card>

			<div className="mt-12 flex justify-between">
				{prevBlog && (
					<Link href={`/blog/${prevBlog.slug}`}>
						<Button className="flex cursor-pointer gap-2 bg-blue-500 text-white hover:bg-blue-600">
							<MoveLeft />
							Previous Blog
						</Button>
					</Link>
				)}
				{nextBlog && (
					<Link href={`/blog/${nextBlog.slug}`}>
						<Button className="flex cursor-pointer justify-end gap-2 bg-blue-500 text-white hover:bg-blue-600">
							Next Blog
							<MoveRight />
						</Button>
					</Link>
				)}
			</div>
		</section>
	);
};

export default Page;
