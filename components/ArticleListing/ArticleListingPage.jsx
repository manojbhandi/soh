import CategoryList from "../Ui/CategoryList";
import Banner from "./Banner/Banner";
import Listing from "./Listing/Listing";

const ArticleListingPage = ({ articles, categories }) => {

  console.log(articles, "ARTICLES")
  const bannerData = articles?.articles && articles?.articles?.length > 0 ? articles.articles.map(article => {
    const bannerMedia = article.ArticleMedia.find(media => media.isBannerImage);
    const subcategoryItem = article.ArticleSubcategory[0];
    const isListing = article.ArticleVisibility.some(visibility => visibility.location === "LISTING");

    if (isListing) {
      return {
        banner: bannerMedia ? bannerMedia.url : "/images/default-banner.jpg",
        subcategory: subcategoryItem?.Subcategory?.subcategoryName,
        title: article.title,
        url: `/article/${article.slug}`
      };
    }
    return null;
  }).filter(item => item !== null) : null

  const articesData = articles?.articles && articles?.articles?.length > 0 ? articles.articles.map(article => {
    const bannerImage = article.ArticleMedia.find(media => media.isBannerImage)?.url || "";
    console.log(article, "ARTICLE???")
    return {
      banner: bannerImage ? bannerImage : "/images/default-banner.jpg",
      title: article.title,
      link: `/${article?.ArticleSubcategory?.[0]?.Subcategory?.fullPath}/${article.slug}`,
      url: `/${article?.ArticleSubcategory?.[0]?.Subcategory?.fullPath}/${article.slug}`,
    };
  }) : null;

  return (
    <>
      <Banner bannerData={bannerData} />
      <Listing title={articles?.articles?.[0]?.subcategoryName} data={articesData} />
      <section>
        <div className="container">
          <CategoryList categories={categories?.data} />
        </div>
      </section>
    </>
  );
};

export default ArticleListingPage;

const data = [
  {
    banner: "/images/article/business/features+trends/listing/01.png",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    banner: "/images/article/business/features+trends/listing/02.jpeg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    banner: "/images/article/business/features+trends/listing/03.png",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    banner: "/images/article/business/features+trends/listing/04.jpeg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    banner: "/images/article/business/features+trends/listing/05.jpg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    banner: "/images/article/business/features+trends/listing/06.png",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    banner: "/images/article/business/features+trends/listing/07.jpeg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    banner: "/images/article/business/features+trends/listing/08.jpg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    banner: "/images/article/business/features+trends/listing/09.jpg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
];

const categoryData = [
  {
    name: "Leadership",
    url: "/article/article-sub-category",
  },
  {
    name: "Business ",
    url: "/article/article-sub-category",
  },
  {
    name: "Architecture + Design ",
    url: "/article/article-sub-category",
  },
  {
    name: "Voyages of Influence ",
    url: "/article/article-sub-category",
  },
  {
    name: "Dine & Drink ",
    url: "/article/article-sub-category",
  },
  {
    name: "SOH Loves ",
    url: "/article/article-sub-category",
  },
  {
    name: "Travel ",
    url: "/article/article-sub-category",
  },
  {
    name: "The Brand Edit ",
    url: "/article/article-sub-category",
  },
  {
    name: "Videos ",
    url: "/article/article-sub-category",
  },
  {
    name: "Events ",
    url: "/article/article-sub-category",
  },
];
