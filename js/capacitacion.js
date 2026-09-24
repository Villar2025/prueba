document.addEventListener("DOMContentLoaded", () => {

    /* Navegación de secciones de Capacitación */
    const sectionLinks = document.querySelectorAll(".training-section-nav a");

    const sections = [...sectionLinks]
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    sectionLinks.forEach((link) => {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === `#${entry.target.id}`
                        );
                    });
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0
            }
        );

        sections.forEach((section) => observer.observe(section));
    }
});

/* Navegación móvil MALAK */
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('mobile-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  }

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('mobile-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });

  Array.prototype.forEach.call(nav.querySelectorAll('a'), function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 700) closeMenu();
  });
})();
