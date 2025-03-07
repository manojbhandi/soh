import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import Cta from "@/components/Ui/Cta";
import Slider from "@/components/Ui/Slider";
import SubMainTitle from "@/components/Ui/SubMainTitle";

const eventData = [
  {
image:'/images/events/article02.jpg',
  title:'Lorem Ipsum is simply dummy text of the printing and typesetting'
},
{
  image:'/images/events/article03.jpg',
    title:'Lorem Ipsum is simply dummy text of the printing and typesetting'
  },
  {
    image:'/images/events/article04.jpg',
      title:'Lorem Ipsum is simply dummy text of the printing and typesetting'
    },
    {
      image:'/images/events/article04.jpg',
        title:'Lorem Ipsum is simply dummy text of the printing and typesetting'
      }
  
]

const Events = () => {

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
        slidesPerView:3,
        spaceBetween: '2.5%',
      },
    },
  };

  return (
    <section>
      <div className="bg-[#F7F3EA] xl:py-[5.208vw]">
        <div className="container">
          <div className="flex items-center mb-[20px] xl:mb-[2.604vw]">
            <div className="flex-1">
              <SubMainTitle title={"Events"} customClass={"!mb-0"} />
            </div>
            <div className="flex-none">
              <Cta url={"#"} name={"View All"} />
            </div>
          </div>

          <div className="flex">
            <div className="lg:w-[65.8%]">
              <ArticleImage articleImage={"/images/events/article01.jpg"} articleImgStyle={'xl:!mb-0'} />
            </div>
            <div className="lg:w-4/12 xl:pl-[5vw]">
              <ArticleCard
                articleTitle={
                  "Lorem Ipsum is simply dummy text of the printing and industry."
                }
                articleShortPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                paraStyle={'line-clamp-4'}
              />
              <Cta
                url={"#"}
                name={"Read More"}
                customClass={"xl:mt-[3.646vw]"}
              />
            </div>
          </div>

          <div className="xl:mt-[2.5%]">
            <Slider slides={eventData.map((item, index)=>(
              <div key={index}>
              <ArticleCard articleImage={item?.image} articleTitle={item?.title}/>
              </div>
            ))} setting={sliderSettings}/>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Events;
