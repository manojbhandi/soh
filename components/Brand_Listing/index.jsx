import BrandBanner from "../Ui/brandBanner";
import ExploreBrands from "./exploreBrands";

const BrandListing = () => {
  return (
    <>
      <BrandBanner
        customClass={"mb-[40px] lg:mb-[6.1vw]"}
        imgSrc={"/images/brand-listing/left_banner.jpg"}
        title={"Brands Name"}
        para={
          "The living room is where we spend most of our time, the area of the house dedicated to relaxation and conviviality."
        }
      />
      <ExploreBrands />
    </>
  );
};

export default BrandListing;
