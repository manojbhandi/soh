import { useEffect } from "react";

const EqualHeight = (selectors) => {
  useEffect(() => {
    const setEqualHeight = () => {
      const elements = document.querySelectorAll(selectors);
      let maxHeight = 0;

      // Reset height
      elements.forEach((element) => (element.style.height = "auto"));

      // Calculate max height
      elements.forEach((element) => {
        if (element.offsetHeight > maxHeight) {
          maxHeight = element.offsetHeight;
        }
      });

      // Apply max height only if it changed
      elements.forEach((element) => {
        if (element.style.height !== `${maxHeight}px`) {
          element.style.height = `${maxHeight}px`;
        }
      });
    };

    const handleResize = () => {
      requestAnimationFrame(setEqualHeight);
    };

    // Initial call to set height
    setEqualHeight();

    // Add resize and load event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", setEqualHeight);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", setEqualHeight);
    };
  }, [selectors]);
};

export default EqualHeight;
