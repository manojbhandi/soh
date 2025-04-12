import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Youtube_Slider_Data = () => {
  const data = [
    {
      image: "/images/sohLoves/youtube/1.png",
    },
    {
      image: "/images/sohLoves/youtube/2.png",
    },
    {
      image: "/images/sohLoves/youtube/3.png",
    },
    {
      image: "/images/sohLoves/youtube/4.png",
    },
    {
      image: "/images/sohLoves/youtube/5.png",
    },
  ];

  return (
    <Swiper
      loop={false}
      speed={1500}
      slidesPerView={5}
      spaceBetween={40}
      // pagination={{
      //   clickable: true,
      //   //dynamicBullets: true,
      // }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper w-full "
    >
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <Link href={"/#"} className="block">
            <Image
              src={item.image}
              width={500}
              height={800}
              alt="soh"
              className="w-full h-auto"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Youtube_Slider_Data;
