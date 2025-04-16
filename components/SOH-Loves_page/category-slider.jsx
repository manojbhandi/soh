// components/CustomSwiper.js
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import required modules
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";
import LinkButton from "../Ui/LinkButton";

const Category_Slider = ({ sections, activeIndex }) => {
  console.log("activeIndex", activeIndex);
  const swiperRef = useRef(null);
  //   const [activeIndex, setActiveIndex] = useState(0);
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

  useEffect(() => {
    const handlePaginationClick = () => {
      swiperRef.current.swiper.slideTo(activeIndex);
    };

    handlePaginationClick();
  }, [activeIndex]);

  return (
    <div>
      <Swiper
        ref={swiperRef}
        loop={false}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        speed={1500}
        // pagination={{
        //   clickable: true,
        //   //dynamicBullets: true,
        // }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Pagination, Autoplay, EffectCreative]}
        className="mySwiper w-full "
      >
        {sections.map((slide, idx) => (
          <SwiperSlide key={idx} className="bg-[#fefdfa]">
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-4 lg:gap-10 xl:items-end">
              <div className="col-span-1 lg:col-span-1">
                <Image
                  src={slide.imgSrc}
                  width={500}
                  height={900}
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="col-span-2 lg:col-span-1 xl:ps-[3vw]">
                <div className="mb-5 lg:mb-10 xl:mb-[5vw]">
                  <h2 className="text-[20px] sm:text-[24px] xl:text-[1.8vw] text-mainBlack mb-2 lg:mb-5 xl:mb-[2vw] font-fh">
                    {slide.title}
                  </h2>
                  <h3 className="text-[16px] sm:text-[18px] xl:text-[1.1vw] text-mainBlack mb-2 lg:mb-5 xl:mb-[1.1vw] font-medium">
                    {slide.heading}
                  </h3>
                  <p className="text-[14px] xl:text-[0.85vw] ">{slide.para}</p>
                </div>
                {/* <Link
                  href={"/#"}
                  className="text-mainBlack font-inter italic border-b border-black tracking-[2px] hover:tracking-[3px] pb-1 table text-[13px] xl:text-[0.7vw] transition-all"
                >
                  Read More
                </Link> */}

                <LinkButton text={"Read More"} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="flex justify-center mt-4 space-x-2">
        {slides.map((item, idx) => (
          <button key={idx} onClick={() => handlePaginationClick(idx)}>
            {item}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Category_Slider;
