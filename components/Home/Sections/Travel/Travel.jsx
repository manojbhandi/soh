import ArticleAuthor from "@/components/Ui/Cards/Article/ArticleAuthor";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import ArticleShortPara from "@/components/Ui/Cards/Article/ArticleShortPara";
import ArticleSubCategory from "@/components/Ui/Cards/Article/ArticleSubCategory";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Cta from "@/components/Ui/Cta";
import OurFavorites from "./OurFavorites";
import TravelArticles from "./TravelArticles";

const data = [
  {
    image: "/images/travel/article01.jpg",
    subCategory: "Inspired Stays",
    title: "Lorem Ipsum is simply dummy text of the printing and industry. ",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/travel/article02.jpg",
    subCategory: "Experiences",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/travel/article03.jpg",
    subCategory: "Hotels",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/travel/article04.jpg",
    subCategory: "Getting There",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
];

const Travel = ({ sectionData }) => {

  return (
    <section>
      <div className="container">
        <div className="flex items-center mb-[20px] xl:mb-[2.604vw]">
          <div className="flex-1">
            <SubMainTitle title={sectionData?.[0]?.heading} customClass={"!mb-0"} />
          </div>
          <div className="flex-none">
            <Cta url={sectionData?.[0]?.link} name={"View All"} />
          </div>
        </div>
        <TravelArticles data={sectionData} />
        <OurFavorites />
      </div>

    </section>
  );
};

export default Travel;
