import SubMainTitle from "@/components/Ui/SubMainTitle";
import Gallery from "../Gallery/Gallery";
import { stripHtmlTags } from "@/utils/commonFunctions";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";

const SectionOne = ({ sectionData, articleData }) => {

  return (
    <section>
      <div className="xl:mb-[3.646vw]">
        {sectionData?.paragraphs?.[0]?.content ? (

          <p dangerouslySetInnerHTML={{ __html: sectionData.paragraphs[0].content }} />
        ) : null}
      </div>
      <div>
        <SubMainTitle title={sectionData?.title} />
        {/* <Gallery gallery={articleData?.ArticleSection?.[0]?.ArticleMedia} /> */}
        <div className="mx-auto ">
          {
            sectionData?.image?.length === 1 ?
              <div>
                < ArticleImage articleImage={sectionData.image?.[0].url} articleImgStyle={''} />
                {sectionData?.image?.[0]?.caption && <p className="text-center mt-1" dangerouslySetInnerHTML={{ __html: sectionData?.image?.[0]?.caption }} />}
              </div>
              : sectionData?.image?.length === 2 ?
                <div className=" flex gap-2">
                  {
                    sectionData?.image.map((item) => (
                      <div className="w-1/2 ">
                        < ArticleImage articleImage={item?.url} articleImgStyle={''} />
                        {item?.caption && < p className="text-center mt-1" dangerouslySetInnerHTML={{ __html: item?.caption }} />}

                      </div>
                    ))
                  }

                </div>
                :
                <Gallery gallery={sectionData?.image} />
          }
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
