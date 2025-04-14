import { useState } from "react";

const CategoryNav = ({ sections, activeSlide }) => {
  const [activeNum, setActiveNum] = useState(0);

  return (
    <ul className="flex flex-wrap xl:flex-col gap-3 xl:gap-[1.5vw] direction_LtR xl:ps-[3vw] mb-5 xl:mb-0">
      {sections.map((item, index) => (
        <li
          key={index}
          className={`font-normal cursor-pointer transition-all ${
            activeNum === index
              ? "text-[18px] xl:text-[1.8vw] text-gold font-fh"
              : "text-[18px] xl:text-[1.5vw] text-mainBlack font-fh-light"
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
