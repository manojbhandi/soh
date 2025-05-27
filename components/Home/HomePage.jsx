import { sortArticles } from "@/utils/commonFunctions";
import { CATEGORY_NAMES_MAP } from "@/utils/constants";
import { useDispatch } from "react-redux";
import ArchitectureDesign from "./Sections/ArchitectureDesign/ArchitectureDesign";
import Banner from "./Sections/Banner/Banner";
import Business from "./Sections/Business/Business";
import Category from "./Sections/Category";
import DineDrink from "./Sections/DineDrink/DineDrink";
import Instagram from "./Sections/Instagram";
import Leadership from "./Sections/Leadership/Leadership";
import Travel from "./Sections/Travel/Travel";
import TrendingNews from "./Sections/TrendingNews";
import Voyages from "./Sections/Voyages";

const HomePage = ({ data, banners, categories }) => {
  const dispatch = useDispatch();

  const apiData = data?.homepage;
  const trendingArticles = data?.trending;
  let allArticles = [];
  const trendigData = trendingArticles.forEach(category => {
    category.subcategories.forEach(subcategory => {
      allArticles = allArticles.concat(subcategory.articles);
    });
  });

  function generateSectionOneData(leaderShipArticlesData, numberOfObj = 'all') {

    if (!leaderShipArticlesData?.subcategories?.length) return [];

    let allArticlesWithSubcategoryInfo = [];
    leaderShipArticlesData.subcategories.forEach(subcategory => {
      subcategory.articles.forEach(article => {
        allArticlesWithSubcategoryInfo.push({
          article,
          subcategoryName: subcategory.subcategoryName
        });
      });
    });
    allArticlesWithSubcategoryInfo.sort((a, b) =>
      new Date(b.article.createdAt || b.article.publishedDate) - new Date(a.article.createdAt || b.article.publishedDate)
    );
    let sortedArticles = sortArticles(allArticlesWithSubcategoryInfo)
    // console.log("sortedArticles>>", sortedArticles)

    if (typeof numberOfObj === "number") {
      sortedArticles = sortedArticles.slice(0, numberOfObj);
    }

    return [{
      heading: leaderShipArticlesData.categoryName,

      link: leaderShipArticlesData.categorySlug,
      data: sortedArticles.map(item => ({
        image: item.article.bannerImages.length > 0 ? item.article.bannerImages[0].startsWith("http")
          ? item.article.bannerImages[0]
          : `/${item.article.bannerImages[0]}` : "/images/default.jpg",
        subCategory: item.subcategoryName || "Uncategorized",
        title: item.article.articleTitle,
        para: item.article.articleDescription
          ? item.article.articleDescription.replace(/<\/?p>/g, "").trim()
          : "No description available.",
        priority: item?.article?.priority,
        author: item?.article?.author ? item?.article?.author : "Unknown Author",
        link: `/${leaderShipArticlesData.categorySlug}/${leaderShipArticlesData.categorySlug}`,
        categoryPath: `/${leaderShipArticlesData.categorySlug}`,
        subCategoryPath: `/${leaderShipArticlesData.categorySlug}/${item?.article?.subcategorySlug}`,
        articlePath: `/${leaderShipArticlesData.categorySlug}/${item?.article?.subcategorySlug}/${item?.article?.articleSlug}`,
      }))
    }];
  }


  return (
    <>
      <Banner banners={banners} />
      <Category categories={categories} />
      <Leadership sectionOneData={generateSectionOneData(apiData?.length > 0 ?
        apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.leadership)?.[0] : null, 3)} />
      <TrendingNews trendingArticles={allArticles} />
      <Business sectionData={generateSectionOneData(apiData?.length > 0 ?
        apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.business)?.[0] : null, 3)} />
      <ArchitectureDesign sectionData={generateSectionOneData(apiData?.length > 0 ?
        apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.architectureDesign)?.[0] : null, 'all')} />
      <Voyages sectionData={generateSectionOneData(apiData?.length > 0 ?
        apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.voyagesOfInfluence)?.[0] : null, 1)} />
      <DineDrink sectionData={generateSectionOneData(apiData?.length > 0 ?
        apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.dineDrink)?.[0] : null, 6)} />
      {/* <SohLoves sectionData={generateSectionOneData(apiData?.length > 0 ?
        apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.sohLoves)?.[0] : null, "all")} /> */}
      <Travel sectionData={generateSectionOneData(apiData?.length > 0 ?
        apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.travel)?.[0] : null, "all")} />
      {/* <BrandEdit sectionData={generateSectionOneData(apiData?.length > 0 ?
        apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.brandEdit)?.[0] : null, 4)} />
      <Videos sectionData={generateSectionOneData(apiData?.length > 0 ?
        apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.videos)?.[0] : null, "all")} />
      <Events
        sectionData={generateSectionOneData(apiData?.length > 0 ?
          apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.events)?.[0] : null, "all")}
      /> */}
      <Instagram />
    </>
  );
};

export default HomePage;
