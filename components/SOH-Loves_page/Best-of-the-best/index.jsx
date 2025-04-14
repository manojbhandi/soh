import MainTitle from "@/components/Ui/MainTitle";
import dynamic from "next/dynamic";
import Country_Filter from "./country-filter";
import Categories from "./categories";
import Trending from "../trending";
import YouTubeSlider from "../youtube_slider";
import CategoryData from "../categoryData";
const Slider = dynamic(() => import("./slider"), {
  ssr: false,
});

const Best_of_the_best_page = () => {
  return (
    <div className="pt-10 xl:pt-[4vw]">
      <MainTitle title={"Best Of The Best"} customClass={"text-center"} />
      <div className="text-[#616161] text-center text-[14px] xl:text-[1.1vw] xl:max-w-[60vw] mx-auto mb-10 xl:mb-[4vw]">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <Slider />
      <Country_Filter />
      <Categories />
      <Trending />
      <YouTubeSlider />
      <CategoryData />
    </div>
  );
};

export default Best_of_the_best_page;
