import Footer from "@/components/Footer/Footer";
import FooterTop from "@/components/Footer/FooterTop";
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
					<main className="container mx-auto max-w-7xl px-6">
						{children}
					</main>
					<FooterTop />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
