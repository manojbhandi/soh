

const ArticleTitle = ({articleSubCategory, articleTitle, customClass}) => {
  return (
    <div>
      <span className={`block text-[#99742B] font-medium text-[12px] xl:mb-[0.521vw] xl:text-[0.729vw] uppercase`}>{articleSubCategory && articleSubCategory}</span>
      <h6
      className={`text-mainBlack font-medium overflow-hidden text-ellipsis line-clamp-2 text-[16px] xl:text-[1.042vw] mb-[10px] xl:mb-[0.521vw] ${
        customClass && customClass
      }`}
    >
      
      {articleTitle && articleTitle}
    </h6>
    </div>
    
  )
}

export default ArticleTitle
