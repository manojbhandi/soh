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
          <p dangerouslySetInnerHTML={{ __html: sectionData.paragraphs[0].content }} />
        ) : null}
      </div>

      {sectionData?.image?.length > 0 ?
        <div className="mx-auto ">
          {
            sectionData?.image?.length === 1 ?
              <div>
                {console.log("isPortrait", sectionData?.image?.[0])}
                {sectionData.image?.[0].url && sectionData?.image?.[0]?.isPortrait ?
                  <div className="mx-auto xl:w-[40.625vw]">
                    < ArticleImage articleImage={sectionData.image?.[0].url} articleImgStyle={'!pt-[120%]'} />
                  </div> :
                  < ArticleImage articleImage={sectionData.image?.[0].url} articleImgStyle={''} />}
                {sectionData?.image?.[0]?.caption && <p className=" mt-1" dangerouslySetInnerHTML={{ __html: sectionData?.image?.[0]?.caption }} />}
              </div>
              : sectionData?.image?.length === 2 ?
                <div className=" flex gap-2">
                  {
                    sectionData?.image.map((item) => (
                      <div className="w-1/2">
                        {item?.url && < ArticleImage articleImage={item?.url} articleImgStyle={''} />}
                        {item?.caption && < p className="mt-1" dangerouslySetInnerHTML={{ __html: item?.caption }} />}

                      </div>
                    ))
                  }

                </div>
                :
                <Gallery gallery={sectionData?.image} />
          }

        </div> : null
      }
      {
        sectionData?.quotes?.[0]?.content && <Quote quoteTxt={sectionData?.quotes?.[0]?.content} />
      }
    </section>
  )
}

export default SectionTwo
