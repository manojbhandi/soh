import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = ({ slides, setting, customClass }) => {
  return (
    <Swiper modules={[Navigation, Pagination, Autoplay]} {...setting}>
      {slides && slides.length > 0 ? (
        slides.map((slide, index) => (
          <SwiperSlide key={index} className={customClass ? customClass : ''}>{slide}</SwiperSlide>
        ))
      ) : (
        <SwiperSlide>No slides available</SwiperSlide>
      )}
    </Swiper>
  );
};

export default Slider;
