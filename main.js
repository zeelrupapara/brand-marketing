const header = document.getElementById("site-header");
const toggle = header?.querySelector(".nav-toggle");

if (header && toggle) {
  const setOpen = (open) => {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => {
    setOpen(!header.classList.contains("is-open"));
  });

  header.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.closest && target.closest(".mobile-nav a")) {
      setOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) setOpen(false);
  });
}
