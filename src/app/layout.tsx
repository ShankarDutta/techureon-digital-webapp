import NavBar from "@/components/Header/NavBar";
import ThemeProvider from "@/components/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import "./globals.css";

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className="">
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<NavBar />
					<main className="container mx-auto px-6 py-3">
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
