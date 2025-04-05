import ArticleLandingPage from "@/components/ArticleListing/ArticleLandingPage";
import { getCategoryId } from "@/utils/commonFunctions";
import { API_END_POINTS } from "@/utils/constants";
import { fetchPageData } from "@/utils/fetchPageData";
import { useRouter } from "next/router";
const Index = ({ articles, categories }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <ArticleLandingPage
        articles={articles?.props?.data}
        categories={categories?.props?.data}
      />
    </>
  );
};

export default Index;

export const getServerSideProps = async (context) => {
  const [articles, categories] = await Promise.all([
    fetchPageData(
      API_END_POINTS.getArticlesByCategorySlug(context.params.category)
    ),
    fetchPageData(API_END_POINTS.getAllCatgories),
  ]);

  return {
    props: {
      articles,
      categories,
    },
  };
};
