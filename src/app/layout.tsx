import Footer from "@/components/Footer/Footer";
import FooterTop from "@/components/Footer/FooterTop";
import NavBar from "@/components/Header/NavBar";
import ThemeProvider from "@/components/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "TeachUreon | Innovative IT Solutions & Digital Services",
	description:
		"TeachUreon is a leading IT solutions company providing web development, digital transformation, cloud services, and custom software solutions to help businesses grow in the digital era.",
	keywords: [
		"TeachUreon",
		"IT solutions",
		"web development",
		"software development",
		"digital transformation",
		"cloud services",
		"IT consulting",
		"technology company",
	],
	openGraph: {
		title: "TeachUreon | Innovative IT Solutions & Digital Services",
		description:
			"Partner with TeachUreon for expert IT services, web solutions, and digital transformation strategies tailored to your business needs.",
		url: "https://teachureon.com",
		siteName: "TeachUreon",
	},
	icons: {
		icon: "/favicon.svg",
		shortcut: "/favicon-16x16.png",
	},
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body suppressHydrationWarning>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem>
					<NavBar />
					<main className="mx-auto max-w-7xl px-6">{children}</main>
					<FooterTop />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
