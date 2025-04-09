import Link from "next/link";

const ArticleSubCategory = ({ articleSubCategory, customClass, articleSubCategoryLink }) => {
  return (
    <>
      {articleSubCategory && (
        <Link
          href={`/${articleSubCategoryLink}  `}
          className={`block text-[#99742B] font-medium mb-[5px] text-[12px] sm:text-[14px] xl:text-[0.833vw] xl:mb-[0.781vw] uppercase relative z-[1] hover:underline ${customClass && customClass
            }`}
        >
          {articleSubCategory && articleSubCategory}
        </Link>
      )}
    </>
  );
};

export default ArticleSubCategory;
