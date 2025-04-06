import MainTitle from "@/components/Ui/MainTitle";
import BannerSlider from "./BannerSlider";
import Image from "next/image";

const Banner = ({ heading, para, sideImg, bannerSliderData }) => {
  bannerSliderData = [{ image: bannerSliderData }]
  return (
    <div className="relative bg-grey">
      {sideImg && <div className="whiteStar left-[5%]"></div>}
      <div className={`container ${sideImg ? "xl:pr-0" : ""}`}>
        <div
          className={`${sideImg ? "md:flex md:gap-x-[50px] xl:gap-x-[6.446vw] items-center" : ""
            } `}
        >
          <div
            className={`${sideImg ? "md:w-5/12 xl:w-[33.854vw] text-left" : "xl:w-[54.427vw] mx-auto text-center"
              } py-[30px] xl:py-[4.167vw] xl:text-[1.042vw] `}
          >
            <MainTitle title={heading} />
            <p>{para}</p>
          </div>
          {sideImg && (
            <div className="flex-1">
              <Image src={sideImg} width={900} height={900} className="aspect-square" />
            </div>
          )}
        </div>
      </div>
      {bannerSliderData && bannerSliderData?.length > 0 && (
        <div className="container">
          <BannerSlider bannerSliderData={bannerSliderData && bannerSliderData} />
        </div>
      )}
      {bannerSliderData && bannerSliderData?.length > 0 && <div className="absolute left-0 w-full bottom-0 h-[50px] xl:h-[7.526vw] bg-white before:z-[-1]"></div>}
    </div>
  );
};

export default Banner;
