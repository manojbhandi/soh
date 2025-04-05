import Link from "next/link";

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
      {articleSubCategoryLink ?
        <Link href={articleSubCategoryLink}>
          <span
            className={`block text-[#99742B] font-medium text-[12px] xl:mb-[0.521vw] xl:text-[0.729vw] uppercase ${subcategoryStyle ? subcategoryStyle : ""
              }`}
          >
            {articleSubCategory && articleSubCategory}
          </span>
        </Link> : null
      }
      <h6
        className={`text-mainBlack font-medium overflow-hidden text-ellipsis line-clamp-2 sm:text-[16px] xl:text-[1.042vw] mb-[10px] xl:mb-[0.521vw] ${customClass ? customClass : ""
          }`}
      >
        {articleTitle && articleTitle}
      </h6>
    </div>
  );
};

export default ArticleTitle;
