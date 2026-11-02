/* satine-ofertas v1.1 — capa visual genérica, lee el JSON del ERP */
/* Capa visual de ofertas de satinecases.com (Tienda Nube, theme Rio). NO cambia precios: el descuento real lo aplica Tienda Nube
   (cupones, precio promocional o promo del panel). Esto solo muestra y guía, leyendo GET {URL_BASE}/api/tienda/ofertas.
   Módulos (los enciende visual.modulos del JSON): barra, home, ficha, carrito, combos; cashback y sorteo se muestran como nota
   dentro del home y del carrito. Todos los textos vienen del JSON. Si el fetch falla, la marca no es 'satine-ofertas' o no hay
   campaña ni permanentes, no hace nada. Idempotente (nodos con data-satine-ofertas) y nunca rompe la página (todo en try/catch).
   Al final del archivo: CÓMO ACTIVARLO. */
(function () {
  'use strict';
  if (window.satineOfertas && window.satineOfertas.cargado) return;

  /* ---------- CONFIGURACION ---------- */
  var URL_BASE = window.SATINE_OFERTAS_URL_BASE || 'https://mati-satine-software-ten.vercel.app';
  var MARCA = 'satine-ofertas';
  var CLAVE_SS = 'satineOfertasVista';
  var URL_COMBOS = '/?combos=1';   /* página del armador de combos (satine-v230-4.js); visual.combos.url la pisa si viene */
  var ESTILO_DEF = { tinta: '#34211b', crema: '#f5f0e5', acento: '#E8A33D', acento2: '#F4C06A', oferta: '#c0392b' };   /* paleta SATINE */

  var S = { datos: null, offset: 0, vista: null, gen: 0, timers: [], intervals: [], obs: [], orig: {}, error: null, cargo: false, mods: {}, prendido: false };

  /* ---------- helpers ---------- */
  function q(s, r) { return (r || document).querySelector(s); }
  function qa(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function txt(el) { return ((el && el.textContent) || '').replace(/\s+/g, ' ').trim(); }
  function norm(s) {
    s = String(s == null ? '' : s).toLowerCase();
    if (typeof s.normalize === 'function') s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
    return s.replace(/\s+/g, ' ').trim();
  }
  /* clave de grupo: "Tarjeteros" y "tarjetero" son la misma */
  function clave(s) { var k = norm(s).replace(/[^a-z0-9]+/g, ''); return k.length > 3 ? k.replace(/s$/, '') : k; }
  function plata(n) { return '$' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function dm(iso) { var m = /(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || '')); return m ? parseInt(m[3], 10) + '/' + parseInt(m[2], 10) : ''; }
  /* "hasta" suele ser el día siguiente a las 00:00 (exclusivo): el último día mostrable es el anterior */
  function diaFin(iso) {
    var m = /(\d{4})-(\d{2})-(\d{2})T00:00(:00)?/.exec(String(iso || ''));
    if (!m) return iso;
    var d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3] - 1));
    return d.getUTCFullYear() + '-' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + '-' + ('0' + d.getUTCDate()).slice(-2);
  }
  function rellenar(s, d) { return String(s == null ? '' : s).replace(/\{(\w+)\}/g, function (_, k) { return d && d[k] != null ? d[k] : ''; }); }
  function url(d) {
    d = String(d == null ? '' : d).trim();
    if (!d) return '/';
    if (/^(javascript|data|vbscript):/i.test(d)) return '/';
    if (/^(https?:)?\/\//i.test(d) || /^[\/?#]/.test(d)) return d;
    return '/' + d.replace(/^\/+|\/+$/g, '') + '/';   /* "fundas" -> "/fundas/" */
  }
  function h(tag, attrs, hijos, modulo) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) { if (attrs[k] == null) continue; if (k === 'text') el.textContent = attrs[k]; else el.setAttribute(k, attrs[k]); }
    (hijos || []).forEach(function (c) { if (c) el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    el.setAttribute('data-satine-ofertas', modulo || '1');
    return el;
  }
  function antes(ref, el) { ref.parentNode.insertBefore(el, ref); }
  function despues(ref, el) { ref.parentNode.insertBefore(el, ref.nextSibling); }
  function color(v, def) { return (typeof v === 'string' && /^[#a-z0-9(),.%\s-]{3,40}$/i.test(v)) ? v : def; }
  function esperar(fn, ms) { var g = S.gen; S.timers.push(setTimeout(function () { if (g === S.gen) { try { fn(); } catch (e) {} } }, ms)); }
  function aviso(m, e) { try { if (window.console) console.warn('satine-ofertas', m, e || ''); } catch (_) {} }
  function ahora() { return Date.now() + S.offset; }   /* hora del servidor estimada (no confía en el reloj del cliente) */

  /* ---------- vista previa (?vista=<slug>&clave=<clave>) ---------- */
  var vistaMem = null;
  function leerVista() {
    var m = /[?&]vista=([^&#]*)/.exec(location.search), c = /[?&]clave=([^&#]*)/.exec(location.search);
    try {
      if (m) {
        var slug = decodeURIComponent(m[1]);
        if (!slug || slug === '0') { vistaMem = null; try { sessionStorage.removeItem(CLAVE_SS); } catch (e) {} return null; }
        if (c) { vistaMem = { slug: slug, clave: decodeURIComponent(c[1]) }; try { sessionStorage.setItem(CLAVE_SS, JSON.stringify(vistaMem)); } catch (e) {} }
      }
    } catch (e) {}
    if (vistaMem) return vistaMem;
    try { var g = sessionStorage.getItem(CLAVE_SS); if (g) { var o = JSON.parse(g); if (o && o.slug && o.clave) return o; } } catch (e) {}
    return null;
  }

  /* ---------- estilos (tokens de visual.estilo como variables CSS) ---------- */
  function css(est) {
    est = est || {};
    var t = color(est.tinta, ESTILO_DEF.tinta), cr = color(est.crema, ESTILO_DEF.crema), a = color(est.acento, ESTILO_DEF.acento),
        a2 = color(est.acento2, ESTILO_DEF.acento2), of = color(est.oferta, ESTILO_DEF.oferta);
    return [
      ':root{--of-tinta:' + t + ';--of-crema:' + cr + ';--of-acento:' + a + ';--of-acento2:' + a2 + ';--of-oferta:' + of + ';--of-radio:18px;',
      '--of-sombra:0 1px 2px rgba(0,0,0,.06),0 6px 18px rgba(0,0,0,.08),0 18px 40px rgba(0,0,0,.06);--of-ease:cubic-bezier(.22,1,.36,1);',
      "--of-serif:'Arca Majora 3','Plus Jakarta Sans',system-ui,sans-serif;--of-sans:'Plus Jakarta Sans',system-ui,-apple-system,sans-serif}",
      /* barra del header */
      'section.js-adbar.of-on{background:var(--of-tinta)!important;border-radius:28px 28px 0 0}',
      'section.js-adbar.of-on>.container-fluid{background:var(--of-tinta)!important;background-color:var(--of-tinta)!important}',
      'section.js-adbar.of-on .adbar-message,section.js-adbar.of-on .adbar-message a{color:var(--of-acento2)!important;font-weight:700!important}',
      /* piezas comunes */
      '.of-pill{display:inline-block;font:800 10px/1 var(--of-sans);letter-spacing:1.4px;text-transform:uppercase;padding:6px 10px 5px;border-radius:999px;background:linear-gradient(135deg,var(--of-acento2),var(--of-acento));color:var(--of-tinta);white-space:nowrap}',
      '.of-btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 18px;border-radius:999px;font:800 13px/1 var(--of-sans);letter-spacing:.2px;text-decoration:none!important;transition:transform .35s var(--of-ease),opacity .35s var(--of-ease);-webkit-tap-highlight-color:transparent}',
      '.of-btn:active{transform:scale(.97)}',
      '.of-btn--acento{background:linear-gradient(135deg,var(--of-acento2),var(--of-acento));color:var(--of-tinta)!important}',
      '.of-btn--tinta{background:var(--of-tinta);color:var(--of-crema)!important}',
      '.of-btn--full{width:100%}',
      '.of-texto{font:400 13px/1.5 var(--of-sans);margin:0;opacity:.78}',
      '.of-nota{font:400 11px/1.45 var(--of-sans);margin:12px 0 0;opacity:.62}',
      /* home */
      '.of-home{margin:22px 14px 0;background:var(--of-tinta);color:var(--of-crema);border-radius:var(--of-radio);padding:22px 20px 20px;box-shadow:var(--of-sombra);font-family:var(--of-sans);position:relative;overflow:hidden}',
      '.sh26-rv>.of-home,.of-home.of-en-tira{margin:18px 0 0}',
      '.of-home:before{content:"";position:absolute;right:-60px;top:-80px;width:220px;height:220px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,255,255,.14),rgba(255,255,255,0));pointer-events:none}',
      '.of-home .of-kicker{font:800 10px/1 var(--of-sans);letter-spacing:1.6px;text-transform:uppercase;color:var(--of-acento2);margin:0 0 12px}',
      '.of-home h2{font:800 27px/1.08 var(--of-serif);letter-spacing:-.8px;margin:0 0 10px;color:#fff;text-wrap:balance}',
      '.of-home .of-texto{color:var(--of-crema);opacity:.86;font-size:14px;margin:0 0 14px}',
      '.of-home .of-chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 16px}',
      '.of-home .of-chip{font:700 11px/1 var(--of-sans);letter-spacing:.3px;padding:7px 10px;border-radius:999px;border:1px solid var(--of-acento2);color:var(--of-acento2)}',
      '.of-home .of-pie{font:400 11px/1.5 var(--of-sans);color:var(--of-crema);opacity:.6;margin:14px 0 0}',
      /* ficha */
      '.of-ficha{display:flex;align-items:center;gap:10px;margin:0 0 4px;padding:10px 12px;border-radius:12px;background:var(--of-tinta);color:var(--of-crema)!important;text-decoration:none!important;font:600 13px/1.3 var(--of-sans);-webkit-tap-highlight-color:transparent;transition:transform .2s var(--of-ease)}',
      'a.of-ficha:active{transform:scale(.98)}',
      '.of-ficha .of-ficha-tag{flex:none;font:800 9.5px/1 var(--of-sans);letter-spacing:1.2px;text-transform:uppercase;padding:5px 8px 4px;border-radius:999px;background:linear-gradient(135deg,var(--of-acento2),var(--of-acento));color:var(--of-tinta)}',
      '.of-ficha .of-ficha-txt{flex:1 1 auto;min-width:0;text-wrap:balance}',
      '.of-ficha .of-ficha-ir{flex:none;font:700 12px/1 var(--of-sans);color:var(--of-acento2);white-space:nowrap}',
      /* carrito (drawer y /comprar/) */
      '.of-carrito{margin:12px 0 4px;background:var(--of-crema);color:var(--of-tinta);border-radius:14px;padding:14px 14px 13px;font-family:var(--of-sans);display:flex;flex-direction:column;gap:9px;align-items:flex-start}',
      '.of-carrito .of-cab{display:flex;align-items:center;gap:10px;flex-wrap:wrap}',
      '.of-carrito h4{font:800 16px/1.2 var(--of-serif);letter-spacing:-.3px;margin:0;color:var(--of-tinta)}',
      '.of-carrito .of-texto{font-size:12.5px}',
      '.of-carrito .of-btn{min-height:40px;font-size:12px;padding:0 16px}',
      '.of-carrito .of-nota{margin:0;font-size:10.5px}',
      '.of-carrito[data-estado="listo"] .of-pill{background:var(--of-oferta);color:#fff}',
      /* combos */
      '#satine-combos .of-tier b{color:#2f8a55}',
      '#satine-combos .of-cnota{display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:5px 11px;border-radius:100px;font-family:var(--of-sans);font-size:11px;font-weight:700;letter-spacing:.01em;line-height:1.2}',
      '#satine-combos .of-cnota:before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor;flex:none}',
      '#satine-combos .of-cnota.si{background:#eaf4ee;color:#2f7a4e}',
      '#satine-combos .of-cnota.oro{background:var(--of-acento2);color:var(--of-tinta)}',
      '#satine-combos .of-cnota.no{background:rgba(0,0,0,.05);color:rgba(0,0,0,.55)}',
      /* vista previa */
      '.of-vista{position:fixed;left:10px;bottom:10px;z-index:99999;background:var(--of-oferta);color:#fff;font:800 10px/1 var(--of-sans);letter-spacing:1.2px;text-transform:uppercase;padding:7px 11px 6px;border-radius:999px;pointer-events:none;opacity:.92}',
      '@media (prefers-reduced-motion:reduce){.of-btn,.of-ficha{transition:none}}'
    ].join('\n');
  }

  /* ---------- contexto de la campaña ---------- */
  function ctxDe(d) {
    var camp = d.campana || null, perm = d.permanentes || [];
    var vis = camp && camp.visual ? camp.visual : { modulos: { ficha: true }, ficha: { por_grupo: {} } };   /* solo permanentes: línea de ficha con el texto de cada regla */
    var reglas = ((camp && camp.reglas) || []).concat(perm).filter(function (r) { return r && typeof r === 'object'; });
    reglas.sort(function (a, b) { return (a.orden || 0) - (b.orden || 0); });
    var m = vis.modulos || {}, ft = (camp && camp.fechas_texto) || {};
    var c = { camp: camp, vis: vis, reglas: reglas, ft: ft, tienda: d.tienda || {} };
    c.mods = {
      barra: !!m.barra && !!(vis.barra && vis.barra.mensajes && vis.barra.mensajes.length),
      home: !!m.home && !!vis.home,
      ficha: !!m.ficha,
      carrito: !!m.carrito && !!(vis.carrito && vis.carrito.estados),
      combos: !!m.combos && !!vis.combos,
      cashback: m.cashback !== false && !!vis.cashback,
      sorteo: m.sorteo !== false && !!vis.sorteo
    };
    return c;
  }
  function escalares(d, o) {
    if (!o || typeof o !== 'object') return;
    for (var k in o) {
      var v = o[k];
      if (typeof v === 'number') { if (d[k] == null) d[k] = v; if (d['plata_' + k] == null) d['plata_' + k] = plata(v); }
      else if (typeof v === 'string' && d[k] == null) d[k] = v;
    }
  }
  /* diccionario de {placeholders} para los textos del JSON */
  function datos(c, regla, extra) {
    var camp = c.camp || {}, d = { nombre: camp.nombre || '', fin: c.ft.fin || '', kicker: c.ft.kicker || '', desde: dm(camp.desde), hasta: dm(diaFin(camp.hasta)) };
    if (regla) { d.regla = regla.nombre || ''; escalares(d, regla.beneficio); escalares(d, regla.condicion); }
    if (c.mods.cashback) { d.pct = d.pct != null ? d.pct : c.vis.cashback.pct; }
    if (extra) for (var k in extra) d[k] = extra[k];
    return d;
  }
  function textoCashback(c) {
    var cb = c.vis.cashback; if (!cb) return '';
    var d = { pct: cb.pct, usable_desde: dm(cb.usable_desde), usable_hasta: dm(cb.usable_hasta) };
    if (cb.texto) return rellenar(cb.texto, d);
    return rellenar('Comprando ahora te llevás un {pct}% de descuento para usar del {usable_desde} al {usable_hasta}.', d);
  }
  function textoSorteo(c) { return c.vis.sorteo && c.vis.sorteo.texto ? rellenar(c.vis.sorteo.texto, datos(c)) : ''; }

  /* ---------- 1. barra: reemplaza los mensajes que el header ya rota por CSS ---------- */
  function barra(c) {
    var msgs = (c.vis.barra.mensajes || []).filter(function (m) { return m && m.texto; });
    var sec = q('header.js-head-main section.js-adbar') || q('section.js-adbar');
    if (!msgs.length || !sec) return;
    var as = qa('.adbar-message a', sec);
    if (!as.length) return;
    var capas = [sec].concat(Array.prototype.filter.call(sec.children, function (e) { return /container-fluid/.test(e.className) && e.getBoundingClientRect().height < 40; }));
    S.orig.barra = { sec: sec, capas: capas.map(function (e) { return { el: e, estilo: e.getAttribute('style') }; }), as: as.map(function (a) { return { a: a, texto: a.textContent, href: a.getAttribute('href') }; }) };
    var d = datos(c);
    as.forEach(function (a, i) {
      var m = msgs[i % msgs.length];
      a.textContent = rellenar(m.texto, d);
      a.setAttribute('href', url(m.destino));
      a.setAttribute('data-satine-ofertas-barra', '1');
    });
    sec.classList.add('of-on');
    capas.forEach(function (e) { e.style.setProperty('background', 'var(--of-tinta)', 'important'); e.style.setProperty('background-color', 'var(--of-tinta)', 'important'); });
  }
  function barraVolver() {
    var o = S.orig.barra; if (!o) return;
    o.as.forEach(function (p) { p.a.textContent = p.texto; if (p.href == null) p.a.removeAttribute('href'); else p.a.setAttribute('href', p.href); p.a.removeAttribute('data-satine-ofertas-barra'); });
    o.capas.forEach(function (p) { if (p.estilo == null) p.el.removeAttribute('style'); else p.el.setAttribute('style', p.estilo); });
    o.sec.classList.remove('of-on');
    S.orig.barra = null;
  }

  /* ---------- 2. home: bloque debajo del hero (o dentro de la tira del inicio) ---------- */
  function esHome() { return (window.LS && LS.template === 'home') || location.pathname === '/'; }
  function tarjetaHome(c) {
    var t = c.vis.home, d = datos(c), pie = [];
    if (t.pie) pie.push(rellenar(t.pie, d));
    if (c.mods.cashback) pie.push(textoCashback(c));
    if (c.mods.sorteo) pie.push(textoSorteo(c));
    pie = pie.filter(Boolean);
    var chips = (t.chips || []).filter(Boolean), b = t.boton;
    return h('div', { 'class': 'of-home', role: 'region', 'aria-label': (c.camp && c.camp.nombre) || 'Ofertas' }, [
      h('p', { 'class': 'of-kicker', text: rellenar(t.kicker != null ? t.kicker : c.ft.kicker, d) }),
      t.titulo ? h('h2', { text: rellenar(t.titulo, d) }) : null,
      t.texto ? h('p', { 'class': 'of-texto', text: rellenar(t.texto, d) }) : null,
      chips.length ? h('div', { 'class': 'of-chips' }, chips.map(function (x) { return h('span', { 'class': 'of-chip', text: rellenar(x, d) }); })) : null,
      (b && b.texto) ? h('a', { 'class': 'of-btn of-btn--acento of-btn--full', href: url(b.destino), text: rellenar(b.texto, d) }) : null,
      pie.length ? h('p', { 'class': 'of-pie', text: pie.join(' ') }) : null
    ], 'home');
  }
  function home(c) {
    if (!esHome() || q('[data-satine-ofertas="home"]')) return;
    var intentos = 0;
    (function buscar() {
      var listo = document.documentElement.classList.contains('sh35-ok');
      var cont = q('.js-home-sections-container');
      var tira = cont ? qa(':scope > .sh26-injected.sh26-rv', cont).filter(function (e) { return e.tagName !== 'SECTION' && q('.sh26-trot', e); })[0] : null;
      var hero = q('section.section-slider-home[data-store="home-slider"]') || (cont ? q(':scope > section', cont) : null);
      if ((listo && tira) || intentos++ > 60) {
        if (q('[data-satine-ofertas="home"]')) return;
        var card = tarjetaHome(c);
        if (tira) {
          card.classList.add('of-en-tira');
          tira.appendChild(card);
          if (window.MutationObserver) {   /* si el inicio redibuja la tira, vuelve a poner el bloque */
            var ob = new MutationObserver(function () { if (!q('[data-satine-ofertas="home"]') && tira.isConnected) tira.appendChild(card); });
            ob.observe(tira, { childList: true });
            S.obs.push(ob);
          }
        } else if (hero) despues(hero, card);
        else if (cont) cont.insertBefore(card, cont.firstChild);
        return;
      }
      esperar(buscar, 150);
    })();
  }

  /* ---------- 3. ficha: una línea chica dentro de la caja de compra ---------- */
  function productoId() {
    try {
      var p = window.LS && LS.product && (LS.product.id || LS.product.product_id);
      if (p) return +p;
    } catch (e) {}
    var i = q('form#product_form input[name="add_to_cart"]');
    return i ? (+i.value || 0) : 0;
  }
  function incluye(alc, id) { var l = (alc && alc.productos_resueltos) || []; for (var i = 0; i < l.length; i++) if (+l[i] === id) return true; return false; }
  /* texto de la línea: primero por el grupo de la regla al que pertenece el producto (por_grupo), si no el textos.ficha de la regla */
  function lineaFicha(c, id) {
    var pg = {}, por = (c.vis.ficha && c.vis.ficha.por_grupo) || {};
    for (var k in por) pg[clave(k)] = por[k];
    for (var i = 0; i < c.reglas.length; i++) {
      var r = c.reglas[i], tx = r.textos || {}, t = '', solo = 0;
      (r.grupos || []).forEach(function (g) { if (!t && incluye(g.alcance, id)) { t = pg[clave(g.nombre)] || tx['ficha_' + clave(g.nombre)] || tx.ficha || ''; if (t) solo = +g.pct_solo || 0; } });
      if (!t && incluye(r.alcance, id)) t = tx.ficha || '';
      if (t) return { texto: t, regla: r, solo: solo };   /* solo = % que esa parte ya tiene sola (cartel «30% off» + la línea del combo al 50%) */
    }
    return null;
  }
  function ficha(c, vuelta) {
    if (!((window.LS && LS.template === 'product') || q('#single-product')) || q('[data-satine-ofertas="ficha"]')) return;
    var id = productoId(); if (!id) return;
    var lin = lineaFicha(c, id); if (!lin) return;
    /* la caja #satine-buybox-card la arma otro script después: esperarla (si no, la línea queda arriba del título) */
    var caja = q('#satine-buybox-card'), fo = q('form#product_form');
    if (!(caja && fo && caja.contains(fo)) && (vuelta || 0) < 60) { esperar(function () { ficha(c, (vuelta || 0) + 1); }, 250); return; }
    var d = datos(c, lin.regla), texto = rellenar(lin.texto, d), vf = c.vis.ficha || {};
    var tag = lin.solo > 0 ? lin.solo + '% off' : rellenar(vf.etiqueta || (c.camp && c.camp.nombre) || '', d);   /* parte con precio solo rebajado: el cartel es el % suelto y la línea cuenta el combo */
    var enlace = c.mods.combos;   /* si hay página de combos, la línea lleva ahí; si no, es solo informativa */
    var hijos = [tag ? h('span', { 'class': 'of-ficha-tag', text: tag }) : null, h('span', { 'class': 'of-ficha-txt', text: texto }), enlace ? h('span', { 'class': 'of-ficha-ir', text: vf.cta || 'Ver ›' }) : null];
    var el = enlace ? h('a', { 'class': 'of-ficha', href: url((c.vis.combos && c.vis.combos.url) || URL_COMBOS), 'aria-label': (tag ? tag + ': ' : '') + texto }, hijos, 'ficha')
                    : h('div', { 'class': 'of-ficha' }, hijos, 'ficha');
    if (caja && fo && caja.contains(fo)) despues(fo, el);
    else if (caja) caja.appendChild(el);
    else if (fo) despues(fo, el);
  }

  /* ---------- 4. carrito: tarjeta entre la lista y el resumen (drawer #modal-cart y página /comprar/) ---------- */
  function idItem(el) {
    var a = el.getAttribute('data-product-id') || (q('[data-product-id]', el) && q('[data-product-id]', el).getAttribute('data-product-id'));
    if (a) return +a;
    var m = /cart-item-(\d+)/.exec(el.getAttribute('data-store') || '');
    return m ? +m[1] : 0;
  }
  function combosDe(c) {
    return c.reglas.filter(function (r) { return r.tipo === 'combo_condicional' && r.grupos && r.grupos.length; }).map(function (r) {
      return { regla: r, grupos: r.grupos.map(function (g) { var ids = {}; ((g.alcance && g.alcance.productos_resueltos) || []).forEach(function (n) { ids[n] = 1; }); return { nombre: g.nombre, clave: clave(g.nombre), ids: ids }; }) };
    });
  }
  /* listo = hay al menos un producto de cada grupo de alguna regla combo; falta = hay alguno pero no todos; generico = el resto */
  function estadoCarrito(c, ids) {
    var mejor = null;
    combosDe(c).forEach(function (rc) {
      var falt = [], tiene = 0;
      rc.grupos.forEach(function (g) { if (ids.some(function (id) { return g.ids[id]; })) tiene++; else falt.push(g); });
      if (!tiene) return;
      var e = { estado: falt.length ? 'falta' : 'listo', regla: rc.regla, falt: falt, tiene: tiene };
      if (!mejor || (e.estado === 'listo' && mejor.estado !== 'listo') || (mejor.estado !== 'listo' && e.tiene > mejor.tiene)) mejor = e;
    });
    return mejor || { estado: 'generico', regla: null, falt: [] };
  }
  function unir(l) { return l.length < 2 ? (l[0] || '') : l.slice(0, -1).join(', ') + ' y ' + l[l.length - 1]; }
  function tarjetaCarrito(c, e) {
    var t = (c.vis.carrito.estados || {})[e.estado]; if (!t) return null;
    var nombres = e.falt.map(function (g) { return norm(g.nombre); });
    var d = datos(c, e.regla, { falta: nombres[0] || '', faltan: unir(nombres) });
    var titulo = rellenar(t.titulo, d), texto = rellenar(t.texto, d), b = t.boton, hb = null;
    if (b && b.texto) {
      var dest = (e.estado === 'falta' && e.falt[0] && e.regla && e.regla.textos && e.regla.textos['destino_' + e.falt[0].clave]) || b.destino;   /* falta: lleva a la categoría del grupo que falta */
      hb = h('a', { 'class': 'of-btn of-btn--tinta', href: url(dest), text: rellenar(b.texto, d) }, null, 'carrito-btn');
    }
    var nota = [];
    if (c.mods.cashback) nota.push(textoCashback(c));
    if (c.mods.sorteo && e.estado !== 'falta') nota.push(textoSorteo(c));
    nota = nota.filter(Boolean);
    return h('div', { 'class': 'of-carrito', 'data-estado': e.estado, role: 'region', 'aria-label': (c.camp && c.camp.nombre) || 'Ofertas' }, [
      h('div', { 'class': 'of-cab' }, [
        (c.vis.carrito.etiqueta || (c.camp && c.camp.nombre)) ? h('span', { 'class': 'of-pill', text: rellenar(c.vis.carrito.etiqueta || c.camp.nombre, d) }) : null,
        titulo ? h('h4', { text: titulo }) : null
      ]),
      texto ? h('p', { 'class': 'of-texto', text: texto }) : null,
      hb,
      nota.length ? h('p', { 'class': 'of-nota', text: nota.join(' ') }) : null
    ], 'carrito');
  }
  function carrito(c) {
    qa('.js-ajax-cart-list').forEach(function (lista) {
      var cont = lista.parentNode; if (!cont) return;
      var previas = qa('[data-satine-ofertas="carrito"]', cont).filter(function (n) { return n.parentNode === cont; });
      var its = qa('.js-cart-item[data-store^="cart-item-"]', lista);
      if (!its.length) { previas.forEach(function (n) { n.parentNode.removeChild(n); }); return; }
      var ids = its.map(idItem).filter(Boolean), e = estadoCarrito(c, ids);
      var firma = [e.estado, e.regla ? e.regla.id : '', e.falt.map(function (g) { return g.clave; }).join('+')].join('|');
      if (previas.length === 1 && previas[0].getAttribute('data-firma') === firma && previas[0].previousElementSibling === lista) return;
      previas.forEach(function (n) { n.parentNode.removeChild(n); });
      var card = tarjetaCarrito(c, e);
      if (card) { card.setAttribute('data-firma', firma); despues(lista, card); }
    });
  }
  function vigilarCarrito(c) {
    var correr = function () { try { carrito(c); } catch (e) { aviso('carrito', e); } };
    correr();
    var raices = [q('#modal-cart'), q('#shoppingCartPage')].filter(Boolean), pend = null;
    if (raices.length && window.MutationObserver) {
      var ob = new MutationObserver(function () { if (pend) return; pend = setTimeout(function () { pend = null; correr(); }, 150); S.timers.push(pend); });
      raices.forEach(function (r) { ob.observe(r, { childList: true, subtree: true }); });
      S.obs.push(ob);
    }
    var g = S.gen;
    S.intervals.push(setInterval(function () { if (g === S.gen) correr(); }, 1200));   /* respaldo: la lista se re-renderiza entera */
  }

  /* ---------- 5. combos: textos del armador (#satine-combos, satine-v230-4.js; el armador NO se toca) ---------- */
  function esCombos() { return window.__satineCombos || /[?&]combos=1/.test(location.search) || /\/combos\/?$/.test(location.pathname); }
  function combosGuardar(raiz) {
    if (S.orig.combos) return;
    var o = S.orig.combos = { raiz: raiz, textos: [], rapidos: [], tiers: null };
    ['.scb-kick', '.scb-h1', '.scb-sub'].forEach(function (s) { var el = q(s, raiz); if (el) o.textos.push([el, el.textContent]); });
    qa('#scb-quick .scb-qchip', raiz).forEach(function (b) { o.rapidos.push([b, b.textContent, b.getAttribute('data-k')]); });
  }
  function combosCabeza(c, raiz) {
    var C = c.vis.combos, d = datos(c), o = S.orig.combos;
    [['.scb-kick', C.kicker], ['.scb-h1', C.titulo], ['.scb-sub', C.sub]].forEach(function (p) {
      var el = q(p[0], raiz), v = p[1] != null ? rellenar(p[1], d) : null;
      if (el && v != null && el.textContent !== v) el.textContent = v;
    });
    var tiers = q('#scb-tiers', raiz), chips = C.chips || [];
    if (tiers && chips.length && !q('.of-tier', tiers)) {
      if (o.tiers == null) o.tiers = tiers.innerHTML;
      tiers.innerHTML = '';
      chips.forEach(function (t) {
        var s = h('span', { 'class': 'scb-tier of-tier' }, null, 'combos');
        s.appendChild(document.createTextNode(rellenar(t.texto, d)));
        if (t.descuento) { var b = document.createElement('b'); b.textContent = '−' + plata(t.descuento); s.appendChild(document.createTextNode(' ')); s.appendChild(b); }
        tiers.appendChild(s);
      });
    }
    qa('#scb-quick .scb-qchip', raiz).forEach(function (b, i) {
      var r = (C.rapidos || [])[i]; if (!r) return;
      var k = JSON.stringify(r.grupos || []);
      if (r.nombre && b.textContent !== r.nombre) b.textContent = r.nombre;
      if (b.getAttribute('data-k') !== k) b.setAttribute('data-k', k);
    });
  }
  function combosSecciones(c, raiz) {
    var C = c.vis.combos, cont = q('#scb-secs', raiz); if (!cont) return;
    var secs = qa('.scb-sec[data-sec]', cont), d = datos(c);
    secs.forEach(function (s, i) {
      if (!s.hasAttribute('data-of-i')) s.setAttribute('data-of-i', String(i));
      var nota = (C.notas || {})[s.getAttribute('data-sec')], cab = q('.scb-sec-h', s);
      if (nota && nota.texto && cab && !q('.of-cnota', s)) despues(cab, h('div', { 'class': 'of-cnota ' + (/^(si|no|oro)$/.test(nota.tono) ? nota.tono : 'si') }, [rellenar(nota.texto, d)], 'combos'));
    });
    var orden = C.orden || [], pos = function (s) { var i = orden.indexOf(s.getAttribute('data-sec')); return i < 0 ? 99 : i; };
    var quiero = secs.slice().sort(function (a, b) { return pos(a) - pos(b) || (+a.getAttribute('data-of-i')) - (+b.getAttribute('data-of-i')); });
    var igual = quiero.every(function (s, i) { return s === secs[i]; });
    if (!igual) quiero.forEach(function (s) { cont.appendChild(s); });
  }
  function combosAplicar(c) {
    var raiz = q('#satine-combos'); if (!raiz) return;
    combosGuardar(raiz);
    try { combosCabeza(c, raiz); } catch (e) {}
    try { combosSecciones(c, raiz); } catch (e) {}
  }
  function combos(c) {
    if (!esCombos()) return;
    var vueltas = 0;
    (function mirar() {
      var raiz = q('#satine-combos');
      if (!raiz) { if (++vueltas < 120) esperar(mirar, 250); return; }
      combosAplicar(c);
      if (window.MutationObserver) {
        var ob = new MutationObserver(function () { combosAplicar(c); });
        ob.observe(raiz, { childList: true, subtree: true, characterData: true });
        S.obs.push(ob);
      }
    })();
  }
  function combosVolver() {
    var o = S.orig.combos; if (!o) return;
    o.textos.forEach(function (p) { p[0].textContent = p[1]; });
    o.rapidos.forEach(function (p) { p[0].textContent = p[1]; if (p[2] == null) p[0].removeAttribute('data-k'); else p[0].setAttribute('data-k', p[2]); });
    var tiers = q('#scb-tiers', o.raiz);
    if (tiers && o.tiers != null && !q('.scb-tier:not(.of-tier)', tiers)) tiers.innerHTML = o.tiers;
    var cont = q('#scb-secs', o.raiz);
    if (cont) qa('.scb-sec[data-of-i]', cont).sort(function (a, b) { return (+a.getAttribute('data-of-i')) - (+b.getAttribute('data-of-i')); })
      .forEach(function (s) { cont.appendChild(s); s.removeAttribute('data-of-i'); });
    S.orig.combos = null;
  }

  /* ---------- encendido / apagado ---------- */
  function ventana(camp) {   /* con la hora del servidor, no la del cliente */
    if (!camp) return { ok: true };
    if (camp.estado === 'vista_previa') return { ok: true };
    if (camp.estado !== 'activa') return { ok: false };
    var t = ahora(), d = camp.desde ? Date.parse(camp.desde) : NaN, hs = camp.hasta ? Date.parse(camp.hasta) : NaN;
    if (!isNaN(d) && t < d) return { ok: false, espera: d - t };
    if (!isNaN(hs) && t >= hs) return { ok: false };
    return { ok: true, resta: isNaN(hs) ? null : hs - t };
  }
  function apagar() {
    S.gen++;
    S.timers.forEach(function (t) { clearTimeout(t); }); S.timers = [];
    S.intervals.forEach(function (t) { clearInterval(t); }); S.intervals = [];
    S.obs.forEach(function (o) { try { o.disconnect(); } catch (e) {} }); S.obs = [];
    try { combosVolver(); } catch (e) {}
    try { barraVolver(); } catch (e) {}
    qa('[data-satine-ofertas]').forEach(function (n) { if (n.parentNode && n !== document.documentElement) n.parentNode.removeChild(n); });
    if (document.documentElement) document.documentElement.removeAttribute('data-satine-ofertas');
    S.prendido = false; S.mods = {};
  }
  function render() {
    apagar();
    var d = S.datos;
    if (!d || d.marca !== MARCA) return false;
    if (!d.campana && !(d.permanentes && d.permanentes.length)) return false;
    if (window.satineCyber && window.satineCyber.prendido) return false;   /* no pisar el cyber.js viejo si sigue cargado */
    var c = ctxDe(d), w = ventana(c.camp);
    if (!w.ok) { if (w.espera > 0 && w.espera < 4 * 3600e3) esperar(render, w.espera + 500); return false; }
    var activos = ['barra', 'home', 'ficha', 'carrito', 'combos'].filter(function (k) { return c.mods[k]; });
    if (!activos.length) return false;   /* todos los módulos apagados: no se toca nada */
    if (w.resta > 0 && w.resta < 6 * 3600e3) esperar(render, w.resta + 500);   /* al llegar el "hasta" se vuelve a evaluar y se apaga */
    var g = S.gen;
    S.prendido = true; S.mods = c.mods;
    document.documentElement.setAttribute('data-satine-ofertas', 'on');
    var st = h('style', { id: 'of-css' }, null, 'css'); st.textContent = css(c.vis.estilo); document.head.appendChild(st);
    if (c.camp && c.camp.estado === 'vista_previa') document.body && document.body.appendChild(h('div', { 'class': 'of-vista', text: 'Vista previa' }, null, 'vista'));
    var correr = function () {
      if (g !== S.gen) return;
      [['barra', barra], ['home', home], ['ficha', ficha], ['carrito', vigilarCarrito], ['combos', combos]].forEach(function (m) {
        if (!c.mods[m[0]]) return;
        try { m[1](c); } catch (e) { aviso(m[0], e); }
      });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', correr); else correr();
    return true;
  }

  /* ---------- datos ---------- */
  function cargarDesde(j) {
    try {
      if (!j || typeof j !== 'object' || j.marca !== MARCA) { S.datos = null; S.error = 'marca'; apagar(); return false; }
      var sv = j.ahora ? Date.parse(j.ahora) : NaN;
      S.offset = isNaN(sv) ? 0 : sv - Date.now();
      S.datos = j; S.error = null; S.cargo = true;
      return render();
    } catch (e) { S.error = String(e && e.message || e); aviso('render', e); return false; }
  }
  function pedir() {
    var v = S.vista, u = URL_BASE + '/api/tienda/ofertas' + (v ? '?vista=' + encodeURIComponent(v.slug) + '&clave=' + encodeURIComponent(v.clave) : '');
    return fetch(u, { credentials: 'omit', cache: v ? 'no-store' : 'default' }).then(function (r) { return r.ok ? r.json() : null; });
  }
  function recargar() {
    if (!window.fetch || !window.Promise) return { then: function () {} };
    return pedir().then(function (j) { return cargarDesde(j); }, function () { S.error = 'red'; return false; });
  }
  function vista(slug, clv) {
    if (!arguments.length) return S.vista;
    if (!slug || slug === '0') { S.vista = null; vistaMem = null; try { sessionStorage.removeItem(CLAVE_SS); } catch (e) {} }
    else { S.vista = { slug: String(slug), clave: String(clv || '') }; vistaMem = S.vista; try { sessionStorage.setItem(CLAVE_SS, JSON.stringify(S.vista)); } catch (e) {} }
    return recargar().then(function () { return S.vista; });
  }
  function estado() {
    var d = S.datos, c = d && d.campana;
    return { cargado: true, version: '1.0', prendido: S.prendido, cargo: S.cargo, error: S.error, vista: S.vista, urlBase: URL_BASE,
      campana: c ? { slug: c.slug, nombre: c.nombre, estado: c.estado } : null, permanentes: d && d.permanentes ? d.permanentes.length : 0,
      modulos: S.mods, ahora: new Date(ahora()).toISOString() };
  }

  window.satineOfertas = { cargado: true, marca: MARCA, version: '1.0', estado: estado, recargar: recargar, vista: vista, cargarDesde: cargarDesde, apagar: apagar };

  try { S.vista = leerVista(); recargar(); } catch (e) { aviso('inicio', e); }
})();

/* =====================================================================================================================
   CÓMO ACTIVARLO  (esto es solo documentación: NO está activado en el theme)

   1) Cargador en el theme (igual al de satine-v257-cyber.js, pero pide ofertas/ofertas.js y exige la marca 'satine-ofertas').
      Archivo nuevo static/js/satine-vNNN-ofertas.js y una línea en layouts/layout.tpl, con el protocolo de backups de siempre:

        (function () {
          try {
            if (!window.fetch || !window.Promise) return;
            var base = 'https://raw.githubusercontent.com/SATINE344/satine-assets/main/ofertas/ofertas.js';
            var url = base + '?v=' + Math.floor(Date.now() / 300000);   // cambia cada 5 min: el CDN de GitHub no sirve copia vieja
            fetch(url).then(function (r) { return r.ok ? r.text() : ''; }).then(function (codigo) {
              if (!codigo || codigo.length < 40 || codigo.indexOf('satine-ofertas') < 0) return;   // la marca va al inicio del archivo
              try { (new Function(codigo))(); } catch (e) { if (window.console) console.warn('satine-ofertas:', e); }
            }).catch(function () {});
          } catch (e) {}
        })();

      No cargar junto con el cargador del Cyber (cyber.js): si satineCyber está prendido, ofertas.js no hace nada para no duplicar.
      Apagar todo sin FTP = dejar ofertas.js vacío en el repo (sin la marca el cargador no ejecuta nada), o apagar la campaña en el ERP.
      Los cambios en este archivo tardan hasta ~10 min en llegar (5 min del ?v= + 5 min de cache de raw.githubusercontent.com).

   2) URL_BASE (arriba): dominio del ERP que sirve GET /api/tienda/ofertas (hoy https://mati-satine-software-ten.vercel.app).
      Para probar contra otro deploy, definir antes de cargar el script: window.SATINE_OFERTAS_URL_BASE = 'https://...'.
      El endpoint tiene que mandar CORS abierto para satinecases.com (corsTienda del ERP).

   3) Cómo probar sin que lo vea el público:
      - Abrir cualquier página de la tienda con ?vista=<slug>&clave=<clave> (la clave es la de vista previa de la campaña en el ERP).
        Queda guardado en sessionStorage de esa pestaña, así que se navega con la vista. ?vista=0 la borra.
        Una campaña en vista_previa se muestra aunque no esté en fecha y lleva una etiqueta "Vista previa" abajo a la izquierda.
      - En la consola: satineOfertas.estado()  |  satineOfertas.vista('slug','clave')  |  satineOfertas.recargar()  |
        satineOfertas.cargarDesde(json) para probar con ofertas/ejemplo-activa.json sin ERP  |  satineOfertas.apagar()

   4) Lo que mira del JSON: campana.estado/desde/hasta/fechas_texto, visual.modulos/estilo/barra/home/ficha/carrito/combos/cashback/sorteo,
      reglas[].grupos[].alcance.productos_resueltos (ficha y carrito se resuelven por ID de producto, nunca por nombre) y
      reglas[].textos (ficha, ficha_<grupo>, destino_<grupo>). Placeholders en los textos: {nombre} {kicker} {fin} {desde} {hasta}
      {pct} {regla} {falta} {faltan} y cualquier número/texto suelto de beneficio y condicion (más {plata_<campo>} con formato $).
   ===================================================================================================================== */
