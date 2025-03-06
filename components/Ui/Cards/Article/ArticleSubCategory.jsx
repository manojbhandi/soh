

const ArticleSubCategory = ({articleSubCategory, customClass}) => {
  return (
    <span className={`block text-[#99742B] font-medium text-[12px] mb-[5px] xl:text-[0.729vw] xl:mb-[0.781vw] uppercase ${customClass && customClass}`}>
      {articleSubCategory && articleSubCategory}
    </span>
  )
}

export default ArticleSubCategory
