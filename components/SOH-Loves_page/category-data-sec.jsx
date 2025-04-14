import { useState } from "react";
import CategoryNav from "./category-nav";
import dynamic from "next/dynamic";
//import Category_Slider from "./category-slider";

// SSR disabled to prevent hydration errors
const Category_Slider = dynamic(() => import("./category-slider"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Category_Data_Sec = () => {
  const sectionData = [
    {
      title: "Best Of The Best",
      heading: "Lorem Ipsum is simply dummy text of the printing industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imgSrc: "/images/sohLoves/slide_1_img.png",
    },
    {
      title: "The Month Ahead",
      heading: "Lorem Ipsum is simply dummy text of the printing industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imgSrc: "/images/sohLoves/slide_1_img.png",
    },
    {
      title: "A-Lister Favorites",
      heading: "Lorem Ipsum is simply dummy text of the printing industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imgSrc: "/images/sohLoves/slide_1_img.png",
    },
    {
      title: "Collaborations",
      heading: "Lorem Ipsum is simply dummy text of the printing industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imgSrc: "/images/sohLoves/slide_1_img.png",
    },
    {
      title: "Inspiration",
      heading: "Lorem Ipsum is simply dummy text of the printing industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imgSrc: "/images/sohLoves/slide_1_img.png",
    },
    {
      title: "Destinations",
      heading: "Lorem Ipsum is simply dummy text of the printing industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imgSrc: "/images/sohLoves/slide_1_img.png",
    },
    {
      title: "Restaurants",
      heading: "Lorem Ipsum is simply dummy text of the printing industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imgSrc: "/images/sohLoves/slide_1_img.png",
    },
    {
      title: "Exhibition",
      heading: "Lorem Ipsum is simply dummy text of the printing industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      imgSrc: "/images/sohLoves/slide_1_img.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = (i) => {
    setActiveIndex(i);
  };

  return (
    <div className="bg-[url('/images/sohLoves/pattern-bg.jpg')] bg-no-repeat bg-right-top bg-[length:100%_auto] pt-10 xl:pt-[5vw] mb-10 xl:mb-[5vw]">
      <div className="container xl:grid xl:grid-cols-4">
        <div className="xl:col-span-1 relative side-nav-container">
          <div className="overflow-auto max-h-[500px] side-nav direction-rtl [scrollbar-gutter:stable] relative z-0">
            <CategoryNav sections={sectionData} activeSlide={activeSlide} />
          </div>
        </div>
        <div className="xl:col-span-3 xl:ps-[6vw]">
          <Category_Slider sections={sectionData} activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
};

export default Category_Data_Sec;
