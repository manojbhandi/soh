
const SubMainTitle = ({title, customClass}) => {
  return (
    <h4 className={`text-[20px] sm:text-[25px] xl:text-[1.771vw] mb-[20px] xl:mb-[0.833vw] leading-normal font-fh text-mainBlack
     ${customClass}`}>
      {title}
    </h4>
  )
}

export default SubMainTitle
