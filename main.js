const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('nav-open', open);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.service-card, .service-detail-card, .industry-card, .process-step, .process-detail-step, .why-card, .brand-message-text, .about-content, .engagement-card').forEach(el => {
  observer.observe(el);
});
