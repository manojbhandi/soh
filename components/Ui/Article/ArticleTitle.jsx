const ArticleTitle = ({ articleTitle, customClass }) => {
  return (
    <h6
      className={`text-mainBlack font-medium overflow-hidden text-ellipsis line-clamp-2 text-[15px] xl:text-[1.042vw] ${
        customClass && customClass
      }`}
    >
      {articleTitle}
    </h6>
  );
};

export default ArticleTitle;
