import InstagramCard from "@/components/Ui/Cards/InstagramCard";
import Cta from "@/components/Ui/Cta";
import Slider from "@/components/Ui/Slider";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Image from "next/image";

const instagramData = [
  {
    url: "#",
    image: "/images/instagramNew/01.jpg",
  },
  {
    url: "#",
    image: "/images/instagramNew/02.jpg",
  },
  {
    url: "#",
    image: "/images/instagramNew/03.jpg",
  },
  {
    url: "#",
    image: "/images/instagram/04.jpg",
  },
];

const Instagram = () => {
  const sliderSettings = {
    slidesPerView: 1.2,
    spaceBetween: 20,
    navigation: false,
    pagination: false,
    loop: true,
    speed: 2000,
    autoplay: { delay: 3000 },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: "3%",
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: "2.5%",
      },
    },
  };

  return (
    <section>
      <div className="container">
        <div className="w-[80%] xl:w-[54.583vw] mx-auto text-center">
          <SubMainTitle
            title={"Find us on Instagram"}
            customClass={"text-center"}
          />
          <p className="xl:text-[1.042vw]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="my-[30px] xl:my-[2.083vw]">
          <Slider
            setting={sliderSettings}
            slides={instagramData.map((item, index) => (
              <div key={index} className="radius">
                <InstagramCard url={item?.url} imgSrc={item?.image} />
              </div>
            ))}
          />
        </div>
        <Cta
          url={"#"}
          name={"Follow us on Instagram"}
          customClass={"table mx-auto xl:mt-[2.083vw]"}
        />
      </div>
    </section>
  );
};

export default Instagram;
