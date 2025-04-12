import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay } from "swiper/modules";
import ArticleCard from "../Ui/Cards/Article/ArticleCard";

const Trending = () => {
  const articleData = [
    {
      image: "/images/sohLoves/trending/1.png",
      subCategory: "Category",
      title: "Lorem Ipsum is simply dummy text of the printing and industry...",
    },
    {
      image: "/images/sohLoves/trending/2.png",
      subCategory: "Category",
      title: "Lorem Ipsum is simply dummy text of the printing and industry...",
    },
    {
      image: "/images/sohLoves/trending/3.png",
      subCategory: "Category",
      title: "Lorem Ipsum is simply dummy text of the printing and industry...",
    },
  ];

  return (
    <div className="bg-[#F7F3EA] relative pt-[100px] xl:pt-[7vw] pb-[50px] xl:pb-[5vw]">
      <div className="whiteStar right-0 left-0 mx-auto"></div>
      <div className="container">
        <h2 className="text-[24px] xl:text-[1.8vw] text-mainBlack mb-5 xl:mb-[2vw] font-fh text-center">
          Trending
        </h2>

        <Swiper
          loop={false}
          speed={1500}
          slidesPerView={3}
          spaceBetween={40}
          // pagination={{
          //   clickable: true,
          //   //dynamicBullets: true,
          // }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper w-full "
        >
          {articleData.map((item, i) => (
            <SwiperSlide key={i}>
              <ArticleCard
                articleImage={item.image}
                articleSubCategory={item.subCategory}
                articleTitle={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
