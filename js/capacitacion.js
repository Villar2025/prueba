document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".training-menu-toggle");
    const headerNav = document.querySelector(".training-header-nav");

    if (menuToggle && headerNav) {

        const closeMenu = () => {
            menuToggle.classList.remove("active");
            headerNav.classList.remove("mobile-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menú"
            );
        };

        menuToggle.addEventListener("click", () => {

            const isOpen =
                headerNav.classList.toggle("mobile-open");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Cerrar menú"
                    : "Abrir menú"
            );
        });

        headerNav
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    closeMenu
                );

            });

        window.addEventListener("resize", () => {

            if (window.innerWidth > 820) {
                closeMenu();
            }

        });

    }


    // ==========================
    // NAVEGACIÓN DE SECCIONES
    // ==========================

    const sectionLinks =
        document.querySelectorAll(
            ".training-section-nav a"
        );

    const sections = [...sectionLinks]
        .map((link) =>
            document.querySelector(
                link.getAttribute("href")
            )
        )
        .filter(Boolean);


    if (
        "IntersectionObserver" in window &&
        sections.length
    ) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        sectionLinks.forEach(
                            (link) => {

                                link.classList.toggle(
                                    "active",
                                    link.getAttribute("href") ===
                                    `#${entry.target.id}`
                                );

                            }
                        );

                    });

                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px",
                    threshold: 0
                }
            );


        sections.forEach((section) => {
            observer.observe(section);
        });

    }

});