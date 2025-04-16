import Image from 'next/image'
import Link from 'next/link'

const BrandCard = ({url, image}) => {
  return (
    <Link href={url} className='radius block border border-solid border-[#C2C2C2] xl:px-[2.604vw]'>
        <Image src={image} width={200} height={150} />
    </Link>
  )
}

export default BrandCard