import Article_list from "./article_list";
import Category_Data from "./category-data";
import Filter_Table from "./filter-table";
import Heading_Section from "./heading-section";
import WorldMapBanner from "./world-map-banner";

const Development_Update_Page = () => {
  return (
    <>
      <WorldMapBanner />
      <Heading_Section />
      <Filter_Table />
      <Article_list />
      <Category_Data />
    </>
  );
};

export default Development_Update_Page;
