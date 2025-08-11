"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/shadcnui/accordion";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/shadcnui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
	const [isopen, setopen] = useState<boolean>(true);
	const pathname = usePathname();

	useEffect(() => {
		setopen(false);
	}, [pathname]);

	return (
		<>
			<Sheet
				onOpenChange={setopen}
				open={isopen}>
				<SheetTrigger className="cursor-pointer rounded-md bg-blue-500 p-3">
					<FaBars color="white" />
				</SheetTrigger>
				<SheetContent className="border-0 bg-white backdrop-blur-lg dark:bg-transparent">
					<SheetHeader className="border-b-2 border-gray-400">
						<SheetTitle>
							<Image
								src={"/logo.svg"}
								alt="logo"
								height={400}
								width={400}
								priority
								className="h-[40] w-[100]"
							/>
						</SheetTitle>

						{/* call for avoid warning  */}
						<SheetDescription />
					</SheetHeader>

					<div className="flex flex-col gap-3 px-4">
						<Link
							href={"/"}
							className={`${pathname == "/" ? "bg-black/4 text-blue-600 dark:bg-white/10 dark:text-blue-300" : null} rounded-md p-2 px-4 hover:bg-black/4 hover:text-blue-600 dark:hover:bg-white/10 dark:hover:text-blue-400`}>
							Home
						</Link>
						<Accordion
							type="single"
							collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger
									className={`${["/brand-design", "/ui-ux-design", "/development", "/marketig"].includes(pathname) ? "bg-black/4 text-blue-500 dark:bg-white/10" : null} rounded-md p-2 px-4 hover:bg-black/4 hover:text-blue-500 data-[state=open]:text-blue-500 data-[state=open]:focus:bg-black/4 dark:hover:bg-white/10 dark:hover:text-blue-400 dark:data-[state=open]:text-blue-400 dark:data-[state=open]:focus:bg-white/10`}>
									Services
								</AccordionTrigger>
								<AccordionContent className="flex flex-col gap-4">
									<Link
										href={"/brand-design"}
										className={`${pathname == "/brand-design" ? "bg-blue-500 text-white dark:bg-fuchsia-500" : null} mt-4 rounded-md border-b-2 border-b-black/12 p-2 px-4 hover:bg-blue-500 hover:text-white dark:border-b-white/12 dark:hover:bg-fuchsia-500`}>
										Brand Design
									</Link>
									<Link
										href={"/ui-ux-design"}
										className={`${pathname == "/ui-ux-design" ? "bg-blue-500 text-white dark:bg-fuchsia-500" : null} rounded-md border-b-2 border-b-black/12 p-2 px-4 hover:bg-blue-500 hover:text-white dark:border-b-white/12 dark:hover:bg-fuchsia-500`}>
										Ui/Ux Design
									</Link>
									<Link
										href={"/development"}
										className={`${pathname == "/development" ? "bg-blue-500 text-white dark:bg-fuchsia-500" : null} rounded-md border-b-2 border-b-black/12 p-2 px-4 hover:bg-blue-500 hover:text-white dark:border-b-white/12 dark:hover:bg-fuchsia-500`}>
										Web Development
									</Link>
									<Link
										href={"/marketing"}
										className={`${pathname == "/marketing" ? "bg-blue-500 text-white dark:bg-fuchsia-500" : null} rounded-md border-b-2 border-b-black/12 p-2 px-4 hover:bg-blue-500 hover:text-white dark:border-b-white/12 dark:hover:bg-fuchsia-500`}>
										Marketing
									</Link>
								</AccordionContent>
							</AccordionItem>
						</Accordion>

						<Link
							href={"/about"}
							className={`${pathname == "/about" ? "bg-black/4 text-blue-600 dark:bg-white/10 dark:text-blue-300" : null} rounded-md p-2 px-4 hover:bg-black/4 hover:text-blue-600 dark:hover:bg-white/10 dark:hover:text-blue-400`}>
							About
						</Link>

						<Link
							href={"/blog"}
							className={`${pathname == "/blog" ? "bg-black/4 text-blue-600 dark:bg-white/10 dark:text-blue-300" : null} rounded-md p-2 px-4 hover:bg-black/4 hover:text-blue-600 dark:hover:bg-white/10 dark:hover:text-blue-400`}>
							Blog
						</Link>

						<Link
							href={"/contact"}
							className={`${pathname == "/contact" ? "bg-black/4 text-blue-600 dark:bg-white/10 dark:text-blue-300" : null} rounded-md p-2 px-4 hover:bg-black/4 hover:text-blue-600 dark:hover:bg-white/10 dark:hover:text-blue-400`}>
							Conatct
						</Link>
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
};

export default MobileNav;
