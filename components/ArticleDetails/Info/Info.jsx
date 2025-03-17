
import ArticleSubCategory from "../../Ui/Cards/Article/ArticleSubCategory";
import Image from "next/image";

const Info = () => {
  return (
    <div className="container">
        <div className="flex items-center  justify-between">
          <div>
          <div className="flex items-center gap-x-[10px] xl:gap-x-[0.625vw] font-medium">
              <div className="flex-none w-[40px] xl:w-[2.083vw] aspect-square bg-[#BDB49E] rounded-full overflow-hidden">
                <Image src={'/images/suman.png'} width={100} height={100} className="h-full object-cover"/>
              </div>
              <div className="flex-none text-[13px]  xl:text-[0.938vw]">
                <h6 className="font-semibold  text-mainBlack  ">Suman Tarafdar <span className="font-medium block opacity-50 xl:text-[0.729vw]">Sr. Contributor</span></h6>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-[10px] xl:gap-x-[0.521vw] text-[10px] xl:text-[0.729vw] font-medium">
              <ArticleSubCategory
                articleSubCategory={"Category"}
                customClass={"!mb-0"}
              />
              <span>|</span> October, 24  
            </div>
          </div>
        </div>
      </div>
  );
};

export default Info;
