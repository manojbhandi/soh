import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ url, image, name, imgClass }) => {
  return (
    <Link href={url} className="block group ">
      <div className="bg-[#F7F3EA] radius mb-3 xl:mb-[1.042vw] aspect-[5/6] flex items-center xl:px-[1.563vw]">
        <Image
          src={image}
          width={200}
          height={150}
          className={`group-hover:scale-[1.1] duration-[0.3s] ${
            imgClass && imgClass
          }`}
        />
      </div>
      <h6 className="text-center text-mainBlack font-medium capitalize xl:text-[1.042vw]">
        {name}
      </h6>
    </Link>
  );
};

export default ProductCard;
