import CategoryList from "../Ui/CategoryList";
import CategoryBanner from "./CategoryBanner";
import Listing from "./Listing";

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

const CategoryPage = () => {
  return (
    <>
      <CategoryBanner />
      <Listing/>
      <CategoryList categoryData={categoryData} />
    </>
  );
};

export default CategoryPage;
