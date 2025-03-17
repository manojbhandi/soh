import SectionOne from "./TemplateTwoSections/SectionOne";
import SectionTwo from "./TemplateTwoSections/SectionTwo";
import SectionThree from "./TemplateTwoSections/SectionThree";
import SectionFour from "./TemplateTwoSections/SectionFour";
import Tags from "./Tags/Tags";
import BannerTwo from "./Banner/BannerTwo";
import Info from "./Info/Info";

const TemplateTwo = () => {
  return (
    <>
      <section className="xl:mb-[3.125vw] ">
        <BannerTwo />
      </section>
      <section className="xl:mb-[2.24vw]">
        <Info />
      </section>
      <div className="container sectionContainer">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
      <Tags />
    </>
  );
};

export default TemplateTwo;
