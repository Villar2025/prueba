(function() {
  "use strict";

  var ROT = [
  {
      id: 'sabInf',
      n: 'Sábana inferior',
      p: 368,
      q: 1,
      v: 300,
      on: true
  },
  {
      id: 'sabSup',
      n: 'Sábana superior o encimera',
      p: 368,
      q: 1,
      v: 300,
      on: true
  },
  {
      id: 'funda',
      n: 'Funda de almohada',
      p: 98,
      q: 2,
      v: 300,
      on: true
  },
  {
      id: 'toaB',
      n: 'Toalla de baño',
      p: 233,
      q: 2,
      v: 240,
      on: true
  },
  {
      id: 'toaM',
      n: 'Toalla de manos',
      p: 93,
      q: 2,
      v: 240,
      on: true
  },
  {
      id: 'toaF',
      n: 'Toalla facial',
      p: 42,
      q: 1,
      v: 240,
      on: false
  },
  {
      id: 'tapete',
      n: 'Tapete de baño',
      p: 143,
      q: 1,
      v: 240,
      on: true
  }
  ];
  var DUR = [
  {
      id: 'almoh',
      n: 'Almohada',
      p: 285,
      q: 2,
      v: 18,
      on: true,
      h: 'Dóblala a la mitad y suéltala: si no recupera la forma, ya se cambia. 12 a 24 meses.'
  },
  {
      id: 'protA',
      n: 'Protector de almohada',
      p: 113,
      q: 2,
      v: 24,
      on: true,
      h: 'Se retira cuando deja de ser impermeable o queda manchado. 18 a 24 meses.'
  },
  {
      id: 'protC',
      n: 'Protector de colchón',
      p: 585,
      q: 1,
      v: 24,
      on: true,
      h: 'Revísalo cada 6 meses: si el agua ya no escurre, perdió la barrera. 18 a 24 meses.'
  },
  {
      id: 'colcha',
      n: 'Colcha o cubrecama',
      p: 1125,
      q: 1,
      v: 24,
      on: true,
      h: 'Cámbiala cuando se adelgaza en los dobleces o el blanco ya no empareja. 18 a 36 meses.'
  },
  {
      id: 'cobert',
      n: 'Cobertor o edredón',
      p: 780,
      q: 1,
      v: 36,
      on: true,
      h: 'Se apelmaza y deja de dar calor parejo. 24 a 48 meses.'
  },
  {
      id: 'colchon',
      n: 'Colchón',
      p: 9750,
      q: 1,
      v: 84,
      on: false,
      h: 'Se marca el hueco del cuerpo o se siente el resorte. 5 a 8 años.'
  }
  ];
  var AMEN = [
  {
      id: 'jabon',
      n: 'Jabón de tocador',
      p: 3.5,
      q: 2,
      f: 'noche',
      on: true
  },
  {
      id: 'sham',
      n: 'Shampoo',
      p: 4.5,
      q: 1,
      f: 'noche',
      on: true
  },
  {
      id: 'acond',
      n: 'Acondicionador',
      p: 4.5,
      q: 1,
      f: 'noche',
      on: false
  },
  {
      id: 'gel',
      n: 'Gel de baño',
      p: 4.5,
      q: 1,
      f: 'noche',
      on: false
  },
  {
      id: 'crema',
      n: 'Crema corporal',
      p: 6,
      q: 1,
      f: 'noche',
      on: false
  },
  {
      id: 'dental',
      n: 'Kit dental',
      p: 7,
      q: 2,
      f: 'salida',
      on: false
  },
  {
      id: 'gorro',
      n: 'Gorro de baño',
      p: 3,
      q: 1,
      f: 'salida',
      on: false
  },
  {
      id: 'rasur',
      n: 'Kit de rasurar',
      p: 6,
      q: 1,
      f: 'salida',
      on: false
  },
  {
      id: 'costu',
      n: 'Costurero',
      p: 4,
      q: 1,
      f: 'salida',
      on: false
  },
  {
      id: 'pantu',
      n: 'Pantuflas',
      p: 22,
      q: 2,
      f: 'salida',
      on: false
  },
  {
      id: 'cafe',
      n: 'Café, té y azúcar en sobre',
      p: 5,
      q: 2,
      f: 'noche',
      on: false
  },
  {
      id: 'caps',
      n: 'Cápsulas para cafetera',
      p: 9,
      q: 2,
      f: 'noche',
      on: false
  },
  {
      id: 'agua',
      n: 'Agua embotellada',
      p: 6,
      q: 2,
      f: 'noche',
      on: true
  },
  {
      id: 'papel',
      n: 'Papel higiénico',
      p: 9,
      q: 1,
      f: 'noche',
      on: true
  },
  {
      id: 'panue',
      n: 'Caja de pañuelos',
      p: 14,
      q: 1,
      f: 'salida',
      on: false
  },
  {
      id: 'vasos',
      n: 'Vasos y bolsas de basura',
      p: 3,
      q: 1,
      f: 'noche',
      on: true
  },
  {
      id: 'detal',
      n: 'Detalle de bienvenida',
      p: 12,
      q: 1,
      f: 'salida',
      on: false
  },
  {
      id: 'bata',
      n: 'Bata de baño',
      p: 14,
      q: 1,
      f: 'salida',
      on: false
  }
  ];

  var SIZES = [
  {
      k: 'ind',
      n: 'Individual'
  },
  {
      k: 'mat',
      n: 'Matrimonial'
  },
  {
      k: 'qn',
      n: 'Queen'
  },
  {
      k: 'kng',
      n: 'King'
  }
  ];
  var KGCAMA = {
      ind: 1.9,
      mat: 3.0,
      qn: 3.5,
      kng: 4.0
  }; /* kg de ropa por cama */
  var KGBANO = 1.5; /* toallas y tapete por habitación */
  var SIZEDEF = {
      ind: {
          pf: 0.85,
          q: {
              funda: 1,
              almoh: 1,
              protA: 1
          }
      },
      mat: {
          pf: 1.00,
          q: {}
      },
      qn: {
          pf: 1.15,
          q: {}
      },
      kng: {
          pf: 1.32,
          q: {
              funda: 4,
              almoh: 4,
              protA: 4
          }
      }
  };
  var CUIDADO = {
      '120': '<b>Cuidado básico.</b> Lavado por carga completa sin separar ropa de cama y felpa, detergente dosificado a criterio, blanqueo con cloro y secado prolongado. Las manchas se atienden hasta el momento del lavado. El cloro oxida la fibra de algodón en cada ciclo y el sobresecado la vuelve quebradiza: la pieza amarillea, pierde resistencia y se retira mucho antes de lo que debería.',
      '250': '<b>Estándar.</b> Detergente dosificado según el peso real de la carga, blanqueador a base de oxígeno activo en lugar de cloro, lavado a 60 °C, separación entre ropa de cama y felpa. La rotación ordenada del inventario reparte el desgaste entre todas las piezas en vez de concentrarlo en las mismas.',
      '300': '<b>Protocolo MALAK.</b> Todo lo anterior utilizando productos Swipe recomendados por MALAK, dosificados por kilo de ropa, prelavados y tratamiento puntual de manchas conforme al procedimiento recomendado, secado a temperatura controlada sin sobresecar y rotación de tres juegos por habitación marcados con fecha de ingreso.'
  };
  var prof = 'mat';
  var store = {};

  var $ = function(s) {
      return document.querySelector(s);
  };
  var v = function(id) {
      var e = document.getElementById(id);
      if (!e)
          return 0;
      var x = parseFloat(e.value);
      return isNaN(x) ? 0 : x;
  };
  var money = function(x) {
      if (!isFinite(x))
          return '—';
      return '$' + x.toLocaleString('es-MX', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
      });
  };
  var money2 = function(x) {
      if (!isFinite(x))
          return '—';
      return '$' + x.toLocaleString('es-MX', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
      });
  };

  /* ---- construir tablas ---- */
  function buildLinen(list, host, unit) {
      var h = document.getElementById(host);
      list.forEach(function(it) {
          var r = document.createElement('div');
          r.className = 'trow' + (it.on ? '' : ' off');
          r.id = 'row_' + it.id;
          r.innerHTML =
          '<label class="chk"><input type="checkbox" id="' + it.id + '_on"' + (it.on ? ' checked' : '') + '>' +
          '<span>' + it.n + (it.h ? '<span class="note">' + it.h + '</span>' : '') + '</span></label>' +
          '<span class="t2 money"><input type="number" id="' + it.id + '_p" value="' + it.p + '" min="0" inputmode="decimal"></span>' +
          '<span class="t3"><input type="number" id="' + it.id + '_q" value="' + it.q + '" min="0" inputmode="numeric"></span>' +
          '<span class="t4"><input type="number" id="' + it.id + '_v" value="' + it.v + '" min="1" inputmode="numeric" data-unit="' + unit + '"></span>';
          h.appendChild(r);
      });
  }
  function buildAmen() {
      var h = document.getElementById('tblAmen');
      AMEN.forEach(function(it) {
          var r = document.createElement('div');
          r.className = 'trow' + (it.on ? '' : ' off');
          r.id = 'row_' + it.id;
          r.innerHTML =
          '<label class="chk"><input type="checkbox" id="' + it.id + '_on"' + (it.on ? ' checked' : '') + '><span>' + it.n + '</span></label>' +
          '<span class="t2 money"><input type="number" id="' + it.id + '_p" value="' + it.p + '" min="0" step="0.5" inputmode="decimal"></span>' +
          '<span class="t3"><input type="number" id="' + it.id + '_q" value="' + it.q + '" min="0" inputmode="numeric"></span>' +
          '<span class="t4"><select id="' + it.id + '_f"><option value="noche"' + (it.f === 'noche' ? ' selected' : '') + '>Noche</option><option value="salida"' + (it.f === 'salida' ? ' selected' : '') + '>Salida</option></select></span>';
          h.appendChild(r);
      });
  }
  var BEDIDS = ['sabInf', 'sabSup', 'funda', 'almoh', 'protA', 'protC', 'colcha', 'cobert', 'colchon'];
  function esCama(id) {
      return BEDIDS.indexOf(id) >= 0;
  }
  var ROTCAMA = ROT.filter(function(it) {
      return esCama(it.id);
  });
  var BANO = ROT.filter(function(it) {
      return !esCama(it.id);
  });
  var CAMAALL = ROTCAMA.concat(DUR);

  function defaultsFor(k) {
      var o = {};
      CAMAALL.forEach(function(it) {
          var q = (SIZEDEF[k].q[it.id] != null) ? SIZEDEF[k].q[it.id] : it.q;
          o[it.id] = {
              p: Math.round(it.p * SIZEDEF[k].pf),
              q: q,
              v: it.v,
              on: it.on
          };
      });
      return o;
  }
  SIZES.forEach(function(x) {
      store[x.k] = defaultsFor(x.k);
  });

  buildLinen(ROTCAMA, 'tblRot', 'lavadas');
  buildLinen(DUR, 'tblDur', 'meses');
  buildLinen(BANO, 'tblBano', 'lavadas');
  buildAmen();
  storeToDom(prof);

  function domToStore(k) {
      var o = store[k];
      if (!o)
          return;
      CAMAALL.forEach(function(it) {
          var ep = document.getElementById(it.id + '_p');
          if (!ep)
              return;
          o[it.id] = {
              p: parseFloat(ep.value) || 0,
              q: parseFloat(document.getElementById(it.id + '_q').value) || 0,
              v: Math.max(parseFloat(document.getElementById(it.id + '_v').value) || 1, 1),
              on: document.getElementById(it.id + '_on').checked
          };
      });
  }
  function storeToDom(k) {
      var o = store[k];
      if (!o)
          return;
      CAMAALL.forEach(function(it) {
          var d = o[it.id],
              ep = document.getElementById(it.id + '_p');
          if (!d || !ep)
              return;
          ep.value = d.p;
          document.getElementById(it.id + '_q').value = d.q;
          document.getElementById(it.id + '_v').value = d.v;
          document.getElementById(it.id + '_on').checked = d.on;
      });
  }
  function mixActivo() {
      return document.getElementById('mixOn').checked;
  }

  /* ---- tipos de habitación (combinaciones de camas) ---- */
  var tipos = [{
      n: 'Estándar',
      beds: {
          ind: 0,
          mat: 1,
          qn: 0,
          kng: 0
      },
      rooms: 10
  }];
  function pintaTipos() {
      document.getElementById('rtList').innerHTML = tipos.map(function(t, i) {
          return '<div class="rtCard" data-i="' + i + '">' +
          '<div class="rtTop"><input type="text" class="rtName" value="' + String(t.n).replace(/"/g, '&quot;') + '" placeholder="Nombre del tipo">' +
          (tipos.length > 1 ? '<button type="button" class="rtDel" aria-label="Eliminar tipo">&times;</button>' : '') + '</div>' +
          '<div class="rtBeds">' + SIZES.map(function(x) {
              return '<label>' + x.n + '<input type="number" class="rtBed" data-k="' + x.k + '" value="' + (t.beds[x.k] || 0) + '" min="0" inputmode="numeric"></label>';
          }).join('') + '</div>' +
          '<div class="rtFoot"><span>Habitaciones así</span><input type="number" class="rtN" value="' + t.rooms + '" min="0" inputmode="numeric"></div>' +
          '</div>';
      }).join('');
  }
  function leeTipos() {
      var cards = document.querySelectorAll('#rtList .rtCard');
      Array.prototype.forEach.call(cards, function(c) {
          var i = parseInt(c.dataset.i, 10);
          if (!tipos[i])
              return;
          tipos[i].n = c.querySelector('.rtName').value;
          tipos[i].rooms = parseFloat(c.querySelector('.rtN').value) || 0;
          Array.prototype.forEach.call(c.querySelectorAll('.rtBed'), function(e) {
              tipos[i].beds[e.dataset.k] = parseFloat(e.value) || 0;
          });
      });
  }
  function reparto() {
      if (!mixActivo()) {
          var b = {
              ind: 0,
              mat: 0,
              qn: 0,
              kng: 0
          };
          b[prof] = 1;
          return [{
              beds: b,
              n: 1,
              w: 1
          }];
      }
      leeTipos();
      var t = 0,
          lista = [];
      tipos.forEach(function(x) {
          var camas = 0;
          SIZES.forEach(function(sz) {
              camas += (x.beds[sz.k] || 0);
          });
          if (x.rooms > 0 && camas > 0) {
              lista.push({
                  beds: x.beds,
                  n: x.rooms
              });
              t += x.rooms;
          }
      });
      if (!lista.length) {
          var b2 = {
              ind: 0,
              mat: 0,
              qn: 0,
              kng: 0
          };
          b2[prof] = 1;
          return [{
              beds: b2,
              n: 1,
              w: 1
          }];
      }
      return lista.map(function(i) {
          return {
              beds: i.beds,
              n: i.n,
              w: i.n / t,
              mix: true
          };
      });
  }
  document.getElementById('btnAddRT').addEventListener('click', function() {
      leeTipos();
      tipos.push({
          n: 'Habitación ' + (tipos.length + 1),
          beds: {
              ind: 0,
              mat: 1,
              qn: 0,
              kng: 0
          },
          rooms: 0
      });
      pintaTipos();
      calc();
      save();
  });
  document.getElementById('rtList').addEventListener('click', function(e) {
      var b = e.target.closest('.rtDel');
      if (!b)
          return;
      leeTipos();
      tipos.splice(parseInt(b.closest('.rtCard').dataset.i, 10), 1);
      pintaTipos();
      calc();
      save();
  });

  /* ---- estado de segmentos ---- */
  var modoLav = 'propia';
  function segInit(sel, cb) {
      var box = document.getElementById(sel);
      box.addEventListener('click', function(e) {
          var b = e.target.closest('button');
          if (!b)
              return;
          Array.prototype.forEach.call(box.querySelectorAll('button'), function(x) {
              x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
          });
          cb(b.dataset.v);
          calc();
          save();
      });
  }
  segInit('segLav', function(val) {
      modoLav = val;
      document.getElementById('rowMix').style.display = (val === 'mixta') ? 'flex' : 'none';
      document.getElementById('rowKgExt').style.display = (val === 'mixta') ? 'flex' : 'none';
      var kg = document.getElementById('precioKg');
      var note = document.getElementById('noteKg');
      if (val === 'externa') {
          kg.value = 27;
          note.textContent = 'Las lavanderías externas en México cobran entre $25 y $30 por kilo de ropa de hotel.';
      } else {
          kg.value = 12;
          note.textContent = 'Con lavandería propia siguiendo los protocolos recomendados por MALAK y productos Swipe, el costo promedio ronda los $12 por kilo, ya con agua, luz, químicos y mano de obra.';
      }
  });
  segInit('segVida', function(val) {
      ROT.forEach(function(it) {
          var base = (it.id.indexOf('toa') === 0 || it.id === 'tapete') ? 0.8 : 1;
          var vida = Math.round(parseFloat(val) * base);
          document.getElementById(it.id + '_v').value = vida;
          SIZES.forEach(function(x) {
              if (store[x.k][it.id])
                  store[x.k][it.id].v = vida;
          });
      });
      pintaCuidado(val);
  });
  function pintaCuidado(val) {
      document.getElementById('boxCuidado').innerHTML = CUIDADO[String(val)] || '';
  }
  function vidaActiva() {
      var b = document.querySelector('#segVida button[aria-pressed=true]');
      return b ? b.dataset.v : '300';
  }

  /* ---- tamaño de cama que se está editando ---- */
  segInit('segSize', function(val) {
      domToStore(prof);
      prof = val;
      storeToDom(prof);
  });
  document.getElementById('mixOn').addEventListener('change', function() {
      document.getElementById('mixBox').style.display = this.checked ? 'block' : 'none';
      if (this.checked && tipos.length === 1 && !tipos[0].tocado) {
          tipos[0].rooms = Math.max(v('rooms'), 0) || tipos[0].rooms;
          tipos[0].tocado = true;
          pintaTipos();
      }
  });

  /* ---- mostrar campos condicionales ---- */
  document.getElementById('tipoCama').addEventListener('change', function() {
      document.getElementById('rowKg').style.display = (this.value === 'custom') ? 'flex' : 'none';
  });

  /* ---- competencia de la zona ---- */
  var comps = [
  {
      n: 'Hotel vecino 1',
      t: 0
  },
  {
      n: 'Hotel vecino 2',
      t: 0
  },
  {
      n: 'Alojamiento en plataforma',
      t: 0
  }
  ];
  function pintaComps() {
      document.getElementById('compList').innerHTML = comps.map(function(c, i) {
          return '<div class="cmpRow" data-i="' + i + '">' +
          '<input type="text" class="cmpName" value="' + String(c.n).replace(/"/g, '&quot;') + '" placeholder="Nombre">' +
          '<span class="money"><input type="number" class="cmpT" value="' + c.t + '" min="0" inputmode="decimal"></span>' +
          (comps.length > 1 ? '<button type="button" class="cmpDel" aria-label="Quitar">&times;</button>' : '') +
          '</div>';
      }).join('');
  }
  function leeComps() {
      Array.prototype.forEach.call(document.querySelectorAll('#compList .cmpRow'), function(r) {
          var i = parseInt(r.dataset.i, 10);
          if (!comps[i])
              return;
          comps[i].n = r.querySelector('.cmpName').value;
          comps[i].t = parseFloat(r.querySelector('.cmpT').value) || 0;
      });
  }
  document.getElementById('btnAddComp').addEventListener('click', function() {
      leeComps();
      comps.push({
          n: 'Alojamiento ' + (comps.length + 1),
          t: 0
      });
      pintaComps();
      calc();
      save();
  });
  document.getElementById('compList').addEventListener('click', function(e) {
      var b = e.target.closest('.cmpDel');
      if (!b)
          return;
      leeComps();
      comps.splice(parseInt(b.closest('.cmpRow').dataset.i, 10), 1);
      pintaComps();
      calc();
      save();
  });

  /* ---- cálculo ---- */
  function calc() {
      var rooms = Math.max(v('rooms'), 0);
      var occ = Math.min(Math.max(v('occ'), 1), 100) / 100;
      var los = Math.max(v('los'), 1);
      var dias = Math.max(v('dias'), 1);

      var nochesRoom = dias * occ; // noches vendidas por habitación al mes
      var noches = rooms * nochesRoom; // noches vendidas del hotel al mes
      if (noches <= 0)
          noches = 1;

      /* --- fijos mensuales --- */
      var luz = v('luzMonto') / Math.max(v('luzPer') || 1, 1) * v('luzPct') / 100;
      var agua = v('aguaMonto') / Math.max(v('aguaPer') || 1, 1) * v('aguaPct') / 100 + v('pipas');
      var gas = v('gasMonto') * v('gasPct') / 100;
      var net = v('netMonto');
      var servicios = luz + agua + gas + net;

      var estr = (v('renta') + v('predial') / 12 + v('seguro') / 12 + v('manten') + v('admin')) * v('estrPct') / 100;

      var nomina = (v('camNum') * v('camSueldo') + v('recNum') * v('recSueldo') + v('otrosN'))
      * Math.max(v('factor'), 1) * v('nomPct') / 100;

      var fijoMes = servicios + estr + nomina;
      var fijoNoche = fijoMes / noches;

      /* --- variables por noche --- */
      var P = reparto();
      var mezcla = !!P[0].mix;
      function kgDe(beds) {
          var t = KGBANO;
          SIZES.forEach(function(x) {
              t += (beds[x.k] || 0) * KGCAMA[x.k];
          });
          return t;
      }
      var tipo = document.getElementById('tipoCama').value;
      var kg = (tipo === 'custom') ? v('kgCustom') : parseFloat(tipo);
      if (isNaN(kg))
          kg = 4.5;
      document.getElementById('rowTipo').style.display = mezcla ? 'none' : 'flex';
      document.getElementById('rowKgMix').style.display = mezcla ? 'flex' : 'none';
      if (mezcla) {
          kg = P.reduce(function(a, i) {
              return a + i.w * kgDe(i.beds);
          }, 0);
          document.getElementById('kgMixVal').textContent = kg.toFixed(2) + ' kg';
      }
      var frecSel = document.getElementById('frec').value;
      var fCambio = (frecSel === 'los') ? (1 / los) : parseFloat(frecSel);

      var pKg;
      if (modoLav === 'mixta') {
          var pe = v('pctExterna') / 100;
          pKg = v('precioKg') * (1 - pe) + v('precioKgExt') * pe;
      } else {
          pKg = v('precioKg');
      }
      var kgColcha = 0;
      var colchaOn = document.getElementById('colchaOn').checked;
      document.getElementById('rowColcha').style.display = colchaOn ? 'flex' : 'none';
      document.getElementById('rowColchaF').style.display = colchaOn ? 'flex' : 'none';
      if (colchaOn) {
          kgColcha = v('colchaKg') / Math.max(v('colchaFrec'), 1);
      }
      var kgNoche = kg * fCambio + kgColcha * fCambio;
      var lavado = kgNoche * pKg;

      domToStore(prof);
      ROT.concat(DUR).forEach(function(it) {
          var e = document.getElementById(it.id + '_on'),
              r = document.getElementById('row_' + it.id);
          if (e && r)
              r.className = 'trow' + (e.checked ? '' : ' off');
      });
      var mermaF = 1 + Math.min(Math.max(v('merma'), 0), 60) / 100;

      /* ropa de baño: igual en toda habitación */
      var banoRot = 0,
          banoVal = 0;
      BANO.forEach(function(it) {
          if (!document.getElementById(it.id + '_on').checked)
              return;
          var pp = v(it.id + '_p'),
              qq = v(it.id + '_q'),
              vv = Math.max(v(it.id + '_v'), 1);
          banoRot += pp * qq / vv;
          banoVal += pp * qq;
      });

      /* ropa de cama: por tamaño y por número de camas de cada habitación */
      var amortRot = 0,
          valorRot = 0,
          amortTexMes = 0,
          colchonMes = 0,
          valorDur = 0;
      P.forEach(function(pr) {
          var rot = 0,
              val = 0,
              tex = 0,
              col = 0,
              vdur = 0;
          SIZES.forEach(function(x) {
              var camas = pr.beds[x.k] || 0;
              if (!camas)
                  return;
              var o = store[x.k];
              if (!o)
                  return;
              ROTCAMA.forEach(function(it) {
                  var d = o[it.id];
                  if (!d || !d.on)
                      return;
                  rot += camas * (d.p * d.q / Math.max(d.v, 1));
                  val += camas * d.p * d.q;
              });
              DUR.forEach(function(it) {
                  var d = o[it.id];
                  if (!d || !d.on)
                      return;
                  var m = camas * (d.p * d.q / Math.max(d.v, 1));
                  if (it.id === 'colchon') {
                      col += m;
                  }
                  else {
                      tex += m;
                      vdur += camas * d.p * d.q;
                  }
              });
          });
          amortRot += pr.w * (rot + banoRot);
          valorRot += pr.w * (val + banoVal);
          amortTexMes += pr.w * tex;
          colchonMes += pr.w * col;
          valorDur += pr.w * vdur;
      });
      amortRot = amortRot * fCambio * mermaF;
      amortTexMes = amortTexMes * mermaF;
      var amortDurMes = amortTexMes + colchonMes;
      var amortDur = amortDurMes / Math.max(nochesRoom, 0.01);
      var amort = amortRot + amortDur;
      var amortTextil = amortRot + amortTexMes / Math.max(nochesRoom, 0.01);

      var nomSize = (SIZES.filter(function(x) {
          return x.k === prof;
      })[0] || {
          n: ''
      }).n;
      document.getElementById('hintSize').innerHTML = mixActivo()
      ? 'Estás capturando los precios de la cama <b>' + nomSize + '</b>. Cambia de pestaña para capturar los otros tamaños; cada habitación toma los que le corresponden.'
      : 'Selecciona el tamaño de cama de tus habitaciones y captura sus precios.';
      if (mezcla) {
          var suma = P.reduce(function(a, i) {
              return a + i.n;
          }, 0);
          document.getElementById('mixWarn').innerHTML = (Math.abs(suma - rooms) > 0.5)
          ? 'Sumaste ' + suma + ' habitaciones y en el paso 1 pusiste ' + rooms + '. Empátalas para que el cálculo salga bien.'
          : 'Van ' + suma + ' habitaciones, igual que en el paso 1.';
      } else if (mixActivo()) {
          document.getElementById('mixWarn').innerHTML = 'Agrega al menos un tipo con camas y habitaciones para que se use la mezcla.';
      }

      var amen = 0;
      AMEN.forEach(function(it) {
          var on = document.getElementById(it.id + '_on').checked;
          document.getElementById('row_' + it.id).className = 'trow' + (on ? '' : ' off');
          if (!on)
              return;
          var p = v(it.id + '_p'),
              q = v(it.id + '_q');
          var f = document.getElementById(it.id + '_f').value;
          amen += (f === 'salida') ? (p * q / los) : (p * q);
      });

      var quim = v('quimicos');
      var varNoche = lavado + amort + amen + quim;

      var total = fijoNoche + varNoche;

      /* --- tarifas --- */
      var comEf = (v('pctOta') / 100) * (v('comOta') / 100) + v('comTdc') / 100;
      if (comEf > 0.9)
          comEf = 0.9;
      var margen = Math.min(v('margen'), 80) / 100;
      var imp = 1 + v('impuestos') / 100;

      var tMin = total / (1 - comEf) * imp;
      var denRec = 1 - comEf - margen;
      var tRec = denRec > 0.05 ? (total / denRec * imp) : NaN;

      /* --- explicaciones de cada resultado --- */
      var pctQueda = (1 - comEf) * 100;
      EXPL.costo =
      '<h4>Costo por noche vendida</h4>' +
      'Son dos cosas sumadas: lo que pagas aunque el cuarto esté vacío, repartido entre las noches que sí vendes, más lo que gastas cada vez que alguien duerme ahí.' +
      '<div class="paso"><b>1. Costos fijos del mes.</b> Servicios ' + money(servicios) + ' + estructura ' + money(estr) + ' + personal ' + money(nomina) + ' = <b>' + money(fijoMes) + '</b>, repartidos entre ' + Math.round(noches) + ' noches vendidas.</div>' +
      '<span class="fx">' + money(fijoMes) + ' ÷ ' + Math.round(noches) + ' noches = <b>' + money2(fijoNoche) + '</b> por noche</span>' +
      '<div class="paso"><b>2. Gastos de cada noche ocupada.</b> Lavado ' + money2(lavado) + ' + reposición de blancos ' + money2(amort) + ' + amenidades ' + money2(amen) + ' + limpieza ' + money2(quim) + '.</div>' +
      '<span class="fx">= <b>' + money2(varNoche) + '</b> por noche</span>' +
      '<span class="fx">' + money2(fijoNoche) + ' + ' + money2(varNoche) + ' = <b>' + money2(total) + '</b></span>';

      EXPL.tmin =
      '<h4>Tarifa mínima para no perder</h4>' +
      'Tu costo no es lo que debes cobrar, porque de cada peso que entra se va un pedazo antes de llegar a tu cuenta. ' +
      'Con ' + v('comOta').toFixed(0) + '% de comisión de agencias sobre el ' + v('pctOta').toFixed(0) + '% de tus reservas, más ' + v('comTdc') + '% del banco, se te va <b>' + (comEf * 100).toFixed(1) + '%</b> y te queda ' + pctQueda.toFixed(1) + '%.' +
      '<span class="fx">' + money2(total) + ' ÷ ' + (1 - comEf).toFixed(3) + ' = <b>' + money(total / (1 - comEf)) + '</b></span>' +
      (imp > 1 ? '<div class="paso">Y como pediste ver la tarifa con impuestos, se le suma el 16% de IVA y el 3% de hospedaje.</div><span class="fx">' + money(total / (1 - comEf)) + ' × ' + imp.toFixed(2) + ' = <b>' + money(tMin) + '</b></span>'
      : '<div class="paso">Esta cifra es la tarifa neta, sin IVA ni impuesto de hospedaje. Si quieres verla con impuestos incluidos, actívalo en el paso 8.</div>') +
      '<div class="paso">A esta tarifa no ganas nada: apenas empatas.</div>';

      EXPL.trec =
      '<h4>Tarifa con tu margen</h4>' +
      'Es el mismo cálculo de la tarifa mínima, pero además apartando el ' + v('margen').toFixed(0) + '% de margen que pediste en el paso 8. ' +
      'Entre comisiones y margen se va ' + ((comEf + margen) * 100).toFixed(1) + '% de cada peso.' +
      (isNaN(tRec)
      ? '<span class="fx">Con ese margen y esas comisiones no queda nada para cubrir el costo: baja el margen o renegocia comisiones.</span>'
      : '<span class="fx">' + money2(total) + ' ÷ ' + (1 - comEf - margen).toFixed(3) + (imp > 1 ? ' × ' + imp.toFixed(2) : '') + ' = <b>' + money(tRec) + '</b></span>') +
      '<div class="paso">Esta es la tarifa a la que tu hotel deja utilidad, no solo sobrevive.</div>';

      EXPL.tmes =
      '<h4>Costo mensual de habitaciones</h4>' +
      'Todo lo que te cuesta operar las habitaciones en un mes: los gastos fijos completos más los de cada noche vendida.' +
      '<span class="fx">Fijos ' + money(fijoMes) + ' + (' + money2(varNoche) + ' × ' + Math.round(noches) + ' noches) = <b>' + money(fijoMes + varNoche * noches) + '</b></span>' +
      '<div class="paso">No incluye alimentos y bebidas, eventos, ni pagos de deuda: solo la operación del cuarto.</div>';

      EXPL.tnoches =
      '<h4>Noches vendidas al mes</h4>' +
      'Es tu inventario real de venta, no el número de cuartos. Entre estas noches se reparte todo lo que pagas.' +
      '<span class="fx">' + rooms + ' habitaciones × ' + dias + ' días × ' + Math.round(occ * 100) + '% de ocupación = <b>' + Math.round(noches) + ' noches</b></span>' +
      '<div class="paso">Si la ocupación sube, el mismo gasto fijo se divide entre más noches y tu costo por noche baja. Por eso la tabla de abajo cambia tanto.</div>';

      pintaQ();

      /* --- pintar --- */
      document.getElementById('bigCosto').innerHTML = money(total) + '<small>por habitación</small>';
      document.getElementById('capEquilibrio').textContent =
      'Con ' + Math.round(occ * 100) + '% de ocupación, ' + money(fijoNoche) + ' son costos fijos repartidos y ' + money(varNoche) + ' son gastos que solo ocurren cuando alguien duerme ahí.';
      document.getElementById('tMin').textContent = money(tMin);
      document.getElementById('tRec').textContent = isNaN(tRec) ? 'Margen no alcanzable' : money(tRec);
      document.getElementById('tMes').textContent = money(fijoMes + varNoche * noches);
      document.getElementById('tNoches').textContent = Math.round(noches).toLocaleString('es-MX');
      document.getElementById('dockCosto').textContent = money(total);
      document.getElementById('dockTarifa').textContent = money(tMin);

      document.getElementById('boxNoches').innerHTML =
      'Vendes alrededor de <b>' + Math.round(noches).toLocaleString('es-MX') + ' noches al mes</b> (' +
      Math.round(nochesRoom) + ' por habitación). Entre esas noches se reparte todo lo que pagas.';

      document.getElementById('boxLav').innerHTML =
      'Cada noche vendida genera <b>' + kgNoche.toFixed(2) + ' kg</b> de ropa a lavar: <b>' + money2(lavado) + '</b> por noche, ' +
      money(lavado * noches) + ' al mes.' +
      (modoLav === 'externa' ? ' Con lavandería propia, protocolo MALAK y productos Swipe a $12 el kilo, esto bajaría a ' + money2(kgNoche * 12) + ' por noche (' + money((lavado - kgNoche * 12) * noches) + ' de ahorro mensual).' : '');

      var valorBlancos = valorRot + valorDur;
      var pctLavada = valorRot > 0 ? ((amortRot / Math.max(fCambio, 0.0001)) / valorRot * 100) : 0;
      var pctNoche = valorBlancos > 0 ? (amort / valorBlancos * 100) : 0;
      document.getElementById('boxBlancos').innerHTML =
      'El juego que se lava cada servicio vale <b>' + money(valorRot) + '</b>, y cada lavada consume <b>' + pctLavada.toFixed(2) + '%</b> de ese valor. ' +
      'Con tu frecuencia de cambio son ' + money2(amortRot) + ' por noche vendida.<br><br>' +
      'Sumando almohadas, protectores, colcha y cobertor, vestir la habitación cuesta <b>' + money(valorBlancos) + '</b> y reponer todo el textil sale en <b>' + money2(amortTextil) + ' por noche</b>. ' +
      'Eso significa comprar alrededor de ' + money(amortTextil * nochesRoom * 12) + ' de blancos al año por habitación, o ' + money(amortTextil * noches * 12) + ' para todo el hotel: ese es el presupuesto anual que MALAK te ayuda a planear. ' +
      ((amort - amortTextil) > 0.005 ? 'El colchón suma aparte ' + money2(amort - amortTextil) + ' por noche.' : '');

      /* barras */
      var items = [
      {
          k: 'Luz, agua y gas',
          vl: (servicios / noches),
          c: '#405448'
      },
      {
          k: 'Estructura',
          vl: (estr / noches),
          c: '#5E7A66'
      },
      {
          k: 'Personal',
          vl: (nomina / noches),
          c: '#87A38D'
      },
      {
          k: 'Lavado',
          vl: lavado,
          c: '#7A8744'
      },
      {
          k: 'Blancos y cama',
          vl: amort,
          c: '#BAC38C'
      },
      {
          k: 'Amenidades',
          vl: amen,
          c: '#DCE2BE'
      },
      {
          k: 'Limpieza',
          vl: quim,
          c: '#B3B1A3'
      }
      ];
      var vivos = items.filter(function(i) {
          return i.vl > 0;
      });
      var suma = vivos.reduce(function(a, i) {
          return a + i.vl;
      }, 0) || 1;
      var R = 62,
          W = 30,
          C = 2 * Math.PI * R,
          off = 0;
      var segs = vivos.map(function(i) {
          var len = (i.vl / suma) * C;
          var sv = '<circle cx="80" cy="80" r="' + R + '" fill="none" stroke="' + i.c + '" stroke-width="' + W + '"' +
          ' stroke-dasharray="' + Math.max(len - 1.2, 0.4).toFixed(2) + ' ' + (C - Math.max(len - 1.2, 0.4)).toFixed(2) + '"' +
          ' stroke-dashoffset="' + (-off).toFixed(2) + '" transform="rotate(-90 80 80)"></circle>';
          off += len;
          return sv;
      }).join('');
      document.getElementById('pieSvg').innerHTML =
      '<svg viewBox="0 0 160 160" role="img" aria-label="Reparto del costo por noche">' + segs +
      '<text class="pieMid" x="80" y="80" text-anchor="middle" font-size="21">' + money(total) + '</text>' +
      '<text class="pieCap" x="80" y="96" text-anchor="middle" font-size="9.5">por noche</text></svg>';
      document.getElementById('pieLeg').innerHTML = items.map(function(i) {
          var share = total > 0 ? (i.vl / total * 100) : 0;
          return '<div class="legRow"><span class="chip" style="background:' + i.c + '"></span>' +
          '<span class="lk">' + i.k + '</span>' +
          '<span class="lv">' + money2(i.vl) + '</span>' +
          '<span class="lp">' + share.toFixed(0) + '%</span></div>';
      }).join('');

      var pesoBlancos = total > 0 ? ((lavado + amort) / total * 100) : 0;
      document.getElementById('flagBlancos').innerHTML =
      'Lavar y reponer blancos es <b>' + pesoBlancos.toFixed(0) + '%</b> de tu costo por noche (' + money2(lavado + amort) + '). ' +
      'Es la partida donde un cambio de proveedor o de protocolo de lavado se nota de inmediato, porque se repite cada noche del año.';

      /* ---- comparación con el mercado ---- */
      leeComps();
      var vals = comps.filter(function(c) {
          return c.t > 0;
      }).map(function(c) {
          return c.t;
      });
      var prom = vals.length ? vals.reduce(function(a, b) {
          return a + b;
      }, 0) / vals.length : 0;
      var minZ = vals.length ? Math.min.apply(null, vals) : 0;
      var maxZ = vals.length ? Math.max.apply(null, vals) : 0;
      var mia = v('miTarifa');
      var neto = function(t) {
          return t * (1 - comEf) / imp;
      }; /* lo que de verdad te queda */
      var boxZ = document.getElementById('boxZona');
      var boxD = document.getElementById('boxDiag');

      if (!vals.length || mia <= 0) {
          boxZ.innerHTML = 'Captura tu tarifa y al menos una tarifa de la zona para ver la comparación.';
          boxD.innerHTML = 'Aquí aparecerá el diagnóstico: si estás por arriba o por abajo del mercado y qué conviene hacer.';
      } else {
          var dif = (mia / prom - 1) * 100;
          var netoMio = neto(mia);
          var margen$ = netoMio - total;
          var margenPct = netoMio > 0 ? (margen$ / netoMio * 100) : 0;
          var netoZona = neto(prom);
          var occReq = (netoZona > varNoche) ? (fijoMes / (netoZona - varNoche)) / (Math.max(rooms, 1) * dias) * 100 : Infinity;

          boxZ.innerHTML =
          'El promedio de la zona es <b>' + money(prom) + '</b> (de ' + money(minZ) + ' a ' + money(maxZ) + ', ' + vals.length + ' alojamiento' + (vals.length > 1 ? 's' : '') + '). ' +
          'Tu tarifa está <b>' + Math.abs(dif).toFixed(0) + '% ' + (dif >= 0 ? 'arriba' : 'abajo') + '</b> de ese promedio.<br><br>' +
          'A tu tarifa te quedan ' + money2(netoMio) + ' netos por noche después de comisiones' + (imp > 1 ? ' e impuestos' : '') + ', contra un costo de ' + money2(total) + ': ' +
          (margen$ >= 0
          ? '<b>ganas ' + money2(margen$) + '</b> por habitación vendida (' + margenPct.toFixed(0) + '% de margen).'
          : '<b>pierdes ' + money2(-margen$) + '</b> por cada habitación que vendes.') +
          (isFinite(occReq)
          ? ' Cobrando lo mismo que el promedio de la zona, necesitarías ' + occReq.toFixed(0) + '% de ocupación para no perder.'
          : ' A la tarifa promedio de la zona no alcanzas a cubrir ni los gastos variables: no hay ocupación que lo salve.');

          var d;
          if (margen$ < 0 && dif < -5) {
              d = '<b>Estás regalando el cuarto.</b> Cobras por debajo de tu costo y además por debajo del mercado. El mercado te está dando permiso de subir: llegar al promedio de la zona no te saca de competencia, te saca de números rojos. Sube por escalones, empezando por fines de semana y fechas de alta demanda, y mide si la ocupación se mueve.';
          } else if (margen$ < 0 && dif >= -5) {
              d = '<b>El problema no es tu precio, es tu estructura.</b> Cobras lo mismo o más que la zona y aun así pierdes. Súbele a la ocupación o baja el costo fijo por noche: los pesos gordos están en nómina, lavado de blancos y servicios. Revisa la gráfica del paso 10 y ataca las tres partidas más altas antes de tocar la tarifa.';
          } else if (margen$ >= 0 && dif < -10) {
              d = '<b>Ganas, pero estás dejando dinero en la mesa.</b> Tienes margen y aun así cobras ' + Math.abs(dif).toFixed(0) + '% menos que tu competencia. Antes de bajar más por un descuento, pregúntate por qué te comparan con ellos: si tu producto es equivalente, cada noche que vendes más barato es dinero que no vuelve.';
          } else if (margen$ >= 0 && dif > 15) {
              d = '<b>Estás cobrando una prima sobre la zona.</b> Eso solo se sostiene si el huésped ve la diferencia: blancos impecables, fotos que la demuestren y reseñas que la respalden. Ahí es donde la calidad de tus blancos deja de ser un gasto y se vuelve el argumento que justifica tu tarifa.';
          } else {
              d = '<b>Estás en una posición sana.</b> Cubres costos y te mueves en el rango de la zona. Tu siguiente palanca no es el precio sino la ocupación y el gasto por noche: cada peso que bajes de costo variable se te queda completo.';
          }
          boxD.innerHTML = d + (imp > 1 ? '' : ' <span style="color:var(--muted)">Ojo: estás comparando contra tarifas netas. Si capturaste precios publicados con impuestos, actívalos en el paso 8 para que la comparación sea justa.</span>');
      }

      /* tabla ocupación */
      var tb = document.querySelector('#tblOcc tbody');
      tb.innerHTML = '';
      [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].forEach(function(o) {
          var nn = rooms * dias * o;
          if (nn <= 0)
              nn = 1;
          var t = fijoMes / nn + varNoche;
          var tm = t / (1 - comEf) * imp;
          var tr = document.createElement('tr');
          if (Math.abs(o - occ) < 0.05)
              tr.className = 'now';
          tr.innerHTML = '<td>' + Math.round(o * 100) + '%</td><td>' + Math.round(nn).toLocaleString('es-MX') + '</td><td>' + money(t) + '</td><td>' + money(tm) + '</td>';
          tb.appendChild(tr);
      });

      window.__resumen = {
          total: total,
          fijo: fijoNoche,
          varN: varNoche,
          tMin: tMin,
          tRec: tRec,
          valorRot: valorRot,
          pctLavada: pctLavada,
          noches: noches,
          lavado: lavado,
          amort: amort,
          amen: amen,
          quim: quim,
          serv: servicios / noches,
          estr: estr / noches,
          nom: nomina / noches,
          pctNoche: pctNoche,
          valorBlancos: valorBlancos,
          occ: occ
      };
  }

  /* ---- explicaciones ---- */
  var EXPL = {},
      qAbierto = null;
  function pintaQ() {
      ['qp0', 'qp1', 'qp2'].forEach(function(id) {
          var e = document.getElementById(id);
          if (e) {
              e.hidden = true;
              e.innerHTML = '';
          }
      });
      Array.prototype.forEach.call(document.querySelectorAll('.qbtn'), function(b) {
          b.setAttribute('aria-expanded', b.dataset.q === qAbierto ? 'true' : 'false');
      });
      if (!qAbierto)
          return;
      var btn = document.querySelector('.qbtn[data-q="' + qAbierto + '"]');
      if (!btn)
          return;
      var panel = document.getElementById(btn.dataset.p);
      if (panel && EXPL[qAbierto]) {
          panel.innerHTML = EXPL[qAbierto];
          panel.hidden = false;
      }
  }
  document.getElementById('result').addEventListener('click', function(e) {
      var b = e.target.closest('.qbtn');
      if (!b)
          return;
      qAbierto = (qAbierto === b.dataset.q) ? null : b.dataset.q;
      pintaQ();
  });

  /* ---- guardado local ---- */
  var KEY = 'costo-hab-v2';
  function save() {
      try {
          var o = {};
          document.querySelectorAll('input,select').forEach(function(e) {
              if (!e.id)
                  return;
              o[e.id] = (e.type === 'checkbox') ? e.checked : e.value;
          });
          o.__modoLav = modoLav;
          domToStore(prof);
          o.__store = store;
          o.__prof = prof;
          o.__vida = vidaActiva();
          leeTipos();
          o.__tipos = tipos;
          leeComps();
          o.__comps = comps;
          localStorage.setItem(KEY, JSON.stringify(o));
      } catch (err) {}
  }
  function load() {
      try {
          var raw = localStorage.getItem(KEY);
          if (!raw)
              return;
          var o = JSON.parse(raw);
          Object.keys(o).forEach(function(k) {
              if (k.indexOf('__') === 0)
                  return;
              var e = document.getElementById(k);
              if (!e)
                  return;
              if (e.type === 'checkbox')
                  e.checked = !!o[k];
              else
                  e.value = o[k];
          });
          if (o.__tipos && o.__tipos.length) {
              tipos = o.__tipos.map(function(t) {
                  var b = {
                      ind: 0,
                      mat: 0,
                      qn: 0,
                      kng: 0
                  };
                  if (t.beds)
                      SIZES.forEach(function(x) {
                          b[x.k] = parseFloat(t.beds[x.k]) || 0;
                      });
                  return {
                      n: t.n || 'Habitación',
                      beds: b,
                      rooms: parseFloat(t.rooms) || 0
                  };
              });
          }
          if (o.__store) {
              SIZES.forEach(function(x) {
                  if (!o.__store[x.k])
                      return;
                  CAMAALL.forEach(function(it) {
                      var d = o.__store[x.k][it.id];
                      if (d)
                          store[x.k][it.id] = {
                              p: d.p,
                              q: d.q,
                              v: Math.max(d.v || 1, 1),
                              on: !!d.on
                          };
                  });
              });
          }
          if (o.__comps && o.__comps.length) {
              comps = o.__comps.map(function(c) {
                  return {
                      n: c.n || 'Alojamiento',
                      t: parseFloat(c.t) || 0
                  };
              });
          }
          if (o.__prof && store[o.__prof])
              prof = o.__prof;
          storeToDom(prof);
          var bs = document.getElementById('segSize');
          Array.prototype.forEach.call(bs.querySelectorAll('button'), function(b) {
              b.setAttribute('aria-pressed', b.dataset.v === prof ? 'true' : 'false');
          });
          if (o.__vida) {
              Array.prototype.forEach.call(document.getElementById('segVida').querySelectorAll('button'), function(b) {
                  b.setAttribute('aria-pressed', b.dataset.v === String(o.__vida) ? 'true' : 'false');
              });
          }
          if (o.__modoLav) {
              modoLav = o.__modoLav;
              var box = document.getElementById('segLav');
              Array.prototype.forEach.call(box.querySelectorAll('button'), function(b) {
                  b.setAttribute('aria-pressed', b.dataset.v === modoLav ? 'true' : 'false');
              });
              document.getElementById('rowMix').style.display = (modoLav === 'mixta') ? 'flex' : 'none';
              document.getElementById('rowKgExt').style.display = (modoLav === 'mixta') ? 'flex' : 'none';
          }
          var tc = document.getElementById('tipoCama');
          if (!tc.value)
              tc.value = '4.5'; // datos guardados con la versión anterior
          document.getElementById('rowKg').style.display = (tc.value === 'custom') ? 'flex' : 'none';
      } catch (err) {}
  }

  document.addEventListener('input', function() {
      calc();
      save();
  });
  document.addEventListener('change', function() {
      calc();
      save();
  });

  document.getElementById('btnReset').addEventListener('click', function() {
      if (!confirm('Se borran los datos capturados en este dispositivo. ¿Continuar?'))
          return;
      try {
          localStorage.removeItem(KEY);
      } catch (e) {}
      location.reload();
  });
  document.getElementById('btnVer').addEventListener('click', function() {
      document.getElementById('result').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
  document.getElementById('btnDemo').addEventListener('click', function() {
      var d = {
          rooms: 14,
          occ: 48,
          los: 2,
          dias: 30,
          luzMonto: 14500,
          luzPer: '2',
          luzPct: 60,
          aguaMonto: 2600,
          aguaPer: '2',
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
          nomPct: 100,
          quimicos: 11,
          comOta: 18,
          pctOta: 55,
          comTdc: 3.5,
          margen: 25
      };
      Object.keys(d).forEach(function(k) {
          var e = document.getElementById(k);
          if (e)
              e.value = d[k];
      });
      calc();
      save();
      document.getElementById('result').scrollIntoView({
          behavior: 'smooth'
      });
  });
  document.getElementById('btnCopy').addEventListener('click', function() {
      var r = window.__resumen;
      if (!r)
          return;
      var t = 'COSTO POR HABITACIÓN\n' +
      'Ocupación: ' + Math.round(r.occ * 100) + '%  ·  Noches vendidas al mes: ' + Math.round(r.noches) + '\n\n' +
      'Costo por noche vendida: ' + money2(r.total) + '\n' +
      '  Fijos repartidos: ' + money2(r.fijo) + '\n' +
      '  Variables por noche: ' + money2(r.varN) + '\n\n' +
      'Servicios: ' + money2(r.serv) + '\n' +
      'Estructura: ' + money2(r.estr) + '\n' +
      'Personal: ' + money2(r.nom) + '\n' +
      'Lavado de blancos: ' + money2(r.lavado) + '\n' +
      'Reposición de blancos: ' + money2(r.amort) + '  (el juego de rotación vale ' + money(r.valorRot) + ' y cada lavada consume ' + r.pctLavada.toFixed(2) + '%)\n' +
      'Amenidades: ' + money2(r.amen) + '\n' +
      'Limpieza: ' + money2(r.quim) + '\n\n' +
      'Tarifa mínima: ' + money(r.tMin) + '\n' +
      'Tarifa con margen: ' + (isNaN(r.tRec) ? '—' : money(r.tRec));
      if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(t).then(function() {
              var b = document.getElementById('btnCopy');
              var o = b.textContent;
              b.textContent = 'Resumen copiado';
              setTimeout(function() {
                  b.textContent = o;
              }, 1800);
          });
      }
  });

  load();
  pintaTipos();
  pintaComps();
  document.getElementById('mixBox').style.display = document.getElementById('mixOn').checked ? 'block' : 'none';
  pintaCuidado(vidaActiva());
  calc();
})();

/* Navegación móvil MALAK */
(function () {
var toggle = document.querySelector('.menu-toggle');
var nav = document.getElementById('mainNav');
if (!toggle || !nav) return;

function closeMenu() {
nav.classList.remove('mobile-open');
toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', function () {
var open = nav.classList.toggle('mobile-open');
toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
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

/* ==================================================
   MALAK · PANEL DE RESULTADOS SINCRONIZADO CON SCROLL
   Resultado → gráfica de pastel → tabla
================================================== */

(function () {
  var sidebar = document.querySelector('.calculator-sidebar');
  var sticky = document.querySelector('.calculator-sidebar-sticky');
  var layout = document.querySelector('.calculator-layout');

  if (!sidebar || !sticky || !layout) return;

  var track = sticky.querySelector('.calculator-sidebar-track');

  if (!track) {
    track = document.createElement('div');
    track.className = 'calculator-sidebar-track';

    while (sticky.firstChild) {
      track.appendChild(sticky.firstChild);
    }

    sticky.appendChild(track);
  }

  var ticking = false;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function updateSidebar() {
    ticking = false;

    if (window.innerWidth <= 1000) {
      track.style.transform = 'none';
      return;
    }

    var viewportHeight = sticky.clientHeight;
    var contentHeight = track.scrollHeight;
    var maxShift = Math.max(0, contentHeight - viewportHeight);

    if (maxShift <= 0) {
      track.style.transform = 'translate3d(0,0,0)';
      return;
    }

    var stickyTop = 96;

    var layoutRect = layout.getBoundingClientRect();
    var layoutTop = window.scrollY + layoutRect.top;

    var start = layoutTop - stickyTop;
    var travel = Math.max(
      1,
      layout.offsetHeight - viewportHeight
    );

    var progress = clamp(
      (window.scrollY - start) / travel,
      0,
      1
    );

    var shift = -(maxShift * progress);

    track.style.transform =
      'translate3d(0,' + shift.toFixed(2) + 'px,0)';
  }

  function requestUpdate() {
    if (ticking) return;

    ticking = true;
    window.requestAnimationFrame(updateSidebar);
  }

  window.addEventListener(
    'scroll',
    requestUpdate,
    { passive: true }
  );

  window.addEventListener(
    'resize',
    requestUpdate
  );

  window.addEventListener(
    'load',
    requestUpdate
  );

  document.addEventListener(
    'input',
    requestUpdate
  );

  document.addEventListener(
    'change',
    requestUpdate
  );

  if ('ResizeObserver' in window) {
    var ro = new ResizeObserver(requestUpdate);

    ro.observe(layout);
    ro.observe(track);
  }

  requestUpdate();
})();
