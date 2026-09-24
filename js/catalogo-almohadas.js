(() => {

    const pillowFormats = {
      standard: {
        label: "Formato Estándar",
        title: "50 × 70 cm",
        mark: "01",
  
        products: [
          {
            key: "standardComforell",
            model: "Comforell",
            unit: "Par",
            weight: "850 g",
            quality: "Confort"
          },
          {
            key: "standardClosure",
            model: "Comforel c/ cierre",
            unit: "Par",
            weight: "850 g",
            quality: "Ajustable"
          },
          {
            key: "standardEncore",
            model: "Encore Lavable",
            unit: "Par",
            weight: "900 g",
            quality: "Resistente"
          },
          {
            key: "standard500",
            model: "500 Hilos Premium",
            unit: "Par",
            weight: "1000 g",
            quality: "Premium"
          }
        ]
      },
  
      king: {
        label: "Formato King",
        title: "50 × 90 cm",
        mark: "02",
  
        products: [
          {
            key: "kingMemory",
            model: "Memory Foam",
            unit: "Pieza",
            weight: "1250 g",
            quality: "Ergonómica"
          },
          {
            key: "kingClosure",
            model: "Comforel c/ cierre",
            unit: "Par",
            weight: "1250 g",
            quality: "Confort"
          },
          {
            key: "kingEncore",
            model: "Encore Lavable",
            unit: "Par",
            weight: "1300 g",
            quality: "Resistente"
          },
          {
            key: "king500",
            model: "500 Hilos Premium",
            unit: "Par",
            weight: "1350 g",
            quality: "Premium"
          }
        ]
      }
    };
  
  
    /* ==================================================
       GALERÍAS
  
       LAS FOTOS REALES SE AGREGAN AL FINAL.
    ================================================== */
  
    const galleries = {
  
      standardComforell: {
        title: "Comforell · Estándar",
        images: []
      },
  
      standardClosure: {
        title: "Comforel c/ cierre · Estándar",
        images: []
      },
  
      standardEncore: {
        title: "Encore Lavable · Estándar",
        images: []
      },
  
      standard500: {
        title: "500 Hilos Premium · Estándar",
        images: []
      },
  
      kingMemory: {
        title: "Memory Foam · King",
        images: []
      },
  
      kingClosure: {
        title: "Comforel c/ cierre · King",
        images: []
      },
  
      kingEncore: {
        title: "Encore Lavable · King",
        images: []
      },
  
      king500: {
        title: "500 Hilos Premium · King",
        images: []
      }
  
    };
  
  
    /* ==================================================
       MENÚ MÓVIL
    ================================================== */
  
    const menuToggle =
      document.querySelector(
        ".pillows-menu-toggle"
      );
  
    const nav =
      document.querySelector(
        ".pillows-nav"
      );
  
  
    if (
      menuToggle &&
      nav
    ) {
  
      menuToggle.addEventListener(
        "click",
        () => {
  
          const open =
            nav.classList.toggle(
              "mobile-open"
            );
  
  
          menuToggle.setAttribute(
            "aria-expanded",
            String(open)
          );
  
        }
      );
  
  
      nav
        .querySelectorAll("a")
        .forEach(link => {
  
          link.addEventListener(
            "click",
            () => {
  
              nav.classList.remove(
                "mobile-open"
              );
  
  
              menuToggle.setAttribute(
                "aria-expanded",
                "false"
              );
  
            }
          );
  
        });
  
    }
  
  
    /* ==================================================
       SELECTOR DE FORMATO
    ================================================== */
  
    const formatTabs =
      document.querySelectorAll(
        ".format-tab"
      );
  
  
    const formatLabel =
      document.getElementById(
        "formatLabel"
      );
  
  
    const formatTitle =
      document.getElementById(
        "formatTitle"
      );
  
  
    const formatMark =
      document.getElementById(
        "formatMark"
      );
  
  
    const pillowGrid =
      document.getElementById(
        "pillowGrid"
      );
  
  
    function renderFormat(key) {
  
      const format =
        pillowFormats[key];
  
  
      if (!format) {
        return;
      }
  
  
      formatLabel.textContent =
        format.label;
  
  
      formatTitle.textContent =
        format.title;
  
  
      formatMark.textContent =
        format.mark;
  
  
      pillowGrid.innerHTML =
        format.products
          .map(
            (product, index) => {
  
              const number =
                String(index + 1)
                  .padStart(
                    2,
                    "0"
                  );
  
  
              return `
                <article class="pillow-card">
  
                  <div class="pillow-card-top">
  
                    <span class="pillow-index">
                      ${number}
                    </span>
  
                    <span class="quality-pill">
                      ${product.quality}
                    </span>
  
                  </div>
  
  
                  <h4>
                    ${product.model}
                  </h4>
  
  
                  <p class="pillow-meta">
                    ${product.unit} · ${format.title}
                  </p>
  
  
                  <div class="pillow-card-bottom">
  
                    <div class="weight-block">
  
                      <small>
                        Peso
                      </small>
  
                      <strong>
                        ${product.weight}
                      </strong>
  
                    </div>
  
  
                    <button
                      class="gallery-button gallery-trigger"
                      type="button"
                      data-gallery="${product.key}"
                    >
                      Ver imágenes
                      <span>↗</span>
                    </button>
  
                  </div>
  
                </article>
              `;
  
            }
          )
          .join("");
  
  
      bindGalleryButtons();
  
    }
  
  
    formatTabs.forEach(tab => {
  
      tab.addEventListener(
        "click",
        () => {
  
          formatTabs.forEach(
            item => {
  
              item.classList.remove(
                "is-active"
              );
  
  
              item.setAttribute(
                "aria-selected",
                "false"
              );
  
            }
          );
  
  
          tab.classList.add(
            "is-active"
          );
  
  
          tab.setAttribute(
            "aria-selected",
            "true"
          );
  
  
          renderFormat(
            tab.dataset.format
          );
  
        }
      );
  
    });
  
  
    /* ==================================================
       GALERÍA
       MISMO SISTEMA QUE TOALLAS
    ================================================== */
  
    const modal =
      document.getElementById(
        "galleryModal"
      );
  
  
    const galleryTitle =
      document.getElementById(
        "galleryTitle"
      );
  
  
    const galleryImage =
      document.getElementById(
        "galleryImage"
      );
  
  
    const galleryEmpty =
      document.getElementById(
        "galleryEmpty"
      );
  
  
    const galleryCounter =
      document.getElementById(
        "galleryCounter"
      );
  
  
    const galleryThumbs =
      document.getElementById(
        "galleryThumbs"
      );
  
  
    const galleryPrev =
      document.getElementById(
        "galleryPrev"
      );
  
  
    const galleryNext =
      document.getElementById(
        "galleryNext"
      );
  
  
    const galleryZoom =
      document.getElementById(
        "galleryZoom"
      );
  
  
    const galleryImageWrap =
      document.getElementById(
        "galleryImageWrap"
      );
  
  
    let activeGallery =
      null;
  
  
    let activeIndex =
      0;
  
  
    let lastFocused =
      null;
  
  
    let touchStartX =
      0;
  
  
    /* ==================================================
       REINICIAR ZOOM
    ================================================== */
  
    function resetZoom() {
  
      galleryImageWrap.classList.remove(
        "is-zoomed"
      );
  
  
      galleryZoom.textContent =
        "Ampliar";
  
    }
  
  
    /* ==================================================
       MOSTRAR GALERÍA
    ================================================== */
  
    function renderGallery() {
  
      const images =
        activeGallery?.images ||
        [];
  
  
      resetZoom();
  
  
      /*
        Si todavía no hay fotografías
      */
  
      if (!images.length) {
  
        galleryImage.hidden =
          true;
  
  
        galleryImage.removeAttribute(
          "src"
        );
  
  
        galleryImage.alt =
          "";
  
  
        galleryEmpty.hidden =
          false;
  
  
        galleryCounter.textContent =
          "";
  
  
        galleryThumbs.innerHTML =
          "";
  
  
        galleryPrev.hidden =
          true;
  
  
        galleryNext.hidden =
          true;
  
  
        galleryZoom.hidden =
          true;
  
  
        return;
  
      }
  
  
      /*
        Cuando ya existan fotografías
      */
  
      galleryEmpty.hidden =
        true;
  
  
      galleryImage.hidden =
        false;
  
  
      galleryZoom.hidden =
        false;
  
  
      const current =
        images[activeIndex];
  
  
      galleryImage.src =
        current.src;
  
  
      galleryImage.alt =
        current.alt ||
        activeGallery.title;
  
  
      galleryCounter.textContent =
        `${activeIndex + 1} de ${images.length}`;
  
  
      galleryPrev.hidden =
        images.length <= 1;
  
  
      galleryNext.hidden =
        images.length <= 1;
  
  
      galleryThumbs.innerHTML =
        images
          .map(
            (item, index) => {
  
              return `
                <button
                  class="
                    gallery-thumb
                    ${
                      index === activeIndex
                        ? "is-active"
                        : ""
                    }
                  "
                  type="button"
                  data-index="${index}"
                  aria-label="Ver imagen ${index + 1}"
                >
  
                  <img
                    src="${item.src}"
                    alt=""
                  >
  
                </button>
              `;
  
            }
          )
          .join("");
  
  
      galleryThumbs
        .querySelectorAll(
          ".gallery-thumb"
        )
        .forEach(button => {
  
          button.addEventListener(
            "click",
            () => {
  
              activeIndex =
                Number(
                  button.dataset.index
                );
  
  
              renderGallery();
  
            }
          );
  
        });
  
    }
  
  
    /* ==================================================
       ABRIR GALERÍA
    ================================================== */
  
    function openGallery(
      key,
      opener
    ) {
  
      const gallery =
        galleries[key];
  
  
      if (!gallery) {
        return;
      }
  
  
      activeGallery =
        gallery;
  
  
      activeIndex =
        0;
  
  
      lastFocused =
        opener ||
        document.activeElement;
  
  
      galleryTitle.textContent =
        gallery.title;
  
  
      renderGallery();
  
  
      modal.classList.add(
        "is-open"
      );
  
  
      modal.setAttribute(
        "aria-hidden",
        "false"
      );
  
  
      document.body.classList.add(
        "gallery-open"
      );
  
  
      const closeButton =
        modal.querySelector(
          ".gallery-close"
        );
  
  
      if (closeButton) {
  
        closeButton.focus();
  
      }
  
    }
  
  
    /* ==================================================
       CERRAR GALERÍA
    ================================================== */
  
    function closeGallery() {
  
      modal.classList.remove(
        "is-open"
      );
  
  
      modal.setAttribute(
        "aria-hidden",
        "true"
      );
  
  
      document.body.classList.remove(
        "gallery-open"
      );
  
  
      resetZoom();
  
  
      if (
        lastFocused &&
        typeof lastFocused.focus ===
        "function"
      ) {
  
        lastFocused.focus();
  
      }
  
    }
  
  
    /* ==================================================
       ACTIVAR BOTONES VER IMÁGENES
    ================================================== */
  
    function bindGalleryButtons() {
  
      document
        .querySelectorAll(
          ".gallery-trigger"
        )
        .forEach(button => {
  
          /*
            Evita activar dos veces
            el mismo botón
          */
  
          if (
            button.dataset.bound ===
            "true"
          ) {
  
            return;
  
          }
  
  
          button.dataset.bound =
            "true";
  
  
          button.addEventListener(
            "click",
            () => {
  
              openGallery(
                button.dataset.gallery,
                button
              );
  
            }
          );
  
        });
  
    }
  
  
    /* ==================================================
       BOTONES CERRAR
    ================================================== */
  
    modal
      .querySelectorAll(
        "[data-gallery-close]"
      )
      .forEach(button => {
  
        button.addEventListener(
          "click",
          closeGallery
        );
  
      });
  
  
    /* ==================================================
       IMAGEN ANTERIOR
    ================================================== */
  
    galleryPrev.addEventListener(
      "click",
      () => {
  
        if (
          !activeGallery
          ?.images
          ?.length
        ) {
  
          return;
  
        }
  
  
        activeIndex =
          activeIndex === 0
            ? activeGallery.images.length - 1
            : activeIndex - 1;
  
  
        renderGallery();
  
      }
    );
  
  
    /* ==================================================
       SIGUIENTE IMAGEN
    ================================================== */
  
    galleryNext.addEventListener(
      "click",
      () => {
  
        if (
          !activeGallery
          ?.images
          ?.length
        ) {
  
          return;
  
        }
  
  
        activeIndex =
          activeIndex ===
          activeGallery.images.length - 1
            ? 0
            : activeIndex + 1;
  
  
        renderGallery();
  
      }
    );
  
  
    /* ==================================================
       AMPLIAR / REDUCIR
    ================================================== */
  
    galleryZoom.addEventListener(
      "click",
      () => {
  
        if (
          !activeGallery
          ?.images
          ?.length
        ) {
  
          return;
  
        }
  
  
        const zoomed =
          galleryImageWrap
            .classList
            .toggle(
              "is-zoomed"
            );
  
  
        galleryZoom.textContent =
          zoomed
            ? "Reducir"
            : "Ampliar";
  
      }
    );
  
  
    /*
      También permite ampliar
      tocando directamente la foto
    */
  
    galleryImageWrap.addEventListener(
      "click",
      event => {
  
        if (
          event.target !==
          galleryImage
        ) {
  
          return;
  
        }
  
  
        if (
          !activeGallery
          ?.images
          ?.length
        ) {
  
          return;
  
        }
  
  
        galleryZoom.click();
  
      }
    );
  
  
    /* ==================================================
       DESLIZAR EN MÓVIL
    ================================================== */
  
    galleryImageWrap.addEventListener(
      "touchstart",
      event => {
  
        if (
          !event.touches.length
        ) {
  
          return;
  
        }
  
  
        touchStartX =
          event.touches[0]
            .clientX;
  
      },
      {
        passive: true
      }
    );
  
  
    galleryImageWrap.addEventListener(
      "touchend",
      event => {
  
        if (
          !event.changedTouches.length
        ) {
  
          return;
  
        }
  
  
        /*
          Si está ampliada,
          no cambia de fotografía.
        */
  
        if (
          galleryImageWrap
            .classList
            .contains(
              "is-zoomed"
            )
        ) {
  
          return;
  
        }
  
  
        const touchEndX =
          event
            .changedTouches[0]
            .clientX;
  
  
        const difference =
          touchEndX -
          touchStartX;
  
  
        /*
          Movimiento muy pequeño:
          no hacemos nada.
        */
  
        if (
          Math.abs(
            difference
          ) < 45
        ) {
  
          return;
  
        }
  
  
        if (
          difference > 0
        ) {
  
          galleryPrev.click();
  
        }
  
        else {
  
          galleryNext.click();
  
        }
  
      },
      {
        passive: true
      }
    );
  
  
    /* ==================================================
       TECLADO
    ================================================== */
  
    document.addEventListener(
      "keydown",
      event => {
  
        if (
          !modal
            .classList
            .contains(
              "is-open"
            )
        ) {
  
          return;
  
        }
  
  
        if (
          event.key ===
          "Escape"
        ) {
  
          closeGallery();
  
          return;
  
        }
  
  
        if (
          event.key ===
          "ArrowLeft"
        ) {
  
          galleryPrev.click();
  
        }
  
  
        if (
          event.key ===
          "ArrowRight"
        ) {
  
          galleryNext.click();
  
        }
  
      }
    );
  
  
    /* ==================================================
       CARGA INICIAL
    ================================================== */
  
    renderFormat(
      "standard"
    );
  
  })();