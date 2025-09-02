"use client";
import { useAOS } from "@/lib/useaos";
import Image from "next/image";
import ContactForm from "../Forms/ContactForm";

const ContactUi = () => {
	useAOS();
	return (
		<>
			<div className="motion-scale-in-0 absolute top-60 right-[65%] z-[-10] h-[40%] w-[20%] rounded-full bg-gradient-to-r from-[#3dbeff] from-0% to-[#ff43fc] to-50% blur-[150px]"></div>
			<section
				className="grid grid-cols-1 place-items-center gap-8 pt-36 lg:grid-cols-2 lg:place-items-baseline lg:pb-32"
				data-aos="fade-up">
				<div className="text-center lg:text-start">
					<h1 className="mb-3 text-2xl font-bold md:text-4xl">
						Let&apos;s Build Something Awesome!
					</h1>
					<p className="max-w-xl text-lg">
						Got a project that needs pixel-perfect design or
						bulletproof code? Drop us a line—we reply within 24
						hours.
					</p>

					<Image
						src={"/contact/image.png"}
						alt="img"
						height={400}
						width={400}
						className="mx-auto h-[400] w-[400]"
					/>
				</div>
				<ContactForm />
			</section>
		</>
	);
};

export default ContactUi;
