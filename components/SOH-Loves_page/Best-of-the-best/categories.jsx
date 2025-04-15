import CtaBtn from "@/components/Ui/CtaBtn";
import ArticleCard from "../../Ui/Cards/Article/ArticleCard";
const Categories = () => {
  const data = [
    {
      img: "/images/best_of_best/category/1.png",
    },
    {
      img: "/images/best_of_best/category/2.png",
    },
    {
      img: "/images/best_of_best/category/3.png",
    },
    {
      img: "/images/best_of_best/category/1.png",
    },
    {
      img: "/images/best_of_best/category/2.png",
    },
    {
      img: "/images/best_of_best/category/3.png",
    },
    {
      img: "/images/best_of_best/category/1.png",
    },
    {
      img: "/images/best_of_best/category/2.png",
    },
    {
      img: "/images/best_of_best/category/3.png",
    },
  ];

  return (
    <div className="container mb-10 xl:mb-[5vw]">
      <div className="catList grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-[2vw] border-b border-[#CACACA] pb-5 xl:pb-[3vw] mb-5 xl:mb-[3vw]">
        {data.map((item, i) => (
          <ArticleCard
            customClass={"mb-5"}
            articleImage={item.img}
            key={i}
            articleSubCategory={"category"}
            articleTitle={
              "Lorem Ipsum is simply dummy text of the printing and industry..."
            }
            subCategoryClass={"!text-[14px] xl:!text-[0.7vw]"}
          />
        ))}
      </div>
      <CtaBtn title={"Load More"} customClass={"mx-auto"} />
    </div>
  );
};

export default Categories;
