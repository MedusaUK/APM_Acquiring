const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const tabs = document.querySelectorAll('.platform-tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    panels.forEach((panel) => panel.classList.toggle('is-active', panel.id === `panel-${target}`));
  });
});

const revealItems = document.querySelectorAll('.stat, .bento-card, .trust-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 500, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' },
      );
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });
revealItems.forEach((item) => observer.observe(item));

const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const note = contactForm.querySelector('.form-note');
  if (note) note.textContent = 'Thanks — your enquiry is ready to send to the PayBlock team.';
  contactForm.reset();
});
