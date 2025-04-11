import Image from "next/image";
import Link from "next/link";

const Horizantal_Image_Card = ({ imgSrc, altTag, label, heading }) => {
  return (
    <div className="grid grid-cols-2 gap-10 xl:gap-[2vw]">
      <div>
        <Image
          src={imgSrc}
          width={1000}
          height={600}
          alt={altTag}
          className="w-full h-auto"
        />
      </div>

      <div>
        <label className="text-[#99742B] text-[13px] xl:[0.72vw] mb-5 xl:mb-[0.5vw] uppercase block">
          {label}
        </label>

        <div className="text-[18px] xl:text-[1.1vw] text-mainBlack mb-5 xl:mb-[1.1vw] font-medium">
          {heading}
        </div>

        <Link
          href={"/#"}
          className="text-mainBlack font-inter italic border-b border-black tracking-[2px] hover:tracking-[3px] pb-3 table text-[13px] xl:text-[0.7vw] transition-all"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Horizantal_Image_Card;
