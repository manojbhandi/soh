import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import "swiper/css";
const MobileBanner = ({ data }) => {
  return (
    <Swiper
    modules={[Autoplay]}

      spaceBetween={20}
      slidesPerView={1.2}
      speed={2000}
      loop={true}
      autoplay={true}
      centeredSlides={true}
      breakpoints={{
        575: {
          slidesPerView: 2.1,
        },
      }}
      className="homeMobBanner"
    >
      {data &&
        data?.map((item, index) => (
          <SwiperSlide href={item?.url} key={index}>
            <Image src={item?.img} width={1920} height={1080} alt="" />
            <div className="hbBannerTxt">
              <h3>{item?.category}</h3>
              <div>
                <label>{item?.subCategory}</label>
                <p>{item.para}</p>
              </div>
              <span>View All</span>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MobileBanner;
