import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const Youtube_Slider_Data = () => {
  const data = [
    { image: "/images/sohLoves/youtube/1.png" },
    { image: "/images/sohLoves/youtube/2.png" },
    { image: "/images/sohLoves/youtube/3.png" },
    { image: "/images/sohLoves/youtube/4.png" },
    { image: "/images/sohLoves/youtube/5.png" },
    { image: "/images/sohLoves/youtube/3.png" },
    { image: "/images/sohLoves/youtube/4.png" },
    { image: "/images/sohLoves/youtube/5.png" },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Reconnect buttons after Swiper is mounted
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative">
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Navigation, Autoplay]}
        loop={false}
        speed={1500}
        slidesPerView={5}
        spaceBetween={40}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 5 },
          640: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className="mySwiper w-full"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full aspect-[9/16] rounded-lg xl:rounded-xl overflow-hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_LA8LyVNLmQ?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Nav Buttons */}
      <button
        ref={prevRef}
        className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 bg-[rgba(255,255,255,0.7)] border border-white z-10 w-[40px] h-[40px] flex rounded-[50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          className="m-auto"
        >
          <path
            d="M10.2479 14.812L14.9797 10.0798C15.098 9.96174 15.1612 9.8168 15.1692 9.64501C15.1774 9.47343 15.1142 9.32048 14.9797 9.18616C14.8454 9.05164 14.6964 8.98437 14.5329 8.98437C14.3693 8.98437 14.2202 9.05164 14.0857 9.18616L8.54264 14.7292C8.33843 14.9334 8.23633 15.1715 8.23633 15.4435C8.23633 15.7155 8.33843 15.9536 8.54264 16.1578L14.0857 21.7009C14.204 21.8192 14.349 21.8824 14.5205 21.8904C14.6923 21.8986 14.8454 21.8354 14.9797 21.7009C15.1142 21.5666 15.1815 21.4176 15.1815 21.2541C15.1815 21.0905 15.1142 20.9415 14.9797 20.8072L10.2479 16.0751L22.1118 16.0751C22.2916 16.0751 22.4418 16.0148 22.5624 15.8942C22.6831 15.7735 22.7434 15.6233 22.7434 15.4435C22.7434 15.2637 22.6831 15.1135 22.5624 14.9929C22.4418 14.8723 22.2916 14.812 22.1118 14.812L10.2479 14.812Z"
            fill="#99742B"
          />
        </svg>
      </button>
      <button
        ref={nextRef}
        className="custom-next absolute right-2 top-1/2 -translate-y-1/2 bg-[rgba(255,255,255,0.7)] border border-white z-10 w-[40px] h-[40px] flex rounded-[50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          className="m-auto"
        >
          <path
            d="M21.8302 14.812L17.0984 10.0798C16.9801 9.96174 16.917 9.8168 16.909 9.64501C16.9007 9.47343 16.9639 9.32048 17.0984 9.18616C17.2327 9.05164 17.3817 8.98437 17.5453 8.98437C17.7088 8.98437 17.8579 9.05164 17.9924 9.18616L23.5355 14.7292C23.7397 14.9334 23.8418 15.1715 23.8418 15.4435C23.8418 15.7155 23.7397 15.9536 23.5355 16.1578L17.9924 21.7009C17.8741 21.8192 17.7292 21.8824 17.5576 21.8904C17.3858 21.8986 17.2327 21.8354 17.0984 21.7009C16.9639 21.5666 16.8966 21.4176 16.8966 21.2541C16.8966 21.0905 16.9639 20.9415 17.0984 20.8072L21.8302 16.0751L9.96632 16.0751C9.78653 16.0751 9.63632 16.0148 9.51569 15.8942C9.39506 15.7735 9.33474 15.6233 9.33474 15.4435C9.33474 15.2637 9.39506 15.1135 9.51569 14.9929C9.63632 14.8723 9.78653 14.812 9.96632 14.812L21.8302 14.812Z"
            fill="#99742B"
          />
        </svg>
      </button>
    </div>
  );
};

export default Youtube_Slider_Data;
