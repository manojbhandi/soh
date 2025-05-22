import { useState } from "react";
import CategoryList from "../../Ui/CategoryList";
import { orderCategoris } from "@/utils/constants";

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

  return (
    <section>
      <div className="container">
        <CategoryList categories={orderCategoris(categories)} />
      </div>
    </section>
  );
};

export default Category;  
