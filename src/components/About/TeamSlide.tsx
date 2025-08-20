"use client";
import { OurExpartsImages } from "@/lib/mapdata";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamSlideCards from "./TeamSlideCards";

const TeamSlide = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				loop={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				breakpoints={{
					480: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					500: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
				className="mySwiper"
				modules={[FreeMode, Autoplay]}>
				{OurExpartsImages.map((data) => (
					<SwiperSlide key={data.id}>
						<TeamSlideCards
							key={data.id}
							info={data}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default TeamSlide;
