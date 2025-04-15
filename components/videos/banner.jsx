import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import Image from "next/image";

const Banner = ({ data }) => {
  const setting = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: false,
    pagination: false,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  };
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectCreative]}
      {...setting}
    >
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <div>
            <Image src={item.img} width={3000} height={2500} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
