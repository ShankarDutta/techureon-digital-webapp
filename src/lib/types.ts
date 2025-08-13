import { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export type homeServiceCardsType = {
	id: number;
	heading: string;
	discription: string;
	pointsI: string;
	pointsII: string;
	pointsIII: string;
	link: string;
};
