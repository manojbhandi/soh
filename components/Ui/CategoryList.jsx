import { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "./Slider";

const CategoryList = ({ categories }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 575);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    slidesPerView: 'auto',
    spaceBetween: 15,
    navigation: false,
    pagination: false,
    loop: true,
    speed: 2000,
    centeredSlides: true,
  };

  return (
    <ul className="categoryListing">
      {isMobile ? (
        <Slider
          setting={sliderSettings}
          slides={categories && categories.length > 0 && categories?.map((item, index) => (
            <li key={index}>
              <Link href={`/${item.slug}`} className="goldStar">
                {item?.categoryName}
              </Link>
            </li>
          ))}
        />
      ) : (
        categories && categories.length > 0 && categories?.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.slug}`} className="goldStar">
              {item?.categoryName}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default CategoryList;
