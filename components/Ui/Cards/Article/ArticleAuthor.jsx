import React from "react";

const ArticleAuthor = ({ articleAuthor }) => {
  return (
    <>
      {articleAuthor && (
        <span className="text-[12px] text-[#646464] capitalize xl:text-[0.625vw]">
          By {articleAuthor}
        </span>
      )}
    </>
  );
};

export default ArticleAuthor;
