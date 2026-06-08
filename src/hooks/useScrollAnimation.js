import { useEffect, useRef, useState } from "react";

/**
 * useScrollAnimation — triggers visibility when element enters viewport.
 * @param {number} threshold - fraction of element visible to trigger (default 0.15)
 * @returns {{ ref, isVisible }} — attach `ref` to element, use `isVisible` for className
 */
function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (fire once)
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  return { ref, isVisible };
}

export default useScrollAnimation;
