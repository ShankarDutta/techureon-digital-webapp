"use client";

import Image from "next/image";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
	return (
		<div className="flex w-full items-center justify-center">
			<Swiper
				centeredSlides
				loop
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay]}
				className="mySwiper w-full max-w-7xl rounded-2xl outline-[18]">
				<SwiperSlide className="relative aspect-[4/2] w-full">
					<Image
						src="/home/hero-slide-1.jpg"
						alt="Slide 1"
						fill
						priority
						className="object-cover"
					/>
				</SwiperSlide>
				<SwiperSlide className="relative aspect-[4/2] w-full">
					<Image
						src="/home/hero-slide-2.png"
						alt="Slide 2"
						fill
						priority
						className="object-cover"
					/>
				</SwiperSlide>
				<SwiperSlide className="relative aspect-[4/2] w-full">
					<Image
						src="/home/hero-slide-3.png"
						alt="Slide 3"
						fill
						priority
						className="object-cover"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
