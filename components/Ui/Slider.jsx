import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = ({ slides, setting, customClass,parentClass }) => {
  return (
    <>
    {slides && slides.length > 0 ? (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        {...setting}
        className={parentClass ? parentClass : ''}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={customClass ? customClass : ''}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    ) : null}
    </>
  );
};

export default Slider;
