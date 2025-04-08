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

  return (
    <Slider
      slides={data?.length > 0 && data.slice(1).map((item, index) => (
        <ArticleCard
          key={index}
          articleImage={item?.image}
          articleImgStyle={"md:hidden"}
          articleSubCategory={item?.subCategory}
          articleTitle={item?.title}
          articleShortPara={stripHtmlTags(item?.para)}
          articleAuthor={item?.author}
          articleDpLink={item?.articlePath}
          articleSubCategoryLink={item?.subCategoryPath}
        />
      ))}
      setting={sliderSettings}
    />
  );
};

export default LeadrshipSlider;
