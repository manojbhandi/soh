import Image from "next/image";
import Slider from "@/components/Ui/Slider";
import ArticleImage from "../Ui/Cards/Article/ArticleImage";
import SubMainTitle from "../Ui/SubMainTitle";
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
              <div
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
              </div>
              <div className="font-fh text-[24px] lg:text-[1.25vw] text-black font-bold ps-5 lg:ps-[2vw]">
                MOAB
              </div>
            </div>

            <div className="socialShare">
              <div className="bg-[#F7F3EA] rounded-[50%] w-[40px] h-[40px] lg:w-[2.5vw] lg:h-[2.5vw] flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  className="m-auto w-[50%] h-auto"
                >
                  <path
                    d="M15.161 19.3672C14.4125 19.3672 13.777 19.1054 13.2545 18.5819C12.7321 18.0584 12.471 17.4228 12.471 16.6749C12.471 16.5749 12.5056 16.3319 12.5747 15.9459L5.46322 11.7594C5.22222 12.0094 4.93589 12.2053 4.60422 12.3469C4.27255 12.4886 3.91722 12.5594 3.53822 12.5594C2.79305 12.5594 2.15964 12.2966 1.63797 11.7709C1.1163 11.2453 0.855469 10.6107 0.855469 9.86719C0.855469 9.12369 1.1163 8.4891 1.63797 7.96344C2.15964 7.43777 2.79305 7.17494 3.53822 7.17494C3.91722 7.17494 4.27255 7.24577 4.60422 7.38744C4.93589 7.5291 5.22222 7.72494 5.46322 7.97494L12.5747 3.79794C12.5351 3.67494 12.5078 3.55444 12.493 3.43644C12.4783 3.31844 12.471 3.19277 12.471 3.05944C12.471 2.3116 12.7329 1.67594 13.2567 1.15244C13.7807 0.628937 14.417 0.367188 15.1655 0.367188C15.914 0.367188 16.5494 0.629188 17.0717 1.15319C17.5942 1.67702 17.8555 2.31319 17.8555 3.06169C17.8555 3.81019 17.5937 4.44569 17.0702 4.96819C16.5467 5.49052 15.9111 5.75169 15.1632 5.75169C14.7824 5.75169 14.4282 5.67927 14.1007 5.53444C13.7731 5.3896 13.4887 5.19219 13.2477 4.94219L6.13622 9.12869C6.17589 9.25185 6.20314 9.37235 6.21797 9.49019C6.23264 9.60819 6.23997 9.73385 6.23997 9.86719C6.23997 10.0005 6.23264 10.1262 6.21797 10.2442C6.20314 10.362 6.17589 10.4825 6.13622 10.6057L13.2477 14.7922C13.4887 14.5422 13.7731 14.3448 14.1007 14.1999C14.4282 14.0551 14.7824 13.9827 15.1632 13.9827C15.9111 13.9827 16.5467 14.2446 17.0702 14.7684C17.5937 15.2924 17.8555 15.9287 17.8555 16.6772C17.8555 17.4257 17.5935 18.0611 17.0695 18.5834C16.5456 19.1059 15.9095 19.3672 15.161 19.3672ZM15.1632 17.8672C15.5011 17.8672 15.7842 17.7529 16.0127 17.5244C16.2412 17.2959 16.3555 17.0128 16.3555 16.6749C16.3555 16.3371 16.2412 16.0539 16.0127 15.8254C15.7842 15.5968 15.5011 15.4824 15.1632 15.4824C14.8254 15.4824 14.5422 15.5968 14.3137 15.8254C14.0851 16.0539 13.9707 16.3371 13.9707 16.6749C13.9707 17.0128 14.0851 17.2959 14.3137 17.5244C14.5422 17.7529 14.8254 17.8672 15.1632 17.8672ZM3.53822 11.0594C3.87872 11.0594 4.16414 10.9452 4.39447 10.7167C4.62497 10.4882 4.74022 10.205 4.74022 9.86719C4.74022 9.52935 4.62497 9.24619 4.39447 9.01769C4.16414 8.78919 3.87872 8.67494 3.53822 8.67494C3.20305 8.67494 2.92214 8.78919 2.69547 9.01769C2.4688 9.24619 2.35547 9.52935 2.35547 9.86719C2.35547 10.205 2.4688 10.4882 2.69547 10.7167C2.92214 10.9452 3.20305 11.0594 3.53822 11.0594ZM15.1632 4.25194C15.5011 4.25194 15.7842 4.1376 16.0127 3.90894C16.2412 3.68044 16.3555 3.39727 16.3555 3.05944C16.3555 2.7216 16.2412 2.43844 16.0127 2.20994C15.7842 1.98144 15.5011 1.86719 15.1632 1.86719C14.8254 1.86719 14.5422 1.98144 14.3137 2.20994C14.0851 2.43844 13.9707 2.7216 13.9707 3.05944C13.9707 3.39727 14.0851 3.68044 14.3137 3.90894C14.5422 4.1376 14.8254 4.25194 15.1632 4.25194Z"
                    fill="black"
                  />
                </svg>
              </div>
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
