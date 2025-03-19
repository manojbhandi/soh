import Banner from "./Banner/Banner";
import Listing from "./Listing/Listing";
import CategoryList from "../Ui/CategoryList";

const ArticleLandingPage = () => {
  return (
    <>
      <Banner />
      <Listing title={"Business"} data={data} />
      <section>
        <div className="container">
          <CategoryList categoryData={categoryData} />
        </div>
      </section>
    </>
  );
};

export default ArticleLandingPage;

const data = [
  {
    image: "/images/business/listing/01.jpg",
    articleSubcategory: "Insights+Columns",
    title:"Lorem Ipsum is simply dummy text of the printing and industry.",
    link:'/article/article-sub-category/template-two'
  },
  {
    image: "/images/business/listing/02.jpg",
    articleSubcategory: "Insights+Columns",
    title:"Lorem Ipsum is simply dummy text of the printing and industry.",
    link:'/article/article-sub-category/template-two'
  },
  {
    image: "/images/business/listing/03.jpg",
    articleSubcategory: "Insights+Columns",
    title:"Lorem Ipsum is simply dummy text of the printing and industry.",
    link:'/article/article-sub-category/template-two'
  },
  {
    image: "/images/business/listing/04.jpg",
    articleSubcategory: "Insights+Columns",
    title:"Lorem Ipsum is simply dummy text of the printing and industry.",
    link:'/article/article-sub-category/template-two'
  },
  {
    image: "/images/business/listing/05.jpg",
    articleSubcategory: "Insights+Columns",
    title:"Lorem Ipsum is simply dummy text of the printing and industry.",
    link:'/article/article-sub-category/template-two'
  },
  {
    image: "/images/business/listing/06.jpg",
    articleSubcategory: "Insights+Columns",
    title:"Lorem Ipsum is simply dummy text of the printing and industry.",
    link:'/article/article-sub-category/template-two'
  },
  {
    image: "/images/business/listing/07.jpg",
    articleSubcategory: "Insights+Columns",
    title:"Lorem Ipsum is simply dummy text of the printing and industry.",
    link:'/article/article-sub-category/template-two'
  },
  {
    image: "/images/business/listing/08.jpg",
    articleSubcategory: "Insights+Columns",
    title:"Lorem Ipsum is simply dummy text of the printing and industry.",
    link:'/article/article-sub-category/template-two'
  },
  {
    image: "/images/business/listing/09.jpg",
    articleSubcategory: "Insights+Columns",
    title:"Lorem Ipsum is simply dummy text of the printing and industry.",
    link:'/article/article-sub-category/template-two'
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
