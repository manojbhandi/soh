import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar, Autoplay } from "swiper/modules";
import Card from "./card";

const Slider = () => {
  const data = [
    {
      img: "/images/best_of_best/1.png",
      label: "Best of the Best",
      head: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      link: "/#",
    },
    {
      img: "/images/best_of_best/2.png",
      label: "Best of the Best",
      head: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      link: "/#",
    },
    {
      img: "/images/best_of_best/1.png",
      label: "Best of the Best",
      head: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      link: "/#",
    },
    {
      img: "/images/best_of_best/2.png",
      label: "Best of the Best",
      head: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      link: "/#",
    },
  ];
  return (
    <div className="container mb-10 xl:mb-[3vw]">
      <Swiper
        scrollbar={true}
        //slidesPerView={3}
        spaceBetween={40}
        speed={1500}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper !pb-10 xl:!pb-[3vw]"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <Card imgSrc={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
