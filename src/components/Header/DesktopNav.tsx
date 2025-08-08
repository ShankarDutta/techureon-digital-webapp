import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/shadcnui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "../shadcnui/navigation-menu";
const DesktopNav = () => {
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
								className="hover:bg-transparent hover:text-blue-400 dark:hover:text-blue-300">
								Home
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>

				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Services</NavigationMenuTrigger>
						<NavigationMenuContent className="relative border-none bg-black/20 backdrop-blur-md dark:bg-white/12">
							<ul className="grid w-[300px] gap-6">
								<li>
									<NavigationMenuLink asChild>
										<Link href="/brand-design">
											<div className="font-medium">
												Brand Desing
											</div>
										</Link>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<Link href="/ui-ux-design">
											<div className="font-medium">
												Ui/Ux Design
											</div>
										</Link>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<Link href="/development">
											<div className="font-medium">
												Web Development
											</div>
										</Link>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<Link href="/marketing">
											<div className="font-medium">
												Marketing
											</div>
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
								className="hover:bg-transparent hover:text-blue-400 dark:hover:text-blue-300">
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
								className="hover:bg-transparent hover:text-blue-400 dark:hover:text-blue-300">
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
								className="hover:bg-transparent hover:text-blue-400 dark:hover:text-blue-300">
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
