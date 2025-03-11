import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Cta from "@/components/Ui/Cta";
import { useState, useEffect } from "react";

import LeadrshipSlider from "./LeadrshipSlider";

const leadershipArticle = [
  {
    image: "/images/leadership/article1.jpg",
    subCategory: "GM's Think Tank",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/leadership/article1.jpg",
    subCategory: "From the CEO lens",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
];

const Leadership = () => {
  const [data, setData] = useState(leadershipArticle);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setData(leadershipArticle.slice(0, 1));
        setMobile(true);
      } else {
        setData(leadershipArticle);
        setMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className="bg-[#F7F3EA] py-[50px] relative z-[1] md:before:absolute md:before:z-[-1] md:before:top-0 md:before:right-0 md:before:w-[48%] md:before:h-full md:before:bg-white">
        <div className="whiteStar right-[5%] md:right-[10%] xl:right-[52%]"></div>
        <div className="container">
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-6/12 lg:w-[52.2%] lg:pr-[14.5%]">
              <div className="flex items-center mb-[20px]">
                <SubMainTitle
                  title={"Leadership"}
                  customClass={"flex-1 !mb-0"}
                />
                {mobile ? null : (
                  <Cta url={"#"} name={"View All"} customClass={"flex-none"} />
                )}
              </div>
              <div className="md:mb-[30px] xl:mb-[5.208vw]">
                <LeadrshipSlider data={data} />
              </div>
              {mobile ? <Cta url={"#"} name={"Read More"} /> : null}
            </div>

            {mobile ? (
              <div className="md:w-5/12 lg:w-[35.4%]">
                <Cta
                  url={"#"}
                  name={"View All"}
                  customClass={"flex-none  ms-auto mb-[30px] xl:mb-[2.344vw]"}
                />

                {leadershipArticle.slice(1).map((item, index) => (
                  <ArticleCard
                    key={index}
                    articleImage={item?.image}
                    articleSubCategory={item?.subCategory}
                    articleTitle={item?.title}
                    articleShortPara={item?.para}
                    articleAuthor={item?.author}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
