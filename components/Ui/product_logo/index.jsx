import Image from "next/image";

const ProductLogo = ({ imgSrc, customClass }) => {
  return (
    <div
      className={`proLogo rounded-md lg:rounded-md border border-[#C2C2C2] flex bg-white ${customClass}`}
    >
      <Image
        src={imgSrc}
        width={206}
        height={76}
        alt="SOH"
        className="m-auto max-w-[90%] max-h-[90%] w-auto h-auto align-middle"
      />
    </div>
  );
};

export default ProductLogo;
