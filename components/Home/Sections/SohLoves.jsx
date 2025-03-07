import ArticleAuthor from "@/components/Ui/Cards/Article/ArticleAuthor";
import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";
import Cta from "@/components/Ui/Cta";
import MainTitle from "@/components/Ui/MainTitle";
import Slider from "@/components/Ui/Slider";
import Image from "next/image";

const slides = [
  {
    image: "/images/sohLoves/article01.jpg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry. ",
    author: "Imran Shaikh",
  },
  {
    image: "/images/sohLoves/article02.jpg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry. ",
    author: "Imran Shaikh",
  },
  {
    image: "/images/sohLoves/article03.jpg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry. ",
    author: "Imran Shaikh",
  },
 
];

const SohLoves = () => {
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
      768: {
        slidesPerView: 3,
        spaceBetween: "3%",
      },
    },
  };

  return (
    <section>
      <Image
        src={"/images/half-star-pattern1.png"}
        width={1000}
        height={160}
        className="w-8/12 xl:w-7/12 ms-auto"
      />
      <div className="my-[30px]">
        <div className="container">
          <div className="flex justify-between items-center mb-[20px]">
            <MainTitle customClass={"!mb-0"}>
              <span className="text-gold">SOH</span> Loves
            </MainTitle>
            <Cta url="#" name="View All" />
          </div>
        </div>
        <div className="container">
          <Slider
            slides={slides.map((item, index) => (
              <div key={index} className="relative">
                <div className="whiteStar right-0 xl:w-[5.208vw] xl:h-[5.208vw] !bg-[url('/images/half-white-single-star.svg')]"></div>
              <ArticleCard articleImage={item?.image}  articleImgStyle={"aspect-[5/6]"} articleTitle={item?.title} articleAuthor={item?.author}/>
              </div>
            ))}
            setting={sliderSettings}
          />
        </div>
      </div>
      <Image
        src={"/images/half-star-pattern2.png"}
        width={1000}
        height={160}
        className="w-8/12 xl:w-7/12"
      />
    </section>
  );
};

export default SohLoves;
