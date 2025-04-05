import Slider from "@/components/Ui/Slider";
import ArticleAuthor from "@/components/Ui/Cards/Article/ArticleAuthor";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import ArticleShortPara from "@/components/Ui/Cards/Article/ArticleShortPara";
import ArticleSubCategory from "@/components/Ui/Cards/Article/ArticleSubCategory";
import Cta from "@/components/Ui/Cta";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";

const BusinessSlider = ({ data }) => {
  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: false,
    pagination: false,
    speed: 1000,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    },
  };

  return (
    <Slider
      slides={data?.map((item, index) => (
        <div className="lg:flex" key={index}>
          <div className="lg:w-1/2 xl:w-[26.042vw] lg:mr-[3.385vw]">
            <ArticleImage
              articleImage={item?.image}
              articleImgStyle={"!pt-[120%]"}
            />
          </div>

          <div className="lg:w-1/2 xl:w-[21.354vw]">
            <ArticleSubCategory
              articleSubCategory={item?.subCategory}
              articleSubCategoryLink={item?.subCategoryPath}
            />
            <ArticleTitle articleTitle={item?.title} />
            <ArticleShortPara
              articleShortPara={item?.para}
              paraStyle={"line-clamp-4"}
            />
            <ArticleAuthor articleAuthor={item?.author} />
            <Cta
              url={item?.articlePath}
              name={"Read More"}
              customClass={"mt-[20px] lg:mt-[50px] xl:mt-[3.906vw] hidden md:table"}
            />
          </div>
        </div>
      ))}
      setting={sliderSettings}
    />
  );
};

export default BusinessSlider;
