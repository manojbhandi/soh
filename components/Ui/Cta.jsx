import Link from "next/link"

const Cta = ({url, name, customClass}) => {
  return (
    <Link href={url ? url : '#'} className={`table relative uppercase text-mainBlack z-[1] py-[5px] hover:px-[10px] hover:text-white  text-[12px] xl:text-[0.729vw] before:w-full before:h-[.5px] before:bg-mainBlack before:absolute before:bottom-0 before:left-0 hover:before:h-full before:z-[-1] hover:before:delay-[.4s] before:duration-[0.3s] ${customClass && customClass}`}>
      {name}
    </Link>
  )
}

export default Cta
