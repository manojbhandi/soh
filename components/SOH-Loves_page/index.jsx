import dynamic from "next/dynamic";
import Category_Data_Sec from "./category-data-sec";
import CategoryList from "../Ui/CategoryList";
import Recently_Uploaded from "./recently-uploaded";
import Trending from "./trending";
import BigImage from "./bigImg";
import YouTubeSlider from "./youtube_slider";
import CategoryData from "./categoryData";

// SSR disabled to prevent hydration errors
const Banner = dynamic(() => import("./banner"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// import Banner from "./banner";

const SOH_Loves_Page = () => {
  const category_list = [
    {
      id: 1,
      categoryName: "All Stories",
      slug: "all-stories",
    },
    {
      id: 2,
      categoryName: "Best of the Best",
      slug: "best-of-the-best",
    },
    {
      id: 3,
      categoryName: "A Lister Recco",
      slug: "best-of-the-best",
    },
  ];
  return (
    <div>
      <Banner />
      <Category_Data_Sec />
      <div className="mb-10 xl:mb-[5vw]">
        <CategoryList categories={category_list} />
      </div>
      <Recently_Uploaded />
      <Trending />
      <BigImage />
      <YouTubeSlider />
      <CategoryData />
    </div>
  );
};

export default SOH_Loves_Page;
