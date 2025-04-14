import Image from "next/image";
import Link from "next/link";

const Card = ({ imgSrc }) => {
  return (
    <div className="relative bestCard rounded-sm xl:rounded-lg overflow-hidden">
      <div className="imageCont relative">
        <Image
          src={imgSrc}
          width={600}
          height={1000}
          className="w-full h-auto"
          alt=""
        />
      </div>

      <div className="caption">
        <div className="text-[14px] xl:text-[0.72vw] text-white mb-5 xl:mb-[1vw]">
          Best of the Best
        </div>
        <div className="text-[20px] xl:text-[1.1vw] text-white xl:mb-[1.5vw]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </div>
        <Link
          href={"/#"}
          className="text-white font-inter italic tracking-[2px] hover:tracking-[3px] table text-[13px] xl:text-[0.7vw] border-b border-white transition-all pb-1 
            "
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
