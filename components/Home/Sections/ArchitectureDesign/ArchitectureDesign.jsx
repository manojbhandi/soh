import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import Cta from "@/components/Ui/Cta";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Image from "next/image";
import Latest from "./Latest";
import ArchitectSpotlight from "./ArchitectSpotlight";

const ArchitectureDesign = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center mb-[20px] xl:mb-[2.604vw]">
          <div className="flex-1">
            <SubMainTitle title={"Architecture + Design"} customClass={"!mb-0"} />
          </div>
          <div className="flex-none">
            <Cta url={"#"} name={"View All"} />
          </div>
        </div>

        <div className="pb-[30px] mb-[30px] md:pb-[50px] md:mb-[50px] xl:pb-[5.208vw] xl:mb-[5.208vw] border-b border-solid border-[#C2C2C2] lg:flex lg:items-end lg:justify-between">

          <div className="lg:w-7/12 xl:w-8/12 lg:order-last">
            <ArticleImage articleImage={'/images/architect/article01.jpg'} articleImgStyle={'lg:!mb-0'}/>
          </div>

          <div className="lg:w-4/12 xl:w-3/12">
            <ArticleCard articleSubCategory={'design & Decor'} articleTitle="Lorem Ipsum is simply dummy text of the printing and industry. " articleShortPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" paraStyle={'line-clamp-4'} articleAuthor={"Imran Shaikh"}/>
          </div>

        </div>

        <div className="lg:flex">

          <div className="pb-[30px] mb-[30px] border-b border-solid border-[#C2C2C2] lg:mb-0 lg:pb-0 lg:pr-[30px] xl:pr-[6%] lg:mr-[30px] xl:mr-[4%] lg:border-b-[0] lg:border-r-[1px] lg:w-4/12 xl:w-[30%]">
            <Latest/>
          </div>

          <div className=" lg:w-8/12">
            <ArchitectSpotlight/>
          </div>

         

        </div>
        
      </div>
    </section>
  )
}

export default ArchitectureDesign
