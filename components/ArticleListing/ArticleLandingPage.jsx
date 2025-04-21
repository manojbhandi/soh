import Banner from "./Banner/Banner";
import Listing from "./Listing/Listing";
import CategoryList from "../Ui/CategoryList";

const ArticleLandingPage = ({ articles, categories }) => {
  if (!articles && !articles.data || !categories && !categories.data) {
    return;
  } else if (articles.data?.length === 0 && categories.data?.length === 0) {
    return;
  }
  const bannerData = articles.data?.length > 0 && articles.data.filter(article =>
    article.ArticleVisibility.some(visibility => visibility.location === "LISTING")
  )
    .map(article => {
      const bannerMedia = article?.ArticleMedia?.find(media => media?.isBannerImage === true);
      return article?.ArticleSubcategory && article?.ArticleSubcategory.length > 0 ? article?.ArticleSubcategory.map(subcategoryItem => ({
        banner: bannerMedia ? bannerMedia.url : "/images/default-banner.jpg",
        subcategory: subcategoryItem?.Subcategory?.subcategoryName,
        title: article?.title,
        url: `/article/${article.slug}`
      })) : [];
    })
    .flat()
  const articesData = articles.data?.length > 0 && articles.data.map(article => {
    const bannerMedia = article?.ArticleMedia?.find(media => media?.isBannerImage === true);
    return article?.ArticleSubcategory && article?.ArticleSubcategory.length > 0 ? article?.ArticleSubcategory.map(subcategoryItem => ({
      banner: bannerMedia ? bannerMedia.url : "/images/default-banner.jpg",
      subcategory: subcategoryItem?.Subcategory?.subcategoryName,
      subCategroySlug: subcategoryItem?.Subcategory?.fullPath,
      title: article?.title,
      url: `/${article?.Category?.slug}/${subcategoryItem?.Subcategory?.slug}/${article.slug}`
    })) : [];
  })
    .flat()
  return (
    <>
      <Banner bannerData={bannerData} />
      <Listing title={articles.data?.[0]?.Category?.categoryName} data={articesData} />
      <section>
        <div className="container">
          <CategoryList categories={categories?.data} />
        </div>
      </section>
    </>
  );
};

export default ArticleLandingPage;


