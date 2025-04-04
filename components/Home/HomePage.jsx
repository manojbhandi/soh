import { useDispatch } from "react-redux";
import ArchitectureDesign from "./Sections/ArchitectureDesign/ArchitectureDesign";
import Banner from "./Sections/Banner/Banner";
import BrandEdit from "./Sections/BrandEdit";
import Business from "./Sections/Business/Business";
import DineDrink from "./Sections/DineDrink/DineDrink";
import Events from "./Sections/Events";
import Instagram from "./Sections/Instagram";
import Leadership from "./Sections/Leadership/Leadership";
import SohLoves from "./Sections/SohLoves";
import Travel from "./Sections/Travel/Travel";
import TrendingNews from "./Sections/TrendingNews";
import Videos from "./Sections/Videos/Videos";
import Voyages from "./Sections/Voyages";
import { generateSlug } from "@/utils/commonFunctions";
import Category from "./Sections/Category";
import { apiResponse } from "@/utils/apiResponse";
import { CATEGORY_NAMES_MAP } from "@/utils/constants";

const HomePage = ({ data, banners }) => {
  const dispatch = useDispatch();

  const apiData = data?.homepage;

  function generateSectionOneData(leaderShipArticlesData, numberOfObj) {
    

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
      new Date(b.article.publishedDate) - new Date(a.article.publishedDate)
    );

    allArticlesWithSubcategoryInfo = allArticlesWithSubcategoryInfo.slice(0, numberOfObj);
    console.log("allArticlesWithSubcategoryInfo", allArticlesWithSubcategoryInfo);
    return [{
      heading: leaderShipArticlesData.categoryName,
      link: leaderShipArticlesData.categorySlug,
      data: allArticlesWithSubcategoryInfo.map(item => ({
        image: item.article.bannerImages.length > 0 ? `/${item.article.bannerImages[0]}` : "/images/default.jpg",
        subCategory: item.subcategoryName || "Uncategorized",
        title: item.article.articleTitle,
        para: item.article.articleDescription
          ? item.article.articleDescription.replace(/<\/?p>/g, "").trim()
          : "No description available.",
        author: item.article.sections.length > 0 ? item.article.sections[0].imageTitle : "Unknown Author",
        link: `/${leaderShipArticlesData.categorySlug}/${leaderShipArticlesData.categorySlug}`,
        categoryPath: `/${leaderShipArticlesData.categorySlug}`,
        subCategoryPath: `/${leaderShipArticlesData.categorySlug}/${item.subcategorySlug}`,
        articlePath: `/${leaderShipArticlesData.categorySlug}/${item.subcategorySlug}/${item?.articleSlug}`,
      }))
    }];
  }

  // Usage:
  function generateBusinessSectionData(apiResponse) {
    console.log("API RESPONSE", apiResponse);

    return apiResponse?.homepage?.length > 0 ? apiResponse.homepage.map((category) => ({
      heading: category.categoryName,
      link: generateSlug(category.categoryName),
      data: category.subcategories.flatMap((subcategory) =>
        subcategory.articles.map((article) => ({
          image: article.bannerImages.length > 0 ? `/${article.bannerImages[0]}` : "/images/default.jpg",
          subCategory: subcategory.subcategoryName || "Uncategorized",
          title: article.articleTitle,
          para: article.articleDescription
            ? article.articleDescription.replace(/<\/?p>/g, "").trim()
            : "No description available.",
          author: article.sections.length > 0 ? article.sections[0].imageTitle : "Unknown Author",
          link: `/article/${article.articleId}`,
        }))
      ),
    })) : [];
  }


  return (
    <>
      <Banner banners={banners} />
      <Category />
      <Leadership sectionOneData={generateSectionOneData(apiData?.length > 0 ?
        apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.leadership)?.[0] : null, 2)} />
      <TrendingNews />
      <Business sectionData={generateSectionOneData(apiData?.length > 0 ?
        apiData.filter((category) => category?.categoryName === CATEGORY_NAMES_MAP.business)?.[0] : null, 3)} />
      <ArchitectureDesign />
      <Voyages />
      <DineDrink />
      <SohLoves />
      <Travel />
      <BrandEdit />
      <Videos />
      <Events />
      <Instagram />
    </>
  );
};

export default HomePage;
