/* 1.12.0 (10/11/2026): (1) guardia PARA SIEMPRE «sin descuento»: si el cartel de oferta dice 0% o el precio tachado no es mayor que el precio, no se muestran (Tienda Nube los des-oculta con una promocion del panel prendida). (2) El acento de la promocion llega a todo: linea «-X% en combo», carteles nativos de oferta/promocion, precio SOLO si esta rebajado de verdad (antes pintaba todos los precios del sitio) y banner de portada sin imagen. */
/* 1.11.0 (09/11/2026): banners de portada (estetica.home) y de ficha (estetica.ficha.banner) + registro de reserva sc_est_reserva en localStorage para que el head del theme
   reserve el hueco antes del primer pintado (sin salto de pagina). Con la estetica apagada no hace nada nuevo. Ver seccion 1.11 mas abajo.
   satine-cyber 1.9 (02/11/2026) - capa visual del CYBER SATINE (31/10 19:00 al 4/11, hora Argentina).
   La baja y ejecuta satine-v257-cyber.js (layout de satinecases.com). Vive en SATINE344/satine-assets/cyber/cyber.js.
   NO cambia precios. El descuento real lo aplica Tienda Nube (promo "Descuento en el carrito" 1269900: fundas Leather + vidrios +
   tarjeteros; subtotal de esas categorias >= $95.000 -> -$18.000 (= vidrio al 50%); >= $130.000 -> -$28.500 (= + tarjetero al 30%);
   y 20% directo en cables y cargadores, promo 1267180). Esto solo muestra y guia: franja del header, tarjeta en el inicio,
   tarjeta de combo en la ficha y aviso en el carrito (drawer y /comprar/).
   1.9: con el combo armado, el carrito (drawer y /comprar/) MUESTRA el vidrio al 50% (y el tarjetero al 30% si el subtotal llega al 2do tramo): precio nuevo,
   lista tachada, badge, subtotal real; la tarjeta explica que el checkout lo muestra como una linea "Descuento". Solo se repinta si la cuenta cierra con el
   descuento real de la promo (que es un monto fijo): si no cierra (ej. 2 vidrios), queda el aviso de antes. Todo vuelve solo al desarmar el combo y en apagar().
   1.8: los tramos del combo (umbrales y descuentos), los precios con que proyecta, los porcentajes de los textos y las fechas salen del
   ERP (GET /api/tienda/ofertas, regla combo_condicional prendida: condicion.tiers + grupos + campana.hasta). Se guardan en localStorage
   para arrancar al instante y se refrescan en cada carga; si el ERP no responde, quedan los valores de CFG. Si el ERP responde que no hay
   campana activa (o la regla del combo esta apagada), la capa se apaga aunque CFG diga que sigue; ?cyber=1 (vista previa) la fuerza igual.
   Vista previa antes de hora: ?cyber=1 (queda guardada en ese navegador; ?cyber=0 la borra).
   Apagar todo: dejar este archivo vacio en el repo (el cargador no hace nada si no encuentra la marca 'satine-cyber'). */
