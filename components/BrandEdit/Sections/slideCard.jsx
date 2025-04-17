import Image from "next/image";

const SlideCard = ({ imgSrc, para }) => {
  return (
    <div>
      {imgSrc && (
        <div className="mb-5 xl:mb-[1.5vw]">
          <Image
            src={imgSrc}
            width={300}
            height={300}
            alt={""}
            className="w-full h-auto"
          />
        </div>
      )}

      {para && (
        <div className="text-mainBlack text-[14px] xl:text-[0.9vw] font-medium">
          {para}
        </div>
      )}
    </div>
  );
};

export default SlideCard;
