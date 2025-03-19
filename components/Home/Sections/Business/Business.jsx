import SubMainTitle from "@/components/Ui/SubMainTitle";
import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import { useState, useEffect } from "react";
import BusinessSlider from "./BusinessSlider";
import Cta from "@/components/Ui/Cta";

const businessArticle = [
  {
    image: "/images/business/article1.jpg",
    subCategory: "GM's Think Tank",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/business/article2.jpg",
    subCategory: "Markets",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/business/article3.jpg",
    subCategory: "Development Update",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
];

const Business = () => {
  const [data, setData] = useState(businessArticle);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setData(businessArticle.slice(0, 1));
        setMobile(true);
      } else {
        setData(businessArticle);
        setMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className="bg-grey py-[50px] xl:pt-[7.813vw] xl:pb-[5.99vw] relative">
        <div className="whiteStar right-[5%]"></div>

        <div className="container">
          <div className="flex items-center mb-[20px] xl:mb-[2.604vw]">
            <div className="flex-1">
              <SubMainTitle title={businessData?.heading} customClass={"!mb-0"} />
            </div>
            <div className="flex-none">
              <Cta url={businessData?.link} name={"View All"} />
            </div>
          </div>

          <div className="lg:flex justify-between">
            <div className="lg:w-8/12 xl:w-[67%] lg:pr-[30px]  lg:border-[#C2C2C2]  lg:border-r">
              <BusinessSlider data={businessData?.data} />
            </div>

            {mobile ? null : (
              <div className="lg:w-4/12 xl:w-[28%]">
                <div className="md:pl-[30px] xl:pl-0 first:*:md:border-b first:*:md:border-[#C2C2C2] first:*:md:pb-[30px] first:*:xl:pb-[1.563vw] first:*:md:mb-[30px] first:*:xl:mb-[1.563vw]">
                  {businessArticle.slice(1, 3).map((item, index) => (
                    <ArticleCard
                      key={index}
                      articleImage={item?.image}
                      articleImgStyle={"md:w-1/2 xl:w-[11.979vw] !pt-[30%]"}
                      articleSubCategory={item?.subCategory}
                      articleTitle={item?.title}
                      articleAuthor={item?.author}
                    />
                  ))}
                </div>
              </div>
            ) }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;


const businessData = {
  heading: "Business",
  link: "/article",
  data: [
    {
      image: "/images/business/article1.jpg",
      subCategory: "GM's Think Tank",
      title: "Lorem Ipsum is simply dummy text of the printing and industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: "Imran Shaikh",
    },
    {
      image: "/images/business/article2.jpg",
      subCategory: "Markets",
      title: "Lorem Ipsum is simply dummy text of the printing and industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: "Imran Shaikh",
    },
    {
      image: "/images/business/article3.jpg",
      subCategory: "Development Update",
      title: "Lorem Ipsum is simply dummy text of the printing and industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      author: "Imran Shaikh",
    },
  ],
};
