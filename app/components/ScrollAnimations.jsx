"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js-scroll");
    const revealTargets = Array.from(
      document.querySelectorAll(
        "section, section article, section figure, section blockquote"
      )
    );
    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("inview"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("inview");
            observer.unobserve(entry.target);
          }
        });
      },
      // Long sections may never reach a nonzero visibility ratio on mobile.
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach((target, index) => {
      if (target.matches("article, figure, blockquote")) {
        target.classList.add("scrollRevealItem");
        target.style.setProperty("--reveal-delay", `${(index % 5) * 65}ms`);
      }
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
