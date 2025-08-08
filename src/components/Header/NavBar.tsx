import Image from "next/image";
import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import { Button } from "../shadcnui/button";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavBar = () => {
	return (
		<section className="fixed right-0 left-0 mx-auto w-full max-w-7xl px-6">
			<div className="mt-6 flex items-center justify-between rounded-md bg-black/6 px-6 pb-2 backdrop-blur-lg md:px-8 lg:rounded-4xl dark:bg-white/8">
				<div className="mt-1 flex items-center">
					{/* Logo  */}
					<Link href={"/"}>
						<Image
							src={"/logo.svg"}
							alt="logo"
							height={400}
							width={400}
							priority
							className="h-[40] w-[100]"
						/>
					</Link>
					<div className="mt-3">
						<ThemeToggleButton />
					</div>
				</div>

				<div className="mt-2 hidden lg:block">
					<DesktopNav />
				</div>

				<div className="mt-2 block lg:hidden">
					<MobileNav />
				</div>

				<Button className="hover: mt-2 hidden bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600 lg:block">
					Schedule a Call
				</Button>
			</div>
		</section>
	);
};

export default NavBar;
