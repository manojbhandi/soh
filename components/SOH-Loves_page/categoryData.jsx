import CategoryList from "../Ui/CategoryList";

const CategoryData = () => {
  const category_list = [
    {
      id: 2,
      categoryName: "Leadership",
      slug: "leadership",
    },
    {
      id: 3,
      categoryName: "Business",
      slug: "business",
    },
    {
      id: 4,
      categoryName: "Travel",
      slug: "travel",
    },
    {
      id: 5,
      categoryName: "Architecture + Design",
      slug: "architecture-design",
    },
    {
      id: 6,
      categoryName: "Voyages of Influence",
      slug: "voyages-of-influence",
    },
    {
      id: 7,
      categoryName: "Dine & Drink",
      slug: "dine-drink",
    },
    {
      id: 8,
      categoryName: "SOH Loves",
      slug: "soh-loves",
    },
    {
      id: 9,
      categoryName: "The Brand Edit",
      slug: "the-brand-edit",
    },
    {
      id: 10,
      categoryName: "Videos",
      slug: "videos",
    },
    {
      id: 11,
      categoryName: "Events",
      slug: "events",
    },
    {
      id: 12,
      categoryName: "Food",
      slug: "food",
    },
  ];
  return (
    <div className="container py-10 xl:py-[4vw]">
      <CategoryList categories={category_list} />
    </div>
  );
};

export default CategoryData;
