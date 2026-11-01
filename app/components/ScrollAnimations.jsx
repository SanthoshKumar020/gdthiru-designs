"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Observes every <section> on the page and fades/slides it in as it scrolls
// into view. Re-runs on every route change (the layout persists across
// client-side navigation, so a mount-only effect would miss new pages).
// Runs only in the browser; if JS fails, content stays visible.
export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js-scroll");
    const sections = Array.from(document.querySelectorAll("section"));
    if (!("IntersectionObserver" in window)) {
      sections.forEach((s) => s.classList.add("inview"));
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
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
