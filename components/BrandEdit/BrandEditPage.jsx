import Banner from "./Sections/Banner";
import Category from "./Sections/Category";

const BrandEditPage = ({ data }) => {
  console.log("kdkk", data?.brandCategory);

  return (
    <>
        <Banner data={data?.banner} />
        <Category data={data?.brandCategory} />
    </>
  );
};

export default BrandEditPage;
