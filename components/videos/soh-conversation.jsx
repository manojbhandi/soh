import CtaBtn from "../Ui/CtaBtn";
import LinkButton from "../Ui/LinkButton";
import SubMainTitle from "../Ui/SubMainTitle";
import Video_Card from "./vid_card";

const SOH_Conversation = () => {
  return (
    <div className="bg-[#F7F3EA] py-5 xl:py-[4vw] mb-10 xl:mb-[4vw]">
      <div className="container">
        <SubMainTitle title={"SOH Conversation"} />

        <div className="grid sm:grid-cols-3 gap-5 xl:gap-[2.5vw] mb-10 xl:mb-[2.7vw] items-end">
          <div className="col-span-2">
            <Video_Card vidSrc={"uyTNLtcrjas"} />
          </div>
          <div className="col-span-1">
            <h2 className="text-mainBlack text-[20px] xl:text-[1.25vw] mb-5 xl:mb-[1.3vw] font-medium">
              Lorem Ipsum is simply dummy text of the printing industry.
            </h2>
            <p className="text-[#616161] text-[14px] xl:text-[0.93vw] mb-5 xl:mb-[4vw]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>

            <LinkButton text={"Read More"} link={"/#"} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-5 xl:gap-[2.5vw] items-end pb-5 xl:pb-[3vw] border-b border-[#cacaca] mb-5 xl:mb-[3vw]">
          <div className="col-span-1">
            <Video_Card
              vidSrc={"uyTNLtcrjas"}
              content={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
          </div>

          <div className="col-span-1">
            <Video_Card
              vidSrc={"uyTNLtcrjas"}
              content={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
          </div>

          <div className="col-span-1">
            <Video_Card
              vidSrc={"uyTNLtcrjas"}
              content={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              }
            />
          </div>
        </div>

        <CtaBtn
          title={"Load More"}
          customClass={"mx-auto font-inter capitalize"}
        />
      </div>
    </div>
  );
};

export default SOH_Conversation;
