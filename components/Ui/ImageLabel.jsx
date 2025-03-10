import Image from "next/image";

const ImageLabel = ({labelPath, customClass}) => {
  return <Image src={labelPath} width={60} height={60} className={`w-[50px] absolute right-[15px] top-[15px] ${customClass ? customClass  : ''}`} />;
};

export default ImageLabel;
