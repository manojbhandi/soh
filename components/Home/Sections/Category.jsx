import { useState } from "react";
import CategoryList from "../../Ui/CategoryList";

const categoryData = [
  {
    name: "Leadership",
    url: "#",
  },
  {
    name: "Business ",
    url: "#",
  },
  {
    name: "Architecture + Design ",
    url: "#",
  },
  {
    name: "Voyages of Influence ",
    url: "#",
  },
  {
    name: "Dine & Drink ",
    url: "#",
  },
  {
    name: "SOH Loves ",
    url: "#",
  },
  {
    name: "Travel ",
    url: "#",
  },
  {
    name: "The Brand Edit ",
    url: "#",
  },
  {
    name: "Videos ",
    url: "#",
  },
  {
    name: "Events ",
    url: "#",
  },
];

const Category = ({ categories }) => {

  const filterdItem = categories?.data?.length > 0 && categories?.data?.find((item) => item?.categoryName === "Voyages of Influence")
  let orderedCategories = categories?.data?.length > 0 && categories?.data?.filter((item) => item?.categoryName != "Voyages of Influence")
  orderedCategories.push(filterdItem)

  return (
    <section>
      <div className="container">
        <CategoryList categories={orderedCategories} />
      </div>
    </section>
  );
};

export default Category;  
