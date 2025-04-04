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

const HomePage = ({ data, banners }) => {
  const dispatch = useDispatch();

  function generateSectionOneData(apiResponse) {
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
      <Banner banners={banners}/>
      {/* <Category /> */}
      <Leadership sectionOneData={generateSectionOneData(data)?.[0] ?? {}} />
      <TrendingNews />
      <Business />
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
