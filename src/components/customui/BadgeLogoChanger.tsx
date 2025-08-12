"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const BadgeLogoChanger = () => {
	const { theme } = useTheme();
	const [isDark, setDark] = useState(false);

	useEffect(() => {
		setDark(true);
	}, []);

	return (
		<>
			{isDark && theme === "dark" ? (
				<Image
					src={"/home/clutch-logo.svg"}
					alt="icon"
					height={200}
					width={200}
					priority
					className="h-[20] w-[40]"
				/>
			) : (
				<Image
					src={"/home/dark-clutch-logo.svg"}
					alt="icon"
					height={200}
					width={200}
					className="h-[20] w-[40]"
				/>
			)}
		</>
	);
};

export default BadgeLogoChanger;
