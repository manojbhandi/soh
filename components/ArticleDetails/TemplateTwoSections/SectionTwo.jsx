import SubMainTitle from "@/components/Ui/SubMainTitle"
import Quote from "../Quote/Quote"
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage"
import Slider from "@/components/Ui/Slider"

const data = [
  {
    image:'/images/article-details/template2/01.jpeg'
  }
]

const SectionTwo = () => {
  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true,
    pagination: false,
    loop: true,
    speed: 2000,

    autoplay: { delay: 3000 },
  
  };
  return (
    <section>
      <div>
       <SubMainTitle title={'Lorem Ipsum is dummy text'}/>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet, comes from a line in section 1.10.32.</p>
        </div>
        <Quote quoteTxt={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.'}/>

        <div className="mx-auto xl:w-[40.625vw]">
          <Slider slides={data.map((item,index)=>(
            <ArticleImage key={index} staticImg={item?.image} articleImgStyle={'!aspect-[4/5] !mb-0'}/>
          ))} setting={sliderSettings}/>
          
        </div>
    </section>
  )
}

export default SectionTwo
