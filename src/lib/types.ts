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

export type BlogCardsDataType = {
	id: number;
	img: string;
	badge: string;
	title: string;
	subtitle: string;
	slug: string;
	Content: {
		heading1: string;
		paragraph1: string;
		paragraph2: string;
		qoute: string;
		heading2: string;
		paragraph3: string;
		heading3: string;
		paragraph4: string;
	};
};

export type MultipleServiceSecDatasType = {
	url: string;

	heroheading: string;
	heroparagraph: string;
	heroimg: string;
	btn: string;

	mainheading: string;
	mainparagraph: string;
	mainimg: string;

	cardsecheading: string;

	cradheading1: string;
	cradheading2: string;
	cradheading3: string;

	cardpargraph1: string;
	cardpargraph2: string;
	cardpargraph3: string;
};
