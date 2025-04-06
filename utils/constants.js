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
  if (typeof imagePath === "string" && imagePath.startsWith("http")) {
    return imagePath;
  }

  if (typeof imagePath === "string" && /^\/?uploads/.test(imagePath)) {
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

export const CATEGORY_NAMES_MAP = Object.freeze({
  business: "Business",
  leadership: "Leadership",
  travel: "Travel",
  architectureDesign: "Architecture + Design",
  voyagesOfInfluence: "Voyages of Influence",
  dineDrink: "Dine & Drink",
  sohLoves: "SOH Loves",
  brandEdit: "The Brand Edit",
  videos: "Videos",
  events: "Events",
  instagram: "Instagram",
  travelUpdates: "Travel Updates",
});

export const SUBCATEGORY_NAMES_MAP = Object.freeze({
  developmentUpdate: "Development Update",
});
