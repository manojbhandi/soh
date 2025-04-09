import React from 'react'
import ArticleImage from '../Ui/Cards/Article/ArticleImage'
import ArticleTitle from '../Ui/Cards/Article/ArticleTitle'
import SubMainTitle from '../Ui/SubMainTitle'
import RelatedVideos from './RelatedVideos'

const VideoDetailPage = ({data}) => {
    console.log('ddd', data[0]?.videoBanner)
  return (
    <>
        <section className='mt-[30px] md:mt-[50px] xl:mt-[5.208vw]'>
                <div className="container">
                    <div className='border-b border-solid border-[#CACACA] pb-[30px] md:pb-[50px] xl:pb-[4.688vw] xl:px-[7.135vw]'>
                        <ArticleImage 
                            articleImage={data[0]?.videoBanner} 
                            articleVideoUrl={data[0]?.videoUrl} 
                            articleImgStyle={`!rounded-none`}
                            ytImgIcon={true}
                        />
                        <ArticleTitle articleTitle={data[0]?.videoTitle} customClass={'text-[20px] md:text-[24px] xl:text-[2.5vw] !my-[25px] xl:!my-[2.604vw] line-clamp-[none]'}/>
                        <div className='*:mb-[15px] xl:*:mb-[1.667vw] last:*:mb-0' dangerouslySetInnerHTML={{ __html: data[0]?.videoContent && data[0]?.videoContent }}></div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <SubMainTitle title={'Related Videos'}/>
                <RelatedVideos relatedVideos={data[0]?.relatedVideos}/>
            </div>
        </section>
    </>
  )
}

export default VideoDetailPage