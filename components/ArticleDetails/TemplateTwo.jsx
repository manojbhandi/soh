import SectionOne from "./TemplateTwoSections/SectionOne";
import SectionTwo from "./TemplateTwoSections/SectionTwo";
import SectionThree from "./TemplateTwoSections/SectionThree";
import SectionFour from "./TemplateTwoSections/SectionFour";
import Tags from "./Tags/Tags";
import Banner from "./Banner/Banner";
import About from "./About/About";
import { formatDateToMonthDay, stripHtmlTags } from "@/utils/commonFunctions";

const TemplateTwo = ({ articleData }) => {
  console.log("articleData", articleData);

  function formatArticleSections(articleSections) {
    return articleSections.map(section => {
      const contentByType = {
        PARAGRAPH: [],
        QUOTE: []
      };

      section.ArticleSectionContent.forEach(content => {
        if (contentByType[content.contentType]) {
          contentByType[content.contentType].push({
            id: content.id,
            content: content.text,
            type: content.contentType
          });
        }
      });

      const contentItems = section.ArticleSectionContent.map(content => ({
        id: content.id,
        content: content.text,
        type: content.contentType
      }));

      const featuredImage = section.ArticleMedia.length > 0 ? {
        id: section.ArticleMedia[0].id,
        url: section.ArticleMedia[0].url,
        type: section.ArticleMedia[0].type
      } : null;

      return {
        id: section.id,
        articleId: section.articleId,
        title: section.imageTitle,
        subtitle: section.imageSubtitle,
        image: featuredImage,
        paragraphs: contentByType.PARAGRAPH,
        quotes: contentByType.QUOTE,
        contentItems: contentItems,
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
          sideImg={bannerData?.sideImg}
          bannerSliderData={articleData?.bannerImage} />
      </section>
      <section>
        <About
          image={aboutData?.image}

          name={articleData?.contributorName}
          designation={aboutData?.designation}
          category={articleData?.Category?.categoryName}
          date={formatDateToMonthDay(articleData?.publishedDate)}
          articleSubCategoryLink={articleData?.ArticleSubcategory?.[0]?.Subcategory?.fullPath}
        />
      </section>
      <div className="container sectionContainer">
        <SectionOne sectionData={formattedContent?.[0]} articleData={articleData} />
        {formattedContent.length > 0 && formattedContent.slice(1).map((item) => (
          <SectionTwo sectionData={item} />
        ))}
        {/* <SectionThree />
        <SectionFour /> */}
      </div>
      <Tags tagsData={articleData?.ArticleTags} />
    </>
  );
};

export default TemplateTwo;

const bannerData = {
  heading: "Lorem Ipsum is simply dummy text",
  para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  sideImg: '',
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