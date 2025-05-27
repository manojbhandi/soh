import Image from "next/image";
import Slider from "@/components/Ui/Slider";
import ArticleImage from "../Ui/Cards/Article/ArticleImage";
import SubMainTitle from "../Ui/SubMainTitle";
import ProductLogo from "../Ui/product_logo";
import Product_Logo_Name from "../Ui/product_logo/product_logo_name";
import Share_Icon from "../Ui/shareIcon";
const ProductDetailsComp = () => {
  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: true,
    pagination: false,
    speed: 1500,
    autoplay: false,
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
    <div className="bg-[#FFFDF8] py-10 lg:py-[5vw]">
      <div className="container md:grid md:grid-cols-2 items-start">
        <div className="border border-[#C0C0C0] lg:p-[2vw] productDetailsSlider mb-10 lg:mb-0">
          {/* <Image
            src={"/images/soh_recommended/banner_img.jpg"}
            className="w-full h-auto"
            alt=""
          /> */}

          <Slider
            slides={data.map((item, index) => (
              <div className="h-full">
                <div className="m-auto w-[80%] lg:w-[70%] relative p-5">
                  <Image
                    src={"/images/soh_recommended/banner_img.jpg"}
                    className="w-full h-auto m-auto"
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

        <div className="md:ps-10 lg:ps-[4vw]">
          <div className="flex justify-between mb-8 lg:mb-[3vw]">
            <div className="flex items-center">
              {/* <div
                className="proLogo rounded-md lg:rounded-md border border-[#C2C2C2] w-[140px] 
              h-[140px] lg:w-[7.3vw] lg:h-[7.3vw] flex bg-white"
              >
                <Image
                  src={"/images/soh_recommended/moab.png"}
                  width={206}
                  height={76}
                  alt="SOH"
                  className="m-auto max-w-[90%] max-h-[90%] w-auto h-auto align-middle"
                />
              </div> */}

              <ProductLogo
                imgSrc={"/images/soh_recommended/moab.png"}
                customClass={"w-[140px] h-[140px] lg:w-[7.3vw] lg:h-[7.3vw]"}
              />
              <Product_Logo_Name
                productName={"MOAB"}
                customClass={"text-[24px] lg:text-[1.25vw]"}
              />
              {/* <div className="font-fh text-[24px] lg:text-[1.25vw] text-black font-bold ps-5 lg:ps-[2vw]">
                MOAB
              </div> */}
            </div>

            <div className="socialShare">
              <Share_Icon
                customClass={"w-[40px] h-[40px] lg:w-[2.5vw] lg:h-[2.5vw]"}
              />
            </div>
          </div>

          <div className="flex gap-5 items-center mb-8 lg:mb-[3vw]">
            <div>
              <SubMainTitle
                title={"Freestanding carrara marble washbasin"}
                customClass={"mb-0"}
              />
            </div>
            <div>
              <div className="w-[150px] h-[120px] lg:w-[9vw] lg:h-[6vw] bg-[#99742B] rounded-[8px] lg:rounded-[0.5vw]  p-4 lg:p-[0.5vw] hidden sm:flex">
                <div className="m-auto text-white font-fh-light text-center lg:text-[0.8vw] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="42"
                    viewBox="0 0 38 42"
                    fill="none"
                    className="mx-auto w-[25px] h-auto lg:w-[1.2vw] mb-2 lg:mb-2"
                  >
                    <path
                      d="M19.3492 0.931289C19.2797 0.28332 18.4312 0.28332 18.3618 0.931289L17.7797 6.36715C17.0281 13.3863 12.0339 18.9204 5.69962 19.7533L0.794083 20.3982C0.209263 20.4752 0.209263 21.4154 0.794083 21.4924L5.69962 22.1374C12.0339 22.9702 17.0281 28.5043 17.7797 35.5234L18.3618 40.9593C18.4312 41.6073 19.2797 41.6073 19.3492 40.9593L19.9312 35.5234C20.6828 28.5043 25.677 22.9702 32.0114 22.1374L36.9169 21.4924C37.5017 21.4154 37.5017 20.4752 36.9169 20.3982L32.0114 19.7533C25.677 18.9204 20.6828 13.3863 19.9312 6.36715L19.3492 0.931289Z"
                      fill="white"
                    />
                  </svg>
                  <span className="block">SOH</span> Recommended
                </div>
              </div>
            </div>
          </div>

          <div className="*:text-[14px] *:lg:text-[0.9vw] *:mb-5 *:lg:mb-[1vw] ">
            <p>
              The exquisite Prive collection of bespoke rugs is the embodiment
              of Royal Thai's commitment to partnering with innovative artists
              to offer a diverse and multicultural perspective through striking,
              one-of-a-kind floor coverings. The latest collection is the result
              of an exclusive collaboration with renowned British interior
              designer Lawrence Llewellyn-Bowen.
            </p>

            <p>
              The artisanal ensemble is a convergence of the prolific designer's
              knowledge of rug design's centuries-old legacy, his professional
              experience garnered on the global stage, his vivacious
              personality, and Royal Thai's exceptional craftsmanship. Each
              opulent design has a distinct and glamorous story to tell about
              the aesthetics.
            </p>

            <p>
              The exquisite Prive collection of bespoke rugs is the embodiment
              of Royal Thai's commitment to partnering with innovative artists
              to offer a diverse and multicultural perspective through striking,
              one-of-a-kind floor coverings. The latest collection is the result
              of an exclusive collaboration with renowned British interior
              designer Lawrence Llewellyn-Bowen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComp;
