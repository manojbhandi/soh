import { useState } from "react";
import Brand_Details_Banner from "./brand_details_banner";
import Details_Tab from "./detailsTab";
import Overview from "./overview";
import ImageGallery from "./image_gallery";
import Founder from "./founder";
import ExploreByBrands from "../BrandEdit/Sections/ExploreByBrands";
import Related_Articles from "./related_articles";

const Brand_Details_Comp = () => {
  const data = [
    {
      id: 1,
      name: "Overview",
    },
    {
      id: 2,
      name: "Images",
    },
    {
      id: 3,
      name: "Founder",
    },
  ];

  const ImageData = [
    {
      imgSrc: "images/brand_details/gallery/1.png",
    },
    {
      imgSrc: "images/brand_details/gallery/2.png",
    },
    {
      imgSrc: "images/brand_details/gallery/3.png",
    },
    {
      imgSrc: "images/brand_details/gallery/4.png",
    },
    {
      imgSrc: "images/brand_details/gallery/5.png",
    },
    {
      imgSrc: "images/brand_details/gallery/6.png",
    },
    {
      imgSrc: "images/brand_details/gallery/7.png",
    },
    {
      imgSrc: "images/brand_details/gallery/8.png",
    },
  ];

  const brandData = [
    {
      heading: "Clients We've Served",
      detailPageLink: "/#",
      cards: [
        {
          image: "/images/brands/09.png",
          url: "/#",
        },
        {
          image: "/images/brands/10.png",
          url: "/#",
        },
        {
          image: "/images/brands/11.png",
          url: "/#",
        },
        {
          image: "/images/brands/12.png",
          url: "/#",
        },
        {
          image: "/images/brands/01.png",
          url: "/#",
        },
        {
          image: "/images/brands/02.png",
          url: "/#",
        },
        {
          image: "/images/brands/03.png",
          url: "/#",
        },
        {
          image: "/images/brands/04.png",
          url: "/#",
        },
        {
          image: "/images/brands/01.png",
          url: "/#",
        },
        {
          image: "/images/brands/02.png",
          url: "/#",
        },
        {
          image: "/images/brands/03.png",
          url: "/#",
        },
        {
          image: "/images/brands/04.png",
          url: "/#",
        },
      ],
    },
  ];

  const sectionHandler = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
  };

  return (
    <div>
      <Brand_Details_Banner
        bannerImg={"/images/brand_details/banner.jpg"}
        mobBannerImg={"/images/brand_details/mob_banner.jpg"}
      />

      <div>
        <div className="sticky top-[63px] lg:top-[6.23vw] bg-white z-10 pt-2 lg:pt-[1vw]">
          <Details_Tab data={data} sectionHandler={sectionHandler} />
        </div>
        <section id="Overview">
          <Overview />
        </section>

        <section id="Images">
          <ImageGallery data={ImageData} />
        </section>

        <section id="Founder">
          <Founder />
        </section>
      </div>
      <div className="bg-[#fffdf8] pb-[1px] pt-5 lg:pt-[4vw]">
        <ExploreByBrands data={brandData[0]} />
      </div>
      <Related_Articles />
    </div>
  );
};

export default Brand_Details_Comp;
