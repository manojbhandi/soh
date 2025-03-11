import Image from "next/image"
import Link from "next/link"

const InstagramCard = ({url, imgSrc}) => {
  return (
    <Link href={url}>
      <Image
                  src={imgSrc}
                  width={500}
                  height={300}
                  alt=""
                  className="aspect-[5/6] object-cover object-center"
                />
    </Link>
  )
}

export default InstagramCard
