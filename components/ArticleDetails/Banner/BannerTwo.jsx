import MainTitle from '@/components/Ui/MainTitle'
import Image from 'next/image'
import React from 'react'
import BannerSlider from './BannerSlider'

const BannerTwo = () => {
  return (
    <section>
      <div className='relative before:absolute before:top-0 before:left-0 before:w-full before:bottom-[50px] before:xl:bottom-[7.552vw] before:bg-grey before:z-[-1]'>
        <div className="container">
          <div className='text-center mx-auto xl:w-[54.427vw] py-[30px] xl:py-[4.167vw]'>
            <MainTitle title={'Lorem Ipsum is simply dummy text'}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <BannerSlider/>
        </div>
      </div>
    </section>
  )
}

export default BannerTwo
