import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage"
import Slider from "@/components/Ui/Slider"
import SubMainTitle from "@/components/Ui/SubMainTitle"

const imgData = [ 
  {
    image:'/images/article-details/template2/03.jpg'
  },
  {
    image:'/images/article-details/template2/03.jpg'
  },
  
]

const SectionThree = () => {

  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: false,
    loop: true,
    speed: 2000,

    autoplay: { delay: 3000 },
    breakpoints:{
      1200: {
        slidesPerView: 2,
        spaceBetween: '2.5%',
      }
  },
  };


  return (
    <section>

      <div>
      <SubMainTitle title={'Lorem Ipsum is dummy text'}/>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet, comes from a line in section 1.10.32.</p>
      </div>
      <Slider slides={imgData.map((item,index)=>(
        <ArticleImage articleImage={item?.image}/>
      ))} setting={sliderSettings}/>
    </section>
  )
}

export default SectionThree
