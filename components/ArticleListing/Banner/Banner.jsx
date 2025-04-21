import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "@/components/Ui/Slider";
import CtaBtn from "@/components/Ui/CtaBtn";
import { getImageUrl, MEDIA_BASE_URL } from "@/utils/constants";

const Banner = ({ bannerData }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: false,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    onSlideChange: (swiper) => setActiveIndex(swiper.realIndex),
    onSwiper: (swiper) => (swiperRef.current = swiper),
  };

  return (
    <section className="relative">
      <Slider
        customClass={"relative group bg-grey"}
        slides={bannerData && bannerData.length > 0 ? bannerData.map((item, index) => (
          <div key={index}>
            <div className="articleImgWrp ">
              <Image
                src={getImageUrl(item?.banner)}
                width={1920}
                height={1080}
                className="h-full object-cover"
                alt="banner"
              />
            </div>
            <div className="articleTxtWrp ">
              <div className="container">
                <div className="flex">
                  <div className="lg:w-1/2 xl:w-[32.292vw]">
                    <span>{item?.subcategory}</span>
                    <h2 className="text-mainBlack sm:text-white font-fh text-[22px] sm:text-[25px] md:text-[30px] xl:text-[2.5vw] line-clamp-2 md:line-clamp-3 !mb-0">
                      {item?.title}
                    </h2>
                    <CtaBtn
                      customClass={
                        "mt-[30px] xl:mt-[2.604vw] text-mainBlack sm:text-white hover:bg-white hover:text-mainBlack"
                      }
                      title={"Explore More"}
                      url={"/article/article-sub-category/template-one"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )) : null}
        setting={sliderSettings}
      />

      <div className="articleNavWrp">
        <ul className="grid grid-cols-2 lg:gap-x-[2.604vw] lg:gap-y-[1.302vw]">
          {bannerData && bannerData.length > 0 ? bannerData.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className={`goldStar ${activeIndex === index ? "active " : ""
                  }`}
              >
                {item.subcategory}
              </button>
            </li>
          )) : null}
        </ul>
      </div>
    </section>
  );
};

export default Banner;

const data = [
  {
    banner: "/images/article/business/devlopment-update/banner.jpg",
    subcategory: "Development Update",
    title: "Lorem Ipsum is simply dummy text of the printing industry.",
    url: "/article/article-sub-category/template-one",
  },
  {
    banner: "/images/article/business/devlopment-update/banner.jpg",
    subcategory: "Talent",
    title: "Lorem Ipsum is simply dummy text of the printing industry.",
    url: "/article/article-sub-category/template-one",
  },
  {
    banner: "/images/article/business/devlopment-update/banner.jpg",
    subcategory: "Technology",
    title: "Lorem Ipsum is simply dummy text of the printing industry.",
    url: "/article/article-sub-category/template-one",
  },
  {
    banner: "/images/article/business/devlopment-update/banner.jpg",
    subcategory: "Insights+Columns",
    title: "Lorem Ipsum is simply dummy text of the printing industry.",
    url: "/article/article-sub-category/template-one",
  },
  {
    banner: "/images/article/business/devlopment-update/banner.jpg",
    subcategory: "Markets",
    title: "Lorem Ipsum is simply dummy text of the printing industry.",
    url: "/article/article-sub-category/template-one",
  },
  {
    banner: "/images/article/business/devlopment-update/banner.jpg",
    subcategory: "Sustainability",
    title: "Lorem Ipsum is simply dummy text of the printing industry.",
    url: "/article/article-sub-category/template-one",
  },
];
