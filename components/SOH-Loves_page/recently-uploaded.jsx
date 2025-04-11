import Link from "next/link";
import MainTitle from "../Ui/MainTitle";
import Horizantal_Image_Card from "../Ui/Cards/horizantal_image_card";

const Recently_Uploaded = () => {
  return (
    <div className="container grid grid-cols-4">
      <div className="col-span-3 border-r border-black pe-5 xl:pe-[3vw]">
        <div className="flex justify-between items-start mb-5 xl:mb-[3vw]">
          <h2 className="text-[24px] xl:text-[1.8vw] text-mainBlack mb-5 xl:mb-[2vw] font-fh">
            Recently Uploaded
          </h2>

          <Link
            href={"/#"}
            className="text-mainBlack font-inter italic tracking-[2px] hover:tracking-[3px] table text-[13px] xl:text-[0.7vw] border-b border-black transition-all pb-3 
            xl:pb-[0.5vw]"
          >
            View All
          </Link>
        </div>

        <div>
          <Horizantal_Image_Card
            imgSrc={"/images/sohLoves/recent_upload/1.png"}
            altTag={"soh loves"}
            label={"Best of the Best"}
            heading={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Recently_Uploaded;
