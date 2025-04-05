import Link from "next/link";

const ArticleSubCategory = ({ articleSubCategory, customClass, articleSubCategoryLink }) => {
  return (
    <>
      {articleSubCategory && (
        <Link
          href={`/${articleSubCategoryLink}  `}
          className={`block text-[#99742B] font-medium text-[12px] mb-[5px] xl:text-[0.729vw] xl:mb-[0.781vw] uppercase relative z-[1] hover:underline ${customClass && customClass
            }`}
        >
          {articleSubCategory && articleSubCategory}
        </Link>
      )}
    </>
  );
};

export default ArticleSubCategory;
