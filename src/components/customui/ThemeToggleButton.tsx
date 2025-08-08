"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../shadcnui/button";

const ThemeToggleButton = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="cursor-pointer"
			variant={"link"}>
			<Sun
				size={28}
				className="scale-120 -rotate-90 text-blue-500 opacity-100 transition-all duration-300 dark:rotate-0 dark:opacity-0"
			/>

			<MoonStar
				size={28}
				className="absolute scale-120 -rotate-90 text-fuchsia-500 opacity-0 transition-all duration-300 dark:rotate-0 dark:opacity-100"
			/>
		</Button>
	);
};

export default ThemeToggleButton;
