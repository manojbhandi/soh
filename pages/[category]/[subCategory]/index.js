import ArticleListingPage from "@/components/ArticleListing/ArticleListingPage";
import Filter_Table from "@/components/development_update/filter-table";
import Heading_Section from "@/components/development_update/heading-section";
import WorldMapBanner from "@/components/development_update/world-map-banner";
import { API_END_POINTS, SUBCATEGORY_SLUGS_MAP } from "@/utils/constants";
import { fetchPageData } from "@/utils/fetchPageData";

const index = ({
  articles,
  categories,
  subCategory,
  isDevlopmentUpdate,
  locations,
  hotelOwners,
  hotelCompanies,
}) => {
  console.log("HOTEL DATA", locations, hotelOwners, hotelCompanies);
  return (
    <>
      {subCategory === SUBCATEGORY_SLUGS_MAP.developmentUpdate ? (
        <>
          <WorldMapBanner />
          <Heading_Section />
          <Filter_Table
            locations={locations}
            hotelOwners={hotelOwners}
            hotelCompanies={hotelCompanies}
          />
        </>
      ) : null}
      <ArticleListingPage
        articles={articles?.props?.data}
        categories={categories?.props?.data}
        showBanner={subCategory != SUBCATEGORY_SLUGS_MAP.developmentUpdate}
        isDevlopmentUpdate={isDevlopmentUpdate}
      />
    </>
  );
};

export default index;

export const getServerSideProps = async (context) => {
  let locations,
    hotelOwners,
    hotelCompanies = null;
  const [articles, categories] = await Promise.all([
    fetchPageData(
      API_END_POINTS.getArticlesBySubCategorySlug(context.params?.subCategory)
    ),
    fetchPageData(API_END_POINTS.getAllCatgories),
  ]);
  if (context.params?.subCategory === SUBCATEGORY_SLUGS_MAP.developmentUpdate) {
    [locations, hotelOwners, hotelCompanies] = await Promise.all([
      fetchPageData(API_END_POINTS.getHotelLocations),
      fetchPageData(API_END_POINTS.getHotelOwenrs),
      fetchPageData(API_END_POINTS.getHotelCompanies),
    ]);
  }
  console.log("HOTEL DATA", locations, hotelOwners, hotelCompanies);
  return {
    props: {
      articles,
      categories,
      subCategory: context.params?.subCategory,
      isDevlopmentUpdate:
        context.params?.subCategory === SUBCATEGORY_SLUGS_MAP.developmentUpdate,
      locations: locations?.props?.data,
      hotelOwners: hotelOwners?.props?.data,
      hotelCompanies: hotelCompanies?.props?.data,
    },
  };
};
