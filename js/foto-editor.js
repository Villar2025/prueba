(() => {
    const VERSION = "v2";
  
    const PAGE_KEY = (location.pathname || "catalogo")
      .replace(/[^a-z0-9_-]+/gi, "_")
      .replace(/^_+|_+$/g, "") || "catalogo";
  
    const STORAGE_KEY =
      `malak_photo_editor_${VERSION}_${PAGE_KEY}`;
  
    const main = document.querySelector("main");
  
    if (!main) return;
  
    const candidates = [
      ...main.querySelectorAll("img")
    ].filter(
      img => !img.hasAttribute("data-no-photo-editor")
    );
  
    if (!candidates.length) return;
  
  
    function fileNameFromSrc(src = "") {
  
      try {
  
        const clean =
          src.split("?")[0].split("#")[0];
  
        return decodeURIComponent(
          clean.substring(
            clean.lastIndexOf("/") + 1
          )
        ) || "imagen";
  
      } catch {
  
        return "imagen";
  
      }
    }
  
  
    function cssEscape(value) {
  
      if (window.CSS && CSS.escape) {
        return CSS.escape(value);
      }
  
      return String(value)
        .replace(/["\\]/g, "\\$&");
    }
  
  
    function parsePercent(
      value,
      fallback = 50
    ) {
  
      if (!value) return fallback;
  
      const match =
        String(value)
          .match(/-?\d+(\.\d+)?/);
  
      return match
        ? Number(match[0])
        : fallback;
    }
  
  
    function parseScale(transform) {
  
      if (
        !transform ||
        transform === "none"
      ) {
        return 1;
      }
  
      const direct =
        transform.match(
          /scale\(([-\d.]+)\)/
        );
  
      if (direct) {
        return Number(direct[1]) || 1;
      }
  
      const matrix =
        transform.match(
          /matrix\(([^)]+)\)/
        );
  
      if (matrix) {
  
        const values =
          matrix[1]
            .split(",")
            .map(Number);
  
        if (
          values.length >= 4 &&
          values.every(Number.isFinite)
        ) {
  
          return (
            Math.sqrt(
              values[0] ** 2 +
              values[1] ** 2
            ) || 1
          );
        }
      }
  
      return 1;
    }
  
  
    function buildSelector(
      img,
      index
    ) {
  
      const customId =
        img.getAttribute(
          "data-photo-editor-id"
        );
  
      if (customId) {
  
        return (
          `[data-photo-editor-id="${cssEscape(customId)}"]`
        );
      }
  
  
      const srcAttr =
        img.getAttribute("src") || "";
  
      const filename =
        fileNameFromSrc(srcAttr);
  
  
      const sameName =
        candidates.filter(candidate => {
  
          return (
            fileNameFromSrc(
              candidate.getAttribute("src") || ""
            ) === filename
          );
  
        });
  
  
      if (
        filename &&
        sameName.length === 1
      ) {
  
        return (
          `img[src$="${cssEscape(filename)}"]`
        );
      }
  
  
      return (
        `main img:nth-of-type(${index + 1})`
      );
    }
  
  
    const items =
      candidates.map(
        (img, index) => {
  
          const computed =
            getComputedStyle(img);
  
          const objectPosition =
            (
              computed.objectPosition ||
              "50% 50%"
            ).split(/\s+/);
  
  
          const label =
            img.getAttribute(
              "data-photo-editor-label"
            ) ||
            img.getAttribute("alt") ||
            fileNameFromSrc(
              img.getAttribute("src") || ""
            ) ||
            `Foto ${index + 1}`;
  
  
          return {
  
            id: `photo_${index + 1}`,
  
            label,
  
            selector:
              buildSelector(
                img,
                index
              ),
  
            img,
  
            defaults: {
  
              x: parsePercent(
                objectPosition[0],
                50
              ),
  
              y: parsePercent(
                objectPosition[1],
                50
              ),
  
              zoom: Number(
                parseScale(
                  computed.transform
                ).toFixed(2)
              ),
  
              fit:
                computed.objectFit ===
                "contain"
                  ? "contain"
                  : "cover"
  
            }
          };
        }
      );
  
  
    function clone(obj) {
      return JSON.parse(
        JSON.stringify(obj)
      );
    }
  
  
    const defaults =
      Object.fromEntries(
        items.map(
          item => [
            item.id,
            clone(item.defaults)
          ]
        )
      );
  
  
    let state =
      clone(defaults);
  
  
    try {
  
      const saved =
        JSON.parse(
          localStorage.getItem(
            STORAGE_KEY
          ) || "null"
        );
  
      if (
        saved &&
        typeof saved === "object"
      ) {
  
        for (const item of items) {
  
          if (saved[item.id]) {
  
            state[item.id] = {
              ...state[item.id],
              ...saved[item.id]
            };
  
          }
        }
      }
  
    } catch {}
  
  
    function save() {
  
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
      );
    }
  
  
    function getItem(id) {
  
      return items.find(
        item => item.id === id
      );
    }
  
  
    function applyOne(item) {
  
      if (!item?.img) return;
  
      const s =
        state[item.id];
  
      item.img.style.objectPosition =
        `${s.x}% ${s.y}%`;
  
      item.img.style.objectFit =
        s.fit;
  
      item.img.style.transform =
        `scale(${s.zoom})`;
  
      item.img.style.transformOrigin =
        `${s.x}% ${s.y}%`;
    }
  
  
    function applySaved() {
  
      let saved = null;
  
      try {
  
        saved =
          JSON.parse(
            localStorage.getItem(
              STORAGE_KEY
            ) || "null"
          );
  
      } catch {}
  
  
      if (!saved) return;
  
  
      for (const item of items) {
  
        if (saved[item.id]) {
  
          applyOne(item);
  
        }
      }
    }
  
  
    const style =
      document.createElement(
        "style"
      );
  
  
    style.textContent = `
  
      #malakPhotoEditor{
  
        position:fixed;
        right:14px;
        bottom:14px;
  
        z-index:99999;
  
        width:min(
          350px,
          calc(100vw - 28px)
        );
  
        max-height:
          calc(100vh - 28px);
  
        overflow:auto;
  
        padding:16px;
  
        border:
          1px solid
          rgba(30,74,59,.18);
  
        border-radius:18px;
  
        background:
          rgba(251,250,246,.97);
  
        box-shadow:
          0 20px 60px
          rgba(18,40,31,.22);
  
        backdrop-filter:
          blur(14px);
  
        font-family:
          Inter,
          Arial,
          sans-serif;
  
        color:#12281f;
      }
  
  
      #malakPhotoEditor.is-collapsed{
  
        width:auto;
        padding:10px;
      }
  
  
      #malakPhotoEditor.is-collapsed
      .malak-editor-body,
  
      #malakPhotoEditor.is-collapsed
      .malak-editor-title{
  
        display:none;
      }
  
  
      .malak-editor-top{
  
        display:flex;
  
        align-items:center;
  
        justify-content:
          space-between;
  
        gap:12px;
      }
  
  
      .malak-editor-title{
  
        margin:0;
  
        font-size:14px;
  
        font-weight:800;
      }
  
  
      .malak-editor-toggle{
  
        border:0;
  
        background:#12281f;
  
        color:white;
  
        width:34px;
  
        height:34px;
  
        border-radius:50%;
  
        cursor:pointer;
  
        font-size:18px;
  
        line-height:1;
  
        display:grid;
  
        place-items:center;
  
        flex:0 0 34px;
      }
  
  
      .malak-editor-body{
  
        margin-top:14px;
      }
  
  
      .malak-editor-field{
  
        margin-top:13px;
      }
  
  
      .malak-editor-field label{
  
        display:flex;
  
        justify-content:
          space-between;
  
        align-items:center;
  
        gap:10px;
  
        margin-bottom:6px;
  
        font-size:11px;
  
        font-weight:700;
      }
  
  
      .malak-editor-field select,
  
      .malak-editor-field
      input[type="range"]{
  
        width:100%;
      }
  
  
      .malak-editor-field select{
  
        min-height:40px;
  
        border:
          1px solid
          rgba(30,74,59,.18);
  
        border-radius:10px;
  
        background:white;
  
        padding:0 10px;
  
        color:#12281f;
      }
  
  
      .malak-editor-value{
  
        font-size:10px;
  
        color:#7b7f78;
  
        font-weight:600;
      }
  
  
      .malak-editor-fit{
  
        display:grid;
  
        grid-template-columns:
          1fr 1fr;
  
        gap:8px;
      }
  
  
      .malak-editor-fit button,
  
      .malak-editor-actions button{
  
        border:
          1px solid
          rgba(30,74,59,.18);
  
        border-radius:10px;
  
        background:white;
  
        color:#12281f;
  
        padding:10px 9px;
  
        font-size:10px;
  
        font-weight:800;
  
        cursor:pointer;
      }
  
  
      .malak-editor-fit
      button.is-active{
  
        background:#1e4a3b;
  
        color:white;
  
        border-color:#1e4a3b;
      }
  
  
      .malak-editor-actions{
  
        display:grid;
  
        grid-template-columns:
          1fr 1fr;
  
        gap:8px;
  
        margin-top:16px;
      }
  
  
      .malak-editor-actions
      .copy{
  
        grid-column:
          1 / -1;
  
        background:#1e4a3b;
  
        color:white;
  
        border-color:#1e4a3b;
      }
  
  
      .malak-editor-note{
  
        margin:
          12px 0 0;
  
        font-size:9px;
  
        line-height:1.45;
  
        color:#777b74;
      }
  
  
      @media(max-width:650px){
  
        #malakPhotoEditor{
  
          right:10px;
  
          bottom:10px;
  
          width:min(
            320px,
            calc(100vw - 20px)
          );
        }
      }
  
    `;
  
  
    document.head
      .appendChild(style);
  
  
    const panel =
      document.createElement(
        "aside"
      );
  
  
    panel.id =
      "malakPhotoEditor";
  
  
    panel.innerHTML = `
  
      <div class="malak-editor-top">
  
        <h3 class="malak-editor-title">
          Editor general MALAK
        </h3>
  
        <button
          class="malak-editor-toggle"
          type="button"
        >
          −
        </button>
  
      </div>
  
  
      <div class="malak-editor-body">
  
        <div class="malak-editor-field">
  
          <label for="malakPhotoSelect">
            Foto
          </label>
  
          <select id="malakPhotoSelect">
  
            ${items.map(
              item => `
                <option value="${item.id}">
                  ${item.label}
                </option>
              `
            ).join("")}
  
          </select>
  
        </div>
  
  
        <div class="malak-editor-field">
  
          <label>
  
            Horizontal
  
            <span
              class="malak-editor-value"
              id="malakXValue"
            >
              50%
            </span>
  
          </label>
  
          <input
            id="malakX"
            type="range"
            min="0"
            max="100"
            step="1"
          >
  
        </div>
  
  
        <div class="malak-editor-field">
  
          <label>
  
            Vertical
  
            <span
              class="malak-editor-value"
              id="malakYValue"
            >
              50%
            </span>
  
          </label>
  
          <input
            id="malakY"
            type="range"
            min="0"
            max="100"
            step="1"
          >
  
        </div>
  
  
        <div class="malak-editor-field">
  
          <label>
  
            Zoom
  
            <span
              class="malak-editor-value"
              id="malakZoomValue"
            >
              100%
            </span>
  
          </label>
  
          <input
            id="malakZoom"
            type="range"
            min="0.70"
            max="1.80"
            step="0.01"
          >
  
        </div>
  
  
        <div class="malak-editor-field">
  
          <label>
            Ajuste de imagen
          </label>
  
          <div class="malak-editor-fit">
  
            <button
              type="button"
              data-fit="cover"
            >
              Llenar
            </button>
  
            <button
              type="button"
              data-fit="contain"
            >
              Completa
            </button>
  
          </div>
  
        </div>
  
  
        <div class="malak-editor-actions">
  
          <button
            type="button"
            id="malakResetCurrent"
          >
            Restablecer foto
          </button>
  
          <button
            type="button"
            id="malakResetAll"
          >
            Restablecer página
          </button>
  
          <button
            type="button"
            class="copy"
            id="malakCopyCSS"
          >
            Copiar ajustes
          </button>
  
        </div>
  
  
        <p class="malak-editor-note">
  
          Detecta automáticamente
          las fotos dentro de main.
  
          Los ajustes se guardan
          por página.
  
        </p>
  
      </div>
    `;
  
  
    document.body
      .appendChild(panel);
  
  
    const select =
      panel.querySelector(
        "#malakPhotoSelect"
      );
  
  
    const x =
      panel.querySelector(
        "#malakX"
      );
  
  
    const y =
      panel.querySelector(
        "#malakY"
      );
  
  
    const zoom =
      panel.querySelector(
        "#malakZoom"
      );
  
  
    const xValue =
      panel.querySelector(
        "#malakXValue"
      );
  
  
    const yValue =
      panel.querySelector(
        "#malakYValue"
      );
  
  
    const zoomValue =
      panel.querySelector(
        "#malakZoomValue"
      );
  
  
    const fitButtons = [
      ...panel.querySelectorAll(
        "[data-fit]"
      )
    ];
  
  
    const toggle =
      panel.querySelector(
        ".malak-editor-toggle"
      );
  
  
    function currentId() {
  
      return select.value;
    }
  
  
    function refreshControls() {
  
      const s =
        state[currentId()];
  
  
      x.value =
        s.x;
  
  
      y.value =
        s.y;
  
  
      zoom.value =
        s.zoom;
  
  
      xValue.textContent =
        `${s.x}%`;
  
  
      yValue.textContent =
        `${s.y}%`;
  
  
      zoomValue.textContent =
        `${Math.round(
          s.zoom * 100
        )}%`;
  
  
      fitButtons.forEach(
        btn => {
  
          btn.classList.toggle(
            "is-active",
            btn.dataset.fit ===
            s.fit
          );
  
        }
      );
    }
  
  
    function updateCurrent() {
  
      const id =
        currentId();
  
  
      state[id] = {
  
        ...state[id],
  
        x:Number(
          x.value
        ),
  
        y:Number(
          y.value
        ),
  
        zoom:Number(
          zoom.value
        )
      };
  
  
      xValue.textContent =
        `${state[id].x}%`;
  
  
      yValue.textContent =
        `${state[id].y}%`;
  
  
      zoomValue.textContent =
        `${Math.round(
          state[id].zoom * 100
        )}%`;
  
  
      applyOne(
        getItem(id)
      );
  
  
      save();
    }
  
  
    select.addEventListener(
      "change",
      refreshControls
    );
  
  
    x.addEventListener(
      "input",
      updateCurrent
    );
  
  
    y.addEventListener(
      "input",
      updateCurrent
    );
  
  
    zoom.addEventListener(
      "input",
      updateCurrent
    );
  
  
    fitButtons.forEach(
      btn => {
  
        btn.addEventListener(
          "click",
          () => {
  
            const id =
              currentId();
  
  
            state[id].fit =
              btn.dataset.fit;
  
  
            applyOne(
              getItem(id)
            );
  
  
            save();
  
  
            refreshControls();
          }
        );
  
      }
    );
  
  
    panel
      .querySelector(
        "#malakResetCurrent"
      )
      .addEventListener(
        "click",
        () => {
  
          const id =
            currentId();
  
  
          state[id] =
            clone(
              defaults[id]
            );
  
  
          const item =
            getItem(id);
  
  
          item.img.style
            .objectPosition = "";
  
  
          item.img.style
            .objectFit = "";
  
  
          item.img.style
            .transform = "";
  
  
          item.img.style
            .transformOrigin = "";
  
  
          save();
  
  
          refreshControls();
        }
      );
  
  
    panel
      .querySelector(
        "#malakResetAll"
      )
      .addEventListener(
        "click",
        () => {
  
          localStorage.removeItem(
            STORAGE_KEY
          );
  
  
          state =
            clone(defaults);
  
  
          items.forEach(
            item => {
  
              item.img.style
                .objectPosition = "";
  
  
              item.img.style
                .objectFit = "";
  
  
              item.img.style
                .transform = "";
  
  
              item.img.style
                .transformOrigin = "";
  
            }
          );
  
  
          refreshControls();
        }
      );
  
  
    panel
      .querySelector(
        "#malakCopyCSS"
      )
      .addEventListener(
        "click",
        async () => {
  
          const css =
            items.map(
              item => {
  
                const s =
                  state[item.id];
  
  
                return `
  
  /* ${item.label} */
  
  ${item.selector}{
  
    object-position:
      ${s.x}% ${s.y}%;
  
    object-fit:
      ${s.fit};
  
    transform:
      scale(${s.zoom});
  
    transform-origin:
      ${s.x}% ${s.y}%;
  
  }
  
  `;
  
              }
            ).join("\n");
  
  
          try {
  
            await navigator.clipboard
              .writeText(css);
  
  
            const button =
              panel.querySelector(
                "#malakCopyCSS"
              );
  
  
            button.textContent =
              "¡Ajustes copiados!";
  
  
            setTimeout(
              () => {
  
                button.textContent =
                  "Copiar ajustes";
  
              },
              1600
            );
  
          } catch {
  
            window.prompt(
              "Copia estos ajustes:",
              css
            );
  
          }
        }
      );
  
  
    toggle.addEventListener(
      "click",
      () => {
  
        panel.classList.toggle(
          "is-collapsed"
        );
  
  
        toggle.textContent =
          panel.classList.contains(
            "is-collapsed"
          )
            ? "+"
            : "−";
  
      }
    );
  
  
    applySaved();
  
    refreshControls();
  
  })();