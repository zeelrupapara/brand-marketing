"use client";

import { useEffect } from "react";

export default function MobileNav() {
  useEffect(() => {
    const header = document.getElementById("site-header");
    const toggle = header?.querySelector<HTMLButtonElement>(".nav-toggle");
    if (!header || !toggle) return;

    const setOpen = (open: boolean) => {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    const onToggle = () => setOpen(!header.classList.contains("is-open"));

    const onLinkClick = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(".mobile-nav a")) setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };

    toggle.addEventListener("click", onToggle);
    header.addEventListener("click", onLinkClick);
    window.addEventListener("resize", onResize);

    return () => {
      toggle.removeEventListener("click", onToggle);
      header.removeEventListener("click", onLinkClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
