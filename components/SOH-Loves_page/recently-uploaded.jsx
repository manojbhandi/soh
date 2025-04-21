import Link from "next/link";
import MainTitle from "../Ui/MainTitle";
import Horizantal_Image_Card from "../Ui/Cards/horizantal_image_card";
import CtaBtn from "../Ui/CtaBtn";
import Video_Cont from "./video-cont";
import DineDrinkArticle from "../Home/Sections/DineDrink/DineDrinkArticle";
import ArticleCard from "../Ui/Cards/Article/ArticleCard";
import LinkButton from "../Ui/LinkButton";

const Recently_Uploaded = () => {
  const data = [
    {
      imgSrc: "/images/sohLoves/recent_upload/1.png",
      label: "Best of the Best",
      altTag: "soh loves",
      heading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      imgSrc: "/images/sohLoves/recent_upload/2.png",
      label: "Best of the Best",
      altTag: "soh loves",
      heading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      imgSrc: "/images/sohLoves/recent_upload/3.png",
      label: "Best of the Best",
      altTag: "soh loves",
      heading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      imgSrc: "/images/sohLoves/recent_upload/4.png",
      label: "Best of the Best",
      altTag: "soh loves",
      heading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
  ];

  const articleData = [
    {
      image: "/images/sohLoves/article_1.png",
      subCategory: "Restaurants",
      title: "Lorem dummy text of the printing and typesetting...",
    },
    {
      image: "/images/sohLoves/article_2.png",
      subCategory: "Restaurants",
      title: "Lorem dummy text of the printing and typesetting...",
    },
  ];

  return (
    <div className="container grid sm:grid-cols-4 mb-10 xl:mb-[4vw]">
      <div className="col-span-3 sm:border-r sm:border-[#cacaca] sm:pe-5 xl:pe-[3vw] mb-10 sm:mb-0">
        <div className="flex justify-between items-start mb-5 xl:mb-[3vw]">
          <h2 className="text-[24px] xl:text-[1.8vw] text-mainBlack font-fh">
            Recently Uploaded
          </h2>

          {/* <Link
            href={"/#"}
            className="text-mainBlack font-inter italic tracking-[2px] hover:tracking-[3px] table text-[13px] xl:text-[0.7vw] border-b border-black transition-all pb-1 
            "
          >
            View All
          </Link> */}

          <LinkButton text={"View All"} />
        </div>

        <div className="xl:pe-[7vw]">
          {data?.map((item, i) => (
            <Horizantal_Image_Card
              key={i}
              imgSrc={item.imgSrc}
              altTag={item.altTag}
              label={item.label}
              heading={item.heading}
              customClass={"mb-5 xl:mb-[3vw]"}
            />
          ))}
        </div>

        <CtaBtn title={"Load more"} customClass={"normal-case mx-auto"} />
      </div>

      <div className="col-span-1 sm:ps-5 xl:ps-[4.5vw]">
        <Video_Cont />

        <div>
          <h2 className="text-mainBlack font-fh text-[20px] xl:text-[1.25vw] mb-5 xl:mb-[2.5vw]">
            Recommended
          </h2>

          {articleData.map((item, i) => (
            <ArticleCard
              key={i}
              articleImage={item.image}
              articleSubCategory={item.subCategory}
              articleTitle={item.title}
              customClass={"mb-10 xl:mb-[3vw]"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recently_Uploaded;
