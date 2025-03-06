import MainTitle from "../../../Ui/MainTitle";
import MobileBanner from "./MobileBanner";
import DesktopBanner from "./DesktopBanner";

const BannerData = [
  {
    img: "/images/homeBanner/01.jpg",
    category: "Architecture + Design",
    subCategory: "Hotels",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    url: "#",
  },
  {
    img: "/images/homeBanner/02.jpg",
    category: "Architecture + Design",
    subCategory: "Hotels",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    url: "#",
  },
  {
    img: "/images/homeBanner/03.jpg",
    category: "Architecture + Design",
    subCategory: "Hotels",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    url: "#",
  },
  {
    img: "/images/homeBanner/04.jpg",
    category: "Architecture + Design",
    subCategory: "Hotels",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    url: "#",
  },
  {
    img: "/images/homeBanner/05.jpg",
    category: "Architecture + Design",
    subCategory: "Hotels",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    url: "#",
  },
  {
    img: "/images/homeBanner/06.jpg",
    category: "Architecture + Design",
    subCategory: "Hotels",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    url: "#",
  },
];

const Banner = () => {
  return (
    <section className="mt-[30px] xl:mt-[3.385vw]">
      <div className="mb-[30px] xl:mb-[3.125vw] w-[80%] xl:w-[54.583vw] mx-auto text-center">
        <MainTitle
          title={"Dive into the essence of Hospitality"}
          customClass={"text-center"}
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="md:hidden">
        <MobileBanner data={BannerData} />
      </div>
      <div className="hidden md:block">
        <DesktopBanner data={BannerData} />
      </div>
    </section>
  );
};

export default Banner;
