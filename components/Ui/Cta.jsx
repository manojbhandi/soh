import Link from "next/link"

const Cta = ({url, name}) => {
  return (
    <Link href={url}>
      {name}
    </Link>
  )
}

export default Cta
