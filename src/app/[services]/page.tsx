import CustomCards from "@/components/Sevices/CustomCards";
import CustomHero from "@/components/Sevices/CustomHero";
import CustomMain from "@/components/Sevices/CustomMain";
import { MultipleServiceSecDatas } from "@/lib/mapdata";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
	params: Promise<{ services: string }>;
}

interface ServicesProps {
	params: { services: string };
}

//  Dynamic Title Only
export async function generateMetadata({
	params,
}: ServicesProps): Promise<Metadata> {
	const { services } = await params;
	const title = MultipleServiceSecDatas.find((b) => b.url === services);

	if (!title) {
		return {
			title: "Blog Not Found | TeachUreon",
		};
	}

	return {
		title: `${title.url} | TeachUreon Services`,
	};
}

const Page = async ({ params }: PageProps) => {
	const { services } = await params;
	const getData = MultipleServiceSecDatas.find((b) => b.url === services);
	console.log(getData); //check data

	await new Promise((resolve) => {
		setTimeout(() => {
			resolve("");
		}, 1500);
	});

	if (!getData) {
		return notFound();
	}

	return (
		<>
			<CustomHero
				heading={getData.heroheading}
				paragraph={getData.heroparagraph}
				img={getData.heroimg}
				btnvalue={getData.btn}
			/>

			<section className="pt-20">
				<CustomMain
					heading={getData.mainheading}
					paragraph={getData.mainparagraph}
					img={getData.mainimg}
				/>
			</section>

			<section className="py-20">
				<h1 className="text-center text-2xl font-bold md:text-3xl lg:text-5xl">
					{getData.cardsecheading}
				</h1>
				<div className="grid gap-5 pt-10 lg:grid-cols-3">
					<CustomCards
						heading1={getData.cradheading1}
						heading2={getData.cradheading2}
						heading3={getData.cradheading3}
						paragraph1={getData.cardpargraph1}
						paragraph2={getData.cardpargraph2}
						paragraph3={getData.cardpargraph3}
					/>
				</div>
			</section>
		</>
	);
};

export default Page;
