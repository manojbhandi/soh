import Image from "next/image";

const ImageStar = ({ imgSrc, customClass }) => {
  return (
    <div className={`relative ${customClass && customClass}`}>
      <div className="whiteStar right-[30px] lg:right-[2vw] !top-[-1px] !w-[40px] lg:!w-[3vw]"></div>
      <Image
        src={imgSrc}
        width={372}
        height={472}
        alt="SOH"
        className="w-full h-auto rounded-sm"
      />
    </div>
  );
};

export default ImageStar;
