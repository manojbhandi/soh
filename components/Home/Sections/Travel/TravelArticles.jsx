import ArticleAuthor from "@/components/Ui/Cards/Article/ArticleAuthor";
import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import ArticleShortPara from "@/components/Ui/Cards/Article/ArticleShortPara";
import ArticleSubCategory from "@/components/Ui/Cards/Article/ArticleSubCategory";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";
import Cta from "@/components/Ui/Cta";
import Slider from "@/components/Ui/Slider";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";

const TravelArticles = ({ data }) => {
  const articlesData = data?.[0]?.data
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

  const router = useRouter();

  const handleCardClick = (articlePath) => {
    router.push(articlePath);
  };
  return (
    <>
      {mobile ? (
        <Slider
          customClass={'mb-[30px]'}
          slides={articlesData?.length > 0 && articlesData.map((item, index) => (
            <ArticleCard
              articleImage={item?.image}
              articleSubCategory={item?.subCategory}
              articleTitle={item?.title}
              articleShortPara={item?.para}
              articleAuthor={item?.author}
              articleDpLink={item?.articleSlug}
              articleSubCategoryLink={item?.subcategorySlug}
            />
          ))}
          setting={sliderSettings}
        />
      ) : (
        <>
          <div className="lg:flex lg:items-end mb-[20px] lg:mb-[50px] xl:mb-[5.208vw]">
            <div className="lg:w-8/12">
              {console.log("Banner Image", articlesData?.[0])}

              <ArticleImage
                articleImage={articlesData?.[0]?.image}
                articleVideoUrl={'#'}
              />

            </div>
            <div className="lg:w-4/12 lg:pl-[50px] xl:pl-[4.167vw]">
              <ArticleSubCategory
                articleSubCategory={articlesData?.[0]?.subCategory}
                articleSubCategoryLink={articlesData?.[0]?.subCategoryPath}
              />
              <Link href={articlesData?.[0]?.articlePath}>
                <ArticleTitle
                  articleTitle={articlesData?.[0]?.title}
                />
                <ArticleShortPara
                  articleShortPara={articlesData?.[0]?.para}
                  paraStyle={"line-clamp-4"}
                />

                <ArticleAuthor articleAuthor={articlesData?.[0]?.author} />
              </Link>
            </div>
          </div>

          <div className="lg:flex mb-[30px] xl:mb-[3.646vw]">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-[10px] sm:gap-x-[20px] md:gap-x-[20px] lg:w-6/12 mb-[20px] lg:mb-0 pb-[20px] lg:pb-0 lg:pr-[20px] xl:pr-[3vw] border-solid border-[#C2C2C2]  border-b lg:border-b-0 lg:border-r-[1px]  md:mb-[15px] *:xl:mb-[1.823vw] last:*:mb-0">
              {articlesData?.length > 0 && articlesData?.slice(1, 3).map((item, index) => (

                <div

                  key={index}
                  className="lg:grid lg:grid-cols-2 lg:gap-x-[20px] xl:gap-x-[2.344vw]"
                >
                  <div>
                    <Link href={item?.articlePath}>
                      <ArticleImage
                        articleImage={item?.image}
                        articleImgStyle={"lg:!mb-0"}
                      />
                    </Link>

                  </div>
                  <div

                  >
                    <ArticleTitle
                      articleSubCategory={item?.subCategory}
                      articleTitle={item?.title}
                      articleSubCategoryLink={item?.subCategoryPath}
                    />

                    <ArticleAuthor articleAuthor={item?.author} />
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-6/12 lg:pl-[20px] xl:pl-[3.385vw]">
              {articlesData?.length > 0 && articlesData.slice(2, 4).map((item, index) => (
                <div
                  key={index}
                  className="sm:grid sm:grid-cols-2 sm:gap-x-[20px] md:gap-x-[30px] lg:gap-x-[20px] xl:gap-x-[2.344vw]"
                >
                  <div>
                    <Link href={item?.articlePath}>
                      <ArticleImage
                        articleImage={item?.image}
                        articleImgStyle={"!pt-[120%]"}
                      />
                    </Link>
                  </div>
                  <div
                    onClick={() => handleCardClick(item?.articlePath)}
                    className="cursor-pointer"
                  >

                    <ArticleTitle
                      articleSubCategory={item?.subCategory}
                      articleTitle={item?.title}
                      articleSubCategoryLink={item?.subCategoryPath}
                    />


                    <ArticleShortPara
                      articleShortPara={item?.para}
                      paraStyle={"line-clamp-4"}
                    />

                    <ArticleAuthor articleAuthor={item?.author} />
                    <Cta
                      url={item?.articlePath}
                      name={"Read More"}
                      customClass={"mt-[20px] xl:mt-[2vw]"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TravelArticles;
