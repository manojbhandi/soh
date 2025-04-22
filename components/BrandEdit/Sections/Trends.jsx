import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";
import Cta from "@/components/Ui/Cta";
import CtaBtn from "@/components/Ui/CtaBtn";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Image from "next/image";

const Trends = ({ data }) => {
  return (
    <section>
      <div className="container">
        <SubMainTitle title={data?.heading} />
        {data?.article.map((item, index) => (
          <div
            key={index}
            className="border-b border-solid border-[#CACACA] xl:py-[3.385vw]"
          >
            <div className="flex xl:gap-x-[10vw]">
              <div className="xl:w-[18.351vw]">
                <ArticleImage
                  articleImage={item?.image}
                  articleImgStyle={"!pt-[128%]"}
                />
              </div>
              <div className="xl:w-[28.646vw]">
                <ArticleTitle
                  articleSubCategory={item?.subCategory}
                  articleTitle={item?.title}
                  articleDpLink={item?.url}
                />
                <Cta
                  url={item?.url}
                  name={"Read More"}
                  customClass={"xl:mt-[2.386vw]"}
                />
              </div>
            </div>
          </div>
        ))}

        <CtaBtn title={"Load More"} customClass={"xl:mt-[4.792vw] mx-auto"} />
      </div>
    </section>
  );
};

export default Trends;
