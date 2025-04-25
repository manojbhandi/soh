import Image from "next/image";
import MainTitle from "../MainTitle";

const BrandBanner = ({ customClass, imgSrc, title, para }) => {
  return (
    <div className={`sm:grid sm:grid-cols-2 ${customClass}`}>
      <div>
        <Image
          src={imgSrc ? imgSrc : "/images/brand-listing/left_banner.jpg"}
          width={943}
          height={745}
          alt=""
        />
      </div>
      <div className="flex bg-[#F7F3EA] relative">
        <div class="whiteStar right-[5%] md:right-[5%]"></div>
        <div className="m-auto p-[20px] sm:p-[0px] sm:w-[90%] md:w-[80%] lg:w-[52%]">
          <MainTitle title={title} customClass={"text-[#000]"} />

          <div className="*:text-[16px] *:lg:text-[1.1vw] *:text-[#616161]">
            <p>{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBanner;
