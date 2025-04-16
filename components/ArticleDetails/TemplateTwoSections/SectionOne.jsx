import SubMainTitle from "@/components/Ui/SubMainTitle";
import Gallery from "../Gallery/Gallery";
import { stripHtmlTags } from "@/utils/commonFunctions";

const SectionOne = ({ sectionData, articleData }) => {

  return (
    <section>
      <div className="xl:mb-[3.646vw]">
        {sectionData?.paragraphs?.[0]?.content ? (
          <p
          >
            {stripHtmlTags(sectionData.paragraphs[0].content)}
          </p>
        ) : null}
      </div>
      <div>
        <SubMainTitle title={sectionData?.title} />
        <Gallery gallery={articleData?.ArticleSection?.[0]?.ArticleMedia} />
      </div>
    </section>
  );
};

export default SectionOne;
