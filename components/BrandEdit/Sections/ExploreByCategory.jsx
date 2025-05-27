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
                imgClass={
                  "m-auto max-w-[200px] max-h-[210px] lg:max-w-[10.5vw] lg:max-h-[11vw] w-auto h-auto"
                }
              />
            ))}
          />
          <SliderArw
            prevBtn={
              "proPrevBtn bg-[rgba(255,255,255,0.7)] pointer-events-auto"
            }
            nextBtn={
              "proNextBtn bg-[rgba(255,255,255,0.7)] pointer-events-auto"
            }
            customClass={
              "absolute top-1/2 -translate-y-1/2 z-[1] left-[1%] right-[1%] justify-between pointer-events-none"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreByCategory;
