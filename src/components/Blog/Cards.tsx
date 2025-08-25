import { Card, CardContent } from "@/components/shadcnui/card";
import { BlogCardsDataType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../shadcnui/badge";
import { Button } from "../shadcnui/button";

type Cardprops = {
	info: BlogCardsDataType;
};

const Cards = ({ info }: Cardprops) => {
	return (
		<>
			<Card className="border-0 py-0 shadow-lg transition-all hover:shadow-md hover:shadow-blue-300">
				<Image
					src={`/blog/${info.img}`}
					alt="Cards-Images"
					height={720}
					width={1080}
					className="h-auto w-full rounded-xl"
				/>

				<CardContent className="space-y-3 pb-6">
					<Badge className="">{info.badge}</Badge>
					<h1 className="text-xl font-medium">{info.title}</h1>
					<p className="text-black/60 dark:text-white/60">
						{info.subtitle}
					</p>

					<Link href={`/blog/${info.slug}`}>
						<Button className="bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600">
							Know More
						</Button>
					</Link>
				</CardContent>
			</Card>
		</>
	);
};

export default Cards;
