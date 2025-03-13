import Image from 'next/image';
import Slider from '../Ui/Slider'
import ArticleSubCategory from '../Ui/Cards/Article/ArticleSubCategory';
import ArticleTitle from '../Ui/Cards/Article/ArticleTitle';
import MainTitle from '../Ui/MainTitle';
import CtaBtn from '../Ui/CtaBtn';

const data = [
  {
    banner:'/images/business/subcategoryBanner/01.jpg',
    subcategory:'Development Update',
    title:'Lorem Ipsum is simply dummy text of the printing industry. ',
    url:'#'
  },
  {
    banner:'/images/business/subcategoryBanner/01.jpg',
    subcategory:'Development Update',
    title:'Lorem Ipsum is simply dummy text of the printing industry. ',
    url:'#'
  }
]

const CategoryBanner = () => {

  

  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: false,
    loop: true,
    speed: 2000,
    autoplay: { delay: 3000 },
   
  };

  return (
    <section className='relative '>
      <div className="whiteStar right-[4%] z-[2]"></div>
      <Slider slides={data.map((item,index)=>(
        <div key={index}>
          <div className='relative'>
            <div className='aspect-video xl:aspect-auto xl:h-[44.271vw] sm:after:absolute sm:after:top-0 sm:after:left-0 sm:after:w-full sm:after:h-full sm:after:bg-gradient-to-b from-transparent via-black/50 to-black/80'>
              <Image src={item?.banner} width={1920} height={1080} className='h-full object-cover'/>
            </div>
            <div className='bg-mainBlack py-[30px] sm:py-0 sm:absolute sm:bottom-[30px] sm:bg-transparent xl:bottom-[6.25vw] left-0 w-full text-white z-[1]'>
              <div className="container">
                <div className="flex">
                  <div className='xl:w-[32.292vw]'>
                    <ArticleTitle articleSubCategory={item?.subcategory} subcategoryStyle={'text-white'} articleTitle={item?.title} customClass={'text-white font-fh text-[22px] sm:text-[25px] xl:text-[2.5vw] line-clamp-3 !mb-0'}/>
                    <CtaBtn customClass={'mt-[30px] xl:mt-[2.604vw] text-white hover:bg-white hover:text-mainBlack'} title={'Explore More'} url={'#'}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))} setting={sliderSettings}/>

      {/* <div className="absolute xl:bottom-[6.25vw] right-0 bg-gold z-[1]">
        <div className="container">asas</div>
      </div> */}

    </section>
  )
}

export default CategoryBanner
