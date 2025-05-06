import Image from "next/image";
import SubMainTitle from "../Ui/SubMainTitle";

const ImageGallery = ({ data }) => {
  return (
    <div className="container mb-10 lg:mb-[4vw]">
      <SubMainTitle title={"Image Gallery"} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[3vw]">
        {data.map((item, i) => (
          <div key={i}>
            <Image
              src={item.imgSrc}
              width={357}
              height={453}
              alt=""
              className="w-full h-auto rounded-lg align-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
