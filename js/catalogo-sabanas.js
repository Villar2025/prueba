(() => {

    /* ==================================================
       DATOS · JUEGOS HOTELEROS
    ================================================== */
  
    const threadLines = {
  
      base: {
        title: "Base · 150 hilos",
        composition: "50/50",
        depth: "Cajón 30 cm",
        gallery: "base",
  
        rows: [
          ["Individual", "30 cm", "40×70", "×1"],
          ["Matrimonial", "30 cm", "40×70", "×2"],
          ["Queen", "30 cm", "40×70", "×2"],
          ["King Size", "30 cm", "50×90", "×2"]
        ],
  
        note: ""
      },
  
  
      esencial: {
        title: "Esencial · 180 hilos",
        composition: "50/50",
        depth: "Cajón 35 cm",
        gallery: "esencial",
  
        rows: [
          ["Individual", "35 cm", "40×70", "×1"],
          ["Matrimonial", "35 cm", "40×70", "×2"],
          ["Queen", "35 cm", "40×70", "×2"],
          ["King Size", "35 cm", "50×90", "×2"]
        ],
  
        note: ""
      },
  
  
      selecta: {
        title: "Selecta · 200 hilos",
        composition: "50/50",
        depth: "Cajón 35 cm",
        gallery: "selecta",
  
        rows: [
          ["Individual", "35 cm", "40×70", "×1"],
          ["Matrimonial", "35 cm", "40×70", "×2"],
          ["Queen", "35 cm", "40×70", "×2"],
          ["King Size", "35 cm", "50×90", "×2"]
        ],
  
        note: ""
      },
  
  
      prestigio: {
        title: "Prestigio · 300 hilos",
        composition: "100% algodón",
        depth: "Cajón 40 cm",
        gallery: "prestigio",
  
        rows: [
          ["Individual", "40 cm", "40×70", "×1"],
          ["Matrimonial", "40 cm", "40×70", "×2"],
          ["Queen", "40 cm", "40×70", "×2"],
          ["King Size", "40 cm", "50×90", "×2"]
        ],
  
        note: ""
      },
  
  
      premium500: {
        title: "500 hilos",
        composition: "100% algodón",
        depth: "Cajón 40 cm",
        gallery: "premium500",
  
        rows: [
          ["Matrimonial", "40 cm", "50×70", "×2"],
          ["Queen", "40 cm", "50×70", "×2"],
          ["King Size", "40 cm", "50×90", "×2"]
        ],
  
        note:
          "Producción limitada disponible bajo pedido."
      }
  
    };
  
  
    /* ==================================================
       DATOS · PLANAS & FUNDAS
    ================================================== */
  
    const flatLines = {
  
      180: {
        composition: "180 hilos",
        limited: false,
        gallery: "planas180",
  
        note:
          "Disponibilidad sujeta a existencia al momento de cotizar.",
  
        rows: [
          [
            "Individual",
            "175×280",
            "Consultar disponibilidad"
          ],
  
          [
            "Matrimonial",
            "220×280",
            ""
          ],
  
          [
            "Queen Size",
            "240×280",
            ""
          ],
  
          [
            "King Size",
            "280×300",
            "Consultar disponibilidad"
          ],
  
          [
            "Par de funda",
            "50×80",
            "Estándar"
          ],
  
          [
            "Par de funda",
            "50×100",
            "King"
          ]
        ]
      },
  
  
      200: {
        composition: "200 hilos",
        limited: false,
        gallery: "planas200",
  
        note:
          "Disponibilidad sujeta a existencia al momento de cotizar.",
  
        rows: [
          [
            "Individual",
            "175×280",
            ""
          ],
  
          [
            "Matrimonial",
            "220×280",
            ""
          ],
  
          [
            "Queen Size",
            "240×280",
            ""
          ],
  
          [
            "King Size",
            "280×300",
            ""
          ],
  
          [
            "Par de funda",
            "50×80",
            "Estándar"
          ],
  
          [
            "Par de funda",
            "50×100",
            "King"
          ]
        ]
      },
  
  
      300: {
        composition:
          "300 hilos · 100% algodón",
  
        limited: true,
  
        gallery:
          "planas300",
  
        note:
          "Producción limitada disponible bajo pedido.",
  
        rows: [
          [
            "Individual",
            "175×280",
            ""
          ],
  
          [
            "Matrimonial",
            "220×280",
            ""
          ],
  
          [
            "Queen Size",
            "240×280",
            ""
          ],
  
          [
            "King Size",
            "280×300",
            ""
          ],
  
          [
            "Par de funda",
            "50×80",
            "Estándar"
          ],
  
          [
            "Par de funda",
            "50×100",
            "King"
          ]
        ]
      }
  
    };
  
  
    /* ==================================================
       GALERÍAS
  
       AHORITA ESTÁN VACÍAS.
  
       AL FINAL AGREGA LAS FOTOS ASÍ:
  
       images: [
         {
           src: "./img/catalogo/sabanas/base-01.jpg",
           alt: "Sábanas Base 150 hilos"
         }
       ]
    ================================================== */
  
    const galleries = {
  
      base: {
        title:
          "Base · 150 hilos",
  
        images: []
      },
  
  
      esencial: {
        title:
          "Esencial · 180 hilos",
  
        images: []
      },
  
  
      selecta: {
        title:
          "Selecta · 200 hilos",
  
        images: []
      },
  
  
      prestigio: {
        title:
          "Prestigio · 300 hilos",
  
        images: []
      },
  
  
      premium500: {
        title:
          "500 hilos",
  
        images: []
      },
  
  
      colorAlgodon: {
        title:
          "Sábanas de color · Algodón",
  
        images: []
      },
  
  
      colorMicrofibra: {
        title:
          "Sábanas de color · Microfibra",
  
        images: []
      },
  
  
      planas180: {
        title:
          "Sábanas planas & fundas · 180 hilos",
  
        images: []
      },
  
  
      planas200: {
        title:
          "Sábanas planas & fundas · 200 hilos",
  
        images: []
      },
  
  
      planas300: {
        title:
          "Sábanas planas & fundas · 300 hilos",
  
        images: []
      }
  
    };
  
  
    /* ==================================================
       MENÚ MÓVIL
    ================================================== */
  
    const menuToggle =
      document.querySelector(
        ".sheets-menu-toggle"
      );
  
  
    const nav =
      document.querySelector(
        ".sheets-nav"
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
       EXPLORADOR DE HILOS
    ================================================== */
  
    const threadTabs =
      document.querySelectorAll(
        ".thread-tab"
      );
  
  
    const threadTitle =
      document.getElementById(
        "threadTitle"
      );
  
  
    const threadComposition =
      document.getElementById(
        "threadComposition"
      );
  
  
    const threadDepth =
      document.getElementById(
        "threadDepth"
      );
  
  
    const threadTableBody =
      document.getElementById(
        "threadTableBody"
      );
  
  
    const threadNote =
      document.getElementById(
        "threadNote"
      );
  
  
    const threadGalleryBtn =
      document.getElementById(
        "threadGalleryBtn"
      );
  
  
    function renderThreadLine(key) {
  
      const line =
        threadLines[key];
  
  
      if (!line) {
        return;
      }
  
  
      threadTitle.textContent =
        line.title;
  
  
      threadComposition.textContent =
        line.composition;
  
  
      threadDepth.textContent =
        line.depth;
  
  
      threadGalleryBtn.dataset.gallery =
        line.gallery;
  
  
      threadTableBody.innerHTML =
        line.rows
          .map(row => {
  
            return `
              <tr>
  
                <td>
                  ${row[0]}
                </td>
  
                <td>
                  ${row[1]}
                </td>
  
                <td>
                  ${row[2]}
                </td>
  
                <td>
                  ${row[3]}
                </td>
  
              </tr>
            `;
  
          })
          .join("");
  
  
      if (line.note) {
  
        threadNote.hidden =
          false;
  
  
        threadNote.textContent =
          line.note;
  
      }
  
      else {
  
        threadNote.hidden =
          true;
  
  
        threadNote.textContent =
          "";
  
      }
  
    }
  
  
    threadTabs.forEach(tab => {
  
      tab.addEventListener(
        "click",
        () => {
  
          threadTabs.forEach(
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
  
  
          renderThreadLine(
            tab.dataset.thread
          );
  
        }
      );
  
    });
  
  
    /*
      Carga inicial
    */
  
    renderThreadLine(
      "base"
    );
  
  
    /* ==================================================
       PLANAS & FUNDAS
    ================================================== */
  
    const flatTabs =
      document.querySelectorAll(
        ".flat-tab"
      );
  
  
    const flatComposition =
      document.getElementById(
        "flatComposition"
      );
  
  
    const flatList =
      document.getElementById(
        "flatList"
      );
  
  
    const flatLimited =
      document.getElementById(
        "flatLimited"
      );
  
  
    const flatNote =
      document.getElementById(
        "flatNote"
      );
  
  
    const flatGalleryBtn =
      document.getElementById(
        "flatGalleryBtn"
      );
  
  
    function renderFlatLine(key) {
  
      const line =
        flatLines[key];
  
  
      if (!line) {
        return;
      }
  
  
      flatComposition.textContent =
        line.composition;
  
  
      flatLimited.hidden =
        !line.limited;
  
  
      flatNote.textContent =
        line.note;
  
  
      flatGalleryBtn.dataset.gallery =
        line.gallery;
  
  
      flatList.innerHTML =
        line.rows
          .map(row => {
  
            return `
              <div class="flat-row">
  
                <strong>
                  ${row[0]}
                </strong>
  
                <span>
                  ${row[1]}
                </span>
  
                <em>
                  ${row[2]}
                </em>
  
              </div>
            `;
  
          })
          .join("");
  
    }
  
  
    flatTabs.forEach(tab => {
  
      tab.addEventListener(
        "click",
        () => {
  
          flatTabs.forEach(
            item => {
  
              item.classList.remove(
                "is-active"
              );
  
            }
          );
  
  
          tab.classList.add(
            "is-active"
          );
  
  
          renderFlatLine(
            tab.dataset.flat
          );
  
        }
      );
  
    });
  
  
    /*
      Carga inicial
    */
  
    renderFlatLine(
      "180"
    );
  
  
    /* ==================================================
       GALERÍA
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
  
  
    let activeGallery =
      null;
  
  
    let activeIndex =
      0;
  
  
    let lastFocused =
      null;
  
  
    /* ==================================================
       MOSTRAR GALERÍA
    ================================================== */
  
    function renderGallery() {
  
      const images =
        activeGallery?.images ||
        [];
  
  
      /*
        Si todavía no existen fotos
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
  
  
        return;
  
      }
  
  
      /*
        Si ya existen fotografías
      */
  
      galleryEmpty.hidden =
        true;
  
  
      galleryImage.hidden =
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
  
  
      if (
        lastFocused &&
        typeof lastFocused.focus ===
        "function"
      ) {
  
        lastFocused.focus();
  
      }
  
    }
  
  
    /* ==================================================
       BOTONES VER IMÁGENES
    ================================================== */
  
    document
      .querySelectorAll(
        ".gallery-trigger"
      )
      .forEach(button => {
  
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
  
  
    /* ==================================================
       CERRAR
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
          !activeGallery?.images?.length
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
          !activeGallery?.images?.length
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
       TECLADO
    ================================================== */
  
    document.addEventListener(
      "keydown",
      event => {
  
        if (
          !modal.classList.contains(
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
  
  })();