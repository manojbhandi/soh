import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Cta from "@/components/Ui/Cta";

const Leadership = () => {
  return (
    <section>
      <div className="bg-[#F7F3EA] py-[50px] relative z-[1] md:before:absolute md:before:z-[-1] md:before:top-0 md:before:right-0 md:before:w-[48%] md:before:h-full md:before:bg-white">
        <div className="whiteStar right-[10%] md:right-[10%] xl:right-[52%]"></div>
        <div className="container">
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-6/12 lg:w-[52.2%] mb-10 md:mb-0 md:pr-[14.5%]">
              <div className="flex items-center mb-[20px]">
                <SubMainTitle
                  title={"Leadership"}
                  customClass={"flex-1 mb-0"}
                />
                <Cta url={"#"} name={"View All"} customClass={"flex-none md:hidden"} />
              </div>
              <div className="xl:mb-[5.208vw]">
                <ArticleCard
                  articleSubCategory="GM's Think Tank"
                  articleTitle="Lorem Ipsum is simply dummy text of the printing and industry."
                  articleShortPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  articleAuthor="Imran Shaikh"
                />
              </div>
              <Cta url={'#'} name={'Read More'}/>
            </div>
            <div className="md:w-5/12 lg:w-[35.4%]">
              <Cta url={"#"} name={"View All"} customClass={"flex-none hidden md:table ms-auto xl:mb-[2.344vw]"} />
              <ArticleCard
                articleImage={"/images/leadership/article1.jpg"}
                articleSubCategory="From the CEO lens"
                articleTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                articleShortPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                articleAuthor="Imran Shaikh"
              />
            </div>
            </div>
          </div>
        </div>
  
    </section>
  );
};

export default Leadership;
