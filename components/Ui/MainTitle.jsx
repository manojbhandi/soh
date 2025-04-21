
const MainTitle = ({title, children, customClass}) => {
  return (
    <h2 className={`capitalize text-[24px] sm:text-[32px] xl:text-[2.5vw] mb-[20px] xl:mb-[0.833vw] leading-normal font-fh text-black ${customClass}`}>
      {title && title} {children && children}
    </h2>
  )
}

export default MainTitle
