import BrandEditPage from "@/components/BrandEdit/BrandEditPage"

const BrandEdit = () => {
  return (
    <>
      <BrandEditPage data={brandEditPagedata[0]}/>
    </>
  )
}

export default BrandEdit

const brandEditPagedata = [
  {
    banner:{
      heading:'The Brand Edit',
      images:[
        {
          img :'/images/brand-edit/banner/01.jpg'
        },
        {
          img :'/images/brand-edit/01.jpg'
        },
        {
          img :'/images/brand-edit/products.jpg'
        },
        {
          img :'/images/brand-edit/banner/01.jpg'
        },
        {
          img :'/images/brand-edit/01.jpg'
        },
        {
          img :'/images/brand-edit/products.jpg'
        },
        {
          img :'/images/brand-edit/banner/01.jpg'
        },
        {
          img :'/images/brand-edit/01.jpg'
        },
        {
          img :'/images/brand-edit/products.jpg'
        },
        {
          img :'/images/brand-edit/banner/01.jpg'
        },
        {
          img :'/images/brand-edit/01.jpg'
        },
        {
          img :'/images/brand-edit/products.jpg'
        },
        {
          img :'/images/brand-edit/banner/01.jpg'
        },
        {
          img :'/images/brand-edit/01.jpg'
        },
        {
          img :'/images/brand-edit/products.jpg'
        },
        {
          img :'/images/brand-edit/banner/01.jpg'
        },
        {
          img :'/images/brand-edit/01.jpg'
        },
        {
          img :'/images/brand-edit/products.jpg'
        },
      ]
    },
    brandCategory:[
      {
      categoryName:'Made in India'
      },
      {
        categoryName:'Trends'
      },
      {
        categoryName:'Procurement Insights'
      },
      {
        categoryName:'The Latest'
      },
      {
        categoryName:'Partner Spotlight'
      },
      {
        categoryName:'Case Study'
      },
      {
        categoryName:'Product of the Month'
      }
    ]
      

    
  }
]