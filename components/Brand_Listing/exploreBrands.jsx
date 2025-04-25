import { useState } from "react";
import SubMainTitle from "../Ui/SubMainTitle";
import FilterBtn from "./filterBtn";
import BrandCard from "../Ui/Cards/BrandCard";
import CtaBtn from "../Ui/CtaBtn";

const ExploreBrands = () => {
  const activeBtns = [
    {
      name: "All",
    },
    {
      name: "Made in India",
    },
  ];

  const [num, setNum] = useState(0);

  const clickHandler = (i) => {
    setNum(i);
  };

  const data = [
    {
      img: "/images/brands/01.png",
    },
    {
      img: "/images/brands/02.png",
    },
    {
      img: "/images/brands/03.png",
    },
    {
      img: "/images/brands/04.png",
    },
    {
      img: "/images/brands/05.png",
    },
    {
      img: "/images/brands/06.png",
    },
    {
      img: "/images/brands/07.png",
    },
    {
      img: "/images/brands/08.png",
    },
    {
      img: "/images/brands/01.png",
    },
    {
      img: "/images/brands/02.png",
    },
    {
      img: "/images/brands/03.png",
    },
    {
      img: "/images/brands/04.png",
    },
    {
      img: "/images/brands/05.png",
    },
    {
      img: "/images/brands/06.png",
    },
    {
      img: "/images/brands/07.png",
    },
    {
      img: "/images/brands/08.png",
    },
  ];

  return (
    <div className="pb-10 lg:pb-[5vw]">
      <div className="container sm:flex justify-between items-center mb-10 lg:mb-[2vw]">
        <div>
          <SubMainTitle title={"Explore By Brands"} customClass={"sm:mb-0"} />
        </div>

        <div className="flex w-auto gap-4 lg:gap-5">
          {activeBtns.map((item, i) => (
            <FilterBtn
              text={item.name}
              customClass={num == i ? "!border-[#99742B] text-[#99742B]" : ""}
              key={i}
              clickHandler={() => clickHandler(i)}
            />
          ))}
        </div>
      </div>

      <div className="container grid grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-[2vw] mb-10 lg:mb-[3vw]">
        {data.map((item, i) => (
          <BrandCard key={i} url={"/#"} image={item.img} />
        ))}
      </div>

      <CtaBtn title={"Load more"} customClass={"normal-case mx-auto"} />
    </div>
  );
};

export default ExploreBrands;
