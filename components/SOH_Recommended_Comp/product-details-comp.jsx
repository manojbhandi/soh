import Image from "next/image";
import Slider from "@/components/Ui/Slider";
import ArticleImage from "../Ui/Cards/Article/ArticleImage";
const ProductDetailsComp = () => {
  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: true,
    pagination: false,
    speed: 1500,
    autoplay: true,
  };

  const data = [
    {
      imgSrc: "/images/soh_recommended/banner_img.jpg",
    },
    {
      imgSrc: "/images/soh_recommended/banner_img.jpg",
    },
    {
      imgSrc: "/images/soh_recommended/banner_img.jpg",
    },
    {
      imgSrc: "/images/soh_recommended/banner_img.jpg",
    },
    {
      imgSrc: "/images/soh_recommended/banner_img.jpg",
    },
  ];

  return (
    <div className="bg-[#FFFDF8]">
      <div className="container grid grid-cols-2">
        <div className="border border-[#C0C0C0] lg:p-[2vw]">
          {/* <Image
            src={"/images/soh_recommended/banner_img.jpg"}
            className="w-full h-auto"
            alt=""
          /> */}

          <Slider
            slides={data.map((item, index) => (
              <div>
                <div className="w-[70%] mx-auto">
                  <Image
                    src={"/images/soh_recommended/banner_img.jpg"}
                    className="w-full h-auto"
                    alt="SOH"
                    width={452}
                    height={549}
                  />
                </div>
              </div>
            ))}
            setting={sliderSettings}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComp;
