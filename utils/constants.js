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
  psotSubscriberEmailForNewsLetter: `api/master/newsletter/store`,
});

const MEDIA_BASE_URL =
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL || "http://134.209.150.140:3001/";

export function getImageUrl(imagePath) {
  if (!imagePath) return null;

  // If it's already a complete URL, return it as is (no modifications)
  if (typeof imagePath === "string" && imagePath.startsWith("http")) {
    return imagePath;
  }

  // If it's an upload path, join it with the base URL
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

export const SOH_SOCIAL_LINKS = Object.freeze({
  instagram: "https://www.instagram.com/soh_magazine/",
  facebook: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  x: "https://x.com/SOHospitalityIN",
  linkedin: " https://in.linkedin.com/company/soh-magazine",
  youtube: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  kwebmaker: "https://kwebmaker.com/",
});
export const SOH_INSTA_URL = "https://www.instagram.com/soh_magazine/";
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  } else {
    return true;
  }
};

export const orderCategoris = (categories) => {
  const filterdItem =
    categories?.data?.length > 0 &&
    categories?.data?.find(
      (item) => item?.categoryName === "Voyages of Influence"
    );
  let orderedCategories =
    categories?.data?.length > 0 &&
    categories?.data?.filter(
      (item) => item?.categoryName != "Voyages of Influence"
    );
  orderedCategories.push(filterdItem);
  return orderedCategories;
};
