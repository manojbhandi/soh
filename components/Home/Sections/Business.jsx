import ArticleAuthor from "@/components/Ui/Cards/Article/ArticleAuthor";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import ArticleShortPara from "@/components/Ui/Cards/Article/ArticleShortPara";
import ArticleSubCategory from "@/components/Ui/Cards/Article/ArticleSubCategory";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";
import Cta from "@/components/Ui/Cta";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";

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
    subCategory: "GM's Think Tank",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/business/article3.jpg",
    subCategory: "GM's Think Tank",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
];

const Business = () => {
  return (
    <section>
      <div className="bg-grey py-[50px] lg:py-[80px] xl:pt-[7.813vw] xl:pb-[5.99vw] relative">
        <div className="whiteStar right-[5%]"></div>

        <div className="container">
          <div className="flex items-center mb-[20px] xl:mb-[2.604vw]">
            <div className="flex-1">
              <SubMainTitle title={"Business"} customClass={"!mb-0"} />
            </div>
            <div className="flex-none">
              <Cta url={"#"} name={"View All"} />
            </div>
          </div>

          <div className="md:flex justify-between">
            <div className="md:w-1/2 lg:w-[68%] xl:w-[67%] pb-[30px] md:pb-0 md:pr-[30px] mb-[30px] xl:mb-0 border-b border-[#C2C2C2]  md:border-b-0 md:border-r">
              <div className="lg:flex">
                <div className="lg:w-[48%] xl:w-[26.042vw] lg:mr-[40px] xl:mr-[3.385vw]">
                  <ArticleImage
                    articleImage={businessArticle[0]?.image}
                    articleImgStyle={"lg:aspect-[5/6] xl:!mb-0"}
                  />
                </div>

                <div className="lg:w-[50%] xl:w-[21.354vw]">
                  <ArticleSubCategory
                    articleSubCategory={businessArticle[0]?.subCategory}
                  />
                  <ArticleTitle articleTitle={businessArticle[0]?.title} />
                  <ArticleShortPara
                    articleShortPara={businessArticle[0]?.para}
                    paraStyle={"line-clamp-4"}
                  />
                  <ArticleAuthor articleAuthor={businessArticle[0]?.author} />
                  <Cta
                    url={"#"}
                    name={"Read More"}
                    customClass={"mt-[20px] lg:mt-[50px] xl:mt-[3.906vw]"}
                  />
                </div>
              </div>
            </div>

            <div className="md:w-1/2 lg:w-[30%] xl:w-[28%]">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-x-[10px] sm:gap-x-[20px] md:gap-x-0 md:pl-[30px] xl:pl-0 first:*:md:border-b first:*:md:border-[#C2C2C2] first:*:md:pb-[30px] first:*:xl:pb-[1.563vw] first:*:md:mb-[30px] first:*:xl:mb-[1.563vw]">
                {businessArticle.slice(1, 3).map((item, index) => (
                  <ArticleCard
                    key={index}
                    articleImage={item?.image}
                    articleImgStyle={"md:w-1/2 xl:w-[11.979vw]"}
                    articleSubCategory={item?.subCategory}
                    articleTitle={item?.title}
                    articleShortPara={item?.para}
                    articleAuthor={item?.author}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
