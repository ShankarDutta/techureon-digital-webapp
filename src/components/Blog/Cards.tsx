"use client";
import { Card, CardContent } from "@/components/shadcnui/card";
import { BlogCardsDataType } from "@/lib/types";
import { useAOS } from "@/lib/useaos";
import Image from "next/image";
import UsableBtn from "../customui/UsableBtn";
import { Badge } from "../shadcnui/badge";

type Cardprops = {
	info: BlogCardsDataType;
};

const Cards = ({ info }: Cardprops) => {
	useAOS();
	return (
		<>
			<Card
				className="border-0 py-0 shadow-lg transition-all hover:shadow-md hover:shadow-blue-300"
				data-aos="fade-up">
				<Image
					src={`/blog/${info.img}`}
					alt="Cards-Images"
					height={720}
					width={1080}
					priority
					className="h-auto w-full rounded-xl"
				/>

				<CardContent className="space-y-3 pb-6">
					<Badge className="">{info.badge}</Badge>
					<h1 className="text-xl font-medium">{info.title}</h1>
					<p className="text-black/60 dark:text-white/60">
						{info.subtitle}
					</p>

					<div className="mt-2 flex justify-start">
						<UsableBtn
							className=""
							href={`/blog/${info.slug}`}>
							Know More
						</UsableBtn>
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default Cards;
