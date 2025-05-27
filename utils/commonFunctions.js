export function generateSlug(text) {
  return text
    ?.toLowerCase()
    ?.replace(/[^a-z0-9\s-]/g, "")
    ?.replace(/\s+/g, "-")
    ?.replace(/-+/g, "-");
}

const categoryMap = {
  leadership: 1,
  business: 2,
  "architecture-design": 3,
  "voyages-of-influence": 4,
  "dine-drink": 5,
  "soh-loves": 6,
  travel: 7,
  "the-brand-edit": 8,
  videos: 9,
  events: 10,
};

const subCategoryMap = {
  "owner-circle": 1,
  "from-the-ceo-lens": 2,
  "tourism-boards": 3,
  "gms-think-tank": 4,
  policy: 5,
  "latest-news": 6,
  "development-update": 7,
  "features-trends": 8,
  talent: 9,
  technology: 10,
  "insights-columns": 11,
  markets: 12,
  sustainability: 13,
};
export function getCategoryId(slug) {
  return categoryMap[slug] || null;
}

export function stripHtmlTags(input, maxLength = Infinity) {
  const plainText = input.replace(/<[^>]*>/g, "").trim();
  return plainText.length > maxLength
    ? plainText.slice(0, maxLength) + "..."
    : plainText;
}

export function formatDateToMonthDay(dateInput) {
  if (!dateInput) return "";

  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return "";

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();

  return `${month}, ${day}`;
}

export function sortArticles(articles) {
  // Extract and flatten the articles for sorting
  const items = articles.map((item) => item.article);

  // Separate priority and non-priority articles
  const priorityArticles = items.filter(
    (article) => article.priority !== null && article.priority !== undefined
  );

  const nonPriorityArticles = items
    .filter(
      (article) => article.priority === null || article.priority === undefined
    )
    .sort((a, b) => {
      // Sort non-priority by publishedDate (newest first), fallback to createdAt
      const dateA = new Date(a.publishedDate || a.createdAt);
      const dateB = new Date(b.publishedDate || b.createdAt);
      return dateB - dateA;
    });

  // Determine the needed array length
  const maxPriority = priorityArticles.reduce(
    (max, article) => Math.max(max, article.priority),
    0
  );
  const totalLength = Math.max(maxPriority, items.length);

  // Initialize array with null slots
  const sortedArray = new Array(totalLength).fill(null);

  // Place priority articles in their exact positions
  priorityArticles.forEach((article) => {
    // Cap priority to array length
    const cappedPriority = Math.min(article.priority, totalLength);
    const index = cappedPriority - 1;

    if (sortedArray[index] === null) {
      sortedArray[index] = article;
    } else {
      // Handle same priority: newer publishedDate wins
      const existing = sortedArray[index];
      const currentDate = new Date(article.publishedDate || article.createdAt);
      const existingDate = new Date(
        existing.publishedDate || existing.createdAt
      );

      if (currentDate > existingDate) {
        sortedArray[index] = article;
        nonPriorityArticles.unshift(existing); // Demote older article
      } else {
        nonPriorityArticles.unshift(article); // Demote current article
      }
    }
  });

  // Fill gaps with non-priority articles
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === null && nonPriorityArticles.length > 0) {
      sortedArray[i] = nonPriorityArticles.shift();
    }
  }

  // Remove null slots and append remaining non-priority articles
  const result = sortedArray.filter(Boolean).concat(nonPriorityArticles);

  // Rebuild the original structure with subcategoryName
  return result.map((article) => ({
    article,
    subcategoryName: articles.find(
      (a) => a.article.articleId === article.articleId
    )?.subcategoryName,
  }));
}

// Usage
