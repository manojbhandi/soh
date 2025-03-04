import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="block w-100">
        <Image src="/images/logo.svg" width={165} height={75} alt="logo"/>
    </Link>
  )
}

export default Logo
