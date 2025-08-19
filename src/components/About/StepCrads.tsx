"use client";
import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "@/components/shadcnui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";

import { AboutWorkFlowCardsDataType } from "@/lib/types";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

type CardProps = {
	info: AboutWorkFlowCardsDataType;
};

const StepCrads = ({ info }: CardProps) => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return (
		<>
			<Card className="w-full max-w-sm border-none p-0 shadow-md shadow-blue-400/20 dark:shadow-fuchsia-400/20">
				<MagicCard
					gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
					className="p-0">
					<CardHeader className="border-border p-4 [.border-b]:pb-4">
						<CardTitle className="flex justify-center">
							<Image
								src={info.icon}
								alt="icons"
								height={400}
								width={400}
								className="h-[140] w-[140]"
							/>
						</CardTitle>
						<CardDescription className="text-3xl font-medium">
							{info.title}
						</CardDescription>
					</CardHeader>
					<CardContent className="text-md p-4">
						{info.description}
					</CardContent>
					<CardFooter className="border-border flex justify-center p-4 [.border-t]:pt-4">
						<Button className="">{info.buttonText}</Button>
					</CardFooter>
				</MagicCard>
			</Card>
		</>
	);
};

export default StepCrads;
