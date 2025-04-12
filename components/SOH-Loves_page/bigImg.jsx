import Image from "next/image";

const BigImage = () => {
  return (
    <div className="">
      <Image
        src={"/images/sohLoves/big_img.png"}
        width={3000}
        height={2000}
        alt="soh_loves"
        className="w-full h-auto block"
      />
    </div>
  );
};

export default BigImage;
