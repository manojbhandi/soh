import CtaBtn from "../Ui/CtaBtn";
import SubMainTitle from "../Ui/SubMainTitle";
import Related_Article_Card from "./relatedArticleCard";

const Related_Articles = () => {
  const data = [
    {
      label: "house keeping",
      heading: "Lorem Ipsum is simply dummy text of the printing and industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s.",
      imgSrc: "/images/brand_details/article/1.png",
    },
    {
      label: "house keeping",
      heading: "Lorem Ipsum is simply dummy text of the printing and industry.",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's dummy text ever since the 1500s.",
      imgSrc: "/images/brand_details/article/2.png",
    },
  ];

  return (
    <div className="bg-[#fffdf8] pb-[1px]">
      <div className="container">
        <SubMainTitle title={"Related Articles"} />
        {data?.map((item, i) => (
          <Related_Article_Card
            imgSrc={item.imgSrc}
            subTitle={item.label}
            title={item.heading}
            para={item.para}
            key={i}
          />
        ))}

        <CtaBtn
          title={"Load More"}
          customClass={"mx-auto normal-case mb-10 lg:mb-[4vw]"}
          url={""}
        />
      </div>
    </div>
  );
};

export default Related_Articles;
