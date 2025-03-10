
const SubMainTitle = ({title, customClass}) => {
  return (
    <h4 className={`text-[24px] sm:text-[25px] xl:text-[1.771vw] mb-[20px] xl:mb-[1.563vw] leading-normal font-fh text-mainBlack
     ${customClass ? customClass : ''}`}>
      {title}
    </h4>
  )
}

export default SubMainTitle
