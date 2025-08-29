import Image from "next/image";

interface Mainsecporos {
	heading?: string;
	paragraph?: string;
	img?: string;
}

const CustomMain = ({
	heading = " ",
	paragraph = " ",
	img = " ",
}: Mainsecporos) => {
	return (
		<>
			<section className="space-y-6 text-center lg:px-10">
				<h1 className="text-4xl font-bold">{heading}</h1>
				<p className="text-sm md:text-lg">{paragraph}</p>
				<Image
					src={img}
					alt="model.jpg"
					height={720}
					width={1080}
					priority
					className="mx-auto h-auto w-full rounded-4xl object-cover"
				/>
			</section>
		</>
	);
};

export default CustomMain;
