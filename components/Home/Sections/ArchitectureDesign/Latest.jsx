import SubMainTitle from "@/components/Ui/SubMainTitle";
import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import Cta from "@/components/Ui/Cta";

const Latest = () => {
  return (
    <>
      <SubMainTitle title={"Latest"} />
      <ArticleCard
        articleImage={"/images/architect/article01.jpg"}
        articleSubCategory={"Development Update"}
        articleTitle="Lorem Ipsum is simply dummy text of the printing and industry. "
        articleAuthor={"Imran Shaikh"}
      />
      <Cta url={"#"} name={"View All"} customClass={"mt-[10px]"} />
    </>
  );
};

export default Latest;
