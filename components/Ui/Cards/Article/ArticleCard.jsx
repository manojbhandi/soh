import ArticleSubCategory from "./ArticleSubCategory";
import ArticleTitle from "./ArticleTitle";
import ArticleShortPara from "./ArticleShortPara";
import ArticleAuthor from "./ArticleAuthor";
import ArticleImage from "./ArticleImage";
import ArticleTxt from "./ArticleTxt";
import Link from "next/link";

const ArticleCard = ({
  articleImage,
  articleSubCategory,
  articleTitle,
  articleShortPara,
  articleAuthor,
  customClass,
  articleImgStyle,
  paraStyle,
  articleDpLink,
  articleVideoUrl,
  articleSubCategoryLink,
  ytImgIcon
}) => {
  return (
    <div className={`relative ${customClass ? customClass : ""}`}>
      {articleImage && (
        <ArticleImage
          articleImage={articleImage && articleImage}
          articleImgStyle={articleImgStyle && articleImgStyle}
          articleVideoUrl={articleVideoUrl && articleVideoUrl}
          ytImgIcon={ytImgIcon && ytImgIcon}
        />
      )}
      <ArticleTxt
        articleSubCategory={articleSubCategory && articleSubCategory}
        articleTitle={articleTitle && articleTitle}
        articleShortPara={articleShortPara && articleShortPara}
        articleAuthor={articleAuthor && articleAuthor}
        paraStyle={paraStyle && paraStyle}
        articleSubCategoryLink={articleSubCategoryLink}
        articleDpLink={articleDpLink && articleDpLink}
      />
      {articleDpLink && <Link href={articleDpLink} className="strechedLink"></Link>}
    </div>
  );
};

export default ArticleCard;
