/* satine-cyber 1.4 (31/10/2026) - capa visual del CYBER SATINE (31/10 19:00 al 4/11, hora Argentina).
   La baja y ejecuta satine-v257-cyber.js (layout de satinecases.com). Vive en SATINE344/satine-assets/cyber/cyber.js.
   NO cambia precios. El descuento real lo aplica Tienda Nube (promo "Descuento en el carrito" 1269900: fundas Leather + vidrios +
   tarjeteros; subtotal de esas categorias >= $95.000 -> -$18.000 (= vidrio al 50%); >= $130.000 -> -$28.500 (= + tarjetero al 30%);
   y 20% directo en cables y cargadores, promo 1267180). Esto solo muestra y guia: franja del header, tarjeta en el inicio,
   tarjeta de combo en la ficha y aviso en el carrito (drawer y /comprar/).
   Vista previa antes de hora: ?cyber=1 (queda guardada en ese navegador; ?cyber=0 la borra).
   Apagar todo: dejar este archivo vacio en el repo (el cargador no hace nada si no encuentra la marca 'satine-cyber'). */
(function () {
  'use strict';
  if (window.satineCyber && window.satineCyber.cargado) return;

  /* ---------- CONFIGURACION (lo unico que haria falta tocar) ---------- */
  var CFG = {
    version: '1.4',
    desde: '2026-10-31T18:55:00-03:00',   /* se prende solo a esta hora (reloj del celular del cliente) */
    hasta: '2026-11-05T00:00:00-03:00',   /* fin del 4/11 inclusive; "a definir segun rendimiento" */
    fin: 'Hasta el 4/11',
    umbral1: 95000, desc1: 18000,         /* promo 1269900 de Tienda Nube: subtotal fundas Leather + vidrios + tarjeteros */
    umbral2: 130000, desc2: 28500,
    precios: { funda: 59999, vidrio: 35999, tarjetero: 34999 },   /* de lista, solo para proyectar el descuento en el carrito */
    cuenta: { funda: /leather\s*case/i, fundaNo: /modern|flip|urban|silic/i, fundaSku: /^FUN-LEAT/i, vidrio: /vidrio/i, tarjetero: /tarjetero/i, tarjeteroNo: /billetera/i },
    urls: { fundas: '/fundas/', vidrios: '/vidrios-templados/', tarjeteros: '/tarjeteros/', carga: '/carga/', ofertas: '/en-oferta/' },
    franja: true, home: true, ficha: true, carrito: true,
    cashback: true, sorteo: false, setSatine: true          /* cashback = cupon 10% para el 27-29/11 que manda Matias por mail (nunca el codigo); sorteo apagado hasta que lo confirme; setSatine esconde la promo Set SATINE (apagada en TN durante el Cyber) */
  };

  /* Textos (voz SATINE: directos, sin urgencia falsa). {serie} = "iPhone 17"; {d1}/{d2} = montos; {fin} = CFG.fin */
  var T = {
    franja: [   /* reemplazan los 3 mensajes de la franja del header (9px mayusculas, max ~40 caracteres) */
      ['CYBER SATINE · VIDRIO AL 50% CON TU FUNDA', 'fundas'],
      ['COMBO COMPLETO · TARJETERO AL 30%', 'tarjeteros'],
      ['CABLES Y CARGADORES 20% OFF', 'carga']
    ],
    home: {
      kicker: 'Cyber SATINE · 31/10 al 4/11',
      titulo: 'Armá tu combo',
      texto: 'Elegís tu funda Leather. Sumás el vidrio y te queda al 50%. Con el tarjetero, al 30%.',
      chips: ['Vidrio al 50% con tu funda', 'Tarjetero al 30% en el combo', 'Cables y cargadores −20%'],
      boton: ['Empezar por la funda', 'fundas'],
      pie: 'El descuento se aplica en el carrito al sumar los productos.'
    },
    extra: {
      cashback: 'Comprando en el Cyber te llevás un 10% de descuento para usar del 27 al 29/11: te lo enviamos por mail después de tu compra.',
      sorteo: 'Cada día del Cyber sorteamos un cable entre los compradores.'
    },
    trot: { k: 'Combo Cyber', h: 'Vidrio al 50% con tu funda', big: '50%', url: 'fundas' },   /* panel 'Arma tu set' de la franja rotativa del inicio (Set SATINE apagado en el Cyber) */
    ficha: {
      leather: { kicker: 'Combo Cyber', titulo: 'Sumá el vidrio: te queda al 50%',
        texto: 'Con esta funda y el vidrio para tu {serie}, el carrito te descuenta {d1}. Si además sumás un tarjetero, el descuento sube a {d2}: el tarjetero al 30%.',
        b1: ['Elegir el vidrio', 'vidrios'], b2: ['Ver tarjeteros', 'tarjeteros'], nota: 'El descuento aparece en el carrito, no en el precio de la ficha. {fin}.' },
      vidrio: { kicker: 'Combo Cyber', titulo: 'Con tu funda Leather, queda al 50%',
        texto: 'Sumá la funda Leather de tu {serie} y el carrito te descuenta {d1}. Con un tarjetero además, {d2}.',
        b1: ['Elegir la funda', 'fundas'], b2: ['Ver tarjeteros', 'tarjeteros'], nota: 'El descuento aparece en el carrito, no en el precio de la ficha. {fin}.' },
      tarjetero: { kicker: 'Combo Cyber', titulo: 'Completá el combo: tarjetero al 30%',
        texto: 'Con la funda Leather y el vidrio en el carrito, el tarjetero queda al 30%: el descuento total es de {d2}.',
        b1: ['Ver fundas Leather', 'fundas'], b2: ['Ver vidrios', 'vidrios'], nota: 'El descuento aparece en el carrito, no en el precio de la ficha. {fin}.' },
      carga: { kicker: 'Cyber SATINE', titulo: '20% off en cables y cargadores',
        texto: 'Ya está aplicado en el precio. {fin}.',
        b1: ['Ver cables y cargadores', 'carga'], b2: null, nota: null },
      funda: { kicker: 'Cyber SATINE', titulo: 'Combos con descuento en el carrito',
        texto: 'Funda Leather + vidrio: el vidrio queda al 50% ({d1} menos). Con el tarjetero, al 30% ({d2} menos). Y 20% off en cables y cargadores.',
        b1: ['Ver fundas Leather', 'fundas'], b2: ['Cables y cargadores', 'carga'], nota: '{fin}.' },
      otro: { kicker: 'Cyber SATINE', titulo: 'Combos con descuento en el carrito',
        texto: 'Funda Leather + vidrio: el vidrio queda al 50% ({d1} menos). Con el tarjetero, al 30% ({d2} menos). Y 20% off en cables y cargadores.',
        b1: ['Ver fundas Leather', 'fundas'], b2: ['Cables y cargadores', 'carga'], nota: '{fin}.' }
    },
    carrito: {   /* el titulo/texto de 'tarjetero' se arma en codigo segun el descuento actual */
      vidrio: { titulo: 'Te falta el vidrio', texto: 'Sumalo y el carrito te descuenta {d1}.', boton: ['Agregar el vidrio', 'vidrios'] },
      tarjetero: { titulo: 'Sumá un tarjetero', texto: 'Con un tarjetero el descuento es de {d1}.', boton: ['Ver tarjeteros', 'tarjeteros'] },
      funda: { titulo: 'Sumá la funda Leather', texto: 'Con lo que ya tenés, el carrito te descuenta {d1}.', boton: ['Elegir la funda', 'fundas'] },
      listo: { titulo: 'Descuento Cyber: −{d0}', texto: 'Ya está aplicado en el total.', boton: ['Cables y cargadores −20%', 'carga'] },
      cyber: { titulo: 'Cyber SATINE · {fin}', texto: 'Funda Leather + vidrio: {desc1} menos. Con tarjetero: {desc2} menos.', boton: ['Armar mi combo', 'fundas'] }
    }
  };

  /* Mapa modelo -> categoria (de data/categorias.json del repo). Claves normalizadas: "iphone 17 pro max". */
  var MAPA = {"fundas":{"iphone 17":"/fundas/iphone-17-series1/iphone-17/","iphone 17 pro max":"/fundas/iphone-17-series1/iphone-17-pro-max/","iphone 17 pro":"/fundas/iphone-17-series1/iphone-17-pro/","iphone 17 air":"/fundas/iphone-17-series1/iphone-17-air/","iphone 16":"/fundas/iphone-16-series1/iphone-16/","iphone 16 pro max":"/fundas/iphone-16-series1/iphone-16-pro-max/","iphone 16 pro":"/fundas/iphone-16-series1/iphone-16-pro/","iphone 15":"/fundas/iphone-15-series1/iphone-15/","iphone 15 pro max":"/fundas/iphone-15-series1/iphone-15-pro-max/","iphone 15 pro":"/fundas/iphone-15-series1/iphone-15-pro/","iphone 14":"/fundas/iphone-14-series1/iphone-14/","iphone 14 pro max":"/fundas/iphone-14-series1/iphone-14-pro-max/","iphone 14 pro":"/fundas/iphone-14-series1/iphone-14-pro/","samsung s26":"/fundas/samsung-s26-series1/samsung-s26/","samsung s26 ultra":"/fundas/samsung-s26-series1/samsung-s26-ultra/","samsung s26 plus":"/fundas/samsung-s26-series1/samsung-s26-plus/","iphone 13":"/fundas/iphone-13-series/iphone-13/","iphone 13 pro max":"/fundas/iphone-13-series/iphone-13-pro-max/","iphone 13 pro":"/fundas/iphone-13-series/iphone-13-pro/","iphone 18":"/fundas/iphone-18-series1/","iphone 18 pro max":"/fundas/iphone-18-series1/iphone-18-pro-max/","iphone 18 pro":"/fundas/iphone-18-series1/iphone-18-pro/"},"vidrios":{"iphone 17":"/vidrios-templados/iphone-17-series2/iphone-171/","iphone 17 pro max":"/vidrios-templados/iphone-17-series2/iphone-17-pro-max1/","iphone 17 pro":"/vidrios-templados/iphone-17-series2/iphone-17-pro1/","iphone 16":"/vidrios-templados/iphone-16-series2/iphone-161/","iphone 16 pro max":"/vidrios-templados/iphone-16-series2/iphone-16-pro-max1/","iphone 16 pro":"/vidrios-templados/iphone-16-series2/iphone-16-pro1/","iphone 15":"/vidrios-templados/iphone-15-series2/iphone-151/","iphone 15 pro max":"/vidrios-templados/iphone-15-series2/iphone-15-pro-max1/","iphone 15 pro":"/vidrios-templados/iphone-15-series2/iphone-15-pro1/","iphone 14":"/vidrios-templados/iphone-14-series2/iphone-141/","iphone 14 pro max":"/vidrios-templados/iphone-14-series2/iphone-14-pro-max1/","iphone 14 pro":"/vidrios-templados/iphone-14-series2/iphone-14-pro1/","samsung s25":"/vidrios-templados/samsung-s25-series1/samsung-s25/","samsung s25 ultra":"/vidrios-templados/samsung-s25-series1/samsung-s25-ultra/","samsung s25 plus":"/vidrios-templados/samsung-s25-series1/samsung-s25-plus/","samsung s26":"/vidrios-templados/samsung-s26-series2/samsung-s261/","samsung s26 ultra":"/vidrios-templados/samsung-s26-series2/samsung-s26-ultra1/","samsung s26 plus":"/vidrios-templados/samsung-s26-series2/samsung-s26-plus1/","iphone 18":"/vidrios-templados/iphone-18-series3/","iphone 18 pro max":"/vidrios-templados/iphone-18-series3/iphone-18-pro-max2/","iphone 18 pro":"/vidrios-templados/iphone-18-series3/iphone-18-pro2/"}};

  /* ---------- helpers ---------- */
  function q(s, r) { return (r || document).querySelector(s); }
  function qa(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function txt(el) { return ((el && el.textContent) || '').replace(/\s+/g, ' ').trim(); }
  function norm(s) { return String(s || '').toLowerCase().replace(/\s+/g, ' ').trim(); }
  function plata(n) { return '$' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function numero(t) { var m = String(t || '').replace(/[^\d,]/g, '').split(',')[0]; return m ? parseInt(m, 10) : 0; }
  function rellenar(s, d) { return String(s || '').replace(/\{(\w+)\}/g, function (_, k) { return d[k] != null ? d[k] : ''; }); }
  function h(tag, attrs, hijos) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) { if (attrs[k] == null) continue; if (k === 'text') el.textContent = attrs[k]; else el.setAttribute(k, attrs[k]); }
    (hijos || []).forEach(function (c) { if (c) el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    el.setAttribute('data-sc', '1');
    return el;
  }
  function antes(ref, el) { ref.parentNode.insertBefore(el, ref); }
  function despues(ref, el) { ref.parentNode.insertBefore(el, ref.nextSibling); }
  /* "iPhone 17 Pro Max" -> "iphone 17 pro max"; ignora "iPhone 17 Series" (nombre de la serie, no un modelo) */
  function modeloEn(s) { var m = String(s || '').match(/iphone\s*(\d{2})\s*(pro\s*max|pro|air|plus|mini|e\b)?(?!\s*series)/i); if (!m) return ''; return norm('iphone ' + m[1] + (m[2] ? ' ' + m[2] : '')); }
  function serieEn(s) { var m = String(s || '').match(/iphone\s*(\d{2})/i); return m ? 'iPhone ' + m[1] : ''; }
  /* categoria del modelo elegido; si no hay modelo, la de la serie; si no, la raiz */
  function urlCat(tipo, modelo, serie) {
    var mapa = tipo === 'vidrios' ? MAPA.vidrios : tipo === 'fundas' ? MAPA.fundas : null, raiz = CFG.urls[tipo] || '/';
    if (!mapa) return raiz;
    var k = norm(modelo); if (k && mapa[k]) return mapa[k];
    var s = norm(serie || (k ? k.split(' ').slice(0, 2).join(' ') : ''));
    if (s && mapa[s]) { var p = mapa[s].replace(/\/$/, '').split('/'); return p.length > 3 ? p.slice(0, -1).join('/') + '/' : mapa[s]; }
    return raiz;
  }
  function esLeather(nombre, sku) { if (sku && CFG.cuenta.fundaSku.test(sku)) return true; return CFG.cuenta.funda.test(nombre || '') && !CFG.cuenta.fundaNo.test(nombre || ''); }
  function descuento(sub) { return sub >= CFG.umbral2 ? CFG.desc2 : sub >= CFG.umbral1 ? CFG.desc1 : 0; }

  /* ---------- reloj y vista previa ---------- */
  function activo(f) { var t = f ? new Date(f).getTime() : Date.now(); return t >= new Date(CFG.desde).getTime() && t < new Date(CFG.hasta).getTime(); }
  var vista = false;
  try {
    var mv = location.search.match(/[?&]cyber=(\d)/);
    if (mv) { if (mv[1] === '1') localStorage.setItem('satineCyberVista', '1'); else localStorage.removeItem('satineCyberVista'); }
    vista = localStorage.getItem('satineCyberVista') === '1';
  } catch (e) {}

  var API = window.satineCyber = {
    cargado: true, marca: 'satine-cyber', version: CFG.version, cfg: CFG, textos: T, activo: activo, vista: vista,
    prendido: false, prender: arrancar, apagar: apagar, urlCat: urlCat, tipoDe: tipoDe, descuento: descuento, estadoCarrito: null
  };

  /* ---------- estilos ---------- */
  var CSS = [
    ':root{--cy-tinta:#34211b;--cy-crema:#f5f0e5;--cy-oro:#E8A33D;--cy-oro2:#F4C06A;--cy-gris:#6b5e59;--cy-radio:18px;',
    '--cy-sombra:0 1px 2px rgba(52,33,27,.06),0 6px 18px rgba(52,33,27,.08),0 18px 40px rgba(52,33,27,.06);--cy-ease:cubic-bezier(.22,1,.36,1);',
    "--cy-serif:'Arca Majora 3','Plus Jakarta Sans',system-ui,sans-serif;--cy-sans:'Plus Jakarta Sans',system-ui,-apple-system,sans-serif}",
    /* franja del header */
    'section.js-adbar.sc-on{background:var(--cy-tinta)!important;border-radius:28px 28px 0 0}',
    'section.js-adbar.sc-on>.container-fluid{background:var(--cy-tinta)!important;background-color:var(--cy-tinta)!important}',
    '.sh26-rv>#sc-home,#sc-home.sc-en-tira{margin:18px 0 0}',
    'html[data-satine-cyber="on"] #sh26-combo{display:none!important}',
    'section.js-adbar.sc-on .adbar-message,section.js-adbar.sc-on .adbar-message a{color:var(--cy-oro2)!important;font-weight:700!important}',
    /* piezas comunes */
    '.sc-pill{display:inline-block;font:800 10px/1 var(--cy-sans);letter-spacing:1.4px;text-transform:uppercase;padding:6px 10px 5px;border-radius:999px;background:linear-gradient(135deg,var(--cy-oro2),var(--cy-oro));color:var(--cy-tinta);white-space:nowrap}',
    '.sc-btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 18px;border-radius:999px;font:800 13px/1 var(--cy-sans);letter-spacing:.2px;text-decoration:none!important;transition:transform .35s var(--cy-ease),opacity .35s var(--cy-ease);-webkit-tap-highlight-color:transparent}',
    '.sc-btn:active{transform:scale(.97)}',
    '.sc-btn--oro{background:linear-gradient(135deg,var(--cy-oro2),var(--cy-oro));color:var(--cy-tinta)!important}',
    '.sc-btn--tinta{background:var(--cy-tinta);color:var(--cy-crema)!important}',
    '.sc-btn--linea{background:transparent;border:1.5px solid rgba(52,33,27,.22);color:var(--cy-tinta)!important}',
    '.sc-btn--full{width:100%}',
    '.sc-texto{font:400 13px/1.5 var(--cy-sans);margin:0;color:var(--cy-gris)}',
    '.sc-nota{font:400 11px/1.45 var(--cy-sans);margin:12px 0 0;color:#8e837e}',
    /* inicio */
    '#sc-home{margin:22px 14px 0;background:var(--cy-tinta);color:var(--cy-crema);border-radius:var(--cy-radio);padding:22px 20px 20px;box-shadow:var(--cy-sombra);font-family:var(--cy-sans);position:relative;overflow:hidden}',
    '#sc-home:before{content:"";position:absolute;right:-60px;top:-80px;width:220px;height:220px;border-radius:50%;background:radial-gradient(closest-side,rgba(244,192,106,.22),rgba(244,192,106,0));pointer-events:none}',
    '#sc-home .sc-kicker{font:800 10px/1 var(--cy-sans);letter-spacing:1.6px;text-transform:uppercase;color:var(--cy-oro2);margin:0 0 12px}',
    '#sc-home h2{font:800 27px/1.08 var(--cy-serif);letter-spacing:-.8px;margin:0 0 10px;color:#fff;text-wrap:balance}',
    '#sc-home .sc-texto{color:rgba(245,240,229,.86);font-size:14px;margin:0 0 14px}',
    '#sc-home .sc-chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 16px}',
    '#sc-home .sc-chip{font:700 11px/1 var(--cy-sans);letter-spacing:.3px;padding:7px 10px;border-radius:999px;border:1px solid rgba(244,192,106,.5);color:var(--cy-oro2)}',
    '#sc-home .sc-pie{font:400 11px/1.5 var(--cy-sans);color:rgba(245,240,229,.6);margin:14px 0 0}',
    /* ficha */
    '#sc-ficha{background:#fff;color:var(--cy-tinta);border-radius:var(--cy-radio);box-shadow:var(--cy-sombra);padding:18px 18px 16px;margin:12px 0 0;font-family:var(--cy-sans)}',
    '#sc-ficha h3{font:800 19px/1.15 var(--cy-serif);letter-spacing:-.5px;margin:12px 0 8px;color:var(--cy-tinta);text-wrap:balance}',
    '#sc-ficha .sc-acciones{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 0}',
    '#sc-ficha .sc-acciones .sc-btn{flex:1 1 150px}',
    /* carrito (drawer y /comprar/) */
    '.sc-carrito{margin:12px 0 4px;background:var(--cy-crema);color:var(--cy-tinta);border-radius:14px;padding:14px 14px 13px;font-family:var(--cy-sans);display:flex;flex-direction:column;gap:9px;align-items:flex-start}',
    '.sc-carrito .sc-cab{display:flex;align-items:center;gap:10px;flex-wrap:wrap}',
    '.sc-carrito h4{font:800 16px/1.2 var(--cy-serif);letter-spacing:-.3px;margin:0;color:var(--cy-tinta)}',
    '.sc-carrito .sc-texto{font-size:12.5px;color:#5e514c}',
    '.sc-carrito .sc-btn{min-height:40px;font-size:12px;padding:0 16px}',
    '.sc-carrito .sc-nota{margin:0;font-size:10.5px}',
    '@media (prefers-reduced-motion:reduce){.sc-btn{transition:none}}'
  ].join('\n');

  /* ---------- 1. franja del header (los 3 mensajes que ya rotan por CSS) ---------- */
  var franjaOrig = null;
  function franja() {
    var sec = q('header.js-head-main section.js-adbar') || q('section.js-adbar');
    if (!sec) return;
    var as = qa('.adbar-message a', sec);
    if (!as.length) return;
    var capas = [sec].concat(qa(':scope > .container-fluid', sec).filter(function (c) { return c.getBoundingClientRect().height < 40; }));
    if (!franjaOrig) franjaOrig = { sec: sec, capas: capas.map(function (c) { return { el: c, estilo: c.getAttribute('style') }; }), as: as.map(function (a) { return { a: a, texto: a.textContent, href: a.getAttribute('href') }; }) };
    T.franja.forEach(function (m, i) { var a = as[i]; if (!a) return; a.textContent = m[0]; a.setAttribute('href', CFG.urls[m[1]] || m[1]); });
    sec.classList.add('sc-on');
    capas.forEach(function (c) { c.style.setProperty('background', '#34211b', 'important'); c.style.setProperty('background-color', '#34211b', 'important'); });
  }
  function franjaVolver() {
    if (!franjaOrig) return;
    franjaOrig.as.forEach(function (o) { o.a.textContent = o.texto; if (o.href == null) o.a.removeAttribute('href'); else o.a.setAttribute('href', o.href); });
    (franjaOrig.capas || []).forEach(function (c) { if (c.estilo == null) c.el.removeAttribute('style'); else c.el.setAttribute('style', c.estilo); });
    franjaOrig.sec.classList.remove('sc-on');
    franjaOrig = null;
  }

  /* ---------- 2. inicio: tarjeta debajo del hero ---------- */
  function esHome() { return (window.LS && LS.template === 'home') || location.pathname === '/'; }
  /* Set SATINE (5% llevando 2 / 10% llevando 3) queda APAGADO en Tienda Nube durante el Cyber (decision de Matias, 18:55).
     El panel "Arma tu set" de la franja rotativa del inicio pasa a "Combo Cyber" y la seccion #sh26-combo del final se esconde
     por CSS (regla con html[data-satine-cyber="on"], se destapa sola en apagar()). Los textos originales se guardan y se restauran. */
  var trotOrig = null, trotTimer = null, trotVigia = null;
  function trotAplicar(pan) {
    var k = q('.k', pan), hh = q('.h', pan), big = q('.big', pan);
    trotOrig = { pan: pan, href: pan.getAttribute('href'), k: k ? k.textContent : null, h: hh ? hh.textContent : null, big: big ? big.textContent : null };
    pan.setAttribute('href', CFG.urls[T.trot.url] || '/');
    pan.setAttribute('data-sc-trot', '1');
    if (k) k.textContent = T.trot.k;
    if (hh) hh.textContent = T.trot.h;
    if (big) big.textContent = T.trot.big;
  }
  function setSatine() {
    if (!((window.LS && LS.template === 'home') || location.pathname === '/')) return;
    var intentos = 0;
    var buscar = function () {
      var pan = q('a.sh26-trot-panel.combos');
      if (!pan) { if (++intentos < 60) trotTimer = setTimeout(buscar, 250); return; }
      if (!pan.getAttribute('data-sc-trot')) trotAplicar(pan);
    };
    buscar();
    var veces = 0;   /* si el inicio redibuja la franja rotativa, se vuelve a aplicar (hasta 40 s) */
    trotVigia = setInterval(function () {
      if (!prendido || ++veces > 20) { clearInterval(trotVigia); trotVigia = null; return; }
      var pan = q('a.sh26-trot-panel.combos');
      if (pan && !pan.getAttribute('data-sc-trot')) trotAplicar(pan);
    }, 2000);
  }
  function setSatineVolver() {
    if (trotTimer) { clearTimeout(trotTimer); trotTimer = null; }
    if (trotVigia) { clearInterval(trotVigia); trotVigia = null; }
    var o = trotOrig; trotOrig = null;
    if (!o || !o.pan) return;
    var k = q('.k', o.pan), hh = q('.h', o.pan), big = q('.big', o.pan);
    if (o.href != null) o.pan.setAttribute('href', o.href);
    o.pan.removeAttribute('data-sc-trot');
    if (k && o.k != null) k.textContent = o.k;
    if (hh && o.h != null) hh.textContent = o.h;
    if (big && o.big != null) big.textContent = o.big;
  }
  function tarjetaHome() {
    var t = T.home, pie = [t.pie];
    if (CFG.cashback) pie.push(T.extra.cashback);
    if (CFG.sorteo) pie.push(T.extra.sorteo);
    return h('div', { id: 'sc-home', role: 'region', 'aria-label': 'Cyber SATINE' }, [
      h('p', { 'class': 'sc-kicker', text: t.kicker }),
      h('h2', { text: t.titulo }),
      h('p', { 'class': 'sc-texto', text: t.texto }),
      h('div', { 'class': 'sc-chips' }, t.chips.map(function (c) { return h('span', { 'class': 'sc-chip', text: c }); })),
      h('a', { 'class': 'sc-btn sc-btn--oro sc-btn--full', href: CFG.urls[t.boton[1]] || '/', text: t.boton[0] }),
      h('p', { 'class': 'sc-pie', text: pie.join(' ') })
    ]);
  }
  var homeObs = null;
  function home() {
    if (!esHome() || q('#sc-home')) return;
    var intentos = 0;
    (function esperar() {
      var listo = document.documentElement.classList.contains('sh35-ok');
      var cont = q('.js-home-sections-container');
      var tira = cont ? qa(':scope > .sh26-injected.sh26-rv', cont).filter(function (d) { return d.tagName !== 'SECTION' && q('.sh26-trot', d); })[0] : null;
      var hero = q('section.section-slider-home[data-store="home-slider"]') || (cont ? q(':scope > section', cont) : null);
      if ((listo && tira) || intentos++ > 60) {
        if (q('#sc-home') || !prendido) return;
        var card = tarjetaHome();
        if (tira) {
          card.classList.add('sc-en-tira');
          tira.appendChild(card);
          if (window.MutationObserver) {
            homeObs = new MutationObserver(function () {
              if (!prendido) { if (homeObs) homeObs.disconnect(); homeObs = null; return; }
              if (!q('#sc-home') && tira.isConnected) tira.appendChild(card);
            });
            homeObs.observe(tira, { childList: true });
          }
        } else if (hero) despues(hero, card);
        else if (cont) cont.insertBefore(card, cont.firstChild);
        return;
      }
      setTimeout(esperar, 150);
    })();
  }

  /* ---------- 3. ficha: tarjeta de combo entre la caja de compra y "Compra protegida" ---------- */
  function precioFicha() {
    var vs = (window.LS && LS.variants) || [];
    var ps = vs.map(function (v) { return +v.price_number || 0; }).filter(Boolean);
    if (ps.length) return Math.min.apply(null, ps);
    var p = window.LS && LS.product && (+LS.product.price_number || +LS.product.price);
    return p || 0;
  }
  function rutaCrumb() {
    var hs = qa('.breadcrumbs a');
    for (var i = 0; i < hs.length; i++) { var hh = (hs[i].getAttribute('href') || '').replace(/^https?:\/\/[^/]+/, ''); if (hh && hh[0] === '/' && hh !== '/') return hh; }
    return '';
  }
  function tipoDe() {
    if (!window.LS || !LS.product) return 'otro';
    var ruta = rutaCrumb(), nombre = LS.product.name || '', vs = LS.variants || [];
    if (/^\/vidrios-templados\//.test(ruta) || /vidrio/i.test(nombre)) return 'vidrio';
    if (/^\/billeteras\//.test(ruta) || CFG.cuenta.tarjeteroNo.test(nombre)) return 'otro';
    if (/^\/tarjeteros\//.test(ruta) || /tarjetero/i.test(nombre)) return 'tarjetero';
    if (/^\/carga\//.test(ruta) || /\b(cable|cargador)/i.test(nombre)) return 'carga';
    if (/^\/fundas\//.test(ruta) || /funda/i.test(nombre)) {
      var leather = esLeather(nombre, '') || vs.some(function (v) { return esLeather(nombre, v.sku); });
      return (leather && precioFicha() + CFG.precios.vidrio >= CFG.umbral1) ? 'leather' : 'funda';
    }
    return 'otro';
  }
  /* modelo elegido en la ficha: el h1 cambia con la variante; si no, el selector MODELO */
  function modeloElegido() {
    var fuentes = [q('h1.js-product-name'), q('.js-product-variants .smd-trigger')].concat(qa('.js-product-variants select')).concat(qa('.js-product-variants input:checked'));
    for (var i = 0; i < fuentes.length; i++) {
      var el = fuentes[i]; if (!el) continue;
      var m = modeloEn(el.tagName === 'SELECT' || el.tagName === 'INPUT' ? el.value : txt(el));
      if (m) return m;
    }
    return '';
  }
  function botonFicha(def, clase) {
    var serie = serieEn(window.LS && LS.product && LS.product.name);
    var cat = def[1], a = h('a', { 'class': clase, href: (cat === 'vidrios' || cat === 'fundas') ? urlCat(cat, modeloElegido(), serie) : (CFG.urls[cat] || '/'), text: def[0] });
    if (cat === 'vidrios' || cat === 'fundas') a.addEventListener('click', function () { a.setAttribute('href', urlCat(cat, modeloElegido(), serie)); });
    return a;
  }
  function ficha() {
    if (!((window.LS && LS.template === 'product') || q('#single-product')) || q('#sc-ficha')) return;
    var tipo = tipoDe(), t = T.ficha[tipo] || T.ficha.otro;
    var d = { serie: serieEn(window.LS && LS.product && LS.product.name) || 'iPhone', d1: plata(CFG.desc1), d2: plata(CFG.desc2), fin: CFG.fin };
    var card = h('div', { id: 'sc-ficha', 'data-tipo': tipo, role: 'region', 'aria-label': 'Cyber SATINE' }, [
      h('span', { 'class': 'sc-pill', text: t.kicker }),
      h('h3', { text: rellenar(t.titulo, d) }),
      h('p', { 'class': 'sc-texto', text: rellenar(t.texto, d) }),
      h('div', { 'class': 'sc-acciones' }, [botonFicha(t.b1, 'sc-btn sc-btn--tinta'), t.b2 ? botonFicha(t.b2, 'sc-btn sc-btn--linea') : null]),
      t.nota ? h('p', { 'class': 'sc-nota', text: rellenar(t.nota, d) }) : null
    ]);
    var trust = q('#satine-trust-card'), buybox = q('#satine-buybox-card'), form = q('form#product_form');
    if (trust) { card.style.order = getComputedStyle(trust).order; antes(trust, card); }
    else if (buybox) { card.style.order = getComputedStyle(buybox).order; despues(buybox, card); }
    else if (form) despues(form, card);
  }

  /* ---------- 4. carrito: aviso entre la lista y el resumen (drawer #modal-cart y pagina /comprar/) ---------- */
  function clasificar(it) {
    var n = it.nombre || '';
    if (CFG.cuenta.vidrio.test(n)) return 'vidrio';
    if (CFG.cuenta.tarjeteroNo.test(n)) return '';
    if (CFG.cuenta.tarjetero.test(n)) return 'tarjetero';
    if (esLeather(n, it.sku)) return 'funda';
    return '';
  }
  function leerItems(lista) {
    return qa('.js-cart-item[data-store^="cart-item-"]', lista).map(function (el) {
      var cant = parseInt((q('.js-cart-quantity-input', el) || {}).value, 10) || 1;
      var sub = numero(txt(q('.js-cart-item-subtotal', el)));
      return { nombre: txt(q('a[data-component="name.short-name"]', el)) || txt(q('.cart-item-name', el)) || txt(el), variante: txt(q('small[data-component="name.short-variant-name"]', el)), sku: '', precio: sub && cant ? sub / cant : 0, cant: cant };
    });
  }
  function estadoDe(items) {
    var sub = 0, f = 0, v = 0, t = 0, modelo = '';
    items.forEach(function (it) {
      var k = clasificar(it); if (!k) return;
      sub += (it.precio || CFG.precios[k] || 0) * (it.cant || 1);
      if (k === 'funda') f += it.cant; else if (k === 'vidrio') v += it.cant; else t += it.cant;
      if (!modelo && k !== 'tarjetero') modelo = modeloEn(it.nombre + ' ' + it.variante);
    });
    var d0 = descuento(sub), e = { clave: 'cyber', d0: d0, d1: d0, sub: sub, f: f, v: v, t: t, modelo: modelo, n: items.length };
    if (!f && !v && !t) return e;
    var cands = [];
    if (f && !v) cands.push('vidrio');
    if (!f) cands.push('funda');
    if (!t) cands.push('tarjetero');
    for (var i = 0; i < cands.length; i++) { var d1 = descuento(sub + CFG.precios[cands[i]]); if (d1 > d0) { e.clave = cands[i]; e.d1 = d1; return e; } }
    if (d0 > 0) e.clave = 'listo';
    return e;
  }
  function tarjetaCarrito(e) {
    var t = T.carrito[e.clave], d = { d0: plata(e.d0), d1: plata(e.d1), fin: CFG.fin, desc1: plata(CFG.desc1), desc2: plata(CFG.desc2) };
    var titulo = rellenar(t.titulo, d), texto = rellenar(t.texto, d);
    if (e.clave === 'vidrio' && e.d0 === 0 && e.d1 === CFG.desc1) texto = texto.replace(/\.$/, '') + ': el vidrio queda al 50%.';
    if (e.clave === 'funda' && e.d0 === 0 && e.d1 === CFG.desc1 && e.v && !e.t) texto = texto.replace(/\.$/, '') + ': el vidrio queda al 50%.';
    if (e.clave === 'tarjetero') {
      titulo = e.d0 > 0 ? 'Combo armado: −' + plata(e.d0) : 'Sumá un tarjetero';
      texto = 'Con un tarjetero el descuento ' + (e.d0 > 0 ? 'sube a ' : 'es de ') + plata(e.d1) + (e.d0 === CFG.desc1 && e.d1 === CFG.desc2 ? ': queda al 30%.' : '.');
    }
    if (e.d0 > 0 && (e.total || e.sub) < 100000) texto += ' En el resumen figura junto con el costo de envío.';   /* sin envio gratis, el theme neta el envio en la linea del descuento */
    var extra = [];
    if (CFG.cashback) extra.push(T.extra.cashback);
    if (CFG.sorteo && (e.clave === 'listo' || e.clave === 'cyber')) extra.push(T.extra.sorteo);
    var href = t.boton ? ((t.boton[1] === 'vidrios' || t.boton[1] === 'fundas') ? urlCat(t.boton[1], e.modelo, '') : (CFG.urls[t.boton[1]] || '/')) : null;
    return h('div', { 'class': 'sc-carrito', 'data-clave': e.clave, 'data-firma': e.firma, role: 'region', 'aria-label': 'Cyber SATINE' }, [
      h('div', { 'class': 'sc-cab' }, [h('span', { 'class': 'sc-pill', text: 'Cyber' }), h('h4', { text: titulo })]),
      h('p', { 'class': 'sc-texto', text: texto }),
      t.boton ? h('a', { 'class': 'sc-btn sc-btn--tinta', href: href, text: t.boton[0] }) : null,
      extra.length ? h('p', { 'class': 'sc-nota', text: extra.join(' ') }) : null
    ]);
  }
  var carritoTimer = null, carritoObs = null, carritoPend = null;
  function carrito() {
    qa('.js-ajax-cart-list').forEach(function (lista) {
      var cont = lista.parentNode; if (!cont) return;
      var previas = qa('.sc-carrito', cont).filter(function (c) { return c.parentNode === cont; });
      var items = leerItems(lista);
      if (!items.length) { previas.forEach(function (c) { c.parentNode.removeChild(c); }); return; }
      var e = estadoDe(items); e.total = items.reduce(function (a, it) { return a + (it.precio || 0) * (it.cant || 1); }, 0); e.firma = [e.clave, e.d0, e.d1, e.modelo, e.n].join('|');
      API.estadoCarrito = e;
      if (previas.length === 1 && previas[0].getAttribute('data-firma') === e.firma && previas[0].previousElementSibling === lista) return;
      previas.forEach(function (c) { c.parentNode.removeChild(c); });
      despues(lista, tarjetaCarrito(e));
    });
  }
  function vigilarCarrito() {
    carrito();
    var raices = [q('#modal-cart'), q('#shoppingCartPage')].filter(Boolean);
    if (raices.length && window.MutationObserver) {
      carritoObs = new MutationObserver(function () {
        if (carritoPend) return;
        carritoPend = setTimeout(function () { carritoPend = null; try { carrito(); } catch (e) {} }, 150);
      });
      raices.forEach(function (r) { carritoObs.observe(r, { childList: true, subtree: true }); });
    }
    carritoTimer = setInterval(function () { try { carrito(); } catch (e) {} }, 1200);   /* respaldo: la lista se re-renderiza entera */
  }

  /* ---------- encendido / apagado ---------- */
  var prendido = false, estilo = null;
  function arrancar() {
    if (prendido) return;
    prendido = true; API.prendido = true;
    document.documentElement.setAttribute('data-satine-cyber', 'on');
    if (!q('#sc-css')) { estilo = document.createElement('style'); estilo.id = 'sc-css'; estilo.textContent = CSS; document.head.appendChild(estilo); }
    var correr = function () {
      [['franja', franja], ['home', home], ['setSatine', setSatine], ['ficha', ficha], ['carrito', vigilarCarrito]].forEach(function (m) {
        if (!CFG[m[0]]) return;
        try { m[1](); } catch (e) { try { console.warn('satine-cyber', m[0], e); } catch (_) {} }
      });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', correr); else correr();
    var resta = new Date(CFG.hasta).getTime() - Date.now();
    if (!vista && resta > 0 && resta < 6 * 3600e3) setTimeout(apagar, resta + 500);
  }
  function apagar() {
    if (!prendido) return;
    prendido = false; API.prendido = false;
    if (carritoObs) { carritoObs.disconnect(); carritoObs = null; }
    if (homeObs) { homeObs.disconnect(); homeObs = null; }
    if (carritoTimer) { clearInterval(carritoTimer); carritoTimer = null; }
    qa('[data-sc]').forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); });
    franjaVolver();
    setSatineVolver();
    if (estilo && estilo.parentNode) estilo.parentNode.removeChild(estilo);
    estilo = null;
    document.documentElement.removeAttribute('data-satine-cyber');
  }

  if (activo() || vista) arrancar();
  else { var falta = new Date(CFG.desde).getTime() - Date.now(); if (falta > 0 && falta < 4 * 3600e3) setTimeout(arrancar, falta + 500); }
})();
