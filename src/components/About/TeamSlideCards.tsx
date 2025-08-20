import { OurExpartsImagesType } from "@/lib/types";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../shadcnui/card";

type cardprops = {
	info: OurExpartsImagesType;
};

const TeamSlideCards = ({ info }: cardprops) => {
	return (
		<>
			<Card>
				<CardHeader>
					<Image
						src={`/about/${info.src}`}
						height={600}
						width={600}
						alt={info.alt}
						className="h-auto w-[350] rounded-3xl md:h-[345]"
					/>
					<CardTitle>{info.name}</CardTitle>
					<CardDescription>{info.position}</CardDescription>
				</CardHeader>
			</Card>
		</>
	);
};

export default TeamSlideCards;
