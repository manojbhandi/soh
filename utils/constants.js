export const API_END_POINTS = Object.freeze({
  home: `api/articles/getArticlesForHomepage`,
  getArticle: (id) => `api/articles/getArticleByArticleId?articleId=${id}`,
  getAllArticlesByCatergoryId: (id) =>
    `api/articles/getAllArticleByCategoryId?categoryId=${id}`,
  getAllArticlesBySubCatergoryId: (id) =>
    `api/articles/getAllArticlesBySubcategryId?subcategoryId=${id}`,
  getAllCatgories: `api/master/categories`,
  getAllCategoriesWithSubCategories: `api/master/getCategoriesWithSubcategories`,
  getArticlesByCategorySlug: (slug) =>
    `api/articles/getAllArticleByCategorySlug?slug=${slug}`,
  getArticlesBySubCategorySlug: (slug) =>
    `api/articles/getAllArticlesBySubcategrySlug?slug=${slug}`,
  getArticleBySlug: (slug) => `api/articles/getArticleBySlug?slug=${slug}`,

  getHomeBanners: `api/articles/getBannerImages`,
});

const MEDIA_BASE_URL =
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL || "http://localhost:3001/";

export function getImageUrl(imagePath) {
  if (!imagePath) return "/images/default-banner.jpg";
  if (imagePath.startsWith("http")) return imagePath;

  if (/^\/?uploads/.test(imagePath)) {
    return `${MEDIA_BASE_URL.replace(/\/$/, "")}/${imagePath.replace(
      /^\//,
      ""
    )}`;
  }
  return imagePath;
}

export const FRONTNED_ROUTES = Object.freeze({
  home: "/",
  article: "/article",
  articleSubCategory: "/article/article-sub-category",
  articleDetail: "/article/article-detail",
});
