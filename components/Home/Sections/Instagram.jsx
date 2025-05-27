import InstagramCard from "@/components/Ui/Cards/InstagramCard";
import Cta from "@/components/Ui/Cta";
import Slider from "@/components/Ui/Slider";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import { SOH_INSTA_URL } from "@/utils/constants";
import Image from "next/image";

const Instagram = () => {
  const sliderSettings = {
    slidesPerView: 8,
    // spaceBetween: 20,
    navigation: false,
    pagination: false,
    loop: true,
    speed: 2000,
    autoplay: { delay: 3000 },
    breakpoints: {
      0: {
        slidesPerView: 2,
        // spaceBetween: 20,
      },
      320: {
        slidesPerView: 4,
        // spaceBetween: 20,
      },
      575: {
        slidesPerView: 6,
        // spaceBetween: 20,
      },
      991: {
        slidesPerView: 6,
        // spaceBetween: "3%",
      },
      1200: {
        slidesPerView: 8,
        // spaceBetween: "2.5%",
      },
    },
  };

  return (
    <section>
      <div >
        <div className="w-[80%] xl:w-[54.583vw] mx-auto text-center">
          {instagramData?.heading && (
            <SubMainTitle title={instagramData?.heading} customClass={"text-center"} />
          )}
          {instagramData?.para && <p className="xl:text-[1.042vw]">{instagramData?.para}</p>}
        </div>
        {instagramData?.data && (
          <>
            <div className="my-[30px] xl:my-[2.083vw]">
              <Slider
                setting={sliderSettings}
                slides={[...Array(3)].flatMap(() => instagramData?.data).map((item, index) => (
                  <div key={index} className="">
                    <InstagramCard url={item?.url} imgSrc={item?.image} />
                  </div>
                ))}
              />
            </div>
            <Cta
              url={SOH_INSTA_URL}
              name={"Follow us on Instagram"}
              customClass={"table mx-auto xl:mt-[2.083vw]"}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Instagram;


const instagramData = {
  heading: "Find us on Instagram",
  // para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  data: [
    {
      url: "#",
      image: "/images/instagram/1.png",
    },
    {
      url: "#",
      image: "/images/instagram/2.png",
    },
    {
      url: "#",
      image: "/images/instagram/3.png",
    },
    {
      url: "#",
      image: "/images/instagram/4.png",
    },
    {
      url: "#",
      image: "/images/instagram/5.png",
    },
    {
      url: "#",
      image: "/images/instagram/6.png",
    },
    {
      url: "#",
      image: "/images/instagram/7.png",
    },
    {
      url: "#",
      image: "/images/instagram/8.png",
    },
  ],
  link: "/#",
};
