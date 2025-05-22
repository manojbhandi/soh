import Slider from "@/components/Ui/Slider";
import ArticleAuthor from "@/components/Ui/Cards/Article/ArticleAuthor";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import ArticleShortPara from "@/components/Ui/Cards/Article/ArticleShortPara";
import ArticleSubCategory from "@/components/Ui/Cards/Article/ArticleSubCategory";
import Cta from "@/components/Ui/Cta";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";
import { useEffect, useState } from "react";

const BusinessSlider = ({ data, mobile }) => {
  const [sliderKey, setSliderKey] = useState(0);

  useEffect(() => {
    setSliderKey(prev => prev + 1);
  }, [mobile]);

  const getSliderSettings = () => {
    if (mobile) {
      return {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: false,
        pagination: false,
        speed: 1000,
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        },
      };
    } else {
      return {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: false,
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
    }
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div key={sliderKey}>
      <Slider
        slides={data.map((item, index) => (
          <div className="lg:flex" key={index}>
            <div className="lg:w-1/2 xl:w-[26.042vw] lg:mr-[3.385vw] mb-[15px]">
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
              <ArticleTitle
                articleTitle={item?.title}
                articleDpLink={item?.articlePath}
              />
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
        setting={getSliderSettings()}
      />
    </div>
  );
};

export default BusinessSlider;