import TemplateOne from "@/components/ArticleDetails/TemplateOne";
import TemplateTwo from "@/components/ArticleDetails/TemplateTwo";
import { API_END_POINTS } from "@/utils/constants";
import { fetchPageData } from "@/utils/fetchPageData";
import { useRouter } from "next/router";

const ArticleDetails = ({ data }) => {
  return (
    <>
      {data?.article?.articleTypeId === 1 && (
        <TemplateOne articleData={data?.article} />
      )}
      {data?.article?.articleTypeId === 2 && (
        <TemplateTwo articleData={data?.article} />
      )}
    </>
  );
};

export default ArticleDetails;
export const getServerSideProps = async (context) => {
  return fetchPageData(API_END_POINTS.getArticleBySlug(context.params.slug));
};
