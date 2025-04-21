import Slider from "@/components/Ui/Slider";
import Link from "next/link";
import Image from "next/image";
import FancyboxWrapper from "@/components/Ui/FancyboxWrapper";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";

const VideoSlider = ({ data }) => {
  const sliderSettings = {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    navigation: false,
    pagination: false,
    speed: 1000,
    autoplay: true,
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
      slides={data.map((item, index) => (
        <ArticleImage
          key={index}
          articleImage={item?.image}
          articleVideoUrl={item?.videoUrl}
          articleImgStyle={"border-[1px] border-solid border-gold"}
        />
      ))}
    />
  );
};

export default VideoSlider;
