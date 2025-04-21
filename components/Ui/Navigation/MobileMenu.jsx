import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getImageUrl } from "@/utils/constants";
import { generateSlug } from "@/utils/commonFunctions";

// const menuData = [
//   {
//     categoryUrl: "#",
//     categoryName: "Leadership",
//     subCategory: [
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/leadership/ownerCircle.jpg",
//         subCategoryName: "Owner Circle",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/leadership/ceo-lens.jpg",
//         subCategoryName: "From the CEO lens",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/leadership/tourism-boards.jpg",
//         subCategoryName: "Tourism Boards",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/leadership/think-tank.jpg",
//         subCategoryName: "GM's Think Tank",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/leadership/policy.jpg",
//         subCategoryName: "Policy",
//       },
//     ],
//   },
//   {
//     categoryUrl: "#",
//     categoryName: "Business", // Fixed inconsistent key name
//     subCategory: [
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/business/latest-news.jpg",
//         subCategoryName: "Latest News",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/business/devlopment-update.jpg",
//         subCategoryName: "Development Update",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/business/feature-trends.jpg",
//         subCategoryName: "Features + Trends",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/business/talent.jpg",
//         subCategoryName: "Talent",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/business/technology.jpg",
//         subCategoryName: "Technology",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/business/insight-columns.jpg",
//         subCategoryName: "Insights + Columns",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/business/markets.jpg",
//         subCategoryName: "Markets",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/business/sustainability.jpg",
//         subCategoryName: "Sustainability",
//       },
//     ],
//   },
//   {
//     categoryUrl: "#",
//     categoryName: "The Brand Edit", // Fixed inconsistent key name
//     subCategory: [
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/brand-edit/partners.jpg",
//         subCategoryName: "Partners",
//       },
//       {
//         subCategoryUrl: "#",
//         subCategoryImg: "/images/brand-edit/products.jpg",
//         subCategoryName: "Products",
//       },
//     ],
//   },
//   { categoryUrl: "#", categoryName: "Architecture + Design" },
//   { categoryUrl: "#", categoryName: "Travel" },
//   { categoryUrl: "#", categoryName: "Dine & Drink" },
//   { categoryUrl: "#", categoryName: "SOH Loves" },
//   { categoryUrl: "#", categoryName: "Video" },
// ];

const MobileMenu = ({ menuData, menuBtnClick }) => {
  const [openIndex, setOpenIndex] = useState(null);
  console.log("menuData", menuData);
  const toggleMenu = (index) => {
    console.log(index, "Index")
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul className="mobileMenu">
      {menuData && menuData.length > 0 && menuData.map((item, index) => (
        <li key={index}>
          <div className="flex justify-between items-center">
            <button onClick={() => toggleMenu(index)}>
              {item.categoryName}
            </button>
            {item.Subcategory && item?.Subcategory?.length > 0 && (
              <Link
                onClick={menuBtnClick}
                href={`/${item?.slug}`} className="toggle-button">
                <svg viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
            )}
          </div>
          {console.log("sibItem>>>", item)}
          {item?.Subcategory?.map((sibItem) => console.log("sibItem", sibItem))}
          {item?.Subcategory && item?.Subcategory?.length > 0 && (
            <ul
              className={`submenu ${openIndex === index ? "submenuOpen" : "hidden"
                }`}
            >
              {item.Subcategory.map((subItem, subIndex) => (
                <li key={subIndex} className="menuSubCateogryBox">
                  <Link
                    onClick={menuBtnClick}

                    href={`/${subItem.fullPath}`}
                  >
                    <Image
                      src={getImageUrl(subItem?.subcategoryImage)}
                      width={350}
                      height={200}
                      alt={subItem?.subcategoryName}
                    />
                    <h4>{subItem?.subcategoryName}</h4>
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
