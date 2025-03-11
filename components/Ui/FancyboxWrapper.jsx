import { useEffect } from "react";
import  {Fancybox}  from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const FancyboxWrapper = ({ children }) => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return <>{children}</>;
};  

export default FancyboxWrapper;
