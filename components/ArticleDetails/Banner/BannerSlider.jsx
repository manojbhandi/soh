import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import Slider from "@/components/Ui/Slider";

const data = [
  {
    image: "/images/article-details/banner2.jpg",
  },
  {
    image: "/images/article-details/banner2.jpg",
  },
  {
    image: "/images/article-details/banner2.jpg",
  },
];

const BannerSlider = () => {
  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: true,
    pagination: false,
    speed: 1000,
  };

  return (
    <Slider
      slides={data.map((item, index) => (
        <ArticleImage key={index} articleImage={item?.image} articleImgStyle={'aspect-[16/9] !mb-0'}/>
      ))}
      setting={sliderSettings}
    />
  );
};

export default BannerSlider;
