import ArticleTitle from "./ArticleTitle";
import ArticleShortPara from "./ArticleShortPara";
import ArticleAuthor from "./ArticleAuthor";
import ArticleSubCategory from "./ArticleSubCategory";

const ArticleTxt = ({
  articleSubCategory,
  articleTitle,
  articleShortPara,
  articleAuthor,
  paraStyle,
  articleSubCategoryLink,
  articleDpLink
}) => {
  return (
    <div className="mt-[15px] xl:mt-[1.563vw]">
      <ArticleSubCategory articleSubCategory={articleSubCategory} articleSubCategoryLink={articleSubCategoryLink} />
      <ArticleTitle articleTitle={articleTitle} articleDpLink={articleDpLink}/>
      <ArticleShortPara articleShortPara={articleShortPara} paraStyle={paraStyle} />
      <ArticleAuthor articleAuthor={articleAuthor} />
    </div>
  );
};

export default ArticleTxt;
