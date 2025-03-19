import Banner from "./Banner/Banner";
import About from "./About/About";
import SectionOne from "./TemplateOneSections/SectionOne";
import SectionTwo from "./TemplateOneSections/SectionTwo";
import SectionThree from "./TemplateOneSections/SectionThree";
import SectionFour from "./TemplateOneSections/SectionFour";
import SectionFive from "./TemplateOneSections/SectionFive";
import SectionSix from "./TemplateOneSections/SectionSix";

import Tags from "./Tags/Tags";
import SectionSeven from "./TemplateOneSections/SectionSeven";

const TemplateOne = () => {
  return (
    <>
      <section className="xl:mb-[3.125vw]">
        <Banner
          heading={bannerData?.heading}
          para={bannerData?.para}
          sideImg={bannerData?.sideImg}
          bannerSliderData={bannerData?.bannerSliderData}
        />
      </section>
      <section>
        <About
          image={aboutData?.image}
          name={aboutData?.name}
          designation={aboutData?.designation}
          category={aboutData?.category}
          date={aboutData?.date}
        />
      </section>
      <div className="container sectionContainer">
        <SectionOne />
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
      </div>
      <Tags tagsData={tagsData}/>
    </>
  );
};

export default TemplateOne;

const bannerData = {
  heading: "Lorem Ipsum is simply dummy text of the printing and industry.",
  para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  sideImg: "/images/article-details/template1/01.jpg",
  bannerSliderData: [],
};

const aboutData = {
  image: "/images/article-details/suman.png",
  name: "Suman Tarafdar",
  designation: "Sr. Contributor",
  category: "Category",
  date: "October,24",
};

const tagsData = [
  {
    name: "The Latest",
    url: "/#",
  },
  {
    name: "Design & Decor",
    url: "/#",
  },
  {
    name: "Sustainability",
    url: "/#",
  },
  {
    name: "The Latest",
    url: "/#",
  },
  {
    name: "Design & Decor",
    url: "/#",
  },
  {
    name: "Sustainability",
    url: "/#",
  },
  {
    name: "The Latest",
    url: "/#",
  },
  {
    name: "Design & Decor",
    url: "/#",
  },
  {
    name: "Sustainability",
    url: "/#",
  }
];