import SectionOne from "./TemplateTwoSections/SectionOne";
import SectionTwo from "./TemplateTwoSections/SectionTwo";
import SectionThree from "./TemplateTwoSections/SectionThree";
import SectionFour from "./TemplateTwoSections/SectionFour";
import Tags from "./Tags/Tags";
import Banner from "./Banner/Banner";
import About from "./About/About";

const TemplateTwo = () => {
  return (
    <>
      <section className="xl:mb-[3.125vw]">
        <Banner heading={bannerData?.heading} para={bannerData?.para} sideImg={bannerData?.sideImg} bannerSliderData={bannerData?.bannerSliderData} />
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
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
      <Tags tagsData={tagsData}/>
    </>
  );
};

export default TemplateTwo;

const bannerData = {
  heading: "Lorem Ipsum is simply dummy text",
  para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  sideImg:'',
  bannerSliderData: [
    {
      image: "/images/article-details/template2/banner.jpg",
    },
    {
      image: "/images/article-details/template2/banner.jpg",
    },
    {
      image: "/images/article-details/template2/banner.jpg",
    },
  ],
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
  }
];