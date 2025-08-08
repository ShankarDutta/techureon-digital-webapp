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
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
	return (
		<>
			<Sheet>
				<SheetTrigger className="rounded-md bg-blue-500 p-3">
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
							className="rounded-md p-2 px-4 hover:bg-black/4 hover:text-blue-500 dark:hover:bg-white/20 dark:hover:text-blue-400">
							Home
						</Link>
						<Accordion
							type="single"
							collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger className="rounded-md p-2 px-4 hover:bg-black/4 hover:text-blue-500 data-[state=open]:text-blue-500 data-[state=open]:focus:bg-black/4 dark:hover:bg-white/20 dark:hover:text-blue-400 dark:data-[state=open]:text-blue-400 dark:data-[state=open]:focus:bg-white/20">
									Services
								</AccordionTrigger>
								<AccordionContent className="flex flex-col gap-4">
									<Link
										href={"/brand-design"}
										className="mt-4 rounded-md border-b-2 border-b-black/12 p-2 px-4 hover:bg-black/4 dark:border-b-white/12 dark:hover:bg-white/20">
										Brand Design
									</Link>
									<Link
										href={"/ui-ux-design"}
										className="rounded-md border-b-2 border-b-black/12 p-2 px-4 hover:bg-black/4 dark:border-b-white/12 dark:hover:bg-white/20">
										Ui/Ux Design
									</Link>
									<Link
										href={"/development"}
										className="rounded-md border-b-2 border-b-black/12 p-2 px-4 hover:bg-black/4 dark:border-b-white/12 dark:hover:bg-white/20">
										Web Development
									</Link>
									<Link
										href={"/marketing"}
										className="rounded-md border-b-2 border-b-black/12 p-2 px-4 hover:bg-black/4 dark:border-b-white/12 dark:hover:bg-white/20">
										Marketing
									</Link>
								</AccordionContent>
							</AccordionItem>
						</Accordion>

						<Link
							href={"/about"}
							className="rounded-md p-2 px-4 hover:bg-black/4 hover:text-blue-500 dark:hover:bg-white/20 dark:hover:text-blue-400">
							About
						</Link>

						<Link
							href={"/blog"}
							className="rounded-md p-2 px-4 hover:bg-black/4 hover:text-blue-500 dark:hover:bg-white/20 dark:hover:text-blue-400">
							Blog
						</Link>

						<Link
							href={"/contact"}
							className="rounded-md p-2 px-4 hover:bg-black/4 hover:text-blue-500 dark:hover:bg-white/20 dark:hover:text-blue-400">
							Conatct
						</Link>
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
};

export default MobileNav;
