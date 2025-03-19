import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import CtaBtn from "@/components/Ui/CtaBtn";
import MainTitle from "@/components/Ui/MainTitle";

const Listing = ({ title, data }) => {




  return (
    <section className="xl:mb-[6.25vw]">
      <div className="container">
        {title && (
          <MainTitle
            title={title}
            customClass={"text-center xl:mb-[3.646vw]"}
          />
        )}

        {data && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[25px] xl:gap-x-[1.563vw] xl:gap-y-[2.604vw] border-b border-[#CACACA] pb-[30px] xl:pb-[5.208vw] mb-[30px] xl:mb-[3.385vw]">
              {data.map((item, index) => (
                <ArticleCard
                  key={index}
                  articleImage={item?.image}
                  articleSubCategory={item?.articleSubcategory}
                  articleTitle={item?.title}
                  articleDpLink={item?.link}
                />
              ))}
            </div>
            <CtaBtn url={"#"} title={"Load More"} customClass={"mx-auto"} />
          </>
        )}
      </div>
    </section>
  );
};

export default Listing;
