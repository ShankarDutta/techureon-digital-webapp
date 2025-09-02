import { CheckIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../shadcnui/card";

interface Cardsprops {
	heading1?: string;
	heading2?: string;
	heading3?: string;
	paragraph1?: string;
	paragraph2?: string;
	paragraph3?: string;
}

const CustomCards = ({
	heading1 = "",
	heading2 = "",
	heading3 = "",
	paragraph1 = "",
	paragraph2 = "",
	paragraph3 = "",
}: Cardsprops) => {
	return (
		<>
			<Card className="border-0">
				<CardHeader className="flex flex-col items-center justify-center">
					<div className="rounded-full bg-blue-500 p-5">
						<CheckIcon color="white" />
					</div>
					<CardTitle className="text-2xl">{heading1}</CardTitle>
					<CardDescription className="text-center text-lg">
						{paragraph1}
					</CardDescription>
				</CardHeader>
			</Card>
			<Card className="border-0">
				<CardHeader className="flex flex-col items-center justify-center">
					<div className="rounded-full bg-blue-500 p-5">
						<CheckIcon color="white" />
					</div>
					<CardTitle className="text-2xl">{heading2}</CardTitle>
					<CardDescription className="text-center text-lg">
						{paragraph2}
					</CardDescription>
				</CardHeader>
			</Card>
			<Card className="border-0">
				<CardHeader className="flex flex-col items-center justify-center">
					<div className="rounded-full bg-blue-500 p-5">
						<CheckIcon color="white" />
					</div>
					<CardTitle className="text-2xl">{heading3}</CardTitle>
					<CardDescription className="text-center text-lg">
						{paragraph3}
					</CardDescription>
				</CardHeader>
			</Card>
		</>
	);
};

export default CustomCards;
