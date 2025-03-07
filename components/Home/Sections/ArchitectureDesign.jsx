import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import Cta from "@/components/Ui/Cta";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Image from "next/image";

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
            <SubMainTitle title={'Latest'}/>
            <ArticleCard articleImage={'/images/architect/article01.jpg'} articleSubCategory={'Development Update'} articleTitle="Lorem Ipsum is simply dummy text of the printing and industry. " articleAuthor={"Imran Shaikh"}/>
            <Cta url={'#'} name={'View All'} customClass={'mt-[10px]'}/>
          </div>

          <div className=" lg:w-8/12">
          <SubMainTitle title={'Architect Spotlight'}/>

          <div className="sm:flex sm:items-center xl:items-start sm:gap-x-[30px] xl:gap-x-[4.427vw]">
            <div className="radius mb-[20px] sm:w-4/12 xl:mb-0">
              <Image width={400} height={500} src={'/images/architect/spotlight/01.jpg'}/>
            </div>
            <div className="bg-[url('/images/quote.png')] bg-no-repeat bg-contain bg-center sm:w-8/12 xl:pt-[1vw]">
              <h6 className="font-medium text-[16px] xl:text-[1.25vw] text-mainBlack italic mb-[15px] xl:mb-[2.083vw] xl:leading-[1.875vw]">“I would like to remain within what is my capacity. Nature is nature. Yes, I am nature too, but in my physical constructs, I have limits and it is within those limits that I need to find ways to extend myself...”</h6>
              <p className="mb-[20px]"><span className="text-mainBlack font-medium">Bijoy Jain </span>- Founder, Studio Mumbai</p>
              <Cta url={'#'} name={'View all'} customClass={'xl:mt-[3.646vw]'}/>
            </div>
          </div>
          </div>

         

        </div>
        
      </div>
    </section>
  )
}

export default ArchitectureDesign
