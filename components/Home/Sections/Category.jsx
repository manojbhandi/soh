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

  return (
    <section>
      <div className="container">
        <CategoryList categories={categories?.data} />
      </div>
    </section>
  );
};

export default Category;
