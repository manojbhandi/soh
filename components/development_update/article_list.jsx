import ArticleCard from "../Ui/Cards/Article/ArticleCard";
import ArticleImage from "../Ui/Cards/Article/ArticleImage";
import ArticleShortPara from "../Ui/Cards/Article/ArticleShortPara";
import CtaBtn from "../Ui/CtaBtn";

const Article_list = () => {
  const data = [
    {
      img: "/images/development-update/thumb_1.png",
    },
    {
      img: "/images/development-update/thumb_2.png",
    },
    {
      img: "/images/development-update/thumb_3.png",
    },
    {
      img: "/images/development-update/thumb_4.png",
    },
    {
      img: "/images/development-update/thumb_5.png",
    },
    {
      img: "/images/development-update/thumb_6.png",
    },
    {
      img: "/images/development-update/thumb_7.png",
    },
    {
      img: "/images/development-update/thumb_8.png",
    },
    {
      img: "/images/development-update/thumb_9.png",
    },
  ];
  return (
    <div className="container mb-10 xl:mb-[7vw]">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 xl:gap-[1.9vw] border-b-[2px] border-[#CACACA] mb-5 xl:mb-[2vw] pb-5 xl:pb-[2vw]">
        {data?.map((item, i) => (
          <div key={i}>
            <ArticleImage
              articleImage={item.img}
              articleImgStyle={"mb-4 xl:mb-[1.5vw]"}
            />
            <ArticleShortPara
              articleShortPara={
                "Lorem Ipsum is simply dummy text of the printing and industry."
              }
              paraStyle={"text-[#000] text-[14px] xl:text-[1.1vw]"}
            />
          </div>
        ))}
      </div>
      <CtaBtn
        url={"#"}
        title={"Load More"}
        customClass={"mx-auto normal-case"}
      />
    </div>
  );
};

export default Article_list;
