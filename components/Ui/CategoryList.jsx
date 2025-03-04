import Link from "next/link";

const CategoryList = ({ categoryData }) => {
  return (
    <ul className="categoryListing">
      {categoryData.map((item, index) => (
        <li key={index}>
          <Link href={item.url} className="goldStar">{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
