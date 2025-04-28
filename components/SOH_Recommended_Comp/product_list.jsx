import ProductCard from "./product_card";

const Product_List = () => {
  const data = [
    {
      imgSrc: "/images/product-list/1.png",
      title: "JUNO-Freestanding carrara marble washbasin",
    },
    {
      imgSrc: "/images/product-list/2.png",
      title: "JUNO-Freestanding carrara marble washbasin",
    },
    {
      imgSrc: "/images/product-list/3.png",
      title: "JUNO-Freestanding carrara marble washbasin",
    },
    {
      imgSrc: "/images/product-list/4.png",
      title: "JUNO-Freestanding carrara marble washbasin",
    },
    {
      imgSrc: "/images/product-list/1.png",
      title: "Lorem Ipsum",
    },
    {
      imgSrc: "/images/product-list/2.png",
      title: "JUNO-Freestanding carrara marble washbasin",
    },
    {
      imgSrc: "/images/product-list/3.png",
      title: "JUNO-Freestanding carrara marble washbasin",
    },
    {
      imgSrc: "/images/product-list/4.png",
      title: "Lorem Ipsum",
    },
  ];

  return (
    <div className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[2vw]">
        {data.map((item, i) => (
          <ProductCard imgSrc={item.imgSrc} title={item.title} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Product_List;
