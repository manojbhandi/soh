import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import "swiper/css";
import { stripHtmlTags } from "@/utils/commonFunctions";
import { getImageUrl } from "@/utils/constants";
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
            <Image src={getImageUrl(item?.bannerImages?.[0])} width={500} height={600} className="aspect-[5/6] object-cover" alt="" />
            <div className="hbBannerTxt">
              <h3>{item?.categoryName}</h3>
              <div>
                <label>{item?.subcategoryName}</label>
                <p>{stripHtmlTags(item.description, 80)}</p>
              </div>
              <span>View All</span>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MobileBanner;
