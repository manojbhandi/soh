import ArticleCard from "../Ui/Cards/Article/ArticleCard";
import CtaBtn from "../Ui/CtaBtn";
import MainTitle from "../Ui/MainTitle";

const businessArticle = [
  {
    image: "/images/business/listing/01.jpg",
    subCategory: "Insights+Columns",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/business/listing/02.jpg",
    subCategory: "Talent",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/business/listing/03.jpg",
    subCategory: "Technology",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/business/listing/04.jpg",
    subCategory: "Insights+Columns",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/business/listing/05.jpg",
    subCategory: "Markets",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/business/listing/06.jpg",
    subCategory: "Sustainability",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/business/listing/07.jpg",
    subCategory: "Talent",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/business/listing/08.jpg",
    subCategory: "Markets",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/business/listing/09.jpg",
    subCategory: "Technology",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
];

const Listing = () => {
  return (
    <section className="xl:mb-[6.25vw]">
      <div className="container">
        <MainTitle
          title={"Business"}
          customClass={"text-center xl:mb-[3.646vw]"}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[25px] xl:gap-[1.563vw] border-b border-[#CACACA] pb-[30px] xl:pb-[5.208vw] mb-[30px] xl:mb-[3.385vw]">
          {businessArticle.map((item, index) => (
            <ArticleCard
              key={index}
              articleImage={item?.image}
              articleSubCategory={item?.subCategory}
              articleTitle={item?.title}
            />
          ))}
        </div>
        <CtaBtn url={"#"} title={"Load More"} customClass={"mx-auto"} />
      </div>
    </section>
  );
};

export default Listing;
