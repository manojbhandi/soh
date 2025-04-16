import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import required modules
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";
import Image from "next/image";
import CtaBtn from "../Ui/CtaBtn";
import Caption from "./caption";

const Banner = () => {
  const bannerData = [
    {
      imgSrc: "/images/sohLoves/banner_1.jpg",
      mobImgSrc: "/images/sohLoves/article01.jpg",
    },
    {
      imgSrc: "/images/sohLoves/banner_1.jpg",
      mobImgSrc: "/images/sohLoves/article02.jpg",
    },
    {
      imgSrc: "/images/sohLoves/banner_1.jpg",
      mobImgSrc: "/images/sohLoves/article01.jpg",
    },
  ];

  return (
    <div className="soh_banner">
      <Swiper
        effect={"creative"}
        loop={true}
        // autoHeight={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={{
          clickable: true,
          //dynamicBullets: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        speed={1500}
        modules={[Pagination, Autoplay, EffectCreative]}
        className="mySwiper w-full "
      >
        {bannerData?.map((item, i) => (
          <SwiperSlide key={i} className="!h-[100vh] sm:!h-[inherit]">
            <div className="blackOverlay w-[100%]  h-full absolute left-0 top-0 z-0"></div>
            <Caption />
            <Image
              src={item.imgSrc}
              width={1921}
              height={1087}
              alt="soh"
              className="w-full sm:h-[700px] object-cover lg:h-auto hidden sm:block"
            />
            <Image
              src={item.mobImgSrc}
              width={1080}
              height={1920}
              alt="soh"
              className="w-full h-full object-cover block sm:hidden"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
