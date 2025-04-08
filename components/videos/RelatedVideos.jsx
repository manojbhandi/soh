import ArticleCard from "../Ui/Cards/Article/ArticleCard"
import Slider from "../Ui/Slider"

const RelatedVideos = ({relatedVideos}) => {
    const sliderSettings = {
        slidesPerView: 1.3,
        spaceBetween: 20,
        navigation: true,
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
          }
        },
      };

  return (
    <Slider setting={sliderSettings} slides={relatedVideos.map((item,index)=>(
        <ArticleCard key={index} articleImage={item?.img} articleTitle={item?.title} articleVideoUrl={item?.videoUrl} articleImgStyle={`!rounded-none`} articleDpLink={item?.articleUrl} ytImgIcon={true}/>
    ))}/>
  )
}

export default RelatedVideos