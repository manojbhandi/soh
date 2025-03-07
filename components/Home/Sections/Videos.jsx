import Cta from "@/components/Ui/Cta";
import Slider from "@/components/Ui/Slider";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Image from "next/image";
import Link from "next/link";

const videosData = [
  {
    image: "/images/videos/01.jpg",
  },
  {
    image: "/images/videos/02.jpg",
  },
  {
    image: "/images/videos/03.jpg",
  },
  {
    image: "/images/videos/01.jpg",
  },
  {
    image: "/images/videos/02.jpg",
  },
  {
    image: "/images/videos/03.jpg",
  },
];

const Videos = () => {
  const sliderSettings = {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    navigation: false,
    pagination: false,
    speed: 2000,
    breakpoints: {
      575: {
        slidesPerView: 2, // Ensure this is being applied properly
        spaceBetween: 20, // Add spaceBetween explicitly
      },
      768: {
        slidesPerView: 2, // Optional: Adjust for tablet screens
      },
      991: {
        slidesPerView: 1.5, // Optional: Adjust for desktop screens
      },
      1200: {
        slidesPerView: 2.3, // Optional: Adjust for desktop screens
      },
    },
  };

  return (
    <section className="mb-0">
      <div className="text-white overflow-hidden h-screen bg-[url('/images/videoBg.jpg')] bg-cover bg-no-repeat bg-center relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-mainBlack before:bg-opacity-[0.45]">
        <div className="absolute bottom-[15%] left-0 w-full">
          <div className="container lg:max-w-[inherit] lg:pr-0">
            <div className="lg:flex items-end gap-x-[15%] xl:gap-x-[15.625vw]">
              <div className="flex-1 mb-[30px]">
                <div className="hidden w-[70px] xl:w-[6.25vw] mb-[30px] xl:mb-[3.125vw] aspect-square bg-white  bg-opacity-50 rounded-full lg:flex items-center justify-center ">
                  <svg className="fill-gold w-1/2 h-1/2" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </div>

                <SubMainTitle title={"Videos"} customClass={"text-white"} />

                <p>
                  Lorem Ipsum is simply dummy text of the printing and industry.
                  Lorem Ipsum has been the industry's standard.
                </p>

                <Cta
                  url={"#"}
                  name={"View All"}
                  customClass={
                    "text-white mt-[30px] xl:mt-[3.385vw] hover:text-black before:bg-white"
                  }
                />
              </div>
              <div className="lg:w-[50%] xl:w-[55.729vw]">
                <div>
                  <Slider
                    setting={sliderSettings}
                    slides={videosData.map((item, index) => (
                      <div
                        key={index}
                        className="border-[1px] border-solid border-gold rounded-[8px] xl:rounded-[0.417vw] overflow-hidden cursor-pointer group"
                      >
                        <Image src={item?.image} width={500} height={250} />

                        <div className="w-[50px] xl:w-[3.854vw] aspect-square bg-white  bg-opacity-50 group-hover:bg-opacity-100 absolute inset-0 m-auto rounded-full flex items-center justify-center duration-[0.3s] group-hover:scale-[1.1]">
                          <svg
                            className="fill-gold w-1/2 h-1/2"
                            viewBox="0 0 16 16"
                          >
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
