import EqualHeight from "../Ui/hook/equal_height";
import ImageStar from "../Ui/imgStar";
import SubMainTitle from "../Ui/SubMainTitle";

const Recommended_Products = () => {
  const data = [
    {
      name: "Made in India",
      imgSrc: "/images/soh_recommended/1.png",
      para: "Lorem Ipsum is simply dummy text of the printing and industry.",
    },
    {
      name: "Newly launched",
      imgSrc: "/images/soh_recommended/2.png",
      para: "Lorem Ipsum is simply dummy text of the printing and industry.",
    },
    {
      name: "Product of the month",
      imgSrc: "/images/soh_recommended/3.png",
      para: "Lorem Ipsum is simply dummy text of the printing and industry. ",
    },
  ];

  EqualHeight(".subTitleMain");

  return (
    <div className="container mb-10 lg:mb-[5vw]">
      <div className="xl:pe-[5vw]">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-10 xl:gap-[8vw]">
          {data.map((item, i) => (
            <div key={i}>
              <div>
                <SubMainTitle
                  title={item.name}
                  customClass={"leading-[1] subTitleMain"}
                />
              </div>
              <div className="pb-5 lg:pb-[1.5vw]">
                <ImageStar imgSrc={item.imgSrc} />
              </div>

              <div className="paraContent *:text-[14px] *:lg:text-[1.1vw] text-mainBlack font-medium">
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended_Products;
