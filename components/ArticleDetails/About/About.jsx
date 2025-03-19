import ArticleSubCategory from "../../Ui/Cards/Article/ArticleSubCategory";
import Image from "next/image";

const About = ({ image, name, designation, category, date }) => {
  return (
    <div className="container">
      <div className="flex items-center  justify-between">
        <div>
          <div className="flex items-center gap-x-[10px] xl:gap-x-[0.625vw] font-medium">
            {image && (
              <div className="flex-none w-[40px] xl:w-[2.083vw] aspect-square bg-[#BDB49E] rounded-full overflow-hidden">
                <Image
                  src={image}
                  width={100}
                  height={100}
                  className="h-full object-cover"
                />
              </div>
            )}
            <div className="flex-none text-[13px]  xl:text-[0.938vw]">
              <h6 className="font-semibold  text-mainBlack  ">
                {name && name}
                <span className="font-medium block opacity-50 xl:text-[0.729vw]">
                  {designation && designation}
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-[10px] xl:gap-x-[0.521vw] text-[10px] xl:text-[0.729vw] font-medium">
            <ArticleSubCategory
              articleSubCategory={category}
              customClass={"!mb-0"}
            />
            <span>|</span> {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
