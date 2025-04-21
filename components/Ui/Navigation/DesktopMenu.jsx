import { generateSlug } from "@/utils/commonFunctions";
import { getImageUrl } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const DesktopMenu = ({ customClass, menuData, menuBtnClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`flex justify-between xl:justify-start  xl:gap-36 ${customClass}`}>
      {/* Left Side - Categories */}
      <div className={`${activeIndex !== null ? "lg:w-2/12 xl:w-fit" : "lg:w-3/12 xl:w-4/12"}`}>
        <ul className="deskMenuList">
          {menuData?.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={menuBtnClick}
            >
              <Link href={`/${item?.slug}`} className="goldStar">
                {item?.categoryName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Subcategories */}
      <div className="lg:w-8/12 xl:w-[62%]">
        {activeIndex !== null && menuData?.[activeIndex]?.Subcategory && (

          <div className="grid lg:grid-cols-3 lg:gap-[30px] xl:gap-x-[2.083vw] xl:gap-y-[3.125vw]">
            {menuData?.[activeIndex]?.Subcategory?.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                href={`/${menuData[activeIndex]?.slug}/${subItem?.slug}`}
                className="menuSubCateogryBox"
                onClick={menuBtnClick}
              >
                <Image
                  src={getImageUrl(subItem?.subcategoryImage)}
                  width={350}
                  height={200}
                  alt={subItem?.subcategoryName}
                />
                <h4>{subItem?.subcategoryName}</h4>
              </Link>
            ))}
          </div>

        )}
      </div>
    </div >
  );
};

export default DesktopMenu;
