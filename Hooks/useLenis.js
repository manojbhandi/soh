import { useEffect, useRef } from "react";
import Lenis from "lenis";

const useLenis = () => {
  const lenisRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Adjust for a smoother scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };
    rafId.current = requestAnimationFrame(raf);

    // ✅ Best Practice: Use `data-lenis-prevent` instead of manual event listeners
    document.querySelectorAll(".scrollable").forEach((el) => {
      el.setAttribute("data-lenis-prevent", "true");
    });

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return lenisRef;
};

export default useLenis;
