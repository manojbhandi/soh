import Slider from "@/components/Ui/Slider";
import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import { stripHtmlTags } from "@/utils/commonFunctions";
const LeadrshipSlider = ({ data }) => {
  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: false,
    pagination: false,
    speed: 1000,
    breakpoints: {
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    },
  };

  console.log("data", data);

  return (
    <Slider
      slides={data?.length ? data.slice(1).map((item, index) => (
        
        <ArticleCard
          key={index}
          articleImage={item?.image}
          articleImgStyle={"md:hidden"}
          articleSubCategory={item?.subCategory}
          articleTitle={item?.title}
          articleShortPara={item?.para}
          articleAuthor={item?.author}
          articleDpLink={item?.articlePath}
          articleSubCategoryLink={item?.subCategoryPath}
        />
      )) : []}
      setting={sliderSettings}
    />
  );
};

export default LeadrshipSlider;
