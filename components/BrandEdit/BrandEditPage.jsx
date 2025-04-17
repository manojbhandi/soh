import Banner from "./Sections/Banner";
import Category from "./Sections/Category";
import ExploreByBrands from "./Sections/ExploreByBrands";
import ExploreByCategory from "./Sections/ExploreByCategory";
import Latest from "./Sections/Latest";
import Trends from "./Sections/Trends";

const BrandEditPage = ({ data }) => {

  return (
    <>
        <Banner data={data?.banner} />
        <Category data={data?.brandCategory} />
        <Latest data={data?.latestArticle[0]}/>
        <ExploreByCategory data={data?.products}/>
        <ExploreByBrands data={data?.brands}/>
        <Trends data={data?.trends}/>
    </>
  );
};

export default BrandEditPage;
