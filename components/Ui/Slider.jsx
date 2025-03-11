import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = ({ slides, setting, customClass }) => {
  return (
    <Swiper className={customClass ? customClass : ''} modules={[Navigation, Pagination, Autoplay]} {...setting}>
      {slides.length > 0 ? (
        slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))
      ) : (
        <SwiperSlide>No slides available</SwiperSlide>
      )}
    </Swiper>
  );
};

export default Slider;
