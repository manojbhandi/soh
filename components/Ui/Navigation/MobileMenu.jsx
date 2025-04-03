import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const menuData = [
  {
    categoryUrl: "#",
    categoryName: "Leadership",
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
    categoryName: "Business", // Fixed inconsistent key name
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
  {
    categoryUrl: "#",
    categoryName: "The Brand Edit", // Fixed inconsistent key name
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
  { categoryUrl: "#", categoryName: "Architecture + Design" },
  { categoryUrl: "#", categoryName: "Travel" },
  { categoryUrl: "#", categoryName: "Dine & Drink" },
  { categoryUrl: "#", categoryName: "SOH Loves" },
  { categoryUrl: "#", categoryName: "Video" },
];

const MobileMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul className="mobileMenu">
      {menuData.map((item, index) => (
        <li key={index}>
          <div className="flex justify-between items-center">
            <button onClick={() => toggleMenu(index)}>
              {item.categoryName}
            </button>
            {item.subCategory && item?.subCategory?.length > 0 && (
              <Link href={item.categoryUrl} className="toggle-button">
                <svg viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
            )}
          </div>
          {item?.subCategory && item?.subCategory?.length > 0 && (
            <ul
              className={`submenu ${openIndex === index ? "submenuOpen" : "hidden"
                }`}
            >
              {item.subCategory.map((subItem, subIndex) => (
                <li key={subIndex} className="menuSubCateogryBox">
                  <Link href={subItem?.subCategoryUrl}>
                    <Image
                      src={subItem?.subCategoryImg}
                      width={350}
                      height={200}
                      alt={subItem?.subCategoryName}
                    />
                    <h4>{subItem?.subCategoryName}</h4>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
