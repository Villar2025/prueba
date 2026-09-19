(() => {
    "use strict";
  
    const $ = (id) => document.getElementById(id);
  
    const value = (id) => {
      const el = $(id);
      if (!el) return 0;
  
      const n = parseFloat(el.value);
      return Number.isFinite(n) ? n : 0;
    };
  
    const money = (n) => {
      if (!Number.isFinite(n)) return "$0";
  
      return "$" + n.toLocaleString("es-MX", {
        maximumFractionDigits: 0
      });
    };
  
    const money2 = (n) => {
      if (!Number.isFinite(n)) return "$0.00";
  
      return "$" + n.toLocaleString("es-MX", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    };
  
    const LINENS = [
      {
        id: "sabInf",
        name: "Sábana inferior",
        price: 245,
        qty: 1,
        life: 300,
        on: true
      },
      {
        id: "sabSup",
        name: "Sábana superior",
        price: 245,
        qty: 1,
        life: 300,
        on: true
      },
      {
        id: "funda",
        name: "Funda de almohada",
        price: 65,
        qty: 2,
        life: 300,
        on: true
      },
      {
        id: "toaB",
        name: "Toalla de baño",
        price: 155,
        qty: 2,
        life: 240,
        on: true
      },
      {
        id: "toaM",
        name: "Toalla de manos",
        price: 62,
        qty: 2,
        life: 240,
        on: true
      },
      {
        id: "toaF",
        name: "Toalla facial",
        price: 28,
        qty: 1,
        life: 240,
        on: false
      },
      {
        id: "tapete",
        name: "Tapete de baño",
        price: 95,
        qty: 1,
        life: 240,
        on: true
      }
    ];
  
    const DURABLES = [
      {
        id: "almoh",
        name: "Almohada",
        price: 190,
        qty: 2,
        months: 18,
        on: true
      },
      {
        id: "protA",
        name: "Protector de almohada",
        price: 75,
        qty: 2,
        months: 24,
        on: true
      },
      {
        id: "protC",
        name: "Protector de colchón",
        price: 390,
        qty: 1,
        months: 24,
        on: true
      },
      {
        id: "colcha",
        name: "Colcha o cubrecama",
        price: 750,
        qty: 1,
        months: 24,
        on: true
      },
      {
        id: "cobert",
        name: "Cobertor o edredón",
        price: 520,
        qty: 1,
        months: 36,
        on: true
      }
    ];
  
    const AMENITIES = [
      {
        id: "jabon",
        name: "Jabón de tocador",
        price: 3.5,
        qty: 2,
        freq: "noche",
        on: true
      },
      {
        id: "sham",
        name: "Shampoo",
        price: 4.5,
        qty: 1,
        freq: "noche",
        on: true
      },
      {
        id: "acond",
        name: "Acondicionador",
        price: 4.5,
        qty: 1,
        freq: "noche",
        on: false
      },
      {
        id: "gel",
        name: "Gel de baño",
        price: 4.5,
        qty: 1,
        freq: "noche",
        on: false
      },
      {
        id: "agua",
        name: "Agua embotellada",
        price: 6,
        qty: 2,
        freq: "noche",
        on: true
      },
      {
        id: "papel",
        name: "Papel higiénico",
        price: 9,
        qty: 1,
        freq: "noche",
        on: true
      },
      {
        id: "vasos",
        name: "Vasos y bolsas de basura",
        price: 3,
        qty: 1,
        freq: "noche",
        on: true
      },
      {
        id: "dental",
        name: "Kit dental",
        price: 7,
        qty: 2,
        freq: "salida",
        on: false
      },
      {
        id: "gorro",
        name: "Gorro de baño",
        price: 3,
        qty: 1,
        freq: "salida",
        on: false
      },
      {
        id: "cafe",
        name: "Café, té y azúcar",
        price: 5,
        qty: 2,
        freq: "noche",
        on: false
      }
    ];
  
    let laundryMode = "propia";
  
    function linenRow(item, duration = false) {
      return `
        <div class="linen-row${item.on ? "" : " off"}" id="row_${item.id}">
  
          <label>
            <input
              type="checkbox"
              id="${item.id}_on"
              ${item.on ? "checked" : ""}
            >
  
            <span>${item.name}</span>
          </label>
  
          <div class="linen-price">
            <input
              type="number"
              id="${item.id}_p"
              value="${item.price}"
              min="0"
              step="0.5"
            >
          </div>
  
          <input
            type="number"
            id="${item.id}_q"
            value="${item.qty}"
            min="0"
            step="1"
          >
  
          <input
            type="number"
            id="${item.id}_${duration ? "m" : "v"}"
            value="${duration ? item.months : item.life}"
            min="1"
            step="1"
          >
  
        </div>
      `;
    }
  
    function buildTables() {
      $("linenRows").innerHTML =
        LINENS.map((item) => linenRow(item, false)).join("");
  
      $("durableRows").innerHTML =
        DURABLES.map((item) => linenRow(item, true)).join("");
  
      $("amenitiesGrid").innerHTML =
        AMENITIES.map((item) => {
          return `
            <div
              class="amenity${item.on ? "" : " off"}"
              id="amen_${item.id}"
            >
  
              <label class="amenity-top">
                <input
                  type="checkbox"
                  id="amen_${item.id}_on"
                  ${item.on ? "checked" : ""}
                >
  
                <span>${item.name}</span>
              </label>
  
              <div class="amenity-controls">
  
                <div class="money-input">
                  <input
                    type="number"
                    id="amen_${item.id}_p"
                    value="${item.price}"
                    min="0"
                    step="0.5"
                  >
                </div>
  
                <input
                  type="number"
                  id="amen_${item.id}_q"
                  value="${item.qty}"
                  min="0"
                  step="1"
                >
  
                <select id="amen_${item.id}_f">
                  <option
                    value="noche"
                    ${item.freq === "noche" ? "selected" : ""}
                  >
                    Por noche
                  </option>
  
                  <option
                    value="salida"
                    ${item.freq === "salida" ? "selected" : ""}
                  >
                    Por salida
                  </option>
                </select>
  
              </div>
  
            </div>
          `;
        }).join("");
    }
  
    function setLife(life) {
      LINENS.forEach((item) => {
        const el = $(`${item.id}_v`);
  
        if (el) {
          el.value = life;
        }
      });
    }
  
    function calculate() {
      const rooms = Math.max(value("rooms"), 0);
  
      const occ =
        Math.min(
          Math.max(value("occ"), 1),
          100
        ) / 100;
  
      const los = Math.max(value("los"), 1);
      const days = Math.max(value("dias"), 1);
  
      const nightsPerRoom = days * occ;
  
      const nights =
        Math.max(
          rooms * nightsPerRoom,
          1
        );
  
      /* SERVICIOS */
  
      const electricity =
        value("luzMonto") /
        Math.max(value("luzPer"), 1) *
        value("luzPct") /
        100;
  
      const water =
        value("aguaMonto") /
        Math.max(value("aguaPer"), 1) *
        value("aguaPct") /
        100 +
        value("pipas");
  
      const gas =
        value("gasMonto") *
        value("gasPct") /
        100;
  
      const internet =
        value("netMonto");
  
      const services =
        electricity +
        water +
        gas +
        internet;
  
      /* ESTRUCTURA */
  
      const structure =
        (
          value("renta") +
          value("predial") / 12 +
          value("seguro") / 12 +
          value("manten") +
          value("admin")
        ) *
        value("estrPct") /
        100;
  
      /* PERSONAL */
  
      const payroll =
        (
          value("camNum") *
          value("camSueldo") +
  
          value("recNum") *
          value("recSueldo") +
  
          value("otrosN")
        ) *
        Math.max(value("factor"), 1);
  
      const fixedMonth =
        services +
        structure +
        payroll;
  
      const fixedNight =
        fixedMonth /
        nights;
  
      /* LAVANDERÍA */
  
      const roomType =
        $("tipoCama").value;
  
      let kgService =
        roomType === "custom"
          ? value("kgCustom")
          : parseFloat(roomType);
  
      if (!Number.isFinite(kgService)) {
        kgService = 4.5;
      }
  
      const freqValue =
        $("frec").value;
  
      const changeFactor =
        freqValue === "salida"
          ? 1 / los
          : parseFloat(freqValue);
  
      let kgPrice =
        value("precioKg");
  
      if (laundryMode === "mixta") {
        const externalShare =
          Math.min(
            Math.max(
              value("pctExterna"),
              0
            ),
            100
          ) / 100;
  
        kgPrice =
          value("precioKg") *
          (1 - externalShare) +
  
          value("precioKgExt") *
          externalShare;
      }
  
      let extraBlanketKg = 0;
  
      if ($("colchaOn").checked) {
        extraBlanketKg =
          value("colchaKg") /
          Math.max(
            value("colchaFrec"),
            1
          );
      }
  
      const kgNight =
        (
          kgService +
          extraBlanketKg
        ) *
        changeFactor;
  
      const laundry =
        kgNight *
        kgPrice;
  
      /* BLANCOS */
  
      const wasteFactor =
        1 +
        Math.min(
          Math.max(
            value("merma"),
            0
          ),
          60
        ) /
        100;
  
      let linenUse = 0;
      let linenValue = 0;
  
      LINENS.forEach((item) => {
        const on =
          $(`${item.id}_on`).checked;
  
        $(`row_${item.id}`)
          .classList
          .toggle(
            "off",
            !on
          );
  
        if (!on) return;
  
        const p =
          value(`${item.id}_p`);
  
        const q =
          value(`${item.id}_q`);
  
        const life =
          Math.max(
            value(`${item.id}_v`),
            1
          );
  
        linenUse +=
          p *
          q /
          life;
  
        linenValue +=
          p *
          q;
      });
  
      linenUse =
        linenUse *
        changeFactor *
        wasteFactor;
  
      let durableMonth = 0;
      let durableValue = 0;
  
      DURABLES.forEach((item) => {
        const on =
          $(`${item.id}_on`).checked;
  
        $(`row_${item.id}`)
          .classList
          .toggle(
            "off",
            !on
          );
  
        if (!on) return;
  
        const p =
          value(`${item.id}_p`);
  
        const q =
          value(`${item.id}_q`);
  
        const months =
          Math.max(
            value(`${item.id}_m`),
            1
          );
  
        durableMonth +=
          p *
          q /
          months;
  
        durableValue +=
          p *
          q;
      });
  
      durableMonth *=
        wasteFactor;
  
      const durableNight =
        durableMonth /
        Math.max(
          nightsPerRoom,
          0.01
        );
  
      const linenReplacement =
        linenUse +
        durableNight;
  
      /* AMENIDADES */
  
      let amenities = 0;
  
      AMENITIES.forEach((item) => {
        const on =
          $(`amen_${item.id}_on`).checked;
  
        $(`amen_${item.id}`)
          .classList
          .toggle(
            "off",
            !on
          );
  
        if (!on) return;
  
        const p =
          value(`amen_${item.id}_p`);
  
        const q =
          value(`amen_${item.id}_q`);
  
        const f =
          $(`amen_${item.id}_f`).value;
  
        if (f === "salida") {
          amenities +=
            p *
            q /
            los;
        } else {
          amenities +=
            p *
            q;
        }
      });
  
      const cleaning =
        value("quimicos");
  
      const variableNight =
        laundry +
        linenReplacement +
        amenities +
        cleaning;
  
      const total =
        fixedNight +
        variableNight;
  
      const monthCost =
        fixedMonth +
        variableNight *
        nights;
  
      /* RESULTADOS */
  
      $("resultTotal").textContent =
        money(total);
  
      $("resultFixed").textContent =
        money2(fixedNight);
  
      $("resultVariable").textContent =
        money2(variableNight);
  
      $("resultNights").textContent =
        Math.round(nights)
          .toLocaleString("es-MX");
  
      $("resultMonth").textContent =
        money(monthCost);
  
      $("boxNoches").innerHTML =
        `Con estos datos vendes aproximadamente ` +
        `<strong>${Math.round(nights).toLocaleString("es-MX")} noches al mes</strong>. ` +
        `Los gastos fijos se reparten entre esas noches.`;
  
      $("boxLav").innerHTML =
        `Cada noche vendida genera aproximadamente ` +
        `<strong>${kgNight.toFixed(2)} kg</strong> de ropa a lavar. ` +
        `Costo estimado de lavandería: ` +
        `<strong>${money2(laundry)}</strong> por habitación vendida.`;
  
      $("boxBlancos").innerHTML =
        `El valor capturado de las piezas que se lavan es ` +
        `<strong>${money(linenValue)}</strong> y el de las piezas que se reponen por tiempo es ` +
        `<strong>${money(durableValue)}</strong>. ` +
        `Reposición estimada: ` +
        `<strong>${money2(linenReplacement)}</strong> por noche vendida.`;
  
      /* DESGLOSE */
  
      const categories = [
        {
          name: "Servicios",
          value: services / nights
        },
        {
          name: "Estructura",
          value: structure / nights
        },
        {
          name: "Personal",
          value: payroll / nights
        },
        {
          name: "Lavandería",
          value: laundry
        },
        {
          name: "Blancos",
          value: linenReplacement
        },
        {
          name: "Amenidades",
          value: amenities
        },
        {
          name: "Limpieza",
          value: cleaning
        }
      ];
  
      const max =
        Math.max(
          ...categories.map(
            (category) =>
              category.value
          ),
          1
        );
  
      $("breakdown").innerHTML =
        categories
          .map((category) => {
            const pct =
              Math.max(
                (
                  category.value /
                  max
                ) *
                100,
                1
              );
  
            return `
              <div class="break-item">
  
                <div class="break-top">
                  <span>${category.name}</span>
                  <strong>${money2(category.value)}</strong>
                </div>
  
                <div class="break-bar">
                  <div
                    class="break-fill"
                    style="width:${pct}%"
                  ></div>
                </div>
  
              </div>
            `;
          })
          .join("");
  
      save();
    }
  
    function save() {
      try {
        const data = {
          laundryMode
        };
  
        document
          .querySelectorAll(
            "input, select"
          )
          .forEach((el) => {
            if (!el.id) return;
  
            data[el.id] =
              el.type === "checkbox"
                ? el.checked
                : el.value;
          });
  
        localStorage.setItem(
          "malak-cost-room-simple-v1",
          JSON.stringify(data)
        );
  
      } catch (_) {}
    }
  
    function load() {
      try {
        const raw =
          localStorage.getItem(
            "malak-cost-room-simple-v1"
          );
  
        if (!raw) return;
  
        const data =
          JSON.parse(raw);
  
        Object
          .entries(data)
          .forEach(([id, val]) => {
            if (
              id ===
              "laundryMode"
            ) return;
  
            const el =
              $(id);
  
            if (!el) return;
  
            if (
              el.type ===
              "checkbox"
            ) {
              el.checked =
                Boolean(val);
            } else {
              el.value =
                val;
            }
          });
  
        if (
          data.laundryMode
        ) {
          laundryMode =
            data.laundryMode;
        }
  
      } catch (_) {}
    }
  
    function syncConditionalUI() {
      document
        .querySelectorAll(
          "#segLav button"
        )
        .forEach((btn) => {
          btn.classList.toggle(
            "active",
            btn.dataset.mode ===
              laundryMode
          );
        });
  
      const mixed =
        laundryMode ===
        "mixta";
  
      $("fieldPctExterna").hidden =
        !mixed;
  
      $("fieldKgExterno").hidden =
        !mixed;
  
      $("fieldKgCustom").hidden =
        $("tipoCama").value !==
        "custom";
  
      const blanketOn =
        $("colchaOn").checked;
  
      $("colchaFields").hidden =
        !blanketOn;
    }
  
    function fillDemo() {
      const demo = {
        rooms: 14,
        occ: 48,
        los: 2,
        dias: 30,
  
        luzMonto: 14500,
        luzPer: 2,
        luzPct: 60,
  
        aguaMonto: 2600,
        aguaPer: 2,
        aguaPct: 70,
  
        pipas: 1200,
  
        gasMonto: 3800,
        gasPct: 85,
  
        netMonto: 1500,
  
        renta: 22000,
        predial: 7000,
        seguro: 11000,
        manten: 4500,
        admin: 3000,
        estrPct: 100,
  
        camNum: 2,
        camSueldo: 7200,
  
        recNum: 2,
        recSueldo: 8000,
  
        otrosN: 7000,
        factor: 1.35,
  
        precioKg: 12,
        tipoCama: 4.5,
        frec: 0.6,
        quimicos: 11,
  
        merma: 8
      };
  
      Object
        .entries(demo)
        .forEach(([id, val]) => {
          const el =
            $(id);
  
          if (el) {
            el.value =
              val;
          }
        });
  
      laundryMode =
        "propia";
  
      syncConditionalUI();
  
      calculate();
    }
  
    buildTables();
  
    load();
  
    syncConditionalUI();
  
    $("segLav")
      .addEventListener(
        "click",
        (event) => {
          const btn =
            event.target.closest(
              "button[data-mode]"
            );
  
          if (!btn) return;
  
          laundryMode =
            btn.dataset.mode;
  
          syncConditionalUI();
  
          calculate();
        }
      );
  
    $("segVida")
      .addEventListener(
        "click",
        (event) => {
          const btn =
            event.target.closest(
              "button[data-life]"
            );
  
          if (!btn) return;
  
          document
            .querySelectorAll(
              "#segVida button"
            )
            .forEach(
              (button) =>
                button.classList.remove(
                  "active"
                )
            );
  
          btn.classList.add(
            "active"
          );
  
          setLife(
            parseInt(
              btn.dataset.life,
              10
            )
          );
  
          calculate();
        }
      );
  
    $("tipoCama")
      .addEventListener(
        "change",
        () => {
          syncConditionalUI();
          calculate();
        }
      );
  
    $("colchaOn")
      .addEventListener(
        "change",
        () => {
          syncConditionalUI();
          calculate();
        }
      );
  
    $("btnDemo")
      .addEventListener(
        "click",
        fillDemo
      );
  
    $("btnReset")
      .addEventListener(
        "click",
        () => {
          if (
            !confirm(
              "¿Quieres borrar los datos guardados de esta calculadora?"
            )
          ) {
            return;
          }
  
          try {
            localStorage.removeItem(
              "malak-cost-room-simple-v1"
            );
          } catch (_) {}
  
          location.reload();
        }
      );
  
    document
      .addEventListener(
        "input",
        (event) => {
          if (
            event.target.matches(
              "input, select"
            )
          ) {
            calculate();
          }
        }
      );
  
    document
      .addEventListener(
        "change",
        (event) => {
          if (
            event.target.matches(
              "input, select"
            )
          ) {
            calculate();
          }
        }
      );
  
    /* MENÚ MÓVIL */
  
    const toggle =
      document.querySelector(
        ".menu-toggle"
      );
  
    const nav =
      $("mainNav");
  
    if (
      toggle &&
      nav
    ) {
      const close = () => {
        nav.classList.remove(
          "mobile-open"
        );
  
        toggle.setAttribute(
          "aria-expanded",
          "false"
        );
      };
  
      toggle.addEventListener(
        "click",
        () => {
          const open =
            nav.classList.toggle(
              "mobile-open"
            );
  
          toggle.setAttribute(
            "aria-expanded",
            open
              ? "true"
              : "false"
          );
        }
      );
  
      nav
        .querySelectorAll("a")
        .forEach((link) => {
          link.addEventListener(
            "click",
            close
          );
        });
  
      document.addEventListener(
        "keydown",
        (event) => {
          if (
            event.key ===
            "Escape"
          ) {
            close();
          }
        }
      );
  
      window.addEventListener(
        "resize",
        () => {
          if (
            window.innerWidth >
            900
          ) {
            close();
          }
        }
      );
    }
  
    calculate();
  
  })();