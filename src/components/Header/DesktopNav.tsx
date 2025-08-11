"use client";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/shadcnui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationMenuTriggerStyle } from "../shadcnui/navigation-menu";
const DesktopNav = () => {
	const pathname = usePathname();

	return (
		<section className="space-x-6">
			<NavigationMenu viewport={false}>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}>
							<Link
								href="/"
								className={`${pathname == "/" ? "font-bold text-blue-600 dark:text-blue-300" : null} hover:bg-transparent hover:text-blue-800 dark:hover:text-blue-300`}>
								Home
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>

				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger
							className={`${["/brand-design", "/ui-ux-design", "/development", "/marketing"].includes(pathname) ? "text-blue-600 dark:text-blue-300" : null} hover:text-blue-800 dark:hover:text-blue-300`}>
							Services
						</NavigationMenuTrigger>
						<NavigationMenuContent className="relative border-none bg-black/20 backdrop-blur-md dark:bg-white/12">
							<ul className="grid w-[300px]">
								<li className="space-y-2">
									<NavigationMenuLink asChild>
										<Link
											href="/brand-design"
											className={`${pathname == "/brand-design" ? "bg-blue-500 text-white dark:bg-fuchsia-500" : null} font-medium hover:bg-blue-500 hover:text-white dark:hover:bg-fuchsia-500`}>
											Brand Desing
										</Link>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<Link
											href="/ui-ux-design"
											className={`${pathname == "/ui-ux-design" ? "bg-blue-500 text-white dark:bg-fuchsia-500" : null} font-medium hover:bg-blue-500 hover:text-white dark:hover:bg-fuchsia-500`}>
											Ui/Ux Design
										</Link>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<Link
											href="/development"
											className={`${pathname == "/development" ? "bg-blue-500 text-white dark:bg-fuchsia-500" : null} font-medium hover:bg-blue-500 hover:text-white dark:hover:bg-fuchsia-500`}>
											Web Development
										</Link>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<Link
											href="/marketing"
											className={`${pathname == "/marketing" ? "bg-blue-500 text-white dark:bg-fuchsia-500" : null} font-medium hover:bg-blue-500 hover:text-white dark:hover:bg-fuchsia-500`}>
											Marketing
										</Link>
									</NavigationMenuLink>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>

				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}>
							<Link
								href="/about"
								className={`${pathname == "/about" ? "text-blue-600 dark:text-blue-300" : null} hover:bg-transparent hover:text-blue-800 dark:hover:text-blue-300`}>
								About
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>

				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}>
							<Link
								href="/blog"
								className={`${pathname == "/blog" ? "text-blue-600 dark:text-blue-300" : null} hover:bg-transparent hover:text-blue-800 dark:hover:text-blue-300`}>
								Blog
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>

				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}>
							<Link
								href="/contact"
								className={`${pathname == "/contact" ? "text-blue-600 dark:text-blue-300" : null} hover:bg-transparent hover:text-blue-800 dark:hover:text-blue-300`}>
								Contact
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</section>
	);
};

export default DesktopNav;
