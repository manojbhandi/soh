import ArticleAuthor from "@/components/Ui/Cards/Article/ArticleAuthor";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import ArticleShortPara from "@/components/Ui/Cards/Article/ArticleShortPara";
import ArticleSubCategory from "@/components/Ui/Cards/Article/ArticleSubCategory";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";
import Cta from "@/components/Ui/Cta";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";

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
                    articleImage={"/images/business/article1.jpg"}
                    articleImgStyle={'lg:aspect-[5/6] xl:!mb-0'}
                  />
                </div>

                <div className="lg:w-[50%] xl:w-[21.354vw]">
                  <ArticleSubCategory articleSubCategory="GM's Think Tank" />
                  <ArticleTitle articleTitle="Lorem Ipsum is simply dummy text of the printing and industry. " />

                  <ArticleShortPara articleShortPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..." paraStyle={'line-clamp-4'} />
                  <ArticleAuthor articleAuthor={"Imran Shaikh"} />

 
                  <Cta url={'#'} name={'Read More'} customClass={'mt-[20px] lg:mt-[50px] xl:mt-[3.906vw]'}/>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 lg:w-[30%] xl:w-[28%]">

              <div className="grid grid-cols-2 md:grid-cols-1 gap-x-[10px] sm:gap-x-[20px] md:gap-x-0 md:pl-[30px] xl:pl-0">
                <ArticleCard
                  articleImage={"/images/business/article2.jpg"}
                  articleImgStyle={"md:w-1/2 xl:w-[11.979vw]"}
                  articleSubCategory="Markets"
                  articleTitle="Lorem Ipsum is simply dummy text of the printing and industry."
                  articleAuthor="Imran Shaikh"
                  customClass={"md:border-b md:border-[#C2C2C2] md:pb-[30px] xl:pb-[1.563vw] md:mb-[30px] xl:mb-[1.563vw]"}
                />

                <ArticleCard
                  articleImage={"/images/business/article3.jpg"}
                  articleImgStyle={"md:w-1/2 xl:w-[11.979vw]"}
                  articleSubCategory="Development Update"
                  articleTitle="Lorem Ipsum is simply dummy text of the printing and industry."
                  articleAuthor="Imran Shaikh"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
