import Image from "next/image";
import BannerRightCont from "../Ui/banner_rightCont";

const Banner = () => {
  return (
    <div className="bg-[#F7F3EA] py-10 lg:py-[5vw]">
      <div className="container sm:grid sm:grid-cols-5">
        <div className="flex col-span-2">
          <div className="w-full p-[20px] lg:p-0 lg:max-w-[24.6vw]">
            <Image
              src={"/images/partner-spotlight/partner.jpg"}
              className="w-full h-auto mb-5 lg:mb-[1.5vw] rounded-lg"
              width={473}
              height={606}
            />

            <div className="text-[24px] lg:text-[1.5vw] text-center text-[#99742B] font-bold">
              Prashant Dalmia
            </div>
            <div className="text-center text-[#616161] text-[18px] lg:text-[1vw]">
              Founder, Ace Space
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <BannerRightCont
            title={"Partner Spotlight"}
            subTitle={
              "Can you tell us about the journey of Acespace? How did the brand come to life, and what inspired its entry into the veneer industry?"
            }
            para={
              "The story of Acespace began in 2015 in a way I never could have imagined. My background was far removed from this world—I'm a Chartered Accountant and an MBA, with years of experience at ICICI Bank and Morgan Stanley. My entrepreneurial journey actually started in the medical field, so when it came to veneer, I was completely in uncharted territory..."
            }
            customWidth={"sm:w-[90%] md:w-[80%] lg:w-[78%]"}
            subTitleFont={"!font-inter font-medium"}
            linkText={"Read More"}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
