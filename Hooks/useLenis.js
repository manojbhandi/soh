import { useEffect, useRef } from "react";
import Lenis from "lenis";

const useLenis = () => {
  const lenisRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 5,
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

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return lenisRef; // ✅ Return the ref
};

export default useLenis;
