import Image from 'next/image'

const ArticleImage = ({articleImage, articleImgStyle}) => {
  return (
    <div className={`overflow-hidden rounded-[8px] mb-[10px] xl:mb-[1.042vw] aspect-[2/1] ${articleImgStyle ? articleImgStyle : ''}`}>
        <Image src={articleImage} width={500} height={280} className='h-full object-cover'/>
    </div>
  )
}

export default ArticleImage
