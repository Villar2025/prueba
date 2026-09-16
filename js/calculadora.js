document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MENÚ MÓVIL
    // ==========================

    const menuToggle = document.querySelector(".calculator-menu-toggle");
    const headerNav = document.querySelector(".calculator-header-nav");

    if (menuToggle && headerNav) {

        const closeMenu = () => {
            headerNav.classList.remove("mobile-open");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
        };

        menuToggle.addEventListener("click", () => {

            const isOpen =
                headerNav.classList.toggle("mobile-open");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
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
    // PRODUCTOS
    // ==========================

    const PRODUCTS = {

        hld: {
            name: "HLD",
            sizes: [
                {
                    label: "Caja 4 kg — $818.00",
                    price: 818.00,
                    qty: 4000
                },
                {
                    label: "Cubeta 16 kg — $3,042.50 (mejor precio)",
                    price: 3042.50,
                    qty: 16000,
                    best: true
                }
            ]
        },

        oxymax: {
            name: "OxyMax",
            sizes: [
                {
                    label: "Bote 900 g — $239.00",
                    price: 239.00,
                    qty: 900,
                    best: true
                }
            ]
        },

        swipe: {
            name: "Swipe",
            sizes: [
                {
                    label: "Envase 1 L — $191.00",
                    price: 191.00,
                    qty: 1000
                },
                {
                    label: "Bote 5 L — $813.00",
                    price: 813.00,
                    qty: 5000
                },
                {
                    label: "Porrón 20 L — $2,009.00 (mejor precio)",
                    price: 2009.00,
                    qty: 20000,
                    best: true
                }
            ]
        },

        soft: {
            name: "Soft",
            sizes: [
                {
                    label: "Envase 1 L — $187.00",
                    price: 187.00,
                    qty: 1000
                },
                {
                    label: "Envase 3.5 L — $561.00",
                    price: 561.00,
                    qty: 3500
                },
                {
                    label: "Porrón 20 L — $2,376.50 (mejor precio)",
                    price: 2376.50,
                    qty: 20000,
                    best: true
                }
            ]
        },

        somthinelse: {
            name: "Somthin’else",
            sizes: [
                {
                    label: "Envase 1 L — $235.00",
                    price: 235.00,
                    qty: 1000
                },
                {
                    label: "Envase 3.5 L — $703.00",
                    price: 703.00,
                    qty: 3500
                },
                {
                    label: "Porrón 20 L — $2,841.00 (mejor precio)",
                    price: 2841.00,
                    qty: 20000,
                    best: true
                }
            ]
        }

    };


    // ==========================
    // DOSIS Y PROCESOS
    // ==========================

    const RATES = {

        hldLavado: {
            name: "Lavado con HLD",
            product: "hld",
            dose: 2,
            mode: "kg",
            unitTxt: "kg lavado"
        },

        oxyLavado: {
            name: "Lavado con OxyMax",
            product: "oxymax",
            dose: 10,
            mode: "kg",
            unitTxt: "kg lavado"
        },

        hldRemojo: {
            name: "Prelavado en remojo (HLD)",
            product: "hld",
            dose: 2,
            mode: "kg",
            unitTxt: "kg en remojo"
        },

        oxyPrelavado: {
            name: "Prelavado localizado (OxyMax)",
            product: "oxymax",
            dose: 5,
            mode: "count",
            unitTxt: "mancha"
        },

        swipe: {
            name: "Desmanchado con Swipe",
            product: "swipe",
            dose: 0.46,
            mode: "count",
            unitTxt: "rociada",
            hint:
                "1 rociada = 3 disparos · solución normal 1:12"
        },

        softLavado: {
            name: "Suavizado con Soft (lavadora)",
            product: "soft",
            dose: 7.5,
            mode: "kg",
            unitTxt: "kg lavado",
            hint:
                "Estimado: 30 ml por carga de 4 kg"
        },

        softSpray: {
            name: "Soft en atomizador",
            product: "soft",
            dose: 0.46,
            mode: "count",
            unitTxt: "rociada",
            hint:
                "Estimado: misma solución normal de Swipe 1:12"
        },

        somthinLavado: {
            name: "Somthin’else (lavadora)",
            product: "somthinelse",
            dose: 7.5,
            mode: "kg",
            unitTxt: "kg lavado",
            hint:
                "Estimado: 30 ml por carga de 4 kg"
        },

        somthinSpray: {
            name: "Somthin’else en atomizador",
            product: "somthinelse",
            dose: 0.46,
            mode: "count",
            unitTxt: "rociada",
            hint:
                "Estimado: misma solución normal de Swipe 1:12"
        }

    };


    // ==========================
    // GRUPOS
    // ==========================

    const GROUPS = {

        lavado: [
            "hldLavado",
            "oxyLavado"
        ],

        prelavado: [
            "hldRemojo",
            "oxyPrelavado",
            "swipe"
        ],

        acabado: [
            "softLavado",
            "softSpray",
            "somthinLavado",
            "somthinSpray"
        ]

    };


    // ==========================
    // ESCENARIOS
    // ==========================

    const PRESETS = [

        {
            label: "Mantenimiento diario",
            on: [
                "hldLavado"
            ],
            counts: {}
        },

        {
            label: "Mancha grasa",
            on: [
                "hldLavado",
                "swipe"
            ],
            counts: {
                swipe: 1
            }
        },

        {
            label: "Cargas grandes",
            on: [
                "hldLavado",
                "hldRemojo"
            ],
            counts: {}
        },

        {
            label: "Mancha enzimática",
            on: [
                "hldLavado",
                "oxyPrelavado"
            ],
            counts: {
                oxyPrelavado: 1
            }
        },

        {
            label: "Mancha pegada / difícil",
            on: [
                "hldLavado",
                "hldRemojo",
                "oxyPrelavado"
            ],
            counts: {
                oxyPrelavado: 1
            }
        },

        {
            label: "Blanco perfecto",
            on: [
                "hldLavado",
                "oxyLavado",
                "hldRemojo"
            ],
            counts: {}
        },

        {
            label: "Rescate extremo",
            on: [
                "hldLavado",
                "oxyLavado",
                "hldRemojo",
                "oxyPrelavado",
                "swipe"
            ],
            counts: {
                oxyPrelavado: 1,
                swipe: 1
            }
        }

    ];


    // ==========================
    // PRESENTACIÓN POR DEFECTO
    // ==========================

    function defaultSizeIndex(productKey) {

        const sizes =
            PRODUCTS[productKey].sizes;

        const bestIndex =
            sizes.findIndex(
                (size) => size.best
            );

        return bestIndex >= 0
            ? bestIndex
            : 0;

    }


    // ==========================
    // ESTADO DE LA CALCULADORA
    // ==========================

    const state = {

        kg: 20,

        on: {
            hldLavado: true
        },

        counts: {
            oxyPrelavado: 1,
            swipe: 1,
            softSpray: 1,
            somthinSpray: 1
        },

        sizeIndex: {
            hld:
                defaultSizeIndex("hld"),

            oxymax:
                defaultSizeIndex("oxymax"),

            swipe:
                defaultSizeIndex("swipe"),

            soft:
                defaultSizeIndex("soft"),

            somthinelse:
                defaultSizeIndex("somthinelse")
        },

        activePreset: null

    };


    const checkSvg = `
        <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M3 8.5L6.2 11.5L13 4.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `;


    // ==========================
    // FORMATO DE DINERO
    // ==========================

    function fmt(value) {

        return "$" +
            value.toLocaleString(
                "es-MX",
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            );

    }


    function fmtKg(value) {

        const rounded =
            Math.round(
                value * 1000
            ) / 1000;

        return rounded.toLocaleString(
            "es-MX",
            {
                minimumFractionDigits: 0,
                maximumFractionDigits: 3
            }
        );

    }


    // ==========================
    // PRECIO POR UNIDAD
    // ==========================

    function unitPrice(productKey) {

        const size =
            PRODUCTS[productKey]
                .sizes[
                    state.sizeIndex[
                        productKey
                    ]
                ];

        return size.price /
            size.qty;

    }


    function rateFor(key) {

        const rate =
            RATES[key];

        return rate.dose *
            unitPrice(
                rate.product
            );

    }


    // ==========================
    // SUBTOTAL
    // ==========================

    function subtotal(key) {

        const rate =
            RATES[key];

        if (!state.on[key]) {
            return 0;
        }

        const unitRate =
            rateFor(key);

        if (
            rate.mode === "kg"
        ) {

            return unitRate *
                state.kg;

        }

        return unitRate *
            (
                state.counts[key] ||
                0
            );

    }


    // ==========================
    // CREAR FILAS DE PROCESO
    // ==========================

    function buildProcessRow(key) {

        const rate =
            RATES[key];

        const row =
            document.createElement(
                "div"
            );

        row.className =
            "process-row";

        row.dataset.key =
            key;


        const check =
            document.createElement(
                "div"
            );

        check.className =
            "process-check";

        check.innerHTML =
            checkSvg;


        const info =
            document.createElement(
                "div"
            );

        info.className =
            "process-info";

        info.innerHTML = `
            <div class="name">
                ${rate.name}
            </div>

            <div
                class="rate"
                id="rate-${key}"
            ></div>

            ${
                rate.hint
                    ? `
                        <div class="hint">
                            ${rate.hint}
                        </div>
                    `
                    : ""
            }
        `;


        row.appendChild(
            check
        );

        row.appendChild(
            info
        );


        // Procesos por cantidad
        if (
            rate.mode === "count"
        ) {

            const countWrap =
                document.createElement(
                    "div"
                );

            countWrap.className =
                "process-count";


            const minus =
                document.createElement(
                    "button"
                );

            minus.type =
                "button";

            minus.textContent =
                "−";


            const input =
                document.createElement(
                    "input"
                );

            input.type =
                "number";

            input.min =
                "0";

            input.value =
                state.counts[key] ||
                0;

            input.id =
                `count-${key}`;


            const plus =
                document.createElement(
                    "button"
                );

            plus.type =
                "button";

            plus.textContent =
                "+";


            countWrap.appendChild(
                minus
            );

            countWrap.appendChild(
                input
            );

            countWrap.appendChild(
                plus
            );


            row.appendChild(
                countWrap
            );


            minus.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();

                    bumpCount(
                        key,
                        -1
                    );

                }
            );


            plus.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();

                    bumpCount(
                        key,
                        1
                    );

                }
            );


            input.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();

                }
            );


            input.addEventListener(
                "input",
                () => {

                    const value =
                        parseInt(
                            input.value,
                            10
                        );


                    state.counts[key] =
                        Number.isNaN(value) ||
                        value < 0

                            ? 0
                            : value;


                    state.activePreset =
                        null;


                    render();

                }
            );

        }


        const sub =
            document.createElement(
                "div"
            );

        sub.className =
            "process-subtotal";


        row.appendChild(
            sub
        );


        row.addEventListener(
            "click",
            () => {

                state.on[key] =
                    !state.on[key];


                state.activePreset =
                    null;


                render();

            }
        );


        return row;

    }


    // ==========================
    // CONTADORES
    // ==========================

    function bumpCount(
        key,
        delta
    ) {

        state.counts[key] =
            Math.max(
                0,
                (
                    state.counts[key] ||
                    0
                ) + delta
            );


        if (
            !state.on[key] &&
            state.counts[key] > 0
        ) {

            state.on[key] =
                true;

        }


        state.activePreset =
            null;


        render();

    }


    // ==========================
    // TARJETAS DE PRESENTACIÓN
    // ==========================

    function buildSizeCard(
        productKey
    ) {

        const product =
            PRODUCTS[
                productKey
            ];


        const card =
            document.createElement(
                "div"
            );

        card.className =
            "size-card";


        const title =
            document.createElement(
                "div"
            );

        title.className =
            "pname";

        title.textContent =
            product.name;


        const select =
            document.createElement(
                "select"
            );

        select.id =
            `size-${productKey}`;


        product.sizes.forEach(
            (
                size,
                index
            ) => {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    index;

                option.textContent =
                    size.label;


                select.appendChild(
                    option
                );

            }
        );


        select.value =
            state.sizeIndex[
                productKey
            ];


        if (
            product.sizes.length <
            2
        ) {

            select.disabled =
                true;

        }


        select.addEventListener(
            "change",
            () => {

                state.sizeIndex[
                    productKey
                ] =
                    parseInt(
                        select.value,
                        10
                    );


                state.activePreset =
                    null;


                render();

            }
        );


        card.appendChild(
            title
        );

        card.appendChild(
            select
        );


        return card;

    }


    // ==========================
    // APLICAR ESCENARIO
    // ==========================

    function applyPreset(
        preset,
        index
    ) {

        const on =
            {};


        [
            ...GROUPS.lavado,
            ...GROUPS.prelavado,
            ...GROUPS.acabado

        ].forEach(
            (key) => {

                on[key] =
                    false;

            }
        );


        preset.on.forEach(
            (key) => {

                on[key] =
                    true;

            }
        );


        state.on =
            on;


        Object.keys(
            preset.counts
        ).forEach(
            (key) => {

                state.counts[key] =
                    preset.counts[key];

            }
        );


        state.activePreset =
            index;


        render();

    }


    // ==========================
    // INPUT DE KILOS
    // ==========================

    const kgInput =
        document.getElementById(
            "kgInput"
        );


    // ==========================
    // RENDERIZAR RESULTADOS
    // ==========================

    function render() {

        let total =
            0;


        Object.keys(
            RATES
        ).forEach(
            (key) => {

                const row =
                    document.querySelector(
                        `.process-row[data-key="${key}"]`
                    );


                if (!row) {
                    return;
                }


                const rate =
                    RATES[key];


                const unitRate =
                    rateFor(
                        key
                    );


                const value =
                    subtotal(
                        key
                    );


                total +=
                    value;


                row.classList.toggle(
                    "on",
                    Boolean(
                        state.on[key]
                    )
                );


                const subtotalEl =
                    row.querySelector(
                        ".process-subtotal"
                    );


                if (
                    subtotalEl
                ) {

                    subtotalEl.textContent =
                        fmt(
                            value
                        );

                }


                const rateEl =
                    document.getElementById(
                        `rate-${key}`
                    );


                if (
                    rateEl
                ) {

                    rateEl.textContent =
                        `${fmt(unitRate)} / ${rate.unitTxt}`;

                }


                const countInput =
                    document.getElementById(
                        `count-${key}`
                    );


                if (
                    countInput
                ) {

                    countInput.value =
                        state.counts[key] ||
                        0;

                }

            }
        );


        const totalValue =
            document.getElementById(
                "totalValue"
            );


        const perKgValue =
            document.getElementById(
                "perKgValue"
            );


        const kgEcho =
            document.getElementById(
                "kgEcho"
            );


        if (
            totalValue
        ) {

            totalValue.textContent =
                fmt(
                    total
                );

        }


        if (
            perKgValue
        ) {

            perKgValue.textContent =
                state.kg > 0

                    ? `${fmt(total / state.kg)} / kg`

                    : "—";

        }


        if (
            kgEcho
        ) {

            kgEcho.textContent =
                `${fmtKg(state.kg)} kg`;

        }


        if (
            kgInput &&
            document.activeElement !==
            kgInput
        ) {

            kgInput.value =
                fmtKg(
                    state.kg
                );

        }


        document
            .querySelectorAll(
                ".preset-card"
            )
            .forEach(
                (
                    button,
                    index
                ) => {

                    button.classList.toggle(
                        "active",
                        state.activePreset ===
                        index
                    );

                }
            );

    }


    // ==========================
    // CONSTRUIR PROCESOS
    // ==========================

    const lavadoContainer =
        document.getElementById(
            "rows-lavado"
        );


    const prelavadoContainer =
        document.getElementById(
            "rows-prelavado"
        );


    const acabadoContainer =
        document.getElementById(
            "rows-acabado"
        );


    GROUPS.lavado.forEach(
        (key) => {

            lavadoContainer
                ?.appendChild(
                    buildProcessRow(
                        key
                    )
                );

        }
    );


    GROUPS.prelavado.forEach(
        (key) => {

            prelavadoContainer
                ?.appendChild(
                    buildProcessRow(
                        key
                    )
                );

        }
    );


    GROUPS.acabado.forEach(
        (key) => {

            acabadoContainer
                ?.appendChild(
                    buildProcessRow(
                        key
                    )
                );

        }
    );


    // ==========================
    // CONSTRUIR PRESENTACIONES
    // ==========================

    const sizeGrid =
        document.getElementById(
            "sizeGrid"
        );


    Object.keys(
        PRODUCTS
    ).forEach(
        (productKey) => {

            sizeGrid
                ?.appendChild(
                    buildSizeCard(
                        productKey
                    )
                );

        }
    );


    // ==========================
    // CONSTRUIR ESCENARIOS
    // ==========================

    const presetRow =
        document.getElementById(
            "presetRow"
        );


    PRESETS.forEach(
        (
            preset,
            index
        ) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "preset-card";


            button.innerHTML = `
                <strong>
                    ${preset.label}
                </strong>

                <span aria-hidden="true">
                    →
                </span>
            `;


            button.addEventListener(
                "click",
                () => {

                    applyPreset(
                        preset,
                        index
                    );

                }
            );


            presetRow
                ?.appendChild(
                    button
                );

        }
    );


    // ==========================
    // CAMBIAR KILOS
    // ==========================

    function setKg(
        value
    ) {

        state.kg =
            Math.max(
                0,
                value
            );


        state.activePreset =
            null;


        render();

    }


    kgInput
        ?.addEventListener(
            "input",
            () => {

                const value =
                    parseFloat(
                        kgInput.value
                    );


                setKg(
                    Number.isNaN(
                        value
                    )

                        ? 0

                        : value
                );

            }
        );


    kgInput
        ?.addEventListener(
            "blur",
            () => {

                kgInput.value =
                    fmtKg(
                        state.kg
                    );

            }
        );


    function kgStep() {

        return state.kg < 1
            ? 0.05
            : 1;

    }


    document
        .getElementById(
            "kgMinus"
        )
        ?.addEventListener(
            "click",
            () => {

                const step =
                    kgStep();


                setKg(
                    Math.max(
                        0,

                        Math.round(
                            (
                                state.kg -
                                step
                            ) *
                            100

                        ) / 100
                    )
                );

            }
        );


    document
        .getElementById(
            "kgPlus"
        )
        ?.addEventListener(
            "click",
            () => {

                const step =
                    kgStep();


                setKg(
                    Math.round(
                        (
                            state.kg +
                            step
                        ) *
                        100

                    ) / 100
                );

            }
        );


    // ==========================
    // RESTABLECER CALCULADORA
    // ==========================

    document
        .getElementById(
            "resetCalculator"
        )
        ?.addEventListener(
            "click",
            () => {

                state.kg =
                    20;


                state.on = {
                    hldLavado: true
                };


                state.counts = {

                    oxyPrelavado: 1,

                    swipe: 1,

                    softSpray: 1,

                    somthinSpray: 1

                };


                state.sizeIndex = {

                    hld:
                        defaultSizeIndex(
                            "hld"
                        ),

                    oxymax:
                        defaultSizeIndex(
                            "oxymax"
                        ),

                    swipe:
                        defaultSizeIndex(
                            "swipe"
                        ),

                    soft:
                        defaultSizeIndex(
                            "soft"
                        ),

                    somthinelse:
                        defaultSizeIndex(
                            "somthinelse"
                        )

                };


                state.activePreset =
                    null;


                Object.keys(
                    PRODUCTS
                ).forEach(
                    (productKey) => {

                        const select =
                            document.getElementById(
                                `size-${productKey}`
                            );


                        if (
                            select
                        ) {

                            select.value =
                                state.sizeIndex[
                                    productKey
                                ];

                        }

                    }
                );


                render();

            }
        );


    // ==========================
    // PRIMER CÁLCULO
    // ==========================

    render();

});