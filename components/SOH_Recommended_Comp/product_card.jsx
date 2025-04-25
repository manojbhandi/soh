import Image from "next/image";

const ProductCard = ({ imgSrc, title }) => {
  return (
    <div className="rounded-[10px] xl:rounded-[1vw] border border-[#E2DDD0] flex flex-col p-4 lg:p-[1.5vw]">
      <div className="imgCont flex-1 mb-4 lg:mb-[1vw]">
        <Image src={imgSrc} width={270} height={337} alt={""} />
      </div>
      <div className="flex-1">{title}</div>
    </div>
  );
};

export default ProductCard;
