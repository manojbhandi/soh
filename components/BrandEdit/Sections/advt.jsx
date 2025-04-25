import Image from "next/image";

const Advt = ({ imgSrc, vidSrc }) => {
  return (
    <div className="container mb-10 xl:mb-[5vw]">
      {imgSrc && (
        <Image
          className="w-full h-auto"
          src={imgSrc}
          width={1920}
          height={400}
          alt=""
        />
      )}
    </div>
  );
};

export default Advt;
