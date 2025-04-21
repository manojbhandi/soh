import Link from "next/link";
import CtaBtn from "../Ui/CtaBtn";
import Video_Card from "./vid_card";
import SubMainTitle from "../Ui/SubMainTitle";
import LinkButton from "../Ui/LinkButton";

const VidCategory = ({ title, data, link }) => {
  return (
    <div className="container pt-10 xl:pt-[4vw] mb-10 xl:mb-[4vw]">
      <div className="flex justify-between items-start gap-5">
        {/* <h2 className="text-[24px] xl:text-[1.77vw] text-mainBlack font-fh mb-5 xl:mb-[3vw]">
          {title}
        </h2> */}
        <SubMainTitle title={title} customClass={"mb-5 xl:mb-[2.5vw]"} />

        <LinkButton text={"View All"} link={link} />
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-10 border-b border-[#cacaca] pb-5 xl:pb-[3vw] mb-5 xl:mb-[3vw]">
        {data.map((item, i) => (
          <Video_Card
            vidSrc={item.vidSrc}
            key={i}
            content={
              "Lorem Ipsum is simply dummy text of the printing and industry."
            }
          />
        ))}
      </div>

      <CtaBtn
        title={"Load More"}
        customClass={"font-inter capitalize mx-auto"}
      />
    </div>
  );
};

export default VidCategory;
