import ArticleShortPara from "../Ui/Cards/Article/ArticleShortPara";
import ArticleSubCategory from "../Ui/Cards/Article/ArticleSubCategory";
import ArticleTitle from "../Ui/Cards/Article/ArticleTitle";
import LinkButton from "../Ui/LinkButton";

const RelatedTextCard = ({ articleSubCategory, articleTitle, para }) => {
  return (
    <div>
      <ArticleSubCategory articleSubCategory={articleSubCategory} />
      <ArticleTitle articleTitle={articleTitle} />
      <ArticleShortPara articleShortPara={para} paraStyle={"xl:!mb-[1.5vw]"} />
      <LinkButton text={"Read More"} />
    </div>
  );
};

export default RelatedTextCard;
