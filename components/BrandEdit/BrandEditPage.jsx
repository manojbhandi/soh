import Advt from "./Sections/advt";
import Banner from "./Sections/Banner";
import Category from "./Sections/Category";
import ExploreByBrands from "./Sections/ExploreByBrands";
import ExploreByCategory from "./Sections/ExploreByCategory";
import Latest from "./Sections/Latest";
import Partner_Spotlight from "./Sections/partner-spotlight";
import Product_Of_The_Month from "./Sections/product_of_the_month";
import ScrollSlider from "./Sections/scrollSlider";
import Trends from "./Sections/Trends";

const BrandEditPage = ({ data }) => {
  const sliderData = [
    {
      img: "/images/brand-edit/slider/01.png",
      label: "Best of the Best",
      head: "Lorem Ipsum is simply dummy text of the printing industry.",
      link: "/#",
    },
    {
      img: "/images/brand-edit/slider/02.png",
      label: "Best of the Best",
      head: "Lorem Ipsum is simply dummy text of the printing industry.",
      link: "/#",
    },
    {
      img: "/images/brand-edit/slider/03.png",
      label: "Best of the Best",
      head: "Lorem Ipsum is simply dummy text of the printing industry.",
      link: "/#",
    },
    {
      img: "/images/brand-edit/slider/01.png",
      label: "Best of the Best",
      head: "Lorem Ipsum is simply dummy text of the printing industry.",
      link: "/#",
    },
    {
      img: "/images/brand-edit/slider/02.png",
      label: "Best of the Best",
      head: "Lorem Ipsum is simply dummy text of the printing industry.",
      link: "/#",
    },
    {
      img: "/images/brand-edit/slider/03.png",
      label: "Best of the Best",
      head: "Lorem Ipsum is simply dummy text of the printing industry.",
      link: "/#",
    },
  ];

  return (
    <>
      <Banner data={data?.banner} />
      <Category data={data?.brandCategory} />
      <Partner_Spotlight
        reverse_col={true}
        heading={"Partner Spotlight"}
        partnerName={"Prashant Dalmia"}
        designation={"Founder, Ace Space"}
        content={
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>"
        }
        imgSrc={"/images/brand-edit/partner/prashant.png"}
      />
      <Latest data={data?.latestArticle[0]} />
      <ScrollSlider
        data={sliderData}
        icon={"/images/brand-edit/icon_1.svg"}
        title={"Made in India"}
        para={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
        customClass={
          "bg-[url(/images/brand-edit/bg.jpg)] bg-no-repeat bg-cover bg-[position:center_left]"
        }
      />

      <ScrollSlider
        data={sliderData}
        // icon={"/images/brand-edit/icon_1.svg"}
        title={"Newly launched"}
        para={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
        customClass={"bg-[#F7F3EA]"}
      />

      <ScrollSlider
        data={sliderData}
        // icon={"/images/brand-edit/icon_1.svg"}
        title={"SOH Recommended"}
        para={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
        customClass={"bg-[#fffdf8]"}
      />

      <Product_Of_The_Month />
      <Advt imgSrc={"/images/brand-edit/advt/1.jpg"} />
      <Partner_Spotlight
        reverse_col={false}
        heading={"Partner Spotlight"}
        partnerName={"Prashant Dalmia"}
        designation={"Founder, Ace Space"}
        content={
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>"
        }
        imgSrc={"/images/brand-edit/partner/prashant_1.png"}
      />
      <ExploreByCategory data={data?.products} />
      <ExploreByBrands data={data?.brands} />
      <Trends data={data?.trends} />
    </>
  );
};

export default BrandEditPage;
