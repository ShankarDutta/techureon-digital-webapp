import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../shadcnui/button";

interface btnprops {
	children: ReactNode;
	className?: string;
	href: string;
}

const UsableBtn = ({ children, className, href }: btnprops) => {
	return (
		<Button
			asChild
			className={cn(
				"flex items-center gap-2 bg-blue-500 font-bold text-white hover:cursor-pointer hover:bg-blue-600",
				className,
			)}>
			<Link href={href}>{children}</Link>
		</Button>
	);
};

export default UsableBtn;
