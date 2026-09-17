const menuToggle = document.querySelector('.catalog-menu-toggle');
const mainNav = document.getElementById('catalog-main-nav');

if (menuToggle && mainNav) {
  const closeMenu = () => {
    mainNav.classList.remove('mobile-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('mobile-open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}

const modal = document.getElementById('catalogModal');
const modalImage = document.getElementById('catalogModalImage');
const modalTitle = document.getElementById('catalogModalTitle');
const modalClose = document.querySelector('.catalog-modal-close');

function closeModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.product-image-button').forEach(button => {
  button.addEventListener('click', () => {
    if (!modal || !modalImage || !modalTitle) return;
    modalImage.src = button.dataset.image || '';
    modalImage.alt = button.dataset.title || 'Producto MALAK';
    modalTitle.textContent = button.dataset.title || '';
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  });
});

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) {
  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
}
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

const jumpLinks = [...document.querySelectorAll('.collection-jump a')];
const sections = [...document.querySelectorAll('.collection-section')];

if ('IntersectionObserver' in window && jumpLinks.length && sections.length) {
  const linkById = new Map(jumpLinks.map(link => [link.getAttribute('href').slice(1), link]));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      jumpLinks.forEach(link => link.classList.remove('is-active'));
      const link = linkById.get(entry.target.id);
      if (link) link.classList.add('is-active');
    });
  }, { rootMargin: '-28% 0px -60% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}
