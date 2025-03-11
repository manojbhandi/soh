import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import { useEffect, useState } from "react";
import Slider from "@/components/Ui/Slider";

const DineDrinkArticle = ({ data }) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      },
    },
  };

  return (
    <>
      {mobile ? (
        <Slider
          slides={data.map((item, index) => (
            <ArticleCard
              articleImage={item?.image}
              articleSubCategory={item?.subCategory}
              articleTitle={item?.title}
              articleShortPara={item?.para}
              articleAuthor={item?.author}
            />
          ))}
          setting={sliderSettings}
        />
      ) : (
        <div className="grid grid-cols-2  gap-x-[10px] sm:gap-x-[20px] md:gap-x-[20px] xl:gap-x-[2.344vw] gap-y-[20px] ">
          {data.map((item, index) => (
            <ArticleCard
              articleImage={item?.image}
              articleSubCategory={item?.subCategory}
              articleTitle={item?.title}
              articleAuthor={item?.author}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default DineDrinkArticle;
