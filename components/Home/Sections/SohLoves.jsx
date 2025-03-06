import ArticleAuthor from "@/components/Ui/Cards/Article/ArticleAuthor";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";
import Cta from "@/components/Ui/Cta";
import MainTitle from "@/components/Ui/MainTitle";
import Slider from "@/components/Ui/Slider";

const slides = [
  {
    image: "/images/sohLoves/article01.jpeg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry. ",
    author: "Imran Shaikh",
  },
  {
    image: "/images/sohLoves/article01.jpeg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry. ",
    author: "Imran Shaikh",
  },
  {
    image: "/images/sohLoves/article01.jpeg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry. ",
    author: "Imran Shaikh",
  },
  {
    image: "/images/sohLoves/article01.jpeg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry. ",
    author: "Imran Shaikh",
  },
  {
    image: "/images/sohLoves/article01.jpeg",
    title: "Lorem Ipsum is simply dummy text of the printing and industry. ",
    author: "Imran Shaikh",
  },
];

const SohLoves = () => {

  const sliderSettings = {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    navigation: false,
    pagination: false,
    speed: 2000,
    autoplay: { delay: 3000 },
    breakpoints: {
      575: {
        slidesPerView: 2, // Ensure this is being applied properly
        spaceBetween: 20, // Add spaceBetween explicitly
      },
      768: {
        slidesPerView: 3, // Optional: Adjust for tablet screens
      },
      1024: {
        slidesPerView: 4, // Optional: Adjust for desktop screens
      },
    },
  };
  
  
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center mb-[20px]">
          <MainTitle title="SOH Loves" customClass={"mb-0"} />
          <Cta url="#" name="View All" />
        </div>
      </div>
      <div className="container max-[575px]:p-0">
        <Slider
          slides={slides.map((item, index) => (
            <div key={index}>
              <ArticleImage articleImage={item?.image} />
              <ArticleTitle articleTitle={item?.title} />
              <ArticleAuthor articleAuthor={item?.author} />
            </div>
          ))}
          setting={sliderSettings}
        />
      </div>
    </section>
  );
};

export default SohLoves;
