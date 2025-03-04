import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuData = [
  {
    categoryUrl: "#",
    CategoryName: "Leadership",
    subCategory: [
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/leadership/ownerCircle.jpg",
        subCategoryName: "Owner Circle",
      },
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/leadership/ceo-lens.jpg",
        subCategoryName: "From the CEO lens",
      },
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/leadership/tourism-boards.jpg",
        subCategoryName: "Tourism Boards",
      },
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/leadership/think-tank.jpg",
        subCategoryName: "GM's Think Tank",
      },
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/leadership/policy.jpg",
        subCategoryName: "Policy",
      },
    ],
  },
  {
    categoryUrl: "#",
    CategoryName: "Business",
    subCategory: [
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/business/latest-news.jpg",
        subCategoryName: "Latest News",
      },
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/business/devlopment-update.jpg",
        subCategoryName: "Development Update",
      },
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/business/feature-trends.jpg",
        subCategoryName: "Features + Trends",
      },
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/business/talent.jpg",
        subCategoryName: "Talent",
      },
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/business/technology.jpg",
        subCategoryName: "Technology",
      },
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/business/insight-columns.jpg",
        subCategoryName: "Insights + Columns",
      },
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/business/markets.jpg",
        subCategoryName: "Markets",
      },
      {
        subCategoryUrl: "#",
        subCategoryImg: "/images/business/sustainability.jpg",
        subCategoryName: "Sustainability",
      },
    ],
  },
  { categoryUrl: "#", CategoryName: "The Brand Edit",
    subCategory: [
        {
          subCategoryUrl: "#",
          subCategoryImg: "/images/brand-edit/partners.jpg",
          subCategoryName: "Partners",
        },
        {
          subCategoryUrl: "#",
          subCategoryImg: "/images/brand-edit/products.jpg",
          subCategoryName: "Products",
        },
       
      ],
   },
  { categoryUrl: "#", CategoryName: "Architecture + Design" },
  { categoryUrl: "#", CategoryName: "Travel" },
  { categoryUrl: "#", CategoryName: "Dine & Drink" },
  { categoryUrl: "#", CategoryName: "SOH Loves" },
  { categoryUrl: "#", CategoryName: "Video" },
];

const DesktopMenu = ({customClass}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`flex justify-between xl:justify-start ${customClass}`}>
      {/* Left Side - Categories */}
      <div className="lg:w-3/12 xl:w-4/12">
        <ul className="deskMenuList">
          {menuData?.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <Link href={item?.categoryUrl} className="goldStar">
                {item?.CategoryName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Subcategories */}
      <div className="lg:w-8/12 xl:w-[62%]">
      {activeIndex !== null && menuData[activeIndex]?.subCategory && (
        
          <div className="grid lg:grid-cols-3 lg:gap-[30px] xl:gap-x-[2.083vw] xl:gap-y-[3.125vw]">
            {menuData[activeIndex]?.subCategory?.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                href={subItem?.subCategoryUrl}
                className="menuSubCateogryBox"
              >
                <Image
                  src={subItem?.subCategoryImg}
                  width={350}
                  height={200}
                  alt={subItem?.subCategoryName}
                />
                <h4>{subItem?.subCategoryName}</h4>
              </Link>
            ))}
          </div>
      
      )}
    </div>
    </div>
  );
};

export default DesktopMenu;
