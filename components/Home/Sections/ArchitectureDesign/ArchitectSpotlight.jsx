import SubMainTitle from "@/components/Ui/SubMainTitle";
import Cta from "@/components/Ui/Cta";
import Image from "next/image";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";

const ArchitectSpotlight = ({ sectionData }) => {
  if (!sectionData) {
    return null;
  }
  return (
    <>
      <SubMainTitle title={'Architect Spotlight'} />

      <div className="sm:flex sm:items-center xl:items-start sm:gap-x-[30px] xl:gap-x-[4.427vw]">
        {/* <div className="radius mb-[20px] sm:w-4/12 xl:mb-0">
          <Image width={400} height={500} src={'/images/architect/spotlight/01.jpg'} />
        </div> */}
        {
          < div className="lg:w-1/2 xl:w-[26.042vw] lg:mr-[3.385vw] mb-[15px]">
            <ArticleImage
              articleImage={sectionData?.image}
              articleImgStyle={"!pt-[120%]"}
              imageCustomClass={"object-right"}
            />
          </div>
        }
        <div className="bg-[url('/images/quote.png')] bg-no-repeat bg-contain bg-center sm:w-8/12 xl:pt-[1vw]">
          <ArticleCard
            articleSubCategory={sectionData?.subCategory}
            articleTitle={sectionData?.title}
            articleShortPara={sectionData?.para} paraStyle={'line-clamp-4'}
            articleAuthor={sectionData?.author}
            articleSubCategoryLink={sectionData?.subCategoryPath}
            articleDpLink={sectionData?.articlePath}
          />
          {/* <h6 className="font-medium text-[16px] xl:text-[1.25vw] text-mainBlack italic mb-[15px] xl:mb-[2.083vw] xl:leading-[1.875vw]">“I would like to remain within what is my capacity. Nature is nature. Yes, I am nature too, but in my physical constructs, I have limits and it is within those limits that I need to find ways to extend myself...”</h6>
          <p className="mb-[20px]"><span className="text-mainBlack font-medium">Bijoy Jain </span>- Founder, Studio Mumbai</p> */}
          <Cta url={sectionData?.articlePath} name={'Read More'} customClass={'xl:mt-[3.646vw]'} />
        </div>
      </div >
    </>
  )
}

export default ArchitectSpotlight
