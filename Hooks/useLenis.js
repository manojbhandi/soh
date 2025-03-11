import { useEffect, useRef } from "react";
import Lenis from "lenis";

const useLenis = () => {
  const lenisRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };
    rafId.current = requestAnimationFrame(raf);

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
