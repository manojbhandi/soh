import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Cta from "@/components/Ui/Cta";
import { useState, useEffect } from "react";

import LeadrshipSlider from "./LeadershipSlider";

const Leadership = () => {
  const [mobile, setMobile] = useState(false);
  const [article, setArticle] = useState(leadershipData?.data);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setArticle(leadershipData?.data);
        setMobile(true);
      } else {
        setArticle(leadershipData?.data.slice(0, 1)); 
        setMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [leadershipData?.data]);

  return (
    <section>
      <div className="bg-[#F7F3EA] py-[50px] relative z-[1] md:before:absolute md:before:z-[-1] md:before:top-0 md:before:right-0 md:before:w-[48%] md:before:h-full md:before:bg-white">
        <div className="whiteStar right-[5%] md:right-[52%]"></div>
        <div className="container">
          
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-6/12 lg:w-[52.2%] lg:pr-[14.5%]">
              <div className="flex items-center mb-[20px]">
                {leadershipData?.heading && (
                  <SubMainTitle title={leadershipData?.heading} customClass={"flex-1 !mb-0"} />
                )}
                {mobile && (
                  <Cta url={leadershipData?.link} name={"View All"} customClass={"flex-none"} />
                )}
              </div>
              <div className="md:mb-[30px] xl:mb-[5.208vw]">
                <LeadrshipSlider data={article} />
              </div>
              {!mobile && <Cta url={"#"} name={"Read More"} />}
            </div>

            {!mobile && (
              <div className="md:w-5/12 lg:w-[35.4%]">
                <Cta
                  url={"#"}
                  name={"View All"}
                  customClass={"flex-none ms-auto mb-[30px] xl:mb-[2.344vw]"}
                />

                {article.map((item, index) => (
                  <ArticleCard
                    key={index}
                    articleImage={item?.image}
                    articleSubCategory={item?.subCategory}
                    articleTitle={item?.title}
                    articleShortPara={item?.para}
                    articleAuthor={item?.author}
                    articleLink={item?.link}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;


const leadershipData = {
  heading: "Leadership",
  link: "/article",
  data: [
    {
      image: "/images/leadership/article1.jpg",
      subCategory: "GM's Think Tank",
      title: "Lorem Ipsum is simply dummy text of the printing and industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: "Imran Shaikh",
      link: "/article/article-sub-category/template-two",
    },
    {
      image: "/images/leadership/article1.jpg",
      subCategory: "From the CEO lens",
      title: "Lorem Ipsum is simply dummy text of the printing and industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: "Imran Shaikh",
      link: "/article/article-sub-category/template-two",
    },
  ],
};
