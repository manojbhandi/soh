import Image from "next/image";
import MainTitle from "../Ui/MainTitle";
import SubMainTitle from "../Ui/SubMainTitle";
import Partner_Details_Banner from "./partner-details-banner";

const Partner_Details_Comp = () => {
  return (
    <div>
      <Partner_Details_Banner />

      <div className="w-[80%] xl:w-[60%] mx-auto">
        <MainTitle
          title={"From Vision to Veneer"}
          customClass={"text-center mb-10 lg:!mb-[3vw]"}
        />

        <div className="partnerContent mb-10 lg:mb-[4vw]">
          <SubMainTitle
            title={
              "Can you tell us about the journey of Acespace? How did the brand come to life, and what inspired its entry into the veneer industry?"
            }
            customClass={"text-center"}
          />

          <div className="paraContent *:text-center *:mb-5 *:lg:mb-[1.2vw] mb-5 lg:mb-[2vw]">
            <p>
              The story of Acespace began in 2015 in a way I never could have
              imagined. My background was far removed from this world - I'm a
              Chartered Accountant and an MBA, with years of experience at ICICI
              Bank and Morgan Stanley. My entrepreneurial journey actually
              started in the medical field, so when it came to veneer, I was
              completely in uncharted territory.
            </p>

            <p>
              But here's what I discovered: there was a huge gap in the market.
              Designers working on hotel projects, retail residences, and more
              were looking for something the industry wasn't offering. And I was
              drawn to fill that gap, driven by a growing passion for this
              incredible product. Veneer, I realised, isn't just a material.
              It's part science, part art, and wholly about passion. That
              combination captured my imagination and set me on this journey of
              craftsmanship and innovation.
            </p>
          </div>

          <Image
            src={"/images/partner-spotlight/1.png"}
            width={700}
            height={700}
            alt={"soh"}
            className={
              "w-full h-auto mx-auto max-w-[460px]  mb-10 lg:mb-[2.5vw] block"
            }
          />
        </div>

        <div className="partnerContent mb-10 lg:mb-[4vw]">
          <SubMainTitle
            title={
              "What sets Acespace apart in the veneer market? What unique features, innovations, or services distinguish your brand from competitors?"
            }
            customClass={"text-center"}
          />

          <div className="paraContent *:text-center *:mb-5 *:lg:mb-[1.2vw] mb-5 lg:mb-[2vw]">
            <p>
              I don't see myself as a veneer-selling brand but as a veneer
              solutions partner. Our approach is simple: provide tailored veneer
              options for every category of project—from residences to
              large-scale hospitality, commercial spaces, retail environments,
              high-end villas, and even beachside properties.
            </p>

            <p>
              What truly sets us apart is our flexibility. We offer the same
              veneer in multiple thicknesses, forms, and backings, customised to
              suit the requirements of each site. This ensures our solutions fit
              seamlessly into any design vision.
            </p>

            <p>
              We make a design professional's life easier by engaging with them
              daily, understanding their challenges, and creating innovative
              solutions. For instance, when we submit veneer samples, we ensure
              they're polished, saving our clients valuable time during the
              approval process. Even the sheets we send for review come with a
              polished corner, giving designers a clear idea of the post-finish
              look without any extra effort on their part.
            </p>

            <p>
              Our offerings go beyond standard veneers. We robustly provide
              natural, hybrid, and dyed veneers, as well as milled and fluted
              panels, marquetry, laser-cut designs, handcrafted finishes, and
              customisations that align perfectly with architects' and
              designers' creative needs.
            </p>
          </div>

          <Image
            src={"/images/partner-spotlight/2.png"}
            width={700}
            height={700}
            alt={"soh"}
            className={
              "w-full h-auto mx-auto max-w-[460px]  mb-10 lg:mb-[2.5vw] block"
            }
          />
        </div>

        <div className="partnerContent mb-10 lg:mb-[4vw]">
          <SubMainTitle
            title={
              "Can you shed light on Acespace's growth trajectory? How has the company expanded its offerings or market presence over the years?"
            }
            customClass={"text-center"}
          />

          <div className="paraContent *:text-center *:mb-5 *:lg:mb-[1.2vw] mb-5 lg:mb-[2vw]">
            <p>
              From humble beginnings in a small suburban warehouse in Mumbai to
              establishing one of the largest experience centres in the heart of
              the city, Acespace has come a long way.
            </p>

            <p>
              Today, we're proud to collaborate with the country's top
              architects, leading hotel brands, renowned PMCs, and OEMs. In just
              a few years, we've expanded our hospitality footprint from 1-2
              projects in 2018-2019 to 15-20 projects in 2024-2025.
            </p>

            <p>
              Our veneer sales reflect this remarkable growth too—rising from 6
              lakh sq.ft. in 2018-2019 to nearly 20 lakh sq.ft. in 2024-2025.
            </p>
          </div>
        </div>

        <div className="partnerContent mb-10 lg:mb-[4vw]">
          <SubMainTitle
            title={
              "How do Acespace veneers cater to the specific needs of the hospitality sector?"
            }
            customClass={"text-center"}
          />

          <div className="paraContent *:text-center *:mb-5 *:lg:mb-[1.2vw] mb-5 lg:mb-[2vw]">
            <p>
              We've introduced a large range of dyed and hybrid veneers in a
              variety of modern colours, textures, and sizes. What makes them
              truly special is their consistency—both in grain and
              colour—ensuring a seamless look across even the largest projects.
              This eliminates the usual challenges of inconsistencies, giving
              clients, architects, and designers the freedom to focus on their
              vision without compromise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner_Details_Comp;
