import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const Slider = ({slidesPerView, navigation, pagination, autoplay, SwiperSlideData}) => {
    return (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={slidesPerView && slidesPerView}
          navigation={navigation && navigation}
          pagination={pagination ? { clickable: true } : false}
          autoplay={autoplay && autoplay}
          speed={2000}
          loop={true}
        >
          {
            SwiperSlideData.map((index)=>{
              <SwiperSlide key={index}>
                {children}
              </SwiperSlide>
            })
          }
          
       
        </Swiper>
      );
}

export default Slider
