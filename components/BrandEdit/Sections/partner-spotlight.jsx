import LinkButton from "@/components/Ui/LinkButton";
import Partner_Designation from "@/components/Ui/partner_designation";
import PartnerName from "@/components/Ui/partner_name";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import { reverse } from "d3";
import Image from "next/image";

const Partner_Spotlight = ({
  reverse_col,
  heading,
  partnerName,
  designation,
  content,
  link,
  imgSrc,
}) => {
  return (
    <div className="sm:grid sm:grid-cols-2 mb-10 xl:mb-[5vw]">
      <div
        className={`bg-[#F7F3EA] flex min-h-[20vw] py-10 px-[1rem] sm:px-0 relative ${
          reverse_col ? "order-1" : "order-2"
        }`}
      >
        <div
          className={`whiteStar ${
            reverse_col
              ? "right-[5%] md:right-[10%]"
              : "left-[5%] md:left-[10%]"
          }`}
        ></div>
        <div className="sm:w-[90%] lg:w-[80%] xl:w-[65%] m-auto">
          <SubMainTitle title={heading ? heading : "Partner Spotlight"} />
          {/* <h3 className="text-[#99742B] text-[20px] xl:text-[1.5vw] font-bold">
            {partnerName}
          </h3> */}
          <PartnerName partnerName={partnerName} />
          {designation && (
            // <div className="designation text-[#616161] text-[16px] xl:text-[1vw] font-medium mb-5 xl:mb-[1vw]">
            //   {designation}
            // </div>
            <Partner_Designation
              designation={designation}
              customClass={"mb-5 xl:mb-[1vw]"}
            />
          )}

          {imgSrc && (
            <Image
              src={imgSrc}
              width={440}
              height={562}
              className="w-full h-auto mx-auto rounded-sm mb-5 block sm:hidden"
              alt=""
            />
          )}

          <div
            className="*:text-[#616161] *:text-[14px] *:xl:text-[0.9vw] mb-10 xl:mb-[3vw]"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>

          <LinkButton text={"View All"} link={link ? link : "/#"} />
        </div>
      </div>

      <div
        className={`min-h-[20vw] py-10 xl:py-[4vw] hidden sm:flex ${
          reverse_col ? "order-2" : "order-1"
        } `}
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            width={440}
            height={562}
            className="w-[300px] sm:w-[70%] xl:w-[45%] h-auto m-auto rounded-sm "
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Partner_Spotlight;
