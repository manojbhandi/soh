import SubMainTitle from "@/components/Ui/SubMainTitle";
import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import Cta from "@/components/Ui/Cta";

const Latest = ({ latestArticle }) => {
  console.log("latestArticle", latestArticle);

  return (
    <>
      <SubMainTitle title={"Latest"} />
      <ArticleCard
        articleImage={latestArticle?.image}
        articleSubCategory={latestArticle?.subCategory}
        articleTitle={latestArticle?.title}
        articleAuthor={latestArticle?.author}
        articleDpLink={latestArticle?.articlePath}
        articleSubCategoryLink={latestArticle?.subCategoryPath}
      />
      <Cta url={latestArticle?.categoryPath} name={"View All"} customClass={"mt-[10px]"} />
    </>
  );
};

export default Latest;
