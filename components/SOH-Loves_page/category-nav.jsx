import { useState } from "react";

const CategoryNav = ({ sections, activeSlide }) => {
  const [activeNum, setActiveNum] = useState(0);

  return (
    <ul className="flex flex-col gap-5 xl:gap-[1.5vw] direction_LtR ps-5 xl:ps-[3vw]">
      {sections.map((item, index) => (
        <li
          key={index}
          className={`font-normal cursor-pointer transition-all ${
            activeNum === index
              ? "text-[30px] xl:text-[1.8vw] text-gold font-fh"
              : "text-[20px] xl:text-[1.5vw] text-mainBlack font-fh-light"
          } font-fh `}
          onClick={() => {
            activeSlide(index);
            setActiveNum(index);
          }}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default CategoryNav;
