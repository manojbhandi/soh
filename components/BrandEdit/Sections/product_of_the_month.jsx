import SubMainTitle from "@/components/Ui/SubMainTitle";
import Image from "next/image";

const Product_Of_The_Month = () => {
  return (
    <div className="bg-[#fffdf8] pb-10 xl:pb-[5vw]">
      <div className="container">
        <div className="xl:w-[65%] mx-auto">
          <div className="mb-5 xl:mb-[2vw]">
            <SubMainTitle
              title={"Product of the month"}
              customClass={"text-center mb-2"}
            />
            <p className="text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <Image
            src={"/images/brand-edit/pom/1.png"}
            width={476}
            height={612}
            alt="soh"
            className="w-full h-auto rounded-sm max-w-[416px] xl:max-w-[21.66vw] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Product_Of_The_Month;
