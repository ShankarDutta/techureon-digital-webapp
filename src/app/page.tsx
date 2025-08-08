import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
};

const page = () => {
	return (
		<>
			<section className="grid h-[200dvh] place-items-center">
				hello
			</section>
		</>
	);
};

export default page;
