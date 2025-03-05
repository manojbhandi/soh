

const ArticleLabel = ({articleLabel, customClass}) => {
  return (
    <span className={`block text-[#99742B] font-medium text-[12px] mb-[5px] xl:text-[0.729vw] xl:mb-[.5vw] uppercase ${customClass}`}>
      {articleLabel}
    </span>
  )
}

export default ArticleLabel
