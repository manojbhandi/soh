import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import Cta from "@/components/Ui/Cta";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Image from "next/image";

const Voyages = ({ sectionData }) => {
  sectionData = sectionData?.[0]
  const articleData = sectionData?.data?.[0];
  return (
    <section>
      <div className="bg-grey overflow-hidden lg:bg-transparent">
        <div className="container relative lg:max-w-[inherit] lg:pl-0">
          <div className="flex items-center">
            <div className="lg:w-[60%] xl:w-[65%] lg:h-[500px] xl:h-[35.156vw] hidden lg:block">
              <ArticleImage
                articleImage={articleData?.image}
                articleImgStyle={"!mb-0 rounded-s-none h-full lg:aspect-auto"}
              />
            </div>
            <div className="lg:w-[40%] xl:w-[35%] bg-grey py-[30px] md:py-[50px] xl:py-[4.167vw] lg:pl-[50px] xl:pl-[4.2vw] relative before:absolute before:w-full before:h-full before:left-full before:top-0 before:bg-grey">

              <div className="whiteStar right-0 xl:left-full xl:right-auto"></div>
              <SubMainTitle
                title={sectionData?.heading}
                customClass={"xl:mb-[2vw]"}
              />
              <ArticleCard
                articleImage={articleData?.image}
                articleImgStyle={"lg:hidden"}
                articleSubCategory={articleData?.subCategory}
                articleTitle={
                  articleData?.title
                }
                articleShortPara={articleData?.para}
                articleAuthor={articleData?.author}
                articleDpLink={articleData?.articlePath}
                articleSubCategoryLink={articleData?.subCategoryPath}
                paraStyle={"line-clamp-4"}
              />

              <Cta
                url={articleData?.categoryPath}
                name="Read More"
                customClass={"mt-[30px] xl:mt-[1.563vw]"}
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voyages;
