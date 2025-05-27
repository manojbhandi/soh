import LinkButton from "@/components/Ui/LinkButton";
import MainTitle from "@/components/Ui/MainTitle";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Slider from "./slider";
import Image from "next/image";

const ScrollSlider = ({ customClass, icon, title, para, data }) => {
  return (
    <div className={`${customClass && customClass} py-10 xl:py-[5vw]`}>
      <div className="container md:pe-0 md:flex justify-between">
        <div className="md:w-[25%] xl:w-[22%] relative flex items-center mb-10 md:mb-0">
          <div className="leftCont">
            {icon && (
              <div className="w-[70px] xl:w-[4vw] mb-5 xl:mb-[2vw]">
                <Image
                  src={icon}
                  width={300}
                  height={300}
                  alt={""}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div className="mb-8 xl:mb-[2.5vw]">
              <SubMainTitle title={title} customClass={"mb-4 xl:mb-[0.3vw]"} />

              <p>{para}</p>
            </div>

            <LinkButton text={"View All"} />
          </div>
        </div>

        <div className="md:w-[70%] xl:w-[73%]">
          <Slider data={data} />
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;
