export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
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

export function stripHtmlTags(input, maxLength = 300) {
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
