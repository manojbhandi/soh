import ArticleListingPage from "@/components/ArticleListing/ArticleListingPage";
import { API_END_POINTS } from "@/utils/constants";
import { fetchPageData } from "@/utils/fetchPageData";

const index = ({ articles, categories }) => {
  return (
    <>
      <ArticleListingPage
        articles={articles?.props?.data}
        categories={categories?.props?.data}
      />
    </>
  );
};

export default index;

export const getServerSideProps = async (context) => {
  console.log("subCategory", context.params?.subCategory);

  const [articles, categories] = await Promise.all([
    fetchPageData(
      API_END_POINTS.getArticlesBySubCategorySlug(context.params?.subCategory)
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
