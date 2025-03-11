import Slider from "@/components/Ui/Slider";
import Link from "next/link";
import Image from "next/image";
import FancyboxWrapper from "@/components/Ui/FancyboxWrapper";
const videosData = [
  {
    image: "/images/videos/01.jpg",
  },
  {
    image: "/images/videos/02.jpg",
  },
  {
    image: "/images/videos/03.jpg",
  },
  {
    image: "/images/videos/01.jpg",
  },
  {
    image: "/images/videos/02.jpg",
  },
  {
    image: "/images/videos/03.jpg",
  },
];

const VideoSlider = () => {
  const sliderSettings = {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    navigation: false,
    pagination: false,
    speed: 1000,
    autoplay:true,
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 2.3,
      },
    },
  };
  return (
    <Slider
      setting={sliderSettings}
      slides={videosData.map((item, index) => (
        <div
          key={index}
          className="border-[1px] border-solid border-gold rounded-[8px] xl:rounded-[0.417vw] overflow-hidden cursor-pointer group"
        >
          <FancyboxWrapper>
          <a data-fancybox="gallery" href={item?.image}>
            <Image src={item?.image} width={500} height={250} alt="Videos" />

            <div className="w-[50px] xl:w-[3.854vw] aspect-square bg-white  bg-opacity-50 group-hover:bg-opacity-100 absolute inset-0 m-auto rounded-full flex items-center justify-center duration-[0.3s] group-hover:scale-[1.1]">
              <svg className="fill-gold w-1/2 h-1/2" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </div>
          </a>
          </FancyboxWrapper>
        </div>
      ))}
    />
  );
};

export default VideoSlider;
