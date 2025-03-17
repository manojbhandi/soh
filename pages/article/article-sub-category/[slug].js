import TemplateOne from "@/components/ArticleDetails/TemplateOne";
import TemplateTwo from "@/components/ArticleDetails/TemplateTwo";
import { useRouter } from "next/router";

const ArticleDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(router.query);

  return (
    <>
      {slug === "template-one" && <TemplateOne />}
      {slug === "template-two" && <TemplateTwo />}
    </>
  );
};

export default ArticleDetails;
