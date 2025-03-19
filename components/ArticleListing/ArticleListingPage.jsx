import CategoryList from "../Ui/CategoryList";
import Banner from "./Banner/Banner";
import Listing from "./Listing/Listing";

const ArticleListingPage = () => {
  return (
    <>
      <Banner />
      <Listing title={"Features + Trends"} data={data} />
      <section>
        <div className="container">
          <CategoryList categoryData={categoryData} />
        </div>
      </section>
    </>
  );
};

export default ArticleListingPage;

const data = [
  {
    image: "/images/article/business/features+trends/listing/01.png",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    image: "/images/article/business/features+trends/listing/02.jpeg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    image: "/images/article/business/features+trends/listing/03.png",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    image: "/images/article/business/features+trends/listing/04.jpeg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    image: "/images/article/business/features+trends/listing/05.jpg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    image: "/images/article/business/features+trends/listing/06.png",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    image: "/images/article/business/features+trends/listing/07.jpeg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    image: "/images/article/business/features+trends/listing/08.jpg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    link: "/article/article-sub-category/template-two",
  },
  {
    image: "/images/article/business/features+trends/listing/09.jpg",
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
