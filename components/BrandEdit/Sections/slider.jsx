import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar, Autoplay } from "swiper/modules";
import SlideCard from "./slideCard";

const Slider = ({ data }) => {
  return (
    <div className="container px-0">
      <Swiper
        scrollbar={true}
        //slidesPerView={3}
        loop={false}
        spaceBetween={40}
        speed={1500}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper !pb-10 xl:!pb-[3vw]"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <SlideCard imgSrc={item.img} para={item.head} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
