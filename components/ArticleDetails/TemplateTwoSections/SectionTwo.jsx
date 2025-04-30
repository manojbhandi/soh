'use client'
import SubMainTitle from "@/components/Ui/SubMainTitle"
import Quote from "../Quote/Quote"
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage"
import Slider from "@/components/Ui/Slider"
import { stripHtmlTags } from "@/utils/commonFunctions"
import Gallery from "../Gallery/Gallery"

const data = [
  {
    image: '/images/article-details/template2/01.jpeg'
  }
]

const SectionTwo = ({ sectionData }) => {
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
        <SubMainTitle title={sectionData?.title} />
        {sectionData?.paragraphs?.[0]?.content ? (
          // <p
          // >
          //   {stripHtmlTags(sectionData.paragraphs[0].content)}
          // </p>
          <p dangerouslySetInnerHTML={{ __html: sectionData.paragraphs[0].content }} />
        ) : null}
      </div>
      {
        sectionData?.quotes?.[0]?.content && <Quote quoteTxt={sectionData?.quotes?.[0]?.content} />
      }

      <div className="mx-auto ">
        <Gallery gallery={sectionData?.image} />
        {/* <Slider slides={sectionData.image.map((item, index) => (
          <ArticleImage key={index} articleImage={item.url} articleImgStyle={'!pt-[120%]'} />
        ))} setting={sliderSettings} /> */}
      </div>
    </section>
  )
}

export default SectionTwo
