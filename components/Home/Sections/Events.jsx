import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import Cta from "@/components/Ui/Cta";
import Slider from "@/components/Ui/Slider";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import { useEffect, useState } from "react";



const Events = () => {
  const sliderSettings = {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    navigation: true,
    pagination: false,
    speed: 2000,
    breakpoints: {
      575: {
        slidesPerView: 2, 
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
      },
      
      991: {
        slidesPerView: 3,
        spaceBetween: "2.5%",
      },
    },
  };
  const [filteredEvents, setFilteredEvents] = useState(eventData?.data);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setFilteredEvents(eventData?.data.slice(1));
      } else {
        setFilteredEvents(eventData?.data);
      }
    };

    handleResize(); // Run on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section>
      <div className="bg-[#F7F3EA] py-[50px] xl:py-[5.208vw]">
        <div className="container">
          <div className="flex items-center mb-[20px] xl:mb-[2.604vw]">
            {eventData?.heading && <div className="flex-1">
              <SubMainTitle title={eventData?.heading} customClass={"!mb-0"} />
            </div>}
            {eventData?.link && <div className="flex-none">
              <Cta url={eventData?.link} name={"View All"} />
            </div>}
          </div>

          <div className="hidden lg:flex lg:mb-[15px] xl:mb-[2.5%]">
            <div className="lg:w-[65.8%]">
              <ArticleImage
                articleImage={eventData?.data[0]?.image}
                articleImgStyle={'!pt-[56.1%]'}
              />
            </div>
            <div className="lg:w-4/12 lg:pl-[50px] xl:pl-[5vw]">
              <ArticleCard
                articleTitle={eventData?.data[0]?.title}
                articleShortPara={eventData?.data[0]?.para}
                articleDpLink={eventData?.data[0]?.link}
                paraStyle={"line-clamp-4"}
              />
              <Cta
                url={eventData?.data[0]?.link}
                name={"Read More"}
                customClass={"xl:mt-[3.646vw]"}
              />
            </div>
          </div>

          <Slider
              slides={filteredEvents.map((item, index) => (
                <div key={index}>
                  <ArticleCard
                    articleImage={item?.image}
                    articleTitle={item?.title}
                    articleDpLink={item?.link}
                  />
                </div>
              ))}
              setting={sliderSettings}
            />
        </div>
      </div>
    </section>
  );
};

export default Events;


const eventData = {
  heading: "Events",
  link: "/article",
  data: [
    {
      image: "/images/events/article01.jpg",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/article/article-sub-category/template-two",
    },
    {
      image: "/images/events/article02.jpg",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      link: "/article/article-sub-category/template-two",
    },
    {
      image: "/images/events/article03.jpg",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      link: "/article/article-sub-category/template-two",
    },
    {
      image: "/images/events/article04.jpg",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      link: "/article/article-sub-category/template-two",
    },
    {
      image: "/images/events/article04.jpg",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      link: "/article/article-sub-category/template-two",
    },
  ],
};