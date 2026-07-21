const header = document.getElementById("site-header");
const toggle = header?.querySelector(".nav-toggle");
const panel = document.getElementById("mobile-nav");
const backdrop = document.getElementById("nav-backdrop");

const closeMobileNav = () => {
  if (!document.body.classList.contains("nav-open")) return;
  document.body.classList.remove("nav-open");
  header?.classList.remove("is-open");
  toggle?.setAttribute("aria-expanded", "false");
  toggle?.setAttribute("aria-label", "Open menu");
  if (backdrop) backdrop.hidden = true;
  document.body.style.overflow = "";
};

if (header && toggle && panel && backdrop) {
  const setOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    backdrop.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () =>
    setOpen(!document.body.classList.contains("nav-open"))
  );
  backdrop.addEventListener("click", () => setOpen(false));
  panel.addEventListener("click", (e) => {
    if (e.target?.closest?.("a")) setOpen(false);
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  let resizeTimer = 0;
  window.addEventListener(
    "resize",
    () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 980) setOpen(false);
      }, 150);
    },
    { passive: true }
  );

  window.addEventListener("pagehide", () => setOpen(false));
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) setOpen(false);
  });
}

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getHeaderOffset = () => {
  const sticky = document.getElementById("site-header");
  return (sticky?.offsetHeight || 0) + 12;
};

const scrollToId = (id, smooth = true) => {
  if (!id) return false;
  const target = document.getElementById(id);
  if (!target) return false;
  const top =
    target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({
    top: Math.max(0, top),
    behavior: smooth && !prefersReducedMotion() ? "smooth" : "auto",
  });
  return true;
};

const isSameDocumentHashLink = (link) => {
  const href = link.getAttribute("href");
  if (!href || href === "#") return null;
  if (href.startsWith("#")) return decodeURIComponent(href.slice(1));

  let url;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }
  if (!url.hash) return null;
  if (url.origin !== window.location.origin) return null;

  const normalize = (p) => {
    let path = p.replace(/\/index\.html$/i, "");
    if (path.length > 1) path = path.replace(/\/$/, "");
    return path || "/";
  };

  if (normalize(url.pathname) !== normalize(window.location.pathname)) {
    return null;
  }
  return decodeURIComponent(url.hash.slice(1));
};

document.addEventListener("click", (e) => {
  const link = e.target?.closest?.("a[href]");
  if (!link) return;

  const id = isSameDocumentHashLink(link);
  if (!id) return;

  e.preventDefault();
  closeMobileNav();
  scrollToId(id, true);
  history.pushState(null, "", `#${id}`);
});

window.addEventListener("load", () => {
  if (!window.location.hash) return;
  const id = decodeURIComponent(window.location.hash.slice(1));
  requestAnimationFrame(() => {
    scrollToId(id, true);
  });
});
