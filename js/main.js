document.addEventListener("DOMContentLoaded", () => {

    // Año automático del footer
    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Sombra del encabezado al hacer scroll
    const header = document.querySelector("header");

    const updateHeader = () => {
        if (!header) return;

        header.classList.toggle(
            "header-scrolled",
            window.scrollY > 20
        );
    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    // Animaciones de aparición al desplazarse
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("reveal-visible");
                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("reveal-visible");
        });

    }

    // Formulario de contacto
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const nombre =
                document.getElementById("nombre")?.value.trim() || "";

            const telefono =
                document.getElementById("telefono")?.value.trim() || "";

            const correo =
                document.getElementById("correo")?.value.trim() || "";

            const negocio =
                document.getElementById("negocio")?.value.trim() || "";

            const proveedor =
                document.getElementById("proveedor")?.value.trim() || "";

            const habitaciones =
                document.getElementById("habitaciones")?.value.trim() || "";

            const ubicacion =
                document.getElementById("ubicacion")?.value.trim() || "";

            const interes =
                document.getElementById("interes")?.value || "";

            const mensaje =
                document.getElementById("mensaje")?.value.trim() || "";

            if (!nombre || !telefono || !interes) {
                alert(
                    "Por favor, completa tu nombre, teléfono y producto de interés."
                );

                return;
            }

            const textoWhatsApp = [
                "Hola, MALAK. Me gustaría solicitar información y agendar una visita.",
                "",
                `Nombre: ${nombre}`,
                `Teléfono: ${telefono}`,
                `Correo: ${correo || "No proporcionado"}`,
                `Hotel o negocio: ${negocio || "No proporcionado"}`,
                `Proveedor actual: ${proveedor || "No especificado"}`,
                `Número de habitaciones: ${habitaciones || "No especificado"}`,
                `Ubicación: ${ubicacion || "No proporcionada"}`,
                `Producto de interés: ${interes}`,
                `Mensaje: ${mensaje || "Deseo recibir más información."}`
            ].join("\n");

            const numeroWhatsApp = "529511133384";

            const enlaceWhatsApp =
                `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;

            window.open(
                enlaceWhatsApp,
                "_blank",
                "noopener,noreferrer"
            );

        });

    }

    // ==========================
    // MENÚ MÓVIL
    // ==========================

    const mobileMenuToggle =
        document.querySelector(".mobile-menu-toggle");

    const mainNavigation =
        document.getElementById("main-navigation");

    const resourcesDropdown =
        document.querySelector(".nav-dropdown");

    const resourcesToggle =
        document.querySelector(".nav-dropdown-toggle");

    if (mobileMenuToggle && mainNavigation) {

        const closeResourcesSubmenu = () => {

            if (resourcesDropdown) {
                resourcesDropdown.classList.remove(
                    "mobile-submenu-open"
                );
            }

            if (resourcesToggle) {
                resourcesToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        };

        const closeMobileMenu = () => {

            mainNavigation.classList.remove("mobile-open");
            mobileMenuToggle.classList.remove("active");

            mobileMenuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileMenuToggle.setAttribute(
                "aria-label",
                "Abrir menú"
            );

            closeResourcesSubmenu();

        };

        // Abrir / cerrar menú principal
        mobileMenuToggle.addEventListener("click", () => {

            const isOpen =
                mainNavigation.classList.toggle("mobile-open");

            mobileMenuToggle.classList.toggle(
                "active",
                isOpen
            );

            mobileMenuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            mobileMenuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Cerrar menú"
                    : "Abrir menú"
            );

            if (!isOpen) {
                closeResourcesSubmenu();
            }

        });

        // Abrir / cerrar Recursos en móvil
        if (resourcesDropdown && resourcesToggle) {

            resourcesToggle.addEventListener("click", (event) => {

                if (window.innerWidth <= 900) {

                    event.preventDefault();
                    event.stopPropagation();

                    const isOpen =
                        resourcesDropdown.classList.toggle(
                            "mobile-submenu-open"
                        );

                    resourcesToggle.setAttribute(
                        "aria-expanded",
                        isOpen ? "true" : "false"
                    );

                }

            });

        }

        // Cierra el menú al seleccionar una opción real
        mainNavigation
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener("click", () => {
                    closeMobileMenu();
                });

            });

        // Cierra con Escape
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {
                closeMobileMenu();
            }

        });

        // Si regresamos a escritorio, limpia el estado móvil
        window.addEventListener("resize", () => {

            if (window.innerWidth > 900) {
                closeMobileMenu();
            }

        });

    }

});

/* ==========================
   VISOR DE IMÁGENES
========================== */

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".image-modal-close");

if (modal && modalImage && closeModal) {

    document
        .querySelectorAll(".product-image img, .product-images img")
        .forEach((img) => {

            img.addEventListener("click", () => {

                modal.classList.add("active");
                modalImage.src = img.src;
                modalImage.alt = img.alt;

            });

        });

    const hideModal = () => {
        modal.classList.remove("active");
    };

    closeModal.addEventListener("click", hideModal);

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {
            hideModal();
        }

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            hideModal();
        }

    });

}

