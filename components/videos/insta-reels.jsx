// components/InstaReelSlider.js
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import MainTitle from "../Ui/MainTitle";

const Insta_Reels = () => {
  const reelUrls = [
    "https://www.instagram.com/reel/DIMPHRQoq-c/",
    "https://www.instagram.com/reel/DIMPHRQoq-c/",
    "https://www.instagram.com/reel/DIMPHRQoq-c/",
    "https://www.instagram.com/reel/DIMPHRQoq-c/",
    "https://www.instagram.com/reel/DIMPHRQoq-c/",
    "https://www.instagram.com/reel/DIMPHRQoq-c/",
    "https://www.instagram.com/reel/DIMPHRQoq-c/",
    "https://www.instagram.com/reel/DIMPHRQoq-c/",
    "https://www.instagram.com/reel/DIMPHRQoq-c/",
    "https://www.instagram.com/reel/DIMPHRQoq-c/",
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="instagram-reel-slider mb-5 lg:mb-[4vw]">
      <MainTitle title={"Instagram Reel"} customClass={"text-center"} />
      <Swiper
        //modules={[Navigation]}
        spaceBetween={5}
        speed={1500}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        navigation={false}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {reelUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="table mx-auto"
              dangerouslySetInnerHTML={{
                __html: `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"></blockquote>`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Insta_Reels;
