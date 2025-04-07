'use client'
import SubMainTitle from "@/components/Ui/SubMainTitle"
import Quote from "../Quote/Quote"
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage"
import Slider from "@/components/Ui/Slider"
import { stripHtmlTags } from "@/utils/commonFunctions"

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
          <p
          >
            {stripHtmlTags(sectionData.paragraphs[0].content)}
          </p>
        ) : null}
      </div>
      <Quote quoteTxt={sectionData?.quotes?.[0]?.content} />

      <div className="mx-auto xl:w-[40.625vw]">
        <Slider slides={data.map((item, index) => (
          <ArticleImage key={index} articleImage={sectionData?.image?.url} articleImgStyle={'!pt-[120%]'} />
        ))} setting={sliderSettings} />
      </div>
    </section>
  )
}

export default SectionTwo
