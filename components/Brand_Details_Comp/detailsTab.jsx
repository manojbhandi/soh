import { useState } from "react";

const Details_Tab = ({ data, sectionHandler }) => {
  const [num, setNum] = useState(0);

  const clickHandler = (i) => {
    setNum(i);
  };
  return (
    <div className="container mb-5 lg:mb-[3vw]">
      <ul className="sticky *:mb-[-2px] *:me-[15px] *:lg:me-[5vw] *:pb-3 *:lg:pb-[1.5vw] flex last:*:me-0 *:text-[16px] *:lg:text-[1.1vw] font-medium text-mainBlack group border-b-[2px] border-[#C2C2C2]">
        {data.map((item, i) => (
          <li
            key={item.id}
            className={
              num == i
                ? "font-bold border-b-[2px] border-[#99742B]"
                : "cursor-pointer"
            }
            onClick={() => {
              clickHandler(i);
              sectionHandler(item.name);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details_Tab;
