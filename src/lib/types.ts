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

export type AboutWorkFlowCardsDataType = {
	id: number;
	title: string;
	description: string;
	buttonText: string;
	icon: string;
};

export type OurExpartsImagesType = {
	id: number;
	src: string;
	alt: string;
	name: string;
	position: string;
};
