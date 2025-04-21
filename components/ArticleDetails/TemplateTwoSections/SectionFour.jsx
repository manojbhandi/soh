import SubMainTitle from "@/components/Ui/SubMainTitle"
import Slider from "@/components/Ui/Slider"
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage"
const data = [ 
  {
    image:'/images/article-details/template2/03.jpg',
    url:'https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_h264.mp4'
  }
  
]

const SectionFour = () => {
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
      <SubMainTitle title={'Lorem Ipsum is dummy text'}/>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet, comes from a line in section 1.10.32.</p>
      </div>
      <Slider slides={data.map((item,index)=>(
        <ArticleImage articleImage={item?.image} articleVideoUrl={item?.url}/>
      ))} setting={sliderSettings}/>
    </section>
  )
}

export default SectionFour
