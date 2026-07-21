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

});