(function () {
  'use strict';
  if (window.satineCyber && window.satineCyber.cargado) return;

  /* ---------- CONFIGURACION (lo unico que haria falta tocar) ---------- */
  var CFG = {
    version: '1.12.0',
    desde: '2026-10-31T18:55:00-03:00',   /* se prende solo a esta hora (reloj del celular del cliente) */
    hasta: '2026-11-05T00:00:00-03:00',   /* fin del 4/11 inclusive; "a definir segun rendimiento" */
    fin: 'Hasta el 4/11',
    umbral1: 95000, desc1: 18000,         /* promo 1269900 de Tienda Nube: subtotal fundas Leather + vidrios + tarjeteros */
    umbral2: 130000, desc2: 28500,
    precios: { funda: 59999, vidrio: 35999, tarjetero: 34999 },   /* de lista, solo para proyectar el descuento en el carrito */
    pct: { vidrio: 50, tarjetero: 30 },   /* 'queda al X%' de los textos; lo pisa el contrato (grupos[].pct) */
    contrato: 'https://mati-satine-software-ten.vercel.app/api/tienda/ofertas',   /* vacio = no consultar el ERP */
    cuenta: { funda: /leather\s*case/i, fundaNo: /modern|flip|urban|silic/i, fundaSku: /^FUN-LEAT/i, vidrio: /vidrio/i, tarjetero: /tarjetero/i, tarjeteroNo: /billetera/i },
    urls: { fundas: '/fundas/', vidrios: '/vidrios-templados/', tarjeteros: '/tarjeteros/', carga: '/carga/', ofertas: '/en-oferta/' },
    franja: false, home: true, ficha: true, carrito: true, combos: true,   /* combos: pagina /?combos=1 (31/10 19:10). franja: Matias (31/10 15:15) pidio que la barra de arriba quede como esta */
    cashback: true, sorteo: false, setSatine: true          /* cashback = cupon 10% para el 27-29/11 que manda Matias por mail (nunca el codigo); sorteo apagado hasta que lo confirme; setSatine esconde la promo Set SATINE (apagada en TN durante el Cyber) */
  };

  /* Textos (voz SATINE: directos, sin urgencia falsa). {serie} = "iPhone 17"; {d1}/{d2} = montos; {fin} = CFG.fin */
  var T = {};
  function armarTextos() {   /* se arma con CFG.pct para que 'al 50%' siga al contrato del ERP */
    var pv = CFG.pct.vidrio, pt = CFG.pct.tarjetero;
    var N = {
    franja: [   /* reemplazan los 3 mensajes de la franja del header (9px mayusculas, max ~40 caracteres) */
      ['CYBER SATINE · VIDRIO AL ' + pv + '% CON TU FUNDA', 'fundas'],
      ['COMBO COMPLETO · TARJETERO AL ' + pt + '%', 'tarjeteros'],
      ['CABLES Y CARGADORES 20% OFF', 'carga']
    ],
    home: {
      kicker: 'Cyber SATINE · 31/10 al 4/11',
      titulo: 'Armá tu combo',
      texto: 'Elegís tu funda Leather. Sumás el vidrio y te queda al ' + pv + '%. Con el tarjetero, al ' + pt + '%.',
      chips: ['Vidrio al ' + pv + '% con tu funda', 'Tarjetero al ' + pt + '% en el combo', 'Cables y cargadores −20%'],
      boton: ['Empezar por la funda', 'fundas'],
      pie: 'El descuento se aplica en el carrito al sumar los productos.'
    },
    extra: {
      cashback: 'Comprando en el Cyber te llevás un 10% de descuento para usar del 27 al 29/11: te lo enviamos por mail después de tu compra.',
      sorteo: 'Cada día del Cyber sorteamos un cable entre los compradores.'
    },
    trot: { k: 'Combo Cyber', h: 'Vidrio al ' + pv + '% con tu funda', big: '' + pv + '%', url: 'fundas' },   /* panel 'Arma tu set' de la franja rotativa del inicio (Set SATINE apagado en el Cyber) */
    ficha: {
      leather: { kicker: 'Combo Cyber', titulo: 'Sumá el vidrio: te queda al ' + pv + '%',
        texto: 'Con esta funda y el vidrio para tu {serie}, el carrito te descuenta {d1}. Si además sumás un tarjetero, el descuento sube a {d2}: el tarjetero al ' + pt + '%.',
        b1: ['Elegir el vidrio', 'vidrios'], b2: ['Ver tarjeteros', 'tarjeteros'], nota: 'El descuento aparece en el carrito, no en el precio de la ficha. {fin}.' },
      vidrio: { kicker: 'Combo Cyber', titulo: 'Con tu funda Leather, queda al ' + pv + '%',
        texto: 'Sumá la funda Leather de tu {serie} y el carrito te descuenta {d1}. Con un tarjetero además, {d2}.',
        b1: ['Elegir la funda', 'fundas'], b2: ['Ver tarjeteros', 'tarjeteros'], nota: 'El descuento aparece en el carrito, no en el precio de la ficha. {fin}.' },
      tarjetero: { kicker: 'Combo Cyber', titulo: 'Completá el combo: tarjetero al ' + pt + '%',
        texto: 'Con la funda Leather y el vidrio en el carrito, el tarjetero queda al ' + pt + '%: el descuento total es de {d2}.',
        b1: ['Ver fundas Leather', 'fundas'], b2: ['Ver vidrios', 'vidrios'], nota: 'El descuento aparece en el carrito, no en el precio de la ficha. {fin}.' },
      carga: { kicker: 'Cyber SATINE', titulo: '20% off en cables y cargadores',
        texto: 'Ya está aplicado en el precio. {fin}.',
        b1: ['Ver cables y cargadores', 'carga'], b2: null, nota: null },
      funda: { kicker: 'Cyber SATINE', titulo: 'Combos con descuento en el carrito',
        texto: 'Funda Leather + vidrio: el vidrio queda al ' + pv + '% ({d1} menos). Con el tarjetero, al ' + pt + '% ({d2} menos). Y 20% off en cables y cargadores.',
        b1: ['Ver fundas Leather', 'fundas'], b2: ['Cables y cargadores', 'carga'], nota: '{fin}.' },
      otro: { kicker: 'Cyber SATINE', titulo: 'Combos con descuento en el carrito',
        texto: 'Funda Leather + vidrio: el vidrio queda al ' + pv + '% ({d1} menos). Con el tarjetero, al ' + pt + '% ({d2} menos). Y 20% off en cables y cargadores.',
        b1: ['Ver fundas Leather', 'fundas'], b2: ['Cables y cargadores', 'carga'], nota: '{fin}.' }
    },
    fcombo: {   /* 1.7: linea chica dentro de la caja de compra (31/10 19:40, Matias). carga y el resto: nada */
      leather: 'Sumá el vidrio y te queda al ' + pv + '%',
      vidrio: 'Con tu funda Leather, este vidrio queda al ' + pv + '%',
      tarjetero: 'Con funda Leather + vidrio, el tarjetero queda al ' + pt + '%'
    },
    carrito: {   /* el titulo/texto de 'tarjetero' se arma en codigo segun el descuento actual */
      vidrio: { titulo: 'Te falta el vidrio', texto: 'Sumalo y el carrito te descuenta {d1}.', boton: ['Agregar el vidrio', 'vidrios'] },
      tarjetero: { titulo: 'Sumá un tarjetero', texto: 'Con un tarjetero el descuento es de {d1}.', boton: ['Ver tarjeteros', 'tarjeteros'] },
      funda: { titulo: 'Sumá la funda Leather', texto: 'Con lo que ya tenés, el carrito te descuenta {d1}.', boton: ['Elegir la funda', 'fundas'] },
      listo: { titulo: 'Descuento Cyber: −{d0}', texto: 'Ya está aplicado en el total.', boton: ['Cables y cargadores −20%', 'carga'] },
      cyber: { titulo: 'Cyber SATINE · {fin}', texto: 'Funda Leather + vidrio: {desc1} menos. Con tarjetero: {desc2} menos.', boton: ['Armar mi combo', 'fundas'] }
    }
    };
    for (var k in N) T[k] = N[k];
    armarTextosCombos();
  }

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
  function activo(f) {
    if (f === undefined && apagadoPorErp) return false;   /* 1.8: el ERP manda */
    var t = f ? new Date(f).getTime() : Date.now(); return t >= new Date(CFG.desde).getTime() && t < new Date(CFG.hasta).getTime();
  }
  var vista = false;
  try {
    var mv = location.search.match(/[?&]cyber=(\d)/);
    if (mv) { if (mv[1] === '1') localStorage.setItem('satineCyberVista', '1'); else localStorage.removeItem('satineCyberVista'); }
    vista = localStorage.getItem('satineCyberVista') === '1';
  } catch (e) {}

  var API = window.satineCyber = {
    cargado: true, marca: 'satine-cyber', version: CFG.version, cfg: CFG, textos: T, activo: activo, vista: vista,
    prendido: false, prender: arrancar, apagar: apagar, urlCat: urlCat, tipoDe: tipoDe, descuento: descuento, estadoCarrito: null, contrato: null
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
    '#sc-fcombo{display:flex;align-items:center;gap:10px;margin:0 0 4px;padding:10px 12px;border-radius:12px;background:var(--cy-tinta);color:var(--cy-crema)!important;text-decoration:none!important;font:600 13px/1.3 var(--cy-sans);-webkit-tap-highlight-color:transparent;transition:transform .2s cubic-bezier(.22,1,.36,1)}',
    '#sc-fcombo:active{transform:scale(.98)}',
    '#sc-fcombo .sc-fcombo-tag{flex:none;font:800 9.5px/1 var(--cy-sans);letter-spacing:1.2px;text-transform:uppercase;padding:5px 8px 4px;border-radius:999px;background:linear-gradient(135deg,var(--cy-oro2),var(--cy-oro));color:var(--cy-tinta)}',
    '#sc-fcombo .sc-fcombo-txt{flex:1 1 auto;min-width:0;text-wrap:balance}',
    '#sc-fcombo .sc-fcombo-ir{flex:none;font:700 12px/1 var(--cy-sans);color:var(--cy-oro2);white-space:nowrap}',
    /* carrito (drawer y /comprar/) */
    '.sc-carrito{margin:12px 0 4px;background:var(--cy-crema);color:var(--cy-tinta);border-radius:14px;padding:14px 14px 13px;font-family:var(--cy-sans);display:flex;flex-direction:column;gap:9px;align-items:flex-start}',
    '.sc-carrito .sc-cab{display:flex;align-items:center;gap:10px;flex-wrap:wrap}',
    '.sc-carrito h4{font:800 16px/1.2 var(--cy-serif);letter-spacing:-.3px;margin:0;color:var(--cy-tinta)}',
    '.sc-carrito .sc-texto{font-size:12.5px;color:#5e514c}',
    '.sc-carrito .sc-btn{min-height:40px;font-size:12px;padding:0 16px}',
    '.sc-carrito .sc-nota{margin:0;font-size:10.5px}',
    /* 1.9: lineas del carrito con el combo armado */
    '.sc-lbadge{display:inline-block;margin:5px 0 0;padding:3px 8px 2px;border-radius:999px;background:#c0392b;color:#fff!important;font:700 11px/1.2 var(--cy-sans);letter-spacing:.3px;text-transform:uppercase;white-space:nowrap}',
    '[data-cyber-oculto]{display:none!important}',
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
  function ficha(vuelta) {   /* 1.7: sin la tarjeta grande (quedaba arriba del titulo); una linea chica dentro de la caja de compra */
    if (!((window.LS && LS.template === 'product') || q('#single-product')) || q('#sc-fcombo')) return;
    /* la caja #satine-buybox-card la arma otro script despues: esperarla (si no, la linea queda arriba del titulo) */
    var caja = q('#satine-buybox-card'), fo = q('form#product_form');
    if (!(caja && fo && caja.contains(fo)) && (vuelta || 0) < 60) { setTimeout(function () { if (activo()) ficha((vuelta || 0) + 1); }, 250); return; }
    var tipo = tipoDe(), texto = T.fcombo[tipo];
    if (!texto) return;
    var linea = h('a', { id: 'sc-fcombo', 'data-tipo': tipo, href: '/?combos=1', 'aria-label': 'Combo Cyber: ' + texto }, [
      h('span', { 'class': 'sc-fcombo-tag', text: 'Combo Cyber' }),
      h('span', { 'class': 'sc-fcombo-txt', text: texto }),
      h('span', { 'class': 'sc-fcombo-ir', text: 'Armar ›' })
    ]);
    var buybox = q('#satine-buybox-card'), form = q('form#product_form');
    if (buybox && form && buybox.contains(form)) despues(form, linea);
    else if (buybox) buybox.appendChild(linea);
    else if (form) despues(form, linea);
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
  /* 1.9: texto original de un nodo que repintamos (si TN lo cambio en el lugar, vale el de TN) */
  function textoOri(n) {
    if (!n) return '';
    var o = n.getAttribute('data-cyber-orig');
    return (o != null && n.textContent === n.getAttribute('data-cyber-vis')) ? o : n.textContent;
  }
  function numeroDec(t) { var p = String(t || '').replace(/[^\d,]/g, '').split(','); var e = parseInt(p[0] || '0', 10) || 0; var d = p[1] ? (parseInt((p[1] + '00').slice(0, 2), 10) || 0) / 100 : 0; return e + d; }
  function plata2(n) { var f = (Math.round(n * 100) / 100).toFixed(2).split('.'); return '$' + f[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + f[1]; }   /* formato del theme: $25.199,30 */
  function fijarTexto(n, nuevo) {   /* idempotente: guarda el original una sola vez */
    var vis = n.getAttribute('data-cyber-vis');
    if (n.getAttribute('data-cyber-orig') == null || n.textContent !== vis) n.setAttribute('data-cyber-orig', n.textContent);
    if (n.textContent !== nuevo) n.textContent = nuevo;
    n.setAttribute('data-cyber-vis', nuevo); n.setAttribute('data-cyber-linea', '1');
  }
  function devolverTexto(n) {
    var o = n.getAttribute('data-cyber-orig');
    if (o != null && n.textContent === n.getAttribute('data-cyber-vis')) n.textContent = o;
    n.removeAttribute('data-cyber-orig'); n.removeAttribute('data-cyber-vis'); n.removeAttribute('data-cyber-linea');
  }
  function restaurar(raiz) {   /* deshace todo lo que la capa repinto en el carrito (lineas, subtotal, filas ocultas) */
    qa('[data-cyber-linea],[data-cyber-oculto]', raiz).forEach(function (n) {
      if (n.hasAttribute('data-cyber-badge')) { if (n.parentNode) n.parentNode.removeChild(n); return; }
      if (n.hasAttribute('data-cyber-oculto')) { n.removeAttribute('data-cyber-oculto'); n.style.removeProperty('display'); }
      if (n.hasAttribute('data-cyber-cmp')) { n.removeAttribute('data-satine-compare'); n.removeAttribute('data-cyber-cmp'); }
      if (n.hasAttribute('data-cyber-linea')) devolverTexto(n);
    });
  }
  function leerItems(lista) {
    return qa('.js-cart-item[data-store^="cart-item-"]', lista).map(function (el) {
      var cant = parseInt((q('.js-cart-quantity-input', el) || {}).value, 10) || 1;
      var sp = q('.js-cart-item-subtotal', el), ot = textoOri(sp);
      var sub = numero(ot), sub2 = numeroDec(ot);
      var c = q('.satine-cart-compare', el), lista0 = c ? (numeroDec(c.textContent) || (parseFloat(c.getAttribute('data-unit')) / 100) || 0) : 0;
      return { el: el, sp: sp, nombre: txt(q('a[data-component="name.short-name"]', el)) || txt(q('.cart-item-name', el)) || txt(el), variante: txt(q('small[data-component="name.short-variant-name"]', el)), sku: '', precio: sub && cant ? sub / cant : 0, p2: sub2 && cant ? sub2 / cant : 0, lista: lista0, cant: cant };
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
  /* 1.9: que lineas se repintan. La promo de TN es un MONTO fijo (desc1/desc2): solo se muestra el 50%/30% si la rebaja de las lineas
     (precio de hoy - precio con el %) suma ese monto (+-1,5). Si no cierra (2 vidrios, 2 fundas...), no se toca nada. */
  function planLineas(items, e) {
    if (!(e.f > 0 && e.d0 > 0)) return null;
    var conT = e.sub >= CFG.umbral2, plan = [], rebaja = 0;
    items.forEach(function (it) {
      var k = clasificar(it);
      if (!it.sp || !(it.p2 > 0) || (k !== 'vidrio' && !(k === 'tarjetero' && conT))) return;
      var pct = CFG.pct[k], lista = it.lista || it.p2, nuevo = lista * (1 - pct / 100);
      if (!(pct > 0) || nuevo >= it.p2) return;
      plan.push({ it: it, k: k, pct: pct, lista: lista, nuevo: nuevo }); rebaja += (it.p2 - nuevo) * it.cant;
    });
    return plan.length && Math.abs(rebaja - e.d0) <= 1.5 ? plan : null;
  }
  function pintarLinea(pl) {
    var it = pl.it, sp = it.sp;
    fijarTexto(sp, plata2(pl.nuevo * it.cant));
    if (!sp.hasAttribute('data-satine-compare')) { sp.setAttribute('data-satine-compare', plata2(pl.lista * it.cant)); sp.setAttribute('data-cyber-cmp', '1'); }   /* el tachado lo dibuja el CSS del layout */
    var up = q('.js-cart-item-unit-price', it.el); if (up) fijarTexto(up, plata2(pl.nuevo));
    var bd = q('[data-cyber-badge]', it.el), tx = '\u2212' + pl.pct + '%';
    if (!bd) {
      var ref = q('small[data-component="name.short-variant-name"]', it.el) || q('[data-component="line-item.name"]', it.el);
      if (ref && ref.parentNode) { bd = h('span', { 'class': 'sc-lbadge', 'data-cyber-badge': '1', 'data-cyber-linea': '1' }); ref.parentNode.insertBefore(bd, ref.nextSibling); }
    }
    if (bd && bd.textContent !== tx) bd.textContent = tx;
  }
  function aplicarLineas(items, plan) {
    items.forEach(function (it) {
      var pl = null; if (plan) for (var i = 0; i < plan.length; i++) if (plan[i].it === it) pl = plan[i];
      if (pl) pintarLinea(pl); else restaurar(it.el);
    });
  }
  function ocultar(f, si) {   /* inline !important: gana a las reglas !important del theme */
    if (si) { f.setAttribute('data-cyber-oculto', '1'); f.style.setProperty('display', 'none', 'important'); }
    else if (f.hasAttribute('data-cyber-oculto')) { f.removeAttribute('data-cyber-oculto'); f.style.removeProperty('display'); }
  }
  /* subtotal del resumen = lo que cobra el checkout antes del envio; la fila "Descuento" y el detalle de TN se ocultan (ya esta en las lineas) */
  function ajustarResumen(raiz, e, pinta) {
    qa('.satine-resumen .rl', raiz).forEach(function (f) {
      var t = txt(f);
      if (/^subtotal/i.test(t)) { var b = q('b', f); if (!b) return; if (pinta) fijarTexto(b, plata(e.neto)); else if (b.hasAttribute('data-cyber-linea')) devolverTexto(b); }
      else if (/^descuento/i.test(t)) ocultar(f, pinta);
    });
    qa('.js-total-promotions-detail-row', raiz).forEach(function (f) { ocultar(f, pinta); });
    /* 1.9.1: cuando TN ya conoce la direccion del cliente (logueado), .js-cart-total trae el envio adentro y el
       Resumen del theme lo muestra en el Total sin ninguna fila que lo explique (Subtotal $77.998 / Total $85.245).
       Si el Total supera lo que suman las lineas, la diferencia es el envio: se agrega la fila "Envío" para que cierre. */
    qa('.satine-resumen', raiz).forEach(function (res) {
      var fila = q('[data-cyber-envio]', res), rtv = q('.rtv', res), hr = q('.rhr', res);
      var cont = (res.closest && res.closest('#modal-cart, #shoppingCartPage')) || document, jt = q('.js-cart-total', cont);
      var tot = (jt && /\$/.test(txt(jt))) ? numeroDec(txt(jt)) : (rtv ? numeroDec(txt(rtv)) : 0), dif = (pinta && e && tot) ? Math.round((tot - e.neto) * 100) / 100 : 0;
      if (dif >= 1 && hr) {
        if (!fila) { fila = h('div', { 'class': 'rl', 'data-cyber-envio': '1', 'data-cyber-badge': '1', 'data-cyber-linea': '1' }, ['Env\u00edo ', h('b')]); res.insertBefore(fila, hr); }
        var b = q('b', fila), v = plata(dif); if (b && b.textContent !== v) b.textContent = v;
      } else if (fila && fila.parentNode) fila.parentNode.removeChild(fila);
    });
  }
  function tarjetaCarrito(e) {
    var t = T.carrito[e.clave], d = { d0: plata(e.d0), d1: plata(e.d1), fin: CFG.fin, desc1: plata(CFG.desc1), desc2: plata(CFG.desc2) };
    var titulo = rellenar(t.titulo, d), texto = rellenar(t.texto, d);
    if (e.clave === 'vidrio' && e.d0 === 0 && e.d1 === CFG.desc1) texto = texto.replace(/\.$/, '') + ': el vidrio queda al ' + CFG.pct.vidrio + '%.';
    if (e.clave === 'funda' && e.d0 === 0 && e.d1 === CFG.desc1 && e.v && !e.t) texto = texto.replace(/\.$/, '') + ': el vidrio queda al ' + CFG.pct.vidrio + '%.';
    if (e.clave === 'tarjetero') {
      titulo = e.d0 > 0 ? 'Combo armado: −' + plata(e.d0) : 'Sumá un tarjetero';
      texto = 'Con un tarjetero el descuento ' + (e.d0 > 0 ? 'sube a ' : 'es de ') + plata(e.d1) + (e.d0 === CFG.desc1 && e.d1 === CFG.desc2 ? ': queda al ' + CFG.pct.tarjetero + '%.' : '.');
    }
    var nota = null;
    if (e.pinta) {   /* 1.9: las lineas ya muestran el vidrio al 50% (y el tarjetero al 30%): la tarjeta lo dice y explica la linea Descuento del checkout */
      if (e.clave === 'tarjetero' || e.clave === 'listo') titulo = 'Combo armado: el vidrio queda al ' + CFG.pct.vidrio + '%' + (e.pt ? ' y el tarjetero al ' + CFG.pct.tarjetero + '%' : '');
      if (e.clave === 'listo') texto = 'Ya figura en los precios de arriba y en el total.';
      nota = 'En el checkout lo vas a ver como una línea «Descuento» de −' + plata(e.d0) + ((e.total || e.sub) < 100000 ? ', junto con el costo de envío' : '') + '.';
    } else if (e.d0 > 0 && (e.total || e.sub) < 100000) texto += ' En el resumen figura junto con el costo de envío.';   /* sin envio gratis, el theme neta el envio en la linea del descuento */
    var extra = [];
    if (CFG.cashback) extra.push(T.extra.cashback);
    if (CFG.sorteo && (e.clave === 'listo' || e.clave === 'cyber')) extra.push(T.extra.sorteo);
    var href = t.boton ? ((t.boton[1] === 'vidrios' || t.boton[1] === 'fundas') ? urlCat(t.boton[1], e.modelo, '') : (CFG.urls[t.boton[1]] || '/')) : null;
    return h('div', { 'class': 'sc-carrito', 'data-clave': e.clave, 'data-firma': e.firma, role: 'region', 'aria-label': 'Cyber SATINE' }, [
      h('div', { 'class': 'sc-cab' }, [h('span', { 'class': 'sc-pill', text: 'Cyber' }), h('h4', { text: titulo })]),
      h('p', { 'class': 'sc-texto', text: texto }),
      t.boton ? h('a', { 'class': 'sc-btn sc-btn--tinta', href: href, text: t.boton[0] }) : null,
      nota ? h('p', { 'class': 'sc-nota', text: nota }) : null,
      extra.length ? h('p', { 'class': 'sc-nota', text: extra.join(' ') }) : null
    ]);
  }
  var carritoTimer = null, carritoObs = null, carritoPend = null;
  function carrito() {
    qa('.js-ajax-cart-list').forEach(function (lista) {
      var cont = lista.parentNode; if (!cont) return;
      var raiz = (lista.closest && lista.closest('#modal-cart, #shoppingCartPage')) || document;
      var previas = qa('.sc-carrito', cont).filter(function (c) { return c.parentNode === cont; });
      var items = leerItems(lista);
      if (!items.length) { previas.forEach(function (c) { c.parentNode.removeChild(c); }); ajustarResumen(raiz, null, false); return; }
      var e = estadoDe(items); e.total = items.reduce(function (a, it) { return a + (it.precio || 0) * (it.cant || 1); }, 0);
      var plan = planLineas(items, e); e.pinta = !!plan; e.pt = !!plan && plan.some(function (p) { return p.k === 'tarjetero'; });
      e.neto = items.reduce(function (a, it) { return a + (it.p2 || it.precio || 0) * (it.cant || 1); }, 0) - e.d0;   /* lo que cobra el checkout antes del envio */
      aplicarLineas(items, plan); ajustarResumen(raiz, e, e.pinta);   /* se re-aplica en cada pasada: es idempotente */
      e.firma = [e.clave, e.d0, e.d1, e.modelo, e.n, e.pinta ? 1 : 0, e.pt ? 1 : 0].join('|');
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

  /* ---------- 6. pagina de combos (/?combos=1): de Set SATINE (%) a Combo Cyber ($) ---------- */
  /* El armador vive en satine-v230-4.js (#satine-combos) y NO se toca. Durante el Cyber aca solo se cambian los textos de arriba,
     los chips, una nota por seccion, el orden de las secciones y la cuenta de abajo (que pasa de "−5%/−10%" al descuento real en
     pesos de la promo 1269900). Todo lo original se guarda y vuelve en apagar(). */
  function armarTextosCombos() {
    var pv = CFG.pct.vidrio, pt = CFG.pct.tarjetero;
    T.combos = {
    kick: 'Combo Cyber · ' + CFG.fin,
    h1: 'Armá tu combo Cyber',
    sub: 'Con tu funda Leather, el vidrio te queda al ' + pv + '%. Sumá un tarjetero y te queda al ' + pt + '%. Se descuenta solo en el carrito.',
    tiers: [['Funda + vidrio', CFG.desc1], ['+ tarjetero', CFG.desc2]],
    rapidos: [['Combo básico', ['funda|0', 'vidrio|0']], ['Combo completo', ['funda|0', 'vidrio|0', 'tarj|0']], ['Completo + cable', ['funda|0', 'vidrio|0', 'tarj|0', 'carga|2']]],
    notas: {
      funda: ['si', 'Suma al combo Cyber'],
      vidrio: ['si', 'Con tu funda, al ' + pv + '%'],
      tarj: ['si', 'En el combo completo, al ' + pt + '%'],
      carga: ['oro', '20% OFF ya aplicado en el precio'],
      urban: ['no', 'No suma al combo Cyber'],
      billetera: ['no', 'No suma al combo Cyber'],
      extra: ['no', 'No suma al combo Cyber']
    },
    orden: ['funda', 'vidrio', 'tarj', 'carga', 'urban', 'billetera', 'extra']
    };
  }
  CSS = (typeof CSS === 'string' ? CSS : CSS.join('')) + [
    '#satine-combos .sc-cy-tier b{color:#2f8a55}',
    '#satine-combos .sc-cy-nota{display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:5px 11px;border-radius:100px;',
    'font-family:var(--cy-sans);font-size:11px;font-weight:700;letter-spacing:.01em;line-height:1.2}',
    '#satine-combos .sc-cy-nota:before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor;flex:none}',
    '#satine-combos .sc-cy-nota.si{background:#eaf4ee;color:#2f7a4e}',
    '#satine-combos .sc-cy-nota.oro{background:#fbf0dc;color:#8a5a12}',
    '#satine-combos .sc-cy-nota.no{background:rgba(52,33,27,.05);color:rgba(52,33,27,.55)}'
  ].join('');

  var combosOrig = null, combosObs = null, combosEspera = null;
  function combosGuardar(raiz) {
    if (combosOrig) return;
    combosOrig = { raiz: raiz, textos: [], rapidos: [], tiers: null };
    ['.scb-kick', '.scb-h1', '.scb-sub'].forEach(function (s) { var el = q(s, raiz); if (el) combosOrig.textos.push([el, el.textContent]); });
    qa('#scb-quick .scb-qchip', raiz).forEach(function (b) { combosOrig.rapidos.push([b, b.textContent, b.getAttribute('data-k')]); });
  }
  function combosCabeza(raiz) {
    var C = T.combos;
    [['.scb-kick', C.kick], ['.scb-h1', C.h1], ['.scb-sub', C.sub]].forEach(function (p) { var el = q(p[0], raiz); if (el && el.textContent !== p[1]) el.textContent = p[1]; });
    var tiers = q('#scb-tiers', raiz);
    if (tiers && !q('.sc-cy-tier', tiers)) {
      if (combosOrig.tiers == null) combosOrig.tiers = tiers.innerHTML;
      tiers.innerHTML = '';
      C.tiers.forEach(function (t) { var s = h('span', { 'class': 'scb-tier sc-cy-tier' }); s.appendChild(document.createTextNode(t[0])); var b = document.createElement('b'); b.textContent = '−' + plata(t[1]); s.appendChild(b); tiers.appendChild(s); });
    }
    qa('#scb-quick .scb-qchip', raiz).forEach(function (b, i) {
      var r = C.rapidos[i]; if (!r) return;
      var k = JSON.stringify(r[1]);
      if (b.textContent !== r[0]) b.textContent = r[0];
      if (b.getAttribute('data-k') !== k) b.setAttribute('data-k', k);
    });
  }
  function combosSecciones(raiz) {
    var cont = q('#scb-secs', raiz); if (!cont) return;
    var secs = qa('.scb-sec[data-sec]', cont);
    secs.forEach(function (s, i) {
      if (!s.hasAttribute('data-sc-i')) s.setAttribute('data-sc-i', String(i));
      var id = s.getAttribute('data-sec'), nota = T.combos.notas[id], cab = q('.scb-sec-h', s);
      if (nota && cab && !q('.sc-cy-nota', s)) despues(cab, h('div', { 'class': 'sc-cy-nota ' + nota[0] }, [nota[1]]));
    });
    var orden = T.combos.orden, pos = function (s) { var i = orden.indexOf(s.getAttribute('data-sec')); return i < 0 ? 99 : i; };
    var quiero = secs.slice().sort(function (a, b) { return pos(a) - pos(b) || (+a.getAttribute('data-sc-i')) - (+b.getAttribute('data-sc-i')); });
    var igual = quiero.every(function (s, i) { return s === secs[i]; });
    if (!igual) quiero.forEach(function (s) { cont.appendChild(s); });
  }
  function combosCuenta(raiz) {
    var keys = qa('#scbp-tray .scbp-chip[data-k]', raiz).map(function (c) { return c.getAttribute('data-k'); });
    if (!keys.length) keys = qa('#scb-secs .scb-opt.on[data-k]', raiz).map(function (o) { return o.getAttribute('data-k'); });
    var vistos = {}, sub = 0, total = 0, n = 0, tiene = {};
    var resp = { funda: CFG.precios.funda, vidrio: CFG.precios.vidrio, tarj: CFG.precios.tarjetero };
    keys.forEach(function (k) {
      if (!k || vistos[k]) return; vistos[k] = 1;
      var sec = k.split('|')[0], o = q('#scb-secs .scb-opt[data-k="' + k + '"]', raiz);
      var p = (o && parseFloat(o.getAttribute('data-p'))) || resp[sec] || 0;
      n++; total += p; tiene[sec] = (tiene[sec] || 0) + 1;
      if (sec === 'funda' || sec === 'vidrio' || sec === 'tarj') sub += p;
    });
    var d = descuento(sub), fin = total - d;
    var cnt = n ? n + ' producto' + (n > 1 ? 's' : '') + (d === CFG.desc2 ? ' · Combo completo' : d ? ' · Combo básico' : '') : 'Tu combo está vacío';
    var lbl;
    if (sub >= CFG.umbral2) lbl = 'Combo completo ✓ Ahorrás ' + plata(d);
    else if (sub >= CFG.umbral1) lbl = tiene.tarj ? 'Sumá ' + plata(CFG.umbral2 - sub) + ' más y ahorrás ' + plata(CFG.desc2) : 'Sumá un tarjetero: te queda al ' + CFG.pct.tarjetero + '%';
    else if (!tiene.funda && !tiene.vidrio && !tiene.tarj) lbl = 'Empezá por tu funda Leather';
    else if (tiene.funda && !tiene.vidrio) lbl = 'Sumá un vidrio y te queda al ' + CFG.pct.vidrio + '%';
    else if (!tiene.funda) lbl = 'Sumá tu funda Leather';
    else lbl = 'Sumá ' + plata(CFG.umbral1 - sub) + ' más y ahorrás ' + plata(CFG.desc1);
    var poner = function (id, v) { var el = document.getElementById(id); if (el && el.textContent !== v) el.textContent = v; };
    poner('scb-cnt', cnt); poner('scb-tot', n ? plata(fin) : '$0'); poner('scb-sv', d ? 'Ahorrás ' + plata(d) : ''); poner('scbp-lbl', lbl);
    var fill = document.getElementById('scbp-fill'), w = Math.min(100, Math.round(sub / CFG.umbral2 * 100)) + '%';
    if (fill && fill.style.width !== w) fill.style.width = w;
    var ts = qa('#scb-tiers .scb-tier', raiz);
    if (ts[0]) ts[0].classList.toggle('scbp-hit', sub >= CFG.umbral1);
    if (ts[1]) ts[1].classList.toggle('scbp-hit', sub >= CFG.umbral2);
  }
  function combosAplicar() {
    var raiz = q('#satine-combos'); if (!raiz || !prendido) return;
    combosGuardar(raiz);
    try { combosCabeza(raiz); } catch (e) {}
    try { combosSecciones(raiz); } catch (e) {}
    try { combosCuenta(raiz); } catch (e) {}
  }
  function esCombos() { return window.__satineCombos || /[?&]combos=1/.test(location.search) || /\/combos\/?$/.test(location.pathname); }
  function combos() {
    if (!esCombos()) return;
    var vueltas = 0;
    var mirar = function () {
      var raiz = q('#satine-combos');
      if (!raiz) { if (++vueltas < 120) combosEspera = setTimeout(mirar, 250); return; }
      combosEspera = null;
      combosAplicar();
      if (!combosObs && window.MutationObserver) {
        combosObs = new MutationObserver(function () { combosAplicar(); });
        combosObs.observe(raiz, { childList: true, subtree: true, characterData: true });
      }
    };
    mirar();
  }
  function combosVolver() {
    if (combosEspera) { clearTimeout(combosEspera); combosEspera = null; }
    if (combosObs) { combosObs.disconnect(); combosObs = null; }
    if (!combosOrig) return;
    var raiz = combosOrig.raiz;
    combosOrig.textos.forEach(function (p) { p[0].textContent = p[1]; });
    combosOrig.rapidos.forEach(function (p) { p[0].textContent = p[1]; if (p[2] == null) p[0].removeAttribute('data-k'); else p[0].setAttribute('data-k', p[2]); });
    var tiers = q('#scb-tiers', raiz);
    if (tiers && combosOrig.tiers != null && !q('.scb-tier:not(.sc-cy-tier)', tiers)) tiers.innerHTML = combosOrig.tiers;   /* el barrido de [data-sc] ya pudo sacar los chips Cyber */
    var cont = q('#scb-secs', raiz);
    if (cont) qa('.scb-sec[data-sc-i]', cont).sort(function (a, b) { return (+a.getAttribute('data-sc-i')) - (+b.getAttribute('data-sc-i')); })
      .forEach(function (s) { cont.appendChild(s); s.removeAttribute('data-sc-i'); });
    combosOrig = null;
  }

  /* ---------- 1.10: estetica temporal de la web desde Promociones (barra, acento, etiquetas, banner, ficha) ----------
     Lee campana.visual.estetica del contrato (y otras[]). Sin contrato o con algo raro, no pinta nada. No depende de Cyber. */
  var esteBloques = [], esteObs = null, esteTimer = null, esteCuentaTimer = null, esteVis = null, esteSig = '';
  /* ---------- 1.11: banners de portada y de ficha + reserva de espacio ----------
     RESERVA: al recibir la estetica se guarda en localStorage 'sc_est_reserva' que rutas llevan banner y cuanto miden (formato en docs del ERP / LEEME del lote de theme):
       {"v":1,"hasta":<ms>,"barra":0|1,"home":{"c":{"r":1.3333},"p":{"r":3}}|null,"ficha":{"c":{"r":4},"p":{"r":5}}|null,"cat":{"/fundas/":{"c":{"r":2},"p":{"r":4}}}}
     c = celular (<768 px), p = compu. r = proporcion ancho/alto (banner con imagen); h = alto en px (banner de texto, medido en este aparato).
     Un script chico en el <head> del theme (layout v273) lo lee en la visita siguiente y deja un div hueco (data-sc-rsv) con la proporcion del banner ANTES del primer pintado; aca lo sacamos en el mismo instante en que
     se inserta el banner (misma tarea de JS, sin pintado en el medio), asi que el alto neto es cero. Sin registro, o con vista previa, el head no hace nada. */
  var RSV_CLAVE = 'sc_est_reserva', RSV_TOPE = 6 * 3600e3;
  var RSV_ASP = { cat: { c: 2, p: 4 }, home: { c: 4 / 3, p: 3 }, ficha: { c: 4, p: 5 } };   /* mismas proporciones que el CSS de abajo */
  function rsvClase() { try { return window.matchMedia('(min-width:768px)').matches ? 'p' : 'c'; } catch (e) { return 'c'; } }
  function rsvSoltar() {
    try {
      var w = document.querySelectorAll('[data-sc-rsv]'), i;   /* huecos que puso el head del theme (layout v273) */
      for (i = 0; i < w.length; i++) if (w[i].parentNode) w[i].parentNode.removeChild(w[i]);
      var s = document.getElementById('sc-rsv-css'); if (s && s.parentNode) s.parentNode.removeChild(s);
    } catch (e) {}
  }
  function rsvLeer() { try { var j = JSON.parse(localStorage.getItem(RSV_CLAVE) || 'null'); return j && j.v === 1 ? j : null; } catch (e) { return null; } }
  function rsvBorrar() { if (estePrev) return; try { localStorage.removeItem(RSV_CLAVE); } catch (e) {} }
  function esteImgs(o) { return { pc: esteImg(o && o.pc), cel: esteImg(o && o.cel) }; }
  function esteHomeDe(camps) {   /* portada: gana la primera campana con home.activa y algo para mostrar (imagen o titulo de la tarjeta del inicio) */
    for (var i = 0; i < camps.length; i++) {
      var c = camps[i], e = c.visual.estetica; if (!(e.home && e.home.activa === true)) continue;
      var vh = (c.visual.home && typeof c.visual.home === 'object') ? c.visual.home : {}, im = esteImgs(e.home.imagen);
      if (im.pc || im.cel || (typeof vh.titulo === 'string' && vh.titulo)) return { c: c, e: e, vh: vh, im: im };
    }
    return null;
  }
  function esteFichaDe(camps) {   /* ficha: banner solo con imagen (el contrato no trae texto para el) */
    for (var i = 0; i < camps.length; i++) {
      var c = camps[i], e = c.visual.estetica, b = e.ficha && e.ficha.banner; if (!(b && b.activa === true)) continue;
      var im = esteImgs(b.imagen); if (im.pc || im.cel) return { c: c, e: e, b: b, im: im };
    }
    return null;
  }
  function rsvArmar(camps, medidas) {
    var r = { v: 1, hasta: 0, barra: 0, home: null, ficha: null, cat: {} }, n = 0, hasta = Date.now() + RSV_TOPE, prev = rsvLeer(), k = rsvClase(), otra = k === 'c' ? 'p' : 'c';
    var usar = function (c) { if (c.hasta) { var t = new Date(c.hasta).getTime(); if (t < hasta) hasta = t; } };
    var ent = function (asp, txt, previo, medida) {   /* con imagen: proporcion fija en los dos; de texto: alto medido en el aparato actual (y lo que ya sabiamos del otro) */
      var o = {};
      if (!txt) { o.c = { r: asp.c }; o.p = { r: asp.p }; return o; }
      if (previo && previo[otra] && previo[otra].h > 0) o[otra] = { h: previo[otra].h };
      if (previo && previo[k] && previo[k].h > 0) o[k] = { h: previo[k].h };   /* en una pagina donde este banner no esta, se conserva lo medido antes */
      if (medida > 0) o[k] = { h: medida };
      return o;
    };
    var med = function (clave, ruta) { for (var i = 0; i < medidas.length; i++) if (medidas[i].k === clave && (clave !== 'cat' || medidas[i].ruta === ruta)) return medidas[i].h; return 0; };
    camps.forEach(function (c) {
      var e = c.visual.estetica, ca = e.categoria;
      if (!r.barra && e.barra && e.barra.activa && e.barra.mensaje) { r.barra = 1; usar(c); }
      if (ca && ca.activa && ca.rutas && ca.rutas.forEach) ca.rutas.forEach(function (ru) {
        if (typeof ru !== 'string' || r.cat[ru]) return;
        var im = esteImgs(ca.imagen), o = ent(RSV_ASP.cat, !(im.pc || im.cel), prev && prev.cat && prev.cat[ru], med('cat', ru));
        if (o.c || o.p) { r.cat[ru] = o; n++; usar(c); }
      });
    });
    var hm = esteHomeDe(camps);
    if (hm) { var oh = ent(RSV_ASP.home, !(hm.im.pc || hm.im.cel), prev && prev.home, med('home')); if (oh.c || oh.p) { r.home = oh; n++; usar(hm.c); } }
    var fi = esteFichaDe(camps);
    if (fi) { r.ficha = ent(RSV_ASP.ficha, false); n++; usar(fi.c); }
    if (!n && !r.barra) return null;
    r.hasta = hasta;
    return hasta > Date.now() ? r : null;
  }
  function rsvGuardar(camps, medidas) {
    if (estePrev) return;
    try {
      var r = rsvArmar(camps, medidas);
      if (r) localStorage.setItem(RSV_CLAVE, JSON.stringify(r)); else localStorage.removeItem(RSV_CLAVE);
    } catch (e) {}
  }
  function esteFoto(pc, cel, alt, d) {   /* <picture> con width/height (proporcion conocida antes de bajar la foto), decoding async; fetchpriority=high solo la de arriba del pliegue */
    var pic = esteEl('picture');
    if (cel) { var s = esteEl('source'); s.media = '(max-width:767px)'; s.srcset = cel; s.setAttribute('width', d.cw); s.setAttribute('height', d.ch); pic.appendChild(s); }
    var im = esteEl('img'); im.src = pc || cel; im.alt = alt || ''; im.setAttribute('width', d.pw); im.setAttribute('height', d.ph); im.decoding = 'async';
    if (d.alta) im.setAttribute('fetchpriority', 'high'); else im.setAttribute('loading', 'lazy');
    pic.appendChild(im); return pic;
  }
  function esteEl(tag, cls, txt) { var n = document.createElement(tag); if (cls) n.className = cls; if (txt) n.textContent = txt; return n; }
  function esteSeguro(u) { return typeof u === 'string' && (/^\/(?![\/\\])[^\\\s\x00-\x1f]*$/.test(u) || /^https:\/\/(www\.)?satinecases\.com(\/|$)/i.test(u)) ? u : ''; }
  function esteImg(u) { return typeof u === 'string' && /^https:\/\/[^\s,]+$/i.test(u) ? u : ''; }   /* https y sin espacios ni comas (srcset las toma como otro candidato) */
  function esteCampanas(d) {
    var l = [], ahora = Date.now();
    try {
      [d.campana].concat(d.otras || []).forEach(function (c) {
        if (!c || typeof c !== 'object' || !c.visual || !c.visual.estetica || c.visual.estetica.activa !== true) return;
        if (c.estado !== 'vista_previa') {
          if (c.desde && ahora < new Date(c.desde).getTime()) return;
          if (c.hasta && ahora >= new Date(c.hasta).getTime()) return;
        }
        l.push(c);
      });
    } catch (e) { return []; }
    return l;
  }
  function esteLimpiar() {
    if (esteObs) { esteObs.disconnect(); esteObs = null; }
    if (esteCuentaTimer) { clearInterval(esteCuentaTimer); esteCuentaTimer = null; }
    if (esteVis) { document.removeEventListener('visibilitychange', esteVis); esteVis = null; }
    if (esteTimer) { clearTimeout(esteTimer); esteTimer = null; }
    qa('[data-sc-est]').forEach(function (n) { if (n !== document.documentElement && n.parentNode) n.parentNode.removeChild(n); });   /* ojo: <html> tambien lleva data-sc-est */
    qa('[data-sc-est-pos]').forEach(function (n) { n.style.position = ''; n.removeAttribute('data-sc-est-pos'); });
    var e = document.getElementById('sc-est-css'); if (e && e.parentNode) e.parentNode.removeChild(e);
    document.documentElement.removeAttribute('data-sc-est');
    esteSig = '';
  }
  function esteFinAR(hasta) {   /* "dom 16/11" en hora Argentina; si cae a las 00:00 AR, el dia anterior (igual que textoFinAR del ERP) */
    var t = new Date(hasta).getTime(); if (isNaN(t)) return '';
    var a = new Date(t - 3 * 3600e3);
    if (a.getUTCHours() === 0 && a.getUTCMinutes() === 0) a = new Date(a.getTime() - 86400e3);
    var dd = ['dom', 'lun', 'mar', 'mi\u00e9', 'jue', 'vie', 's\u00e1b'][a.getUTCDay()];
    return dd + ' ' + ('0' + a.getUTCDate()).slice(-2) + '/' + ('0' + (a.getUTCMonth() + 1)).slice(-2);
  }
  function esteMarcas(txt, c, pid) {   /* {etiqueta} = la de la regla que gana para este producto; {fin} = fin de la promocion */
    var mejor = null, peso = -1;
    (c.reglas || []).forEach(function (r) {
      var ids = r.alcance && r.alcance.productos_resueltos;
      if (r.etiqueta && ids && ids.indexOf(+pid) >= 0 && (+r.etiqueta_peso || 0) > peso) { mejor = r.etiqueta; peso = +r.etiqueta_peso || 0; }
    });
    var o = String(txt);
    if (!c.hasta) o = o.replace(/\s*(?:,\s*)?(?:hasta\s+(?:el\s+)?)?\{fin\}\.?/gi, '');   /* sin fecha de fin se va la frase entera: no queda 'hasta .' */
    o = o.replace(/\{etiqueta\}/g, mejor || '').replace(/\{fin\}/g, c.hasta ? esteFinAR(c.hasta) : '');
    if (!mejor || !c.hasta) o = o.replace(/\s*(?:[\u00b7|]|\s[-\u2013]\s)\s*(?=(?:[\u00b7|]|\s[-\u2013]\s)|$)/g, ' ').replace(/^\s*(?:[\u00b7|]|[-\u2013]\s)\s*/, '')
      .replace(/([:\u00b7|])\s*[\u00b7|]\s*/g, '$1 ');
    return o.replace(/\s{2,}/g, ' ').trim();
  }
  function esteTiempo(hasta) {
    var s = Math.max(0, Math.floor((new Date(hasta).getTime() - Date.now()) / 1000));
    var d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60);
    return (d ? d + 'd ' : '') + (h < 10 ? '0' : '') + h + 'h ' + (m < 10 ? '0' : '') + m + 'm';
  }
  function esteHex(h) { return typeof h === 'string' && /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(h); }
  function esteRgb(h) { var x = h.slice(1); if (x.length === 3) x = x[0] + x[0] + x[1] + x[1] + x[2] + x[2]; return parseInt(x.slice(0, 2), 16) + ',' + parseInt(x.slice(2, 4), 16) + ',' + parseInt(x.slice(4, 6), 16); }
  function esteClaro(h) {   /* true si el color es demasiado claro para leerse como letra sobre blanco */
    if (!esteHex(h)) return true;
    var x = h.slice(1); if (x.length === 3) x = x[0] + x[0] + x[1] + x[1] + x[2] + x[2];
    return (0.2126 * parseInt(x.slice(0, 2), 16) + 0.7152 * parseInt(x.slice(2, 4), 16) + 0.0722 * parseInt(x.slice(4, 6), 16)) / 255 > 0.6;
  }
  function esteCol(c, p, clave, defecto) { var k = c.visual.estetica[clave] || defecto; return (p && p[k]) || (p && p[defecto]) || { fondo: '#34211b', texto: '#f5f0e5' }; }
  function estePintar(camps) {
    esteLimpiar();
    if (!camps.length) { rsvBorrar(); rsvSoltar(); return; }
    var medidas = [];
    var pri = camps[0], E0 = pri.visual.estetica, P = E0.paleta || {}, css = [];
    document.documentElement.setAttribute('data-sc-est', '1');
    /* acento: el de la primera campana que lo define */
    camps.some(function (c) {
      var k = c.visual.estetica.acento, a = k && c.visual.estetica.paleta && c.visual.estetica.paleta[k];
      if (!a) return false;
      css.push('html[data-sc-est] .js-addtocart.btn-primary,html[data-sc-est] .btn-primary.js-addtocart{background:' + a.fondo + '!important;border-color:' + a.fondo + '!important;color:' + a.texto + '!important}');
      if (!esteHex(a.fondo) || !esteHex(a.texto)) return true;
      /* 1.12: el acento llega a todo lo que habla de la promocion. Un acento muy claro (dorado, crema) no se usa como color de letra sobre blanco. */
      var tx = esteClaro(a.fondo) ? '' : a.fondo, H = 'html[data-sc-est] body :is(#sc-est-x,*) ';
      if (tx) css.push('html[data-sc-est]{--satine-oferta-rojo:' + tx + '}');   /* precio: solo el rebajado de verdad (el theme lo pinta con esta variable cuando hay tachado) */
      var rgb = esteRgb(a.fondo);   /* la linea de combo del theme es una ficha: punto + fondo suave + borde, los tres en el acento */
      css.push('html[data-sc-est] .js-item-product .js-item-price-container.item-price-container[data-satine-combo]::after{' + (tx ? 'color:' + tx + '!important;' : '') + 'background:radial-gradient(circle at 9px 50%,' + a.fondo + ' 2.5px,rgba(' + rgb + ',0) 3px) no-repeat,rgba(' + rgb + ',.1)!important;box-shadow:inset 0 0 0 1px rgba(' + rgb + ',.4)!important}',
        H + 'div.js-promotion-label-private.label.label,' + H + '.label.js-offer-label.js-offer-label{background:' + a.fondo + '!important;border-color:' + a.fondo + '!important;color:' + a.texto + '!important}',
        H + 'div.js-promotion-label-private.label.label *,' + H + '.label.js-offer-label.js-offer-label *{color:' + a.texto + '!important}');
      return true;
    });
    css.push(
      '.sc-est-barra{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;align-items:center;justify-content:center;gap:10px;z-index:10001;font:700 11px/1.2 var(--cy-sans,system-ui,sans-serif);letter-spacing:.04em;text-transform:uppercase;text-align:center;padding:0 12px;overflow:hidden;white-space:nowrap}',
      '.sc-est-barra a{color:inherit;text-decoration:none;display:flex;gap:10px;align-items:center;max-width:100%}',
      '.sc-est-barra span{overflow:hidden;text-overflow:ellipsis}',
      '.sc-est-cuenta{font-variant-numeric:tabular-nums;opacity:.85}',
      '.sc-est-pill{position:absolute;left:8px;top:8px;z-index:3;padding:3px 9px;border-radius:999px;font:700 11px/1.3 var(--cy-sans,system-ui,sans-serif);pointer-events:none;letter-spacing:.02em}',
      '.sc-est-banner{display:block;margin:0 0 16px;border-radius:16px;overflow:hidden;text-decoration:none;position:relative}',
      '.sc-est-banner-img{aspect-ratio:2/1;background:rgba(0,0,0,.04)}@media(min-width:768px){.sc-est-banner-img{aspect-ratio:4/1}}',
      '.sc-est-banner picture,.sc-est-banner img{display:block;width:100%;height:100%;object-fit:cover}',
      '.sc-est-banner-txt{padding:20px 18px;min-height:96px;display:flex;flex-direction:column;justify-content:center;gap:4px}',
      '.sc-est-banner-txt b{font:700 20px/1.2 var(--cy-serif,system-ui,sans-serif)}',
      '.sc-est-banner-txt span{font:500 13px/1.4 var(--cy-sans,system-ui,sans-serif);opacity:.9}',
      '.sc-est-banner-txt i{font:700 12px/1 var(--cy-sans,system-ui,sans-serif);font-style:normal;text-decoration:underline;margin-top:4px}',
      '.sc-est-ficha{display:block;margin:10px 0;padding:10px 12px;border-radius:12px;font:600 13px/1.35 var(--cy-sans,system-ui,sans-serif);text-decoration:none}',
      /* 1.11: portada. Ancho = min(100% - 24px, 1200px) y proporcion 4/3 en celular, 3/1 en compu (el head del theme reserva con la misma cuenta) */
      '.sc-est-home{display:block;position:relative;box-sizing:border-box;width:min(100% - 24px,1200px);margin:0 auto 20px;border-radius:16px;overflow:hidden;text-decoration:none;color:#f5f0e5;background:#34211b}',
      '.sc-est-home-img{aspect-ratio:4/3}@media(min-width:768px){.sc-est-home-img{aspect-ratio:3/1}}',
      '.sc-est-home picture,.sc-est-home img{display:block;width:100%;height:100%;object-fit:cover}',
      '.sc-est-home-tx{display:flex;flex-direction:column;gap:6px;padding:24px 20px;align-items:flex-start}',
      '.sc-est-home-img .sc-est-home-tx{position:absolute;left:0;right:0;bottom:0;padding:56px 20px 18px;color:#f5f0e5;background:linear-gradient(to top,rgba(52,33,27,.86),rgba(52,33,27,0))}',
      '.sc-est-home-tx small{font:700 11px/1.2 var(--cy-sans,system-ui,sans-serif);letter-spacing:.08em;text-transform:uppercase;opacity:.85}',
      '.sc-est-home-tx b{font:700 22px/1.15 var(--cy-serif,system-ui,sans-serif);max-width:26em}',
      '.sc-est-home-tx span{font:500 13px/1.4 var(--cy-sans,system-ui,sans-serif);opacity:.92;max-width:34em;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}',
      '.sc-est-home-tx i{font:700 13px/1 var(--cy-sans,system-ui,sans-serif);font-style:normal;margin-top:6px;padding:0 20px;min-height:44px;display:inline-flex;align-items:center;border-radius:999px;background:#f5f0e5;color:#34211b}',
      '@media(min-width:768px){.sc-est-home-tx{padding:32px 40px}.sc-est-home-img .sc-est-home-tx{padding:72px 40px 28px}.sc-est-home-tx b{font-size:30px}.sc-est-home-tx span{font-size:15px}}',
      /* 1.11: ficha. Franja de imagen debajo del boton de compra, 4/1 en celular y 5/1 en compu */
      '.sc-est-fbn{display:block;margin:12px 0 0;border-radius:12px;overflow:hidden;text-decoration:none;aspect-ratio:4/1;background:rgba(0,0,0,.04)}@media(min-width:768px){.sc-est-fbn{aspect-ratio:5/1}}',
      '.sc-est-fbn picture,.sc-est-fbn img{display:block;width:100%;height:100%;object-fit:cover}'
    );
    var st = esteEl('style'); st.id = 'sc-est-css'; st.setAttribute('data-sc-est', '1'); st.textContent = css.join('\n'); document.head.appendChild(st);

    /* barra: encima de la franja existente (sin mover nada de la pagina) */
    camps.some(function (c) {
      var e = c.visual.estetica, ad = q('section.js-adbar');
      if (!(e.barra && e.barra.activa && e.barra.mensaje && ad)) return false;
      var col = esteCol(c, e.paleta, 'x', 'marron'); var k = e.barra.fondo; if (e.paleta && e.paleta[k]) col = e.paleta[k];
      if (getComputedStyle(ad).position === 'static') { ad.style.position = 'relative'; ad.setAttribute('data-sc-est-pos', '1'); }
      var b = esteEl('div', 'sc-est-barra'); b.setAttribute('data-sc-est', '1'); b.style.background = col.fondo; b.style.color = col.texto;
      var dest = esteSeguro(e.barra.destino), cont = esteEl(dest ? 'a' : 'div'); if (dest) cont.href = dest;
      cont.appendChild(esteEl('span', '', e.barra.mensaje));
      if (e.barra.cuenta && c.hasta) {
        var cu = esteEl('span', 'sc-est-cuenta', esteTiempo(c.hasta)); cont.appendChild(cu);
        var tic = function () {
          if (document.hidden) return;
          if (Date.now() >= new Date(c.hasta).getTime()) { esteLimpiar(); rsvBorrar(); return; }   /* vencio: la estetica se va sola */
          cu.textContent = esteTiempo(c.hasta);
        };
        esteCuentaTimer = setInterval(tic, 1000);
        document.addEventListener('visibilitychange', esteVis = function () { if (!document.hidden) tic(); });
      }
      b.appendChild(cont); ad.appendChild(b);
      return true;
    });

    /* etiquetas en las fotos: una por producto, gana el mayor descuento */
    var mapa = {};
    camps.forEach(function (c) {
      var e = c.visual.estetica; if (!(e.etiqueta && e.etiqueta.activa)) return;
      (c.reglas || []).forEach(function (r) {
        var txt = (e.etiqueta.texto || r.etiqueta || '').slice(0, 24); if (!txt) return;
        var peso = +r.etiqueta_peso || 0, ids = r.alcance && r.alcance.productos_resueltos;
        if (!ids || !ids.length) return;
        var col = (e.acento && e.paleta && e.paleta[e.acento]) || (e.paleta && e.paleta.rojo) || { fondo: '#c0392b', texto: '#fff' };
        ids.forEach(function (id) { if (!mapa[id] || mapa[id].peso < peso) mapa[id] = { txt: txt, peso: peso, col: col }; });
      });
    });
    var hayEt = false; for (var k0 in mapa) { hayEt = true; break; }
    var poner = function () {
      try {
        qa('.js-item-product[data-product-id]').forEach(function (it) {
          if (it.querySelector('.sc-est-pill')) return;
          var m = mapa[it.getAttribute('data-product-id')]; if (!m) return;
          var img = it.querySelector('.item-image, .js-item-image-container, picture, img'); var host = img && (img.tagName === 'IMG' ? img.parentNode : img); if (!host) return;
          if (getComputedStyle(host).position === 'static') { host.style.position = 'relative'; host.setAttribute('data-sc-est-pos', '1'); }
          var p = esteEl('span', 'sc-est-pill', m.txt); p.setAttribute('data-sc-est', '1');
          p.style.setProperty('background', m.col.fondo, 'important'); p.style.setProperty('color', m.col.texto, 'important');   /* 1.12: con important, porque la portada deja transparente todo lo que va sobre la foto */
          host.appendChild(p);
        });
      } catch (e) {}
    };
    if (hayEt) {
      poner();
      if (typeof MutationObserver === 'function' && document.body) {
        esteObs = new MutationObserver(function () { if (esteTimer) return; esteTimer = setTimeout(function () { esteTimer = null; poner(); }, 200); });
        esteObs.observe(document.body, { childList: true, subtree: true });
      }
    }

    /* banner de categoria: arriba de la grilla; la imagen va en una caja de proporcion fija (4/1 escritorio, 2/1 celular) para que no cambie de alto al cargar. Se inserta al llegar el contrato (no hay copia previa del contrato completo en storage), asi que el banner en si empuja la grilla una vez. */
    var ruta = location.pathname.toLowerCase().replace(/\/?$/, '/');
    camps.some(function (c) {
      var e = c.visual.estetica, ca = e.categoria;
      if (!(ca && ca.activa && ca.rutas && ca.rutas.indexOf(ruta) >= 0)) return false;
      var dest = esteSeguro(ca.boton && ca.boton.destino), col = (e.paleta && e.paleta[ca.fondo]) || { fondo: '#34211b', texto: '#f5f0e5' };
      var b = esteEl(dest ? 'a' : 'div', 'sc-est-banner'); b.setAttribute('data-sc-est', '1'); if (dest) b.href = dest;
      var pc = esteImg(ca.imagen && ca.imagen.pc), cel = esteImg(ca.imagen && ca.imagen.cel);
      if (pc || cel) {
        b.className += ' sc-est-banner-img';
        b.appendChild(esteFoto(pc, cel, ca.titulo, { pw: 1200, ph: 300, cw: 800, ch: 400, alta: true }));
      } else {
        b.style.background = col.fondo; b.style.color = col.texto;
        var t = esteEl('div', 'sc-est-banner-txt'); if (ca.titulo) t.appendChild(esteEl('b', '', ca.titulo)); if (ca.texto) t.appendChild(esteEl('span', '', ca.texto));
        if (ca.boton && ca.boton.texto) t.appendChild(esteEl('i', '', ca.boton.texto)); b.appendChild(t);
      }
      var grilla = q('.js-product-table') || q('#category-page') || q('main');
      if (!grilla || !grilla.parentNode) return false;
      grilla.parentNode.insertBefore(b, grilla);
      if (!(pc || cel)) medidas.push({ k: 'cat', ruta: ruta, h: Math.round(b.getBoundingClientRect().height + (parseFloat(getComputedStyle(b).marginBottom) || 0)) });
      return true;
    });

    /* 1.11 portada: banner justo DEBAJO del hero (el header transparente de la portada va encima del hero: arriba quedaria tapado). Imagen con el texto de "Tarjeta del inicio" encima, o bloque de color si no hay imagen. */
    var hm = esteHomeDe(camps);
    if (hm && location.pathname === '/') {
      var hero = q('.js-home-sections-container > .section-slider-home');
      if (hero && hero.parentNode) {
        var vh = hm.vh, hb = vh.boton && typeof vh.boton === 'object' ? vh.boton : {};
        var hdest = esteSeguro(hm.e.home.destino) || esteSeguro(hb.destino), hel = esteEl(hdest ? 'a' : 'div', 'sc-est-home'); hel.setAttribute('data-sc-est', '1'); if (hdest) hel.href = hdest;
        var htx = esteEl('div', 'sc-est-home-tx');
        if (typeof vh.kicker === 'string' && vh.kicker) htx.appendChild(esteEl('small', '', vh.kicker));
        if (typeof vh.titulo === 'string' && vh.titulo) htx.appendChild(esteEl('b', '', vh.titulo));
        if (typeof vh.texto === 'string' && vh.texto) htx.appendChild(esteEl('span', '', vh.texto));
        if (typeof hb.texto === 'string' && hb.texto) htx.appendChild(esteEl('i', '', hb.texto));
        var hac = hm.e.acento && hm.e.paleta && hm.e.paleta[hm.e.acento];   /* 1.12: sin imagen, el bloque toma el acento (si es oscuro: el boton de adentro es crema) */
        var hcol = (hac && esteHex(hac.fondo) && esteHex(hac.texto) && !esteClaro(hac.fondo) && hac) || (hm.e.paleta && hm.e.paleta.marron) || { fondo: '#34211b', texto: '#f5f0e5' };
        if (hm.im.pc || hm.im.cel) {
          hel.className += ' sc-est-home-img';
          hel.appendChild(esteFoto(hm.im.pc, hm.im.cel, vh.titulo, { pw: 1200, ph: 400, cw: 800, ch: 600, alta: true }));
          if (htx.childNodes.length) hel.appendChild(htx);
        } else { hel.style.background = hcol.fondo; hel.style.color = hcol.texto; hel.appendChild(htx); }
        hero.parentNode.insertBefore(hel, hero.nextSibling);
        try {   /* fetchpriority=high solo si la foto arranca dentro de la primera pantalla; si no, compite con la foto del hero (LCP) */
          var himg = q('img', hel);
          if (himg && hel.getBoundingClientRect().top > (window.innerHeight || 800) * 0.9) { himg.removeAttribute('fetchpriority'); himg.setAttribute('loading', 'lazy'); }
        } catch (e) {}
        if (!(hm.im.pc || hm.im.cel)) medidas.push({ k: 'home', h: Math.round(hel.getBoundingClientRect().height + (parseFloat(getComputedStyle(hel).marginBottom) || 0)) });
      }
    }

    /* 1.11 ficha: franja de imagen debajo del boton de compra (despues del formulario; la seleccion de modelo y color NO se toca) */
    var fb = esteFichaDe(camps);
    if (fb && /^\/productos\//i.test(location.pathname)) {
      var ffo = q('form#product_form');
      if (ffo && ffo.parentNode) {
        var fdest = esteSeguro(fb.b.destino), fel = esteEl(fdest ? 'a' : 'div', 'sc-est-fbn'); fel.setAttribute('data-sc-est', '1'); if (fdest) fel.href = fdest;
        fel.appendChild(esteFoto(fb.im.pc, fb.im.cel, 'Promoci\u00f3n vigente', { pw: 1000, ph: 200, cw: 800, ch: 200, alta: false }));
        ffo.parentNode.insertBefore(fel, ffo.nextSibling);
      }
    }

    /* ficha: linea junto al precio (solo si el producto esta en el alcance de alguna regla). El banner de ficha (fi.banner) y home.activa estan reservados: todavia no se pintan. */
    var pid = window.LS && LS.product && LS.product.id;
    if (pid) camps.some(function (c) {
      var e = c.visual.estetica, fi = e.ficha; if (!(fi && fi.activa)) return false;
      var dentro = (c.reglas || []).some(function (r) { var ids = r.alcance && r.alcance.productos_resueltos; return ids && ids.indexOf(+pid) >= 0; });
      if (!dentro) return false;
      var fo = q('form#product_form'), pr = q('.js-price-display') || fo;
      var col = (e.paleta && e.paleta[e.acento]) || { fondo: '#34211b', texto: '#f5f0e5' };
      var fiTx = fi.texto ? esteMarcas(fi.texto, c, pid) : '';   /* si las marcas lo dejan vacio, no se pinta una franja vacia */
      if (fiTx && pr && pr.parentNode) {
        var l = esteEl('div', 'sc-est-ficha', fiTx); l.setAttribute('data-sc-est', '1'); l.style.background = col.fondo; l.style.color = col.texto;
        var ancla = fo && fo.parentNode ? fo : pr; ancla.parentNode.insertBefore(l, ancla);
      }
      return true;
    });
    rsvSoltar();   /* el banner ya esta puesto (o no va): el hueco del head se va en esta misma tarea */
    rsvGuardar(camps, medidas);
  }
  var estePrev = /[?&]satine_preview=/.test(location.search);
  /* cache chica SOLO de la estetica (sessionStorage, clave sc_est_v1): lo minimo para pintar de entrada y no empujar la pagina cuando llega el fetch.
     No toca la cache del objeto Cyber (localStorage satineOfertas). Con vista previa no se lee ni se escribe. */
  var EST_CLAVE = 'sc_est_v1', esteCachePend = false;
  function esteHomeMin(h) {   /* solo los textos que usa el banner de la portada */
    if (!h || typeof h !== 'object') return {};
    var b = h.boton && typeof h.boton === 'object' ? h.boton : {};
    return { kicker: h.kicker, titulo: h.titulo, texto: h.texto, boton: { texto: b.texto, destino: b.destino } };
  }
  function esteMin(c) {   /* solo lo que usa estePintar */
    return { slug: c.slug, estado: c.estado, desde: c.desde, hasta: c.hasta, visual: { estetica: c.visual.estetica, home: esteHomeMin(c.visual.home) },
      reglas: (c.reglas || []).filter(function (r) { var ids = r && r.alcance && r.alcance.productos_resueltos; return ids && ids.length; })
        .map(function (r) { return { etiqueta: r.etiqueta, etiqueta_peso: r.etiqueta_peso, alcance: { productos_resueltos: r.alcance.productos_resueltos } }; }) };
  }
  function esteSigDe(camps) { return JSON.stringify(camps.map(function (c) { return [c.slug, c.visual.estetica, c.visual.home, c.hasta, c.reglas.map(function (r) { return [r.etiqueta, r.etiqueta_peso, r.alcance.productos_resueltos]; })]; })); }
  function esteGuardar(camps) {
    if (estePrev) return;
    try { if (camps.length) sessionStorage.setItem(EST_CLAVE, JSON.stringify({ v: 1, t: Date.now(), c: camps })); else sessionStorage.removeItem(EST_CLAVE); } catch (e) {}
  }
  function esteLeerCache() {
    if (estePrev) return null;
    try {
      var j = JSON.parse(sessionStorage.getItem(EST_CLAVE) || 'null'), ahora = Date.now();
      if (!j || j.v !== 1 || !(ahora - j.t < 600e3) || !j.c || !j.c.length) return null;
      var l = j.c.filter(function (c) {
        return c && c.visual && c.visual.estetica && c.visual.estetica.activa === true && c.reglas
          && !(c.desde && ahora < new Date(c.desde).getTime()) && !(c.hasta && ahora >= new Date(c.hasta).getTime());
      });
      return l.length ? l : null;
    } catch (e) { return null; }
  }
  function esteDesdeCache() {
    var camps = esteLeerCache(); if (!camps) return;
    var sig = esteSigDe(camps), fin = false, obs = null;
    esteCachePend = true;
    var listo = function () {
      if (!esteCachePend || fin || !document.body) return false;
      var pid = window.LS && LS.product && LS.product.id;
      return !!(q('section.js-adbar') && (q('.js-product-table') || q('#category-page') || q('main')) && (!pid || q('form#product_form')));
    };
    var pintar = function () {
      if (fin) return; fin = true;
      if (obs) { obs.disconnect(); obs = null; }
      document.removeEventListener('DOMContentLoaded', forzar);
      if (!esteCachePend) return;   /* el fetch llego antes y ya decidio */
      esteCachePend = false;
      try { estePintar(camps); esteSig = sig; } catch (e) { try { esteLimpiar(); } catch (_) {} rsvSoltar(); }
    };
    var forzar = function () { pintar(); };
    try {
      if (listo()) { pintar(); return; }
      if (document.readyState !== 'loading') { pintar(); return; }
      document.addEventListener('DOMContentLoaded', forzar);
      if (typeof MutationObserver === 'function') { obs = new MutationObserver(function () { if (listo()) pintar(); }); obs.observe(document.documentElement, { childList: true, subtree: true }); }
    } catch (e) {}
  }
  function esteAplicar(d, deVista) {
    try {
      if (estePrev && deVista !== true) return;   /* en vista previa manda la promocion pedida, no la activa */
      if (!d || typeof d !== 'object' || !('campana' in d)) { rsvSoltar(); return; }   /* respuesta rara o HTTP con error: se conserva lo ultimo bueno (y el hueco del head se libera) */
      esteCachePend = false;   /* llego el contrato: manda el fetch, no la cache */
      var camps = ((d && typeof d === 'object') ? esteCampanas(d) : []).map(esteMin);
      if (d && typeof d === 'object' && 'campana' in d) esteGuardar(camps);   /* campana null o sin estetica: se borra */
      var sig = esteSigDe(camps);
      if (sig === esteSig) { rsvSoltar(); return; }
      esteSig = sig;
      var go = function () { try { estePintar(camps); esteSig = sig; } catch (e) { try { esteLimpiar(); } catch (_) {} rsvSoltar(); } };
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
    } catch (e) {}
  }
  /* vista previa: ?satine_preview=<slug>.<clave> pide esa promocion aunque no este activa (solo lectura) */
  function estePreview() {
    try {
      var m = location.search.match(/[?&]satine_preview=([^&]+)/); if (!m || !CFG.contrato || typeof fetch !== 'function') return;
      var t = decodeURIComponent(m[1]), i = t.lastIndexOf('.'); if (i < 1) return;
      fetch(CFG.contrato + '?vista=' + encodeURIComponent(t.slice(0, i)) + '&clave=' + encodeURIComponent(t.slice(i + 1)), { credentials: 'omit', cache: 'no-store' })
        .then(function (r) { return r.ok ? r.json() : null; }).then(function (d) { esteAplicar(d, true); }).catch(function () {});
    } catch (e) {}
  }

  /* ---------- contrato del ERP (Gestion de ofertas): tramos, precios, porcentajes y fechas reales ---------- */
  function extraerContrato(d) {
    try {
      if (!d || typeof d !== 'object' || !('campana' in d)) return null;   /* respuesta rara: no decidir nada */
      var c = d.campana; if (!c || c.estado !== 'activa') return { off: true };   /* el ERP dice que hoy no hay Cyber */
      var r = null;
      (c.reglas || []).forEach(function (x) { if (!r && x.tipo === 'combo_condicional' && x.tn && x.tn.estado === 'prendida' && x.condicion && x.condicion.tiers) r = x; });
      if (!r) return { off: true };   /* campana activa pero la regla del combo esta apagada */
      if (!r.condicion.tiers.length) return null;
      var ts = r.condicion.tiers.slice().sort(function (x, y) { return x.minimo - y.minimo; });
      var t2 = ts[1] || ts[0];
      var o = { umbral1: +ts[0].minimo, desc1: +ts[0].descuento, umbral2: +t2.minimo, desc2: +t2.descuento, precios: {}, pct: {} };
      (r.grupos || []).forEach(function (g) {
        if (!g || !g.nombre) return;
        if (g.precio_solo > 0) o.precios[g.nombre] = Math.round(g.precio_solo);
        if (g.pct > 0) o.pct[g.nombre] = Math.round(g.pct);
      });
      if (c.desde) o.desde = c.desde;
      if (c.hasta) o.hasta = c.hasta;
      if (c.fechas_texto && c.fechas_texto.fin) o.fin = c.fechas_texto.fin;
      if (!(o.umbral1 > 0 && o.desc1 > 0 && o.umbral2 >= o.umbral1 && o.desc2 >= o.desc1)) return null;
      return o;
    } catch (e) { return null; }
  }
  function fotoCfg() { return JSON.stringify([CFG.umbral1, CFG.desc1, CFG.umbral2, CFG.desc2, CFG.precios, CFG.pct, CFG.desde, CFG.hasta, CFG.fin]); }
  var apagadoPorErp = false;   /* true cuando el ERP dijo que no hay campana activa: activo() da false hasta que diga lo contrario */
  function aplicarContrato(o) {
    if (!o) return false;
    if (o.off) { var c0 = !apagadoPorErp; apagadoPorErp = true; return c0; }
    var antes = fotoCfg(), k, volvio = apagadoPorErp; apagadoPorErp = false;
    CFG.umbral1 = o.umbral1; CFG.desc1 = o.desc1; CFG.umbral2 = o.umbral2; CFG.desc2 = o.desc2;
    for (k in o.precios) CFG.precios[k] = o.precios[k];
    for (k in o.pct) CFG.pct[k] = o.pct[k];
    if (o.desde) CFG.desde = o.desde;
    if (o.hasta) CFG.hasta = o.hasta;
    if (o.fin) CFG.fin = o.fin;
    var cambio = antes !== fotoCfg();
    if (cambio) armarTextos();
    return cambio || volvio;
  }
  function leerContratoGuardado() {
    try {
      var j = JSON.parse(localStorage.getItem('satineOfertas') || 'null');
      if (j && j.v === 1 && j.o && Date.now() - j.t < 36 * 3600e3) return j.o;
    } catch (e) {}
    return null;
  }
  function sincronizarContrato() {
    if (!CFG.contrato || typeof fetch !== 'function') return;
    try {
      fetch(CFG.contrato, { credentials: 'omit', cache: 'default' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
        esteAplicar(d);   /* 1.10: estetica generica (independiente de Cyber) */
        var o = extraerContrato(d); if (!o) return;
        try { localStorage.setItem('satineOfertas', JSON.stringify({ v: 1, t: Date.now(), o: o })); } catch (e) {}
        var cambio = aplicarContrato(o);
        API.contrato = o;
        if (cambio && prendido) apagar();   /* se vuelve a armar con los numeros nuevos */
        if (!prendido && (activo() || vista)) arrancar();
      }).catch(function () { rsvSoltar(); });
    } catch (e) {}
  }

  /* ---------- encendido / apagado ---------- */
  var prendido = false, estilo = null, apagarTimer = null;
  function arrancar() {
    if (prendido) return;
    prendido = true; API.prendido = true;
    document.documentElement.setAttribute('data-satine-cyber', 'on');
    if (!q('#sc-css')) { estilo = document.createElement('style'); estilo.id = 'sc-css'; estilo.textContent = CSS; document.head.appendChild(estilo); }
    var correr = function () {
      [['franja', franja], ['home', home], ['setSatine', setSatine], ['ficha', ficha], ['carrito', vigilarCarrito], ['combos', combos]].forEach(function (m) {
        if (!CFG[m[0]]) return;
        try { m[1](); } catch (e) { try { console.warn('satine-cyber', m[0], e); } catch (_) {} }
      });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', correr); else correr();
    var resta = new Date(CFG.hasta).getTime() - Date.now();
    if (apagarTimer) { clearTimeout(apagarTimer); apagarTimer = null; }
    if (!vista && resta > 0 && resta < 6 * 3600e3) apagarTimer = setTimeout(apagar, resta + 500);
  }
  function apagar() {
    if (!prendido) return;
    prendido = false; API.prendido = false;
    if (carritoObs) { carritoObs.disconnect(); carritoObs = null; }
    if (homeObs) { homeObs.disconnect(); homeObs = null; }
    if (carritoTimer) { clearInterval(carritoTimer); carritoTimer = null; }
    if (apagarTimer) { clearTimeout(apagarTimer); apagarTimer = null; }
    try { restaurar(document); } catch (e) {}   /* 1.9: lineas, subtotal y filas del carrito vuelven a como las dejo TN */
    qa('[data-sc], .sc-carrito, #sc-fcombo').forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); });   /* 1.8: tambien la tarjeta del carrito y la linea de la ficha */
    franjaVolver();
    setSatineVolver();
    try { combosVolver(); } catch (e) {}
    if (estilo && estilo.parentNode) estilo.parentNode.removeChild(estilo);
    estilo = null;
    document.documentElement.removeAttribute('data-satine-cyber');
  }

  /* ---------- 1.12 GUARDIA «sin descuento» (para siempre: no depende de ninguna promocion ni de la estetica) ----------
     Con una promocion del panel prendida, Tienda Nube a veces des-oculta el cartel de oferta con «0% OFF» y el precio tachado igual al precio.
     Regla: si el porcentaje es 0 o el tachado no es mayor que el precio, no se muestra ninguno de los dos (y el precio no se pinta de oferta).
     Si despues llega una rebaja real (cambio de variante, promo nueva) la marca se saca sola. */
  var gObs = null, gEscr = 0;
  function gNum(n) { var t = n ? String(n.textContent || '').replace(/[^\d,]/g, '').replace(',', '.') : ''; return t ? parseFloat(t) : NaN; }
  function gPrecioDe(n) { var p = n.parentNode, i = 0, pr = null; while (p && p !== document.body && i++ < 4 && !(pr = p.querySelector('.js-price-display'))) p = p.parentNode; return pr; }
  function gUno(n) {
    try {
      if (n.classList.contains('js-compare-price-display')) {
        var c = gNum(n), p = gNum(gPrecioDe(n)), mal = !isNaN(c) && (c <= 0 || (!isNaN(p) && c <= p));
        if (mal) {
          if (!n.hasAttribute('data-sc-sin-desc')) n.setAttribute('data-sc-sin-desc', '1');
          if (n.getAttribute('data-price-compare-visibility') === 'true' && gEscr < 400) { gEscr++; n.setAttribute('data-sc-vis', '1'); n.setAttribute('data-price-compare-visibility', 'false'); }
        } else if (n.hasAttribute('data-sc-sin-desc')) {
          n.removeAttribute('data-sc-sin-desc');
          if (n.hasAttribute('data-sc-vis')) { n.removeAttribute('data-sc-vis'); if (n.getAttribute('data-price-compare-visibility') === 'false' && gEscr < 400) { gEscr++; n.setAttribute('data-price-compare-visibility', 'true'); } }
        }
      } else {
        var s = n.querySelector('.js-offer-percentage'); if (!s) return;
        var v = parseFloat(String(s.textContent || '').replace(',', '.'));
        if (!isNaN(v) && v <= 0) { if (!n.hasAttribute('data-sc-sin-desc')) n.setAttribute('data-sc-sin-desc', '1'); }
        else if (n.hasAttribute('data-sc-sin-desc')) n.removeAttribute('data-sc-sin-desc');
      }
    } catch (e) {}
  }
  function gTodo() { try { qa('.js-compare-price-display,.js-offer-label').forEach(gUno); } catch (e) {} }
  function gArrancar() {
    try {
      var A = '[data-sc-sin-desc]', st = esteEl('style'); st.id = 'sc-g-css';
      st.textContent = 'html body :is(#sc-g,*) ' + A + A + A + A + A + A + '{display:none!important}';   /* le gana a la regla del theme que muestra el tachado */
      document.head.appendChild(st);
      var go = function () {
        if (gObs || !document.body) return;
        gTodo();
        if (typeof MutationObserver !== 'function') return;
        gObs = new MutationObserver(function (rs) {
          for (var i = 0; i < rs.length; i++) {
            var r = rs[i], t = r.target, el = t && (t.nodeType === 1 ? t : t.parentNode);
            if (r.type === 'attributes' || (el && el.closest && el.closest('.js-price-display,.js-compare-price-display,.js-offer-label'))) { gTodo(); return; }
            for (var j = 0; r.addedNodes && j < r.addedNodes.length; j++) if (r.addedNodes[j].nodeType === 1) { gTodo(); return; }
          }
        });
        gObs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['data-price-compare-visibility'] });
      };
      if (document.body) go(); else document.addEventListener('DOMContentLoaded', go);
    } catch (e) {}
  }
  gArrancar();

  try { esteDesdeCache(); } catch (e) {}   /* 1.10: estetica desde la cache chica, lo antes posible */
  aplicarContrato(leerContratoGuardado());   /* lo ultimo que dijo el ERP, para arrancar sin esperar la red */
  armarTextos();
  sincronizarContrato();
  estePreview();
  if (activo() || vista) arrancar();
  else { var falta = new Date(CFG.desde).getTime() - Date.now(); if (falta > 0 && falta < 4 * 3600e3) setTimeout(arrancar, falta + 500); }
})();
