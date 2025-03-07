import ArticleSubCategory from "./ArticleSubCategory";
import ArticleTitle from "./ArticleTitle";
import ArticleShortPara from "./ArticleShortPara";
import ArticleAuthor from "./ArticleAuthor";
import ArticleImage from "./ArticleImage";

const ArticleCard = ({
  articleImage,
  articleSubCategory,
  articleTitle,
  articleShortPara,
  articleAuthor,
  customClass,
  articleImgStyle,
  paraStyle
}) => {
  return (
    <div className={`${customClass ? customClass : ''}`}>
      {articleImage && (
        <ArticleImage articleImage={articleImage} articleImgStyle={articleImgStyle && articleImgStyle} />
      )}
      
      {articleTitle && <ArticleTitle articleSubCategory={articleSubCategory && articleSubCategory} articleTitle={articleTitle && articleTitle} />}
      {articleShortPara && (
        <ArticleShortPara articleShortPara={articleShortPara && articleShortPara} paraStyle={paraStyle && paraStyle} />
      )}
      {articleAuthor && <ArticleAuthor articleAuthor={articleAuthor && articleAuthor} />}

      
    </div>
  );
};

export default ArticleCard;
