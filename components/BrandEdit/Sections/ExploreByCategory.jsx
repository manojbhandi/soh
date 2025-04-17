import ProductCard from "@/components/Ui/Cards/ProductCard";
import Cta from "@/components/Ui/Cta";
import Slider from "@/components/Ui/Slider";
import SliderArw from "@/components/Ui/SliderArw";
import SubMainTitle from "@/components/Ui/SubMainTitle";

const ExploreByCategory = ({ data }) => {
  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: false,
    loop: false,
    speed: 1500,
    navigation: {
      nextEl: ".proNextBtn",
      prevEl: ".proPrevBtn",
    },
    // autoplay: { delay: 3000 },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: "3%",
      },
    },
  };

  return (
    <section>
      <div className="container">
        <div className="flex items-center mb-[20px] xl:mb-[2.604vw]">
          <div className="flex-1">
            <SubMainTitle title={data?.heading} customClass={"mb-0"} />
          </div>
          <div className="flex-none">
            <Cta url={data?.detailPageLink} name={"View All"} />
          </div>
        </div>
        <div className="relative">
          <Slider
            parentClass={"!px-[1px]"}
            setting={sliderSettings}
            slides={data?.cards?.map((item, index) => (
              <ProductCard
                key={index}
                url={item?.url}
                image={item?.image}
                name={item?.name}
              />
            ))}
          />
          <SliderArw
            prevBtn={"proPrevBtn"}
            nextBtn={"proNextBtn"}
            customClass={
              "absolute top-1/2 -translate-y-1/2 z-[1] left-[1%] right-[1%] justify-between"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreByCategory;
