import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle"
import Slider from "@/components/Ui/Slider"
import SubMainTitle from "@/components/Ui/SubMainTitle"
import styles from './latest.module.css'
import SliderArw from "@/components/Ui/SliderArw"
const Latest = ({data}) => {
  

  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: false,
    loop: false,
    speed: 1500,
    navigation: {
      nextEl: ".nextBtn",
      prevEl: ".prevBtn",
    },
    // autoplay: { delay: 3000 },
    breakpoints:{
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: '3%',
      }
    }
  };

  return (
    <section>
        <div className="container">
          <div className="border-solid border-t border-b border-[#CACACA] xl:py-[3.125vw]">
            <div className="flex items-center xl:mb-[2.604vw]">
              <div className="flex-1">
                <SubMainTitle title={data?.heading} customClass={'mb-0'}/>
              </div>
              <div className="flex-none">
                <SliderArw prevBtn={'prevBtn'} nextBtn={'nextBtn'}/>
              </div>
            </div>

            <Slider setting={sliderSettings} parentClass={'beLatestSwiper'} customClass={'beLatestslide'} slides={data?.article?.map((item, index)=>(
              <ArticleTitle key={index} articleSubCategory={item?.subCategory} articleTitle={item?.title} customClass={'line-clamp-3'}/>
            ))}/>

          </div>
        </div>
    </section>
  )
}

export default Latest