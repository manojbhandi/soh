import BrandEditPage from "@/components/BrandEdit/BrandEditPage";

const BrandEdit = () => {
  return (
    <>
      <BrandEditPage data={brandEditPagedata[0]} />
    </>
  );
};

export default BrandEdit;

const brandEditPagedata = [
  {
    banner: {
      heading: "The Brand Edit",
      images: [
        {
          img: "/images/brand-edit/banner/01.jpg",
        },
        {
          img: "/images/brand-edit/01.jpg",
        },
        {
          img: "/images/brand-edit/products.jpg",
        },
        {
          img: "/images/brand-edit/banner/01.jpg",
        },
        {
          img: "/images/brand-edit/01.jpg",
        },
        {
          img: "/images/brand-edit/products.jpg",
        },
        {
          img: "/images/brand-edit/banner/01.jpg",
        },
        {
          img: "/images/brand-edit/01.jpg",
        },
        {
          img: "/images/brand-edit/products.jpg",
        },
        {
          img: "/images/brand-edit/banner/01.jpg",
        },
        {
          img: "/images/brand-edit/01.jpg",
        },
        {
          img: "/images/brand-edit/products.jpg",
        },
        {
          img: "/images/brand-edit/banner/01.jpg",
        },
        {
          img: "/images/brand-edit/01.jpg",
        },
        {
          img: "/images/brand-edit/products.jpg",
        },
        {
          img: "/images/brand-edit/banner/01.jpg",
        },
        {
          img: "/images/brand-edit/01.jpg",
        },
        {
          img: "/images/brand-edit/products.jpg",
        },
      ],
    },
    brandCategory: [
      {
        categoryName: "Made in India",
      },
      {
        categoryName: "Trends",
      },
      {
        categoryName: "Procurement Insights",
      },
      {
        categoryName: "The Latest",
      },
      {
        categoryName: "Partner Spotlight",
      },
      {
        categoryName: "Case Study",
      },
      {
        categoryName: "Product of the Month",
      },
    ],
    latestArticle: [
      {
        heading: "The Latest",
        article: [
          {
            subCategory: "category ",
            title:
              "Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry's standard.",
          },
          {
            subCategory: "category ",
            title:
              "Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry's standard.",
          },
          {
            subCategory: "category ",
            title:
              "Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry's standard.",
          },
          {
            subCategory: "category ",
            title:
              "Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry's standard.",
          },
          {
            subCategory: "category ",
            title:
              "Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry's standard.",
          },
        ],
      },
    ],
    products: {
      heading: "Explore by  Categories",
      detailPageLink:'/#',
      cards: [
        {
          image: "/images/product/01.png",
          name:'Category Name',
          url:'/#'
        },
        {
          image: "/images/product/02.png",
          name:'Category Name',
          url:'/#'
        },
        {
          image: "/images/product/03.png",
          name:'Category Name',
          url:'/#'
        },
        {
          image: "/images/product/04.png",
          name:'Category Name',
          url:'/#'
        },
        {
          image: "/images/product/05.png",
          name:'Category Name',
          url:'/#'
        },
        {
          image: "/images/product/01.png",
          name:'Category Name',
          url:'/#'
        },
        {
          image: "/images/product/02.png",
          name:'Category Name',
          url:'/#'
        },
        {
          image: "/images/product/03.png",
          name:'Category Name',
          url:'/#'
        }
      ],
    },
    brands: {
      heading: "Explore by Brands",
      detailPageLink:'/#',
      cards: [
        {
          image: "/images/brands/01.png",
          url:'/#'
        },
        {
          image: "/images/brands/02.png",
          url:'/#'
        },
        {
          image: "/images/brands/03.png",
          url:'/#'
        },
        {
          image: "/images/brands/04.png",
          url:'/#'
        },
        {
          image: "/images/brands/01.png",
          url:'/#'
        },
        {
          image: "/images/brands/02.png",
          url:'/#'
        },
        {
          image: "/images/brands/03.png",
          url:'/#'
        },
        {
          image: "/images/brands/04.png",
          url:'/#'
        }
      ],
    },
    trends: {
      heading: "Trends",
      article: [
        {
          image: "/images/brand-edit/trends/01.jpg",
          subCategory: "House Keeping ",
          title: "Lorem Ipsum is simply dummy text of the printing and industry.",
          url:'/#'
        },
        {
          image: "/images/brand-edit/trends/01.jpg",
          subCategory: "House Keeping ",
          title: "Lorem Ipsum is simply dummy text of the printing and industry.",
          url:'/#'
        },
        {
          image: "/images/brand-edit/trends/01.jpg",
          subCategory: "House Keeping ",
          title: "Lorem Ipsum is simply dummy text of the printing and industry.",
          url:'/#'
        },
        {
          image: "/images/brand-edit/trends/01.jpg",
          subCategory: "House Keeping ",
          title: "Lorem Ipsum is simply dummy text of the printing and industry.",
          url:'/#'
        }
      ],
    },
  },
];
