import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { homeServiceCardsType } from "@/lib/types";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import { ShineBorder } from "../magicui/shine-border";
import { Button } from "../shadcnui/button";

type CardPropsType = {
	info: homeServiceCardsType;
};

const ServiceCard = ({ info }: CardPropsType) => {
	return (
		<>
			<Card className="relative w-full overflow-hidden">
				<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
				<CardHeader>
					<CardTitle className="text-2xl">{info.heading}</CardTitle>
					<CardDescription>{info.discription}</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2">
					<p className="flex items-center gap-2 text-sm">
						<FaCircleCheck className="text-lg text-blue-500" />
						{info.pointsI}
					</p>
					<p className="flex items-center gap-2 text-sm">
						<FaCircleCheck className="text-lg text-blue-500" />
						{info.pointsII}
					</p>
					<p className="flex items-center gap-2 text-sm">
						<FaCircleCheck className="text-lg text-blue-500" />
						{info.pointsIII}
					</p>
				</CardContent>
				<CardFooter>
					<Link href={info.link}>
						<Button className="hover: mt-2 bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600">
							Read More
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</>
	);
};

export default ServiceCard;
