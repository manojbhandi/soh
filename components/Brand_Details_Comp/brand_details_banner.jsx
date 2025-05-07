import Image from "next/image";
import ProductLogo from "../Ui/product_logo";
import Product_Logo_Name from "../Ui/product_logo/product_logo_name";
import Share_Icon from "../Ui/shareIcon";

const Brand_Details_Banner = ({ bannerImg, mobBannerImg }) => {
  return (
    <div className="mb-8 lg:mb-[2vw]">
      <div className="relative">
        <div className="container-fluid">
          <Image
            src={bannerImg}
            width={1920}
            height={480}
            alt=""
            className="w-full h-auto hidden sm:block deskBanner"
          />

          <Image
            src={mobBannerImg}
            width={1920}
            height={480}
            alt=""
            className="w-full h-auto block sm:hidden mobBanner"
          />
        </div>
      </div>
      <div className="container flex justify-between">
        <div className="flex">
          <div className="mt-[-75px] lg:mt-[-6.05vw] relative z-10">
            <ProductLogo
              imgSrc={"/images/soh_recommended/moab.png"}
              customClass={"w-[150px] h-[150px] lg:w-[12.1vw] lg:h-[12.1vw]"}
            />
          </div>
          <Product_Logo_Name
            productName={"Moab"}
            customClass={"text-[30px] lg:text-[2.5vw] mt-4 lg:mt-[1.2vw]"}
          />
        </div>

        <div>
          <Share_Icon
            customClass={
              "mt-5 lg:mt-[1vw] w-[40px] h-[40px] lg:w-[3.3vw] lg:h-[3.3vw]"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Brand_Details_Banner;
