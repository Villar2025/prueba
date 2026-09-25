(() => {

  /* ==================================================
     GALERÍAS DE PRODUCTOS
  ================================================== */

  const galleries = {

    hilasa: {
      title: "Hilasa Esencial",
      images: [
        {
          src: "./img/catalogo/toallas/toalla_01_medio_bano.png",
          alt: "Hilasa Esencial · Medio baño"
        },
        {
          src: "./img/catalogo/toallas/toalla_02_facial.png",
          alt: "Hilasa Esencial · Facial"
        },
        {
          src: "./img/catalogo/toallas/toalla_03_pullman.png",
          alt: "Hilasa Esencial · Pullman"
        },
        {
          src: "./img/catalogo/toallas/toalla_04_manos.png",
          alt: "Hilasa Esencial · Manos"
        },
        {
          src: "./img/catalogo/toallas/toalla hilaza.png",
          alt: "Hilasa Esencial · Baño"
        }
      ]
    },


    torzal: {
      title: "Torzal Clásica",
      images: [
        {
          src: "./img/catalogo/toallas/toalla torzal.jpeg",
          alt: "Torzal Clásica MALAK · Imagen 1"
        },
        {
          src: "./img/catalogo/toallas/toalla torzal 2.jpeg",
          alt: "Torzal Clásica MALAK · Imagen 2"
        },
        {
          src: "./img/catalogo/toallas/toalla torzal 3.jpeg",
          alt: "Torzal Clásica MALAK · Imagen 3"
        }
      ]
    },


    torzalPlus: {
      title: "Torzal Plus",
      images: [
        {
          src: "./img/catalogo/toallas/toalla torzal plus.jpg",
          alt: "Torzal Plus MALAK · Imagen 1"
        },
        {
          src: "./img/catalogo/toallas/toalla torzal plus 2.jpeg",
          alt: "Torzal Plus MALAK · Imagen 2"
        },
        {
          src: "./img/catalogo/toallas/toalla torzal plus 3.jpeg",
          alt: "Torzal Plus MALAK · Imagen 3"
        }
      ]
    },


    egipcia: {
      title: "Egipcia",
      images: [
        {
          src: "./img/catalogo/toallas/toalla egipcia.png",
          alt: "Toalla Egipcia MALAK · Imagen 1"
        },
        {
          src: "./img/catalogo/toallas/toalla egipcia 2.png",
          alt: "Toalla Egipcia MALAK · Imagen 2"
        }
      ]
    },


    alberca: {
      title: "Toallas de alberca",
      images: [
        {
          src: "./img/catalogo/toallas/toalla alberca.jpeg",
          alt: "Toallas de alberca MALAK · Imagen 1"
        },
        {
          src: "./img/catalogo/toallas/toalla alberca 2.jpg",
          alt: "Toallas de alberca MALAK · Imagen 2"
        }
      ]
    },


    tapete: {
      title: "Tapete HZ",
      images: [
        {
          src: "./img/catalogo/toallas/tapete_medio_bano_MALAK.jpg",
          alt: "Tapete HZ MALAK · Imagen 1"
        },
        {
          src: "./img/catalogo/toallas/tapete_medio_bano_MALAK_angulo.jpg",
          alt: "Tapete HZ MALAK · Imagen 2"
        }
      ]
    }

  };


  /* ==================================================
     MENÚ MÓVIL
  ================================================== */

  const menuToggle =
    document.querySelector(
      ".towels-menu-toggle"
    );

  const nav =
    document.querySelector(
      ".towels-nav"
    );


  if (menuToggle && nav) {

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
     ELEMENTOS DE LA GALERÍA
  ================================================== */

  const modal =
    document.getElementById(
      "galleryModal"
    );

  const title =
    document.getElementById(
      "galleryTitle"
    );

  const image =
    document.getElementById(
      "galleryImage"
    );

  const counter =
    document.getElementById(
      "galleryCounter"
    );

  const thumbs =
    document.getElementById(
      "galleryThumbs"
    );

  const prev =
    document.getElementById(
      "galleryPrev"
    );

  const next =
    document.getElementById(
      "galleryNext"
    );

  const zoom =
    document.getElementById(
      "galleryZoom"
    );

  const imageWrap =
    document.getElementById(
      "galleryImageWrap"
    );


  if (
    !modal ||
    !title ||
    !image ||
    !counter ||
    !thumbs ||
    !prev ||
    !next ||
    !zoom ||
    !imageWrap
  ) {

    return;

  }


  let activeGallery = null;

  let activeIndex = 0;

  let lastFocused = null;

  let touchStartX = 0;

  let touchStartY = 0;


  /* ==================================================
     QUITAR ZOOM
  ================================================== */

  function resetZoom() {

    imageWrap.classList.remove(
      "is-zoomed"
    );

    zoom.textContent =
      "Ampliar";

    zoom.setAttribute(
      "aria-label",
      "Ampliar imagen"
    );

    imageWrap.scrollTop = 0;

    imageWrap.scrollLeft = 0;

  }


  /* ==================================================
     MINIATURAS
  ================================================== */

  function renderThumbs() {

    thumbs.innerHTML = "";


    activeGallery.images
      .forEach(
        (item, index) => {

          const button =
            document.createElement(
              "button"
            );

          button.type =
            "button";

          button.className =
            "gallery-thumb";

          button.setAttribute(
            "aria-label",
            `Ver imagen ${index + 1}`
          );


          const thumb =
            document.createElement(
              "img"
            );

          thumb.src =
            item.src;

          thumb.alt = "";

          thumb.setAttribute(
            "data-no-photo-editor",
            ""
          );


          button.appendChild(
            thumb
          );


          button.addEventListener(
            "click",
            () => {

              showImage(index);

            }
          );


          thumbs.appendChild(
            button
          );

        }
      );

  }


  /* ==================================================
     MOSTRAR IMAGEN
  ================================================== */

  function showImage(index) {

    const total =
      activeGallery.images.length;


    if (index < 0) {

      index =
        total - 1;

    }


    if (index >= total) {

      index = 0;

    }


    activeIndex =
      index;


    const item =
      activeGallery.images[index];


    resetZoom();


    image.src =
      item.src;

    image.alt =
      item.alt;


    counter.textContent =
      `${index + 1} de ${total}`;


    [
      ...thumbs.children
    ].forEach(
      (thumb, thumbIndex) => {

        thumb.classList.toggle(
          "is-active",
          thumbIndex === index
        );


        if (
          thumbIndex === index
        ) {

          thumb.scrollIntoView({

            behavior:
              "smooth",

            block:
              "nearest",

            inline:
              "nearest"

          });

        }

      }
    );


    const multiple =
      total > 1;


    prev.hidden =
      !multiple;

    next.hidden =
      !multiple;

  }


  /* ==================================================
     ABRIR GALERÍA
  ================================================== */

  function openGallery(
    key,
    opener
  ) {

    const selected =
      galleries[key];


    if (!selected) {

      return;

    }


    activeGallery =
      selected;

    activeIndex = 0;

    lastFocused =
      opener ||
      document.activeElement;


    title.textContent =
      selected.title;


    renderThumbs();

    showImage(0);


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


    const close =
      modal.querySelector(
        ".gallery-close"
      );


    if (close) {

      close.focus();

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
     BOTONES VER IMÁGENES
  ================================================== */

  document
    .querySelectorAll(
      ".gallery-trigger"
    )
    .forEach(trigger => {

      trigger.addEventListener(
        "click",
        () => {

          openGallery(
            trigger.dataset.gallery,
            trigger
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
     ANTERIOR / SIGUIENTE
  ================================================== */

  prev.addEventListener(
    "click",
    () => {

      showImage(
        activeIndex - 1
      );

    }
  );


  next.addEventListener(
    "click",
    () => {

      showImage(
        activeIndex + 1
      );

    }
  );


  /* ==================================================
     ZOOM
  ================================================== */

  zoom.addEventListener(
    "click",
    () => {

      const zoomed =
        imageWrap.classList.toggle(
          "is-zoomed"
        );


      zoom.textContent =
        zoomed
          ? "Reducir"
          : "Ampliar";


      zoom.setAttribute(
        "aria-label",
        zoomed
          ? "Reducir imagen"
          : "Ampliar imagen"
      );

    }
  );


  /* También permite tocar
     directamente la fotografía */

  image.addEventListener(
    "click",
    () => {

      zoom.click();

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

        showImage(
          activeIndex - 1
        );

        return;

      }


      if (
        event.key ===
        "ArrowRight"
      ) {

        showImage(
          activeIndex + 1
        );

      }

    }
  );


  /* ==================================================
     DESLIZAR EN IPHONE / MÓVIL
  ================================================== */

  imageWrap.addEventListener(
    "touchstart",
    event => {

      const touch =
        event.changedTouches[0];


      touchStartX =
        touch.clientX;


      touchStartY =
        touch.clientY;

    },
    {
      passive:true
    }
  );


  imageWrap.addEventListener(
    "touchend",
    event => {

      /* Si está ampliada,
         no cambiamos de foto */

      if (
        imageWrap.classList.contains(
          "is-zoomed"
        )
      ) {

        return;

      }


      const touch =
        event.changedTouches[0];


      const diffX =
        touch.clientX -
        touchStartX;


      const diffY =
        touch.clientY -
        touchStartY;


      /*
        Ignoramos movimientos
        pequeños o verticales
      */

      if (
        Math.abs(diffX) < 45 ||
        Math.abs(diffX) <
        Math.abs(diffY)
      ) {

        return;

      }


      /*
        Deslizar a la izquierda:
        siguiente fotografía
      */

      if (diffX < 0) {

        showImage(
          activeIndex + 1
        );

      }

      /*
        Deslizar a la derecha:
        fotografía anterior
      */

      else {

        showImage(
          activeIndex - 1
        );

      }

    },
    {
      passive:true
    }
  );

})();
