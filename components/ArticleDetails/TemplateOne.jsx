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
import { formatDateToMonthDay, stripHtmlTags } from "@/utils/commonFunctions";
import { getImageUrl } from "@/utils/constants";

const TemplateOne = ({ articleData }) => {
  console.log("articleData", articleData);
  function formatArticleSections(articleSections) {
    return articleSections.map(section => {
      // Organize content by type to make it accessible
      const contentByType = {
        PARAGRAPH: [],
        QUOTE: []
      };

      // Process all section content and organize by type
      section.ArticleSectionContent.forEach(content => {
        if (contentByType[content.contentType]) {
          contentByType[content.contentType].push({
            id: content.id,
            content: content.text,
            type: content.contentType
          });
        }
      });

      // Create a chronological content array (preserving original order)
      const contentItems = section.ArticleSectionContent.map(content => ({
        id: content.id,
        content: content.text,
        type: content.contentType
      }));

      // Get just the first image from media items (if any exist)
      const featuredImage = section.ArticleMedia.length > 0 ? {
        id: section.ArticleMedia[0].id,
        url: section.ArticleMedia[0].url,
        type: section.ArticleMedia[0].type
      } : null;

      // Return the formatted section
      return {
        id: section.id,
        articleId: section.articleId,
        title: section.imageTitle,
        subtitle: section.imageSubtitle,
        image: featuredImage, // Just one image
        paragraphs: contentByType.PARAGRAPH,
        quotes: contentByType.QUOTE,
        contentItems: contentItems, // All content in original order
        createdAt: section.createdAt
      };
    });
  }


  const formattedContent = formatArticleSections(articleData?.ArticleSection);
  return (
    <>
      <section className="xl:mb-[3.125vw]">
        <Banner
          heading={articleData?.title}
          para={stripHtmlTags(articleData?.description)}
          sideImg={getImageUrl(articleData?.bannerImage)}
          bannerSliderData={bannerData?.bannerSliderData}
        />
      </section>
      <section>
        <About
          image={articleData?.contributorImage || aboutData?.image}
          name={articleData?.contributorName}
          designation={articleData?.contributorDesignation || aboutData?.designation}
          category={articleData?.Category?.categoryName}
          date={formatDateToMonthDay(articleData?.publishedDate)}
          articleSubCategoryLink={articleData?.ArticleSubcategory?.[0]?.Subcategory?.fullPath}
        />
      </section>
      <div className="container sectionContainer">
        {formattedContent?.length > 0 && formattedContent?.map((item) => (
          <SectionOne sectionOneData={item} />
        ))

        }
        {/* <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven /> */}
      </div>
      <Tags tagsData={articleData?.ArticleTags} />
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