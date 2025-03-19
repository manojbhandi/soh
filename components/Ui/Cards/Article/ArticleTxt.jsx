import ArticleTitle from "./ArticleTitle";
import ArticleShortPara from "./ArticleShortPara";
import ArticleAuthor from "./ArticleAuthor";
import ArticleSubCategory from "./ArticleSubCategory";

const ArticleTxt = ({
  articleSubCategory,
  articleTitle,
  articleShortPara,
  articleAuthor,
  paraStyle
}) => {
  return (
    <div className="mt-[15px] xl:mt-[1.563vw]">
      <ArticleSubCategory articleSubCategory={articleSubCategory} />
      <ArticleTitle articleTitle={articleTitle} />
      <ArticleShortPara articleShortPara={articleShortPara} paraStyle={paraStyle} />
      <ArticleAuthor articleAuthor={articleAuthor} />
    </div>
  );
};

export default ArticleTxt;
