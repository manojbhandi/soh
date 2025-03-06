
const ArticleShortPara = ({articleShortPara, paraStyle}) => {
  return (
    <p className={`overflow-hidden text-ellipsis line-clamp-3 mb-[10px] text-[12px] sm:text-[14px] xl:!mb-[.5vw] ${paraStyle ? paraStyle : ''}`}>
      {articleShortPara && articleShortPara}
    </p>
  )
}

export default ArticleShortPara
