import BrandBanner from "../Ui/brandBanner";
import ProductCard from "../Ui/Cards/ProductCard";
import CtaBtn from "../Ui/CtaBtn";
import SubMainTitle from "../Ui/SubMainTitle";

const Category_Listing = () => {
  const data = [
    {
      image: "/images/product/01.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/02.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/03.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/04.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/05.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/01.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/02.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/03.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/01.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/02.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/03.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/04.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/05.png",
      name: "Category Name",
      url: "/#",
    },
    {
      image: "/images/product/01.png",
      name: "Category Name",
      url: "/#",
    },
  ];

  return (
    <div className="mb-10 lg:mb-[4vw]">
      <BrandBanner
        customClass={"mb-[40px] lg:mb-[6.1vw]"}
        imgSrc={"/images/category_listing/banner.png"}
        title={"Product Name"}
        para={
          "The living room is where we spend most of our time, the area of the house dedicated to relaxation and conviviality."
        }
      />

      <div className="container">
        <SubMainTitle title={"Explore by Categories"} />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-x-[1.5vw] lg:gap-y-[3vw] mb-10 lg:mb-[3vw]">
          {data.map((item, i) => (
            <ProductCard
              key={i}
              url={item.url}
              image={item.image}
              name={item.name}
              imgClass={
                "m-auto max-w-[200px] max-h-[210px] lg:max-w-[10.5vw] lg:max-h-[11vw] w-auto h-auto"
              }
            />
          ))}
        </div>

        <CtaBtn title={"Load More"} customClass={"mx-auto"} />
      </div>
    </div>
  );
};

export default Category_Listing;
