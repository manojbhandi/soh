import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import Slider from "@/components/Ui/Slider";



const BannerSlider = ({ bannerSliderData }) => {
  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: true,
    pagination: false,
    speed: 1500,
    autoplay: true,
  };


  return (
    <Slider
      slides={bannerSliderData.map((item, index) => (
        <ArticleImage key={index} articleImage={item?.image} articleImgStyle={'!pt-[60%]'} />
      ))}
      setting={sliderSettings}
    />
  );
};

export default BannerSlider;
