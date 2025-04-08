import Link from "next/link";
import ArticleSubCategory from "./ArticleSubCategory";

const ArticleTitle = ({
  articleSubCategory,
  articleTitle,
  customClass,
  subcategoryStyle,
  parentClass,
  articleSubCategoryLink = ""
}) => {
  return (
    <div className={parentClass ? parentClass : ''}>
      {articleSubCategory ? <ArticleSubCategory articleSubCategoryLink={articleSubCategoryLink ? articleSubCategoryLink : '#'} articleSubCategory={articleSubCategory} customClass={`${subcategoryStyle ? subcategoryStyle : ""
        }`}/> : null
      
      }
      <h6
        className={`text-mainBlack font-medium overflow-hidden text-ellipsis line-clamp-2 text-[16px] xl:text-[1.042vw] mb-[10px] xl:mb-[0.521vw] ${customClass ? customClass : ""
          }`}
      >
        {articleTitle && articleTitle}
      </h6>
    </div>
  );
};

export default ArticleTitle;
