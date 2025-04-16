import MainTitle from "../../../Ui/MainTitle";
import MobileBanner from "./MobileBanner";
import DesktopBanner from "./DesktopBanner";
import { useEffect, useState } from "react";

const Banner = ({ banners }) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function truncateAtFullStop(str, limit = 100) {
    if (str.length <= limit) return str;

    const truncated = str.slice(0, limit);
    const lastFullStopIndex = truncated.lastIndexOf(".");

    // If there's a full stop within the limit, cut there
    if (lastFullStopIndex !== -1) {
      return truncated.slice(0, lastFullStopIndex + 1);
    }

    // If no full stop, just return the truncated string
    return truncated + "...";
  }

  return (
    <section className="mt-[30px] xl:mt-[3.385vw]">
      <div className="container">
        <div className="mb-[30px] xl:mb-[3.125vw] md:w-[80%] xl:w-[54.583vw] mx-auto text-center">
          {banner?.heading && <MainTitle title={banner?.heading} customClass={"text-center"} />}
          {banner?.para && <div dangerouslySetInnerHTML={{ __html: truncateAtFullStop(banner?.para, 100) }} />}
        </div>
      </div>
      {mobile ? (
        <MobileBanner data={banners?.bannerArticles} />
      ) : (
        <DesktopBanner data={banners?.bannerArticles} />
      )}
    </section>
  );
};

export default Banner;

const banner = {
  heading: "Dive into the essence of Hospitality",
  para: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>`,
  bannerslide: [
    {
      img: "/images/homeBanner/01.jpg",
      category: "Architecture + Design",
      subCategory: "Hotels",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "/article",
    },
    {
      img: "/images/homeBanner/02.jpg",
      category: "Architecture + Design",
      subCategory: "Hotels",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "/article",
    },
    {
      img: "/images/homeBanner/03.jpg",
      category: "Architecture + Design",
      subCategory: "Hotels",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "/article",
    },
    {
      img: "/images/homeBanner/04.jpg",
      category: "Architecture + Design",
      subCategory: "Hotels",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "/article",
    },
    {
      img: "/images/homeBanner/05.jpg",
      category: "Architecture + Design",
      subCategory: "Hotels",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "/article",
    },
    {
      img: "/images/homeBanner/06.jpg",
      category: "Architecture + Design",
      subCategory: "Hotels",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "/article",
    },
  ],
};
