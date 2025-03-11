import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import Slider from "@/components/Ui/Slider";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Image from "next/image";

const data = [
  {
    image: "/images/travel/fav/01.jpg",
    category: "Inspired Stays",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    author: "Imran Shaikh",
  },
  {
    image: "/images/travel/fav/02.jpg",
    category: "Inspired Stays",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    author: "Imran Shaikh",
  },
  {
    image: "/images/travel/fav/03.jpg",
    category: "Inspired Stays",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    author: "Imran Shaikh",
  },
  {
    image: "/images/travel/fav/04.jpg",
    category: "Inspired Stays",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    author: "Imran Shaikh",
  },
];

const OurFavorites = () => {
  const sliderSettings = {
    slidesPerView: 1.3,
    spaceBetween: 20,
    navigation: false,
    pagination: false,
    loop: true,
    speed: 2000,

    autoplay: { delay: 3000 },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: "3%",
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: "3%",
      },
    },
  };

  return (
    <>
      <SubMainTitle title={"Our Favorites"} />
      <Slider
        setting={sliderSettings}
        slides={data.map((item, index) => (
          <ArticleCard
            key={index}
            articleImage={item?.image}
            articleSubCategory={item?.category}
            articleTitle={item?.title}
            articleAuthor={item?.author}
          />
        ))}
      />

      <Image src={'/images/ad2.jpg'} width={1200} height={200} alt="Our Fav" className="w-full sm:w-9/12 mx-auto mt-[50px] xl:mt-[4.167vw]"/>
    </>
  );
};

export default OurFavorites;
