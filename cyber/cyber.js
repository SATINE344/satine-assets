/* 1.19.0 (11/11/2026): WEB 3b. Ficha: cupon y boton extra van DEBAJO del boton de compra (no lo mueven); Filtrar/Ordenar de /en-oferta/ en su propia fila bajo la banda (ya no tapan carrito ni menu); tarjeta de la grilla; sello sobre la foto de la ficha; lanzamientos: entrada de menu y cinta. */
/* 1.18.0 (11/11/2026): WEB 3a. Pulido de 1.17: nombre de la categoria en oferta (menu del celular) con el color de la oferta; el boton Filtrar del theme ya no tapa la banda de /en-oferta/; el alto de la banda se reserva en el head (sc_est_reserva) para que la grilla no salte en la visita siguiente; hueco banda-grilla parejo. Piezas nuevas, cada una solo si viene activa en el contrato: cinta de frases (estetica.cinta), botones (estetica.botones: seccion_inicio, pagina_oferta, ficha, flotante), cierre (estetica.cierre), cupon copiable (campana.cupon) y brillo del titulo (estetica.efecto). Todo con data-sc-est="1"; sin promo, cero nodos. Cache sc_est_v1 pasa a v:5. */
/* 1.17.0 (11/11/2026): (1) PAGINA /en-oferta/ TEMATICA: cabecera con los tonos de la campana (kicker con la fecha, titulo, bajada, cuenta regresiva del reloj unico, cantidad de productos, chips de categorias con scroll lateral e imagen opcional con velo); el h1 nativo queda en el DOM, recortado para lector de pantalla. (2) MENU: lo que esta en oferta se pinta (sc-menu-of = categoria directa y sus hijas, sc-menu-of-padre = punto), entrada de la campana (viste el link Ofertas que ya existe; si no hay, agrega uno), mosaico .sat-tk-of con los tonos de la campana. Lee d.en_oferta + estetica.pagina_oferta/menu del contrato; sin esos datos todo queda igual que 1.16. Cache sc_est_v1 pasa a v:4.
   1.16.0 (11/11/2026): (1) UN SOLO cartel de descuento en las tarjetas: donde ponemos nuestra pastilla la tarjeta lleva la clase sc-pill-on y se ocultan SOLO las etiquetas nativas de descuento (js-offer-label-private, js-offer-label, js-promotion-label-private); (2) UNA SOLA fila en el inicio: e14Seccion no hace nada si ya existe .sc-e14-sec; (3) RELOJ UNICO con segundos: cada cuenta es un nodo con data-sc-fin (ISO) y un unico setInterval de 1 s (esteRelojIniciar) las actualiza, pausado con document.hidden; reemplaza al timer de la barra y al de la ficha; la ficha dice 'Termina en' siempre que haya fecha de fin y el cartel de entrada suma esa linea; (4) seccion del inicio rehecha: banda tematica de ancho completo segun intensidad (sobrio / destacado / total), titulo grande, contador en cajas, boton y fila (carrusel en celular, grilla de 4 en escritorio).
   1.15.1 (11/11/2026): el regalo de los anotados llega de verdad. Despues de la salida el contrato trae regalo_anotados:true; si este navegador recuerda que se anoto se consulta mi-codigo UNA vez y la ficha (y el bloque del inicio) muestran «Te anotaste: este es tu codigo» con Copiar y como usarlo; si no se anoto aca, un enlace discreto «¿Te anotaste? Buscá tu código» pide mail o WhatsApp (anotarse con recuperar:true) y consulta. Si falla o da 404 no se muestra nada. Sin lanzamientos, cero cambios. Para volver a 1.15.0: revertir este commit en satine-assets.
   1.15.0 (11/11/2026): LANZAMIENTOS en la tienda. Lee d.lanzamientos del contrato (sin esa clave la web queda igual, cero nodos y cero pedidos extra). Antes de salir: barra con cuenta regresiva, bloque en el inicio y en la ficha, cartel de entrada y formulario «Avisame cuando salga» (mail y/o WhatsApp, trampa antirrobot, estados, se recuerda en el navegador). A la hora: la cuenta pasa a «Ya disponible» sin recargar. Despues: etiqueta «Nuevo» en tarjetas y ficha, bloque destacado en el inicio, «Quedan pocas», leyenda de precio y tarjeta con el codigo de regalo (de mi-codigo, con boton Copiar; tambien en el carrito). Prioridad con las promos: una sola barra (gana la promo) y un solo cartel por visita. Ademas: el aviso viejo del carrito (.sc-of-carro) se apaga con progreso_carrito apagado, y el hueco de las secciones del inicio y de la ficha se reserva antes de pintar (altura medida en la visita anterior). Prueba de borradores: ?satine_preview=<slug>.<clave>&satine_fase=anticipo|disponible. Para volver a 1.14.0: revertir este commit en satine-assets.
   1.14.0 (11/11/2026): PIEZAS DE LAS PROMOS + EXTENSION. Progreso en el carrito (barra con frase que cambia), "Ahorras $X" y "Termina en" en la ficha, tarjeta "Suma tu regalo", fila de destacados en el inicio y cartel de entrada, cada uno con su interruptor por campana (progreso_carrito, ahorro_visible, aviso_regalo, seccion_inicio, cartel_entrada); extension de campana (etiqueta Extendido, cartel propio, cuenta al fin nuevo; al llegar a cero se re-pide el contrato una vez). Respeta condicion.sobre y siempre el fin de la campana. Cache sc_est_v1 v3. Volver atras: restaurar cyber.js del commit 7934d64 (1.13.1). */
/* 1.13.1 (10/11/2026): primera visita sin cache: poner() lee todos los estilos de las cards antes de escribir (antes un recalculo de layout por card retrasaba hasta ~1,3 s la estetica de la portada); aire bajo el recuadro de la ficha.
   1.13.0 (10/11/2026): MODO OFERTA. La estetica de promociones gana intensidad (sobrio / destacado / total), acabado (liso / onda con cuero y grano), color a medida (paleta.medida), linea de ahorro en las cards con el precio real y la regla, bloque de ahorro en la ficha, pestana en la barra fija, tile y menu de Ofertas y avisos en el carrito (chips por producto y aviso de la promocion, sin numeros inventados). Sin promocion activa no queda ni un nodo, clase ni variable.
   1.12.1 (10/11/2026): pulido de la estetica de promociones: la barra va ADENTRO de la capsula de la franja (redondeada y unida al menu, con la letra de la franja); el banner de portada se separa del hero; el banner de categoria se alinea con las cards (antes tocaba los bordes de la pantalla).
   1.12.0 (10/11/2026): (1) guardia PARA SIEMPRE «sin descuento»: si el cartel de oferta dice 0% o el precio tachado no es mayor que el precio, no se muestran (Tienda Nube los des-oculta con una promocion del panel prendida). (2) El acento de la promocion llega a todo: linea «-X% en combo», carteles nativos de oferta/promocion, precio SOLO si esta rebajado de verdad (antes pintaba todos los precios del sitio) y banner de portada sin imagen. */
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
    version: '1.19.0',
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
    camps.forEach(function (c) {   /* 1.18: la banda de /en-oferta/ tambien reserva su alto (medido en e18Medir) para que la grilla no salte */
      var pg = c.visual.estetica.pagina_oferta, eo = c.en_oferta; if (!c.en_oferta || !pg || pg.activa === false) return;
      var ru = e17Ruta(eo.ruta || '/en-oferta/'); if (r.cat[ru]) return;
      var o = ent(RSV_ASP.cat, true, prev && prev.cat && prev.cat[ru], med('cat', ru));
      if (o.c || o.p) { r.cat[ru] = o; n++; usar(c); }
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
  /* ---------- 1.13: modo oferta (tonos calculados en JS, mecanica de la regla, linea de ahorro) ----------
     Sin color-mix() ni :has() (iOS 15): los tonos se mezclan aca y se pasan como variables CSS al elemento que los usa. */
  var OF_VARS = ['of', 'of-tx', 'of-osc', 'of-cla', 'of-ink', 'of-t10', 'of-t18', 'of-rgb', 'of-osc-rgb', 'of-tx-rgb', 'of-fondo'];
  var OF_CLASES = ['scm', 'scm-b', 'scm-c', 'scm-liso'];
  var OF_CUERO = 'radial-gradient(130% 100% at 8% -10%,rgba(255,215,185,.34),rgba(255,215,185,0) 52%),radial-gradient(90% 90% at 105% 112%,rgba(20,4,2,.42),rgba(20,4,2,0) 60%),linear-gradient(135deg,var(--of-osc) 0%,var(--of) 55%,var(--of-cla) 100%)';
  var OF_PILDORA = 'linear-gradient(135deg,var(--of-osc),var(--of) 50%,var(--of-cla))';
  var OF_GRANO = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/><feColorMatrix values=\'0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .55 0\'/></filter><rect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/></svg>")';
  var ofCache = {};
  function mezHex(a, b, t) {   /* t = parte de a (0..1) */
    var A = esteRgb(a).split(','), B = esteRgb(b).split(','), o = '#', i, v;
    for (i = 0; i < 3; i++) { v = Math.round(A[i] * t + B[i] * (1 - t)); o += ('0' + Math.max(0, Math.min(255, v)).toString(16)).slice(-2); }
    return o;
  }
  function ofTonos(col) {   /* {fondo, texto} -> todos los tonos que usa el CSS del modo oferta. Color invalido: rojo SATINE. */
    var f = col && esteHex(col.fondo) ? col.fondo : '#c0392b', x = col && esteHex(col.texto) ? col.texto : '#ffffff', k = f + x;
    if (ofCache[k]) return ofCache[k];
    var cl = esteClaro(f), p = esteRgb(f).split(','), rojo = +p[0] > 1.3 * +p[1] && +p[0] > 1.3 * +p[2];
    var t = { of: f, tx: x, osc: cl ? mezHex(f, '#7a4a08', .8) : mezHex(f, '#140402', .58), cla: cl ? mezHex(f, '#fff3cf', .7) : mezHex(f, rojo ? '#ffb89a' : '#ffffff', rojo ? .78 : .8),
      ink: cl ? mezHex(f, '#34211b', .62) : mezHex(f, '#000000', .85), t10: mezHex(f, '#ffffff', .1), t18: mezHex('#ffffff', f, .82), fondo: mezHex('#E8E6E3', f, .78) };
    t.rgb = esteRgb(t.of); t.oscRgb = esteRgb(t.osc); t.txRgb = esteRgb(x);
    ofCache[k] = t; return t;
  }
  function ofPonerVars(n, t, global) {
    var s = n.style;
    s.setProperty('--of', t.of); s.setProperty('--of-tx', t.tx); s.setProperty('--of-osc', t.osc); s.setProperty('--of-cla', t.cla); s.setProperty('--of-ink', t.ink);
    s.setProperty('--of-t10', t.t10); s.setProperty('--of-t18', t.t18); s.setProperty('--of-rgb', t.rgb); s.setProperty('--of-osc-rgb', t.oscRgb); s.setProperty('--of-tx-rgb', t.txRgb);
    if (global) s.setProperty('--of-fondo', t.fondo);
  }
  function ofMec(r) {   /* que hace la regla: 2.a unidad con % ('seg'), NxM ('nxm') o cualquier otra cosa ('otro': sin linea de ahorro) */
    if (!r) return { k: 'otro' };
    var et = String(r.etiqueta || ''), c = r.condicion || {}, tiers = (c.tiers || []).slice().sort(function (a, b) { return a.minimo - b.minimo; });
    if (/2\.?\s*ª?\s*unidad/i.test(et) && !(r.tipo === 'progresivo' && c.sobre === 'todas')) {   /* 1.14: 'sobre todas' no es 'la 2.a unidad' */
      var pct = r.tipo === 'progresivo' && tiers.length && +tiers[0].minimo === 2 && +tiers[0].pct > 0 ? +tiers[0].pct : 0;
      if (!pct) { var m = et.match(/(\d{1,2})(?:[.,]\d+)?\s*%/); pct = m ? +m[1] : 0; }
      if (pct > 0 && pct < 100) return { k: 'seg', pct: pct, n: 2 };
    }
    if (r.tipo === 'nxm' && +c.lleva > +c.paga && +c.paga > 0) return { k: 'nxm', l: +c.lleva, p: +c.paga, n: +c.lleva };
    return { k: 'otro' };
  }
  function ofLinea(mec, p) {   /* texto de ahorro con el precio REAL: solo si la regla lo permite; si no, null (nunca un 0 % ni un numero inventado) */
    if (!mec || !(p > 0)) return null;
    if (mec.k === 'seg') {
      var s = Math.round(p * (1 - mec.pct / 100)); if (!(s > 0 && s < p)) return null;
      return { pre: '2.ª unidad a ', b: plata(s), ficha: 'Llevando 2 ahorrás ' + plata(p - s) + ': la 2.ª unidad queda a ' + plata(s) + '.' };
    }
    if (mec.k === 'nxm') {
      var t = p * mec.p; return { pre: 'Llevás ' + mec.l + ' y pagás ', b: plata(t), ficha: 'Llevando ' + mec.l + ' pagás ' + plata(t) + ': ahorrás ' + plata(p * (mec.l - mec.p)) + '.' };
    }
    return null;
  }
  function esteLimpiar() {
    var l14 = e14Lim; e14Lim = []; l14.forEach(function (f) { try { f(); } catch (e) {} }); e14Act = [];
    if (esteObs) { esteObs.disconnect(); esteObs = null; }
    if (esteCuentaTimer) { clearInterval(esteCuentaTimer); esteCuentaTimer = null; }
    if (esteVis) { document.removeEventListener('visibilitychange', esteVis); esteVis = null; }
    if (esteTimer) { clearTimeout(esteTimer); esteTimer = null; }
    qa('[data-sc-est]').forEach(function (n) { if (n !== document.documentElement && n.parentNode) n.parentNode.removeChild(n); });   /* ojo: <html> tambien lleva data-sc-est */
    qa('[data-sc-est-pos]').forEach(function (n) { n.style.position = ''; n.removeAttribute('data-sc-est-pos'); });
    var e = document.getElementById('sc-est-css'); if (e && e.parentNode) e.parentNode.removeChild(e);
    document.documentElement.removeAttribute('data-sc-est');
    var H = document.documentElement;   /* 1.13: clases y variables del modo oferta, y las clases que se le pusieron a cards del theme */
    OF_CLASES.forEach(function (c) { H.classList.remove(c); });
    OF_VARS.forEach(function (v) { H.style.removeProperty('--' + v); });
    if (!H.getAttribute('style')) H.removeAttribute('style');
    if (H.getAttribute('class') === '') H.removeAttribute('class');
    qa('.sc-pill-on').forEach(function (n) { n.classList.remove('sc-pill-on'); if (n.getAttribute('class') === '') n.removeAttribute('class'); });
    qa('.sc-of-card,.sc-of-fr').forEach(function (n) { n.classList.remove('sc-of-card'); n.classList.remove('sc-of-fr'); if (n.getAttribute('class') === '') n.removeAttribute('class'); });
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
    var d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60), x = s % 60;
    return (d ? d + 'd ' : '') + (h < 10 ? '0' : '') + h + 'h ' + (m < 10 ? '0' : '') + m + 'm ' + (x < 10 ? '0' : '') + x + 's';
  }
  /* 1.16: RELOJ UNICO. Cada cuenta es un nodo con data-sc-fin (ISO). data-sc-pre = texto antes de la cuenta; data-sc-cajas = cuatro cajas [data-sc-u=d|h|m|s]. Un solo setInterval de 1 s las pone al dia
     a todas; en pestana oculta no corre y al volver se pone al dia solo. Al llegar a cero (una sola vez) se oculta la cuenta y se llama a e14Vencio. esteLimpiar lo corta. */
  function esteRelojTic() {
    var ns = qa('[data-sc-fin]'); if (!ns.length) { if (esteCuentaTimer) { clearInterval(esteCuentaTimer); esteCuentaTimer = null; } return; }
    var venc = false, ahora = Date.now();
    ns.forEach(function (n) {
      var t = new Date(n.getAttribute('data-sc-fin')).getTime(); if (isNaN(t)) return;
      if (ahora >= t) { n.style.display = 'none'; venc = true; return; }
      if (n.hasAttribute('data-sc-cajas')) {
        var s = Math.floor((t - ahora) / 1000), v = { d: Math.floor(s / 86400), h: Math.floor(s % 86400 / 3600), m: Math.floor(s % 3600 / 60), s: s % 60 };
        ['d', 'h', 'm', 's'].forEach(function (k) {
          var u = q('[data-sc-u="' + k + '"]', n); if (!u) return;
          var tx = (v[k] < 10 ? '0' : '') + v[k]; if (u.textContent !== tx) u.textContent = tx;
          if (k === 'd') { var ca = u.parentNode; if (ca) ca.style.display = v.d ? '' : 'none'; }
        });
      } else {
        var tx2 = (n.getAttribute('data-sc-pre') || '') + esteTiempo(n.getAttribute('data-sc-fin')); if (n.textContent !== tx2) n.textContent = tx2;
      }
    });
    if (venc) e14Vencio();
  }
  function esteRelojIniciar() {
    if (esteCuentaTimer) return;
    esteCuentaTimer = setInterval(function () { if (!document.hidden) esteRelojTic(); }, 1000);
    if (!esteVis) document.addEventListener('visibilitychange', esteVis = function () { if (!document.hidden) esteRelojTic(); });
    esteRelojTic();
  }
  function esteHex(h) { return typeof h === 'string' && /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(h); }
  function esteRgb(h) { var x = h.slice(1); if (x.length === 3) x = x[0] + x[0] + x[1] + x[1] + x[2] + x[2]; return parseInt(x.slice(0, 2), 16) + ',' + parseInt(x.slice(2, 4), 16) + ',' + parseInt(x.slice(4, 6), 16); }
  function esteClaro(h) {   /* true si el color es demasiado claro para leerse como letra sobre blanco */
    if (!esteHex(h)) return true;
    var x = h.slice(1); if (x.length === 3) x = x[0] + x[0] + x[1] + x[1] + x[2] + x[2];
    return (0.2126 * parseInt(x.slice(0, 2), 16) + 0.7152 * parseInt(x.slice(2, 4), 16) + 0.0722 * parseInt(x.slice(4, 6), 16)) / 255 > 0.6;
  }
  function esteCol(c, p, clave, defecto) { var k = c.visual.estetica[clave] || defecto; return (p && p[k]) || (p && p[defecto]) || { fondo: '#34211b', texto: '#f5f0e5' }; }
  /* ---------- 1.14: piezas de las promos (progreso del carrito, ahorro visible, regalo, seccion del inicio, cartel de entrada, extension de campana) ----------
     Todo cuelga de estePintar (nodos con data-sc-est, se van con esteLimpiar). Cada pieza va en su try/catch: si una falla, las otras siguen y la tienda queda como siempre. */
  var e14Lim = [], e14Fue = false, e14Act = [], e14Mem = {}, estePrevUrl = '';
  function e14Flag(E, k, def) { return E && E[k] === true ? true : E && E[k] === false ? false : def; }
  function e14Algun(camps, k, def) { return camps.some(function (c) { return e14Flag(c.visual.estetica, k, def); }); }
  function e14Ruta(h) { try { return new URL(h, location.href).pathname.toLowerCase().replace(/\/?$/, '/'); } catch (e) { return ''; } }
  function e14Suma(l, k) { var s = 0; l.forEach(function (i) { s += i[k]; }); return s; }
  function e14Cortar(s, n) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim().slice(0, n); }
  function e14Pct(p) { return (Math.round(+p * 10) / 10 + '').replace('.', ',') + '%'; }
  function e14Vis(k) { try { return (estePrev ? sessionStorage : localStorage).getItem(k) === '1'; } catch (e) { return !!e14Mem[k]; } }
  function e14Marca(k) { e14Mem[k] = 1; try { (estePrev ? sessionStorage : localStorage).setItem(k, '1'); } catch (e) {} }
  function e14Items(lista) {
    return qa('.js-cart-item', lista).map(function (it) {
      var inp = q('.js-cart-quantity-input', it), cant = inp ? parseInt(inp.value, 10) : 1; if (!(cant > 0)) cant = 1;
      var sub = q('.js-cart-item-subtotal', it), a = q('a[href*="/productos/"]', it);
      return { el: it, id: parseInt(String(it.getAttribute('data-store') || '').replace(/^cart-item-/, ''), 10) || 0, cant: cant, sub: sub ? numeroDec(textoOri(sub)) : 0, ruta: a ? e14Ruta(a.getAttribute('href')) : '' };
    });
  }
  /* metas del carrito: salen de las reglas del contrato (montos, unidades, compra minima, regalo) y de lo que de verdad hay en el carrito */
  function e14Metas(camps, items) {
    var metas = [], regalos = [];
    camps.forEach(function (c) {
      var vp = c.estado === 'vista_previa';
      (c.reglas || []).forEach(function (r) {
        try {
          if (!vp && r.tn && r.tn.estado && r.tn.estado !== 'prendida') return;   /* regla apagada en Tienda Nube: no se promete (la vista previa si las muestra) */
          var cd = r.condicion || {}, ids = r.alcance && r.alcance.productos_resueltos, sc = ids && ids.length ? items.filter(function (i) { return ids.indexOf(i.id) >= 0; }) : items;
          if (!sc.length) return;
          var s = e14Suma(sc, 'sub'), u = e14Suma(sc, 'cant'), nom = e14Cortar(r.etiqueta || r.nombre || c.nombre, 40), mec = ofMec(r);
          var tiers = (cd.tiers || []).filter(function (t) { return t && +t.minimo > 0; }).sort(function (a, b) { return a.minimo - b.minimo; });
          var enPesos = r.tipo !== 'progresivo', monto = tiers.filter(function (t) { return +t.descuento > 0 || (enPesos && +t.pct > 0); }), cant = enPesos ? [] : tiers.filter(function (t) { return !(+t.descuento > 0) && +t.pct > 0; });
          var nuevo = function (k, hecho, frase, marcas, avance) { return { camp: c, k: k, hecho: hecho, frase: frase, marcas: marcas, tope: marcas[marcas.length - 1], avance: avance }; };
          if (r.regalo && typeof r.regalo === 'object') {
            var rg = r.regalo, mn = +rg.minimo || +r.minimo_compra || +cd.carrito_minimo || +cd.minimo || 0, un = +rg.unidades_minimas || +cd.unidades_minimas || 0;
            var okM = !(mn > 0) || s >= mn, okU = !(un > 0) || u >= un, rr = rg.url ? e14Ruta(rg.url) : '';
            var enC = items.some(function (i) { return (+rg.producto_id > 0 && i.id === +rg.producto_id) || (rr && i.ruta === rr); });
            regalos.push({ camp: c, rg: rg, cumple: okM && okU, enC: enC });
            if (!okM && s > 0) metas.push(nuevo('regalo', false, 'Te faltan ' + plata(mn - s) + ' para tu regalo', [mn], s));
            else if (okM && !okU) metas.push(nuevo('regalo', false, 'Sumá ' + (un - u) + ' más y te llevás tu regalo', [un], u));
            else if (okM && okU) metas.push(nuevo('regalo', true, 'Ya tenés tu regalo', [mn || un || 1], mn || un || 1));
            return;
          }
          if (monto.length) {
            if (!(s > 0)) return;   /* subtotal ilegible: no se inventa un faltante */
            var sg = monto.filter(function (t) { return +t.minimo > s; })[0];
            metas.push(nuevo('monto', !sg, sg ? 'Te faltan ' + plata(sg.minimo - s) + (+sg.descuento > 0 ? ' para ahorrar ' + plata(sg.descuento) : ' para el ' + e14Pct(sg.pct) + ' de descuento') : (monto.length > 1 ? 'Ya tenés el mayor descuento' : 'Ya tenés el descuento'), monto.map(function (t) { return +t.minimo; }), s));
          } else if (cant.length && r.tipo === 'progresivo' && mec.k !== 'seg') {   /* la 2.a unidad y el NxM ya los cuenta el aviso de 1.13 */
            var sc2 = cant.filter(function (t) { return +t.minimo > u; })[0];
            metas.push(nuevo('cant', !sc2, sc2 ? 'Sumá ' + (sc2.minimo - u) + ' más para el ' + e14Pct(sc2.pct) + ' de descuento' + (cd.sobre === 'todas' ? ' en todas' : '') : 'Ya tenés el descuento', cant.map(function (t) { return +t.minimo; }), u));
          } else {
            var mm = +r.minimo_compra || +cd.carrito_minimo || +cd.minimo || 0;
            if (mm > 0 && s > 0 && r.tipo !== 'envio_gratis') metas.push(nuevo('min', s >= mm, s >= mm ? 'Ya activaste «' + nom + '»' : 'Te faltan ' + plata(mm - s) + ' para activar «' + nom + '»', [mm], s));
          }
        } catch (e) {}
      });
    });
    return { metas: metas, regalos: regalos };
  }
  function e14Cart(camps, X, raiz) {
    var lista = q('.js-ajax-cart-list', raiz), prev = q('.sc-e14-cart', raiz), items = lista ? e14Items(lista) : [];
    var sacar = function () { if (prev && prev.parentNode) prev.parentNode.removeChild(prev); };
    if (!lista || !items.length || !lista.parentNode) { sacar(); return; }
    var progOn = e14Algun(camps, 'progreso_carrito', true), ahoOn = e14Algun(camps, 'ahorro_visible', true), regOn = e14Algun(camps, 'aviso_regalo', true);
    var mt = e14Metas(camps, items), main = null, gift = null, real = ahoOn ? X.real(raiz) : 0;
    if (progOn) main = mt.metas.filter(function (m) { return !m.hecho; })[0] || mt.metas[0] || null;
    if (regOn) gift = mt.regalos.filter(function (g) { return g.cumple; })[0] || null;
    if (!main && !(real > 0) && !gift) { sacar(); return; }
    var ex = main && main.camp.extendida, sub = ex && ex.texto ? e14Cortar(ex.texto, 100) : '';
    var frac = main ? Math.max(0, Math.min(1, main.hecho ? 1 : main.avance / main.tope)) : 0;
    var sig = JSON.stringify([main && [main.frase, main.marcas], sub, real > 0 ? Math.round(real) : 0, gift && [gift.enC, gift.rg.nombre, gift.rg.url, gift.rg.imagen]]);
    var w = prev || esteEl('div', 'sc-e14-cart'); w.setAttribute('data-sc-est', '1');
    if (!prev || w.getAttribute('data-sig') !== sig) {
      var f0 = prev ? parseFloat(w.getAttribute('data-f')) || 0 : 0;
      while (w.firstChild) w.removeChild(w.firstChild);
      w.setAttribute('data-sig', sig);
      if (main || real > 0) {
        var pg = esteEl('div', 'sc-pg');
        if (main) {
          pg.appendChild(esteEl('b', '', main.frase)); if (sub) pg.appendChild(esteEl('small', '', sub));
          var bar = esteEl('div', 'sc-pg-bar'), fl = esteEl('i');
          bar.setAttribute('role', 'progressbar'); bar.setAttribute('aria-valuemin', '0'); bar.setAttribute('aria-valuemax', '100'); bar.setAttribute('aria-valuenow', String(Math.round(frac * 100)));
          fl.style.transform = 'scaleX(' + f0 + ')'; bar.appendChild(fl);
          main.marcas.forEach(function (m, i) { if (i < main.marcas.length - 1 || main.marcas.length > 1) { var mk = esteEl('s'); mk.style.left = Math.min(100, m / main.tope * 100) + '%'; bar.appendChild(mk); } });
          pg.appendChild(bar);
        }
        if (real > 0) { var ah = esteEl('small', 'sc-pg-ah', 'Con esta promo ahorrás '); ah.appendChild(esteEl('b', '', plata(real))); pg.appendChild(ah); }
        w.appendChild(pg);
      }
      if (gift) {
        var gd = esteEl('div', 'sc-rg'), gu = esteSeguro(gift.rg.url), gi = esteImg(gift.rg.imagen), gn = e14Cortar(gift.rg.nombre, 60);
        if (gift.enC) { gd.className += ' sc-rg-ok'; gd.appendChild(esteEl('i', '', '✓')); var gs0 = esteEl('span'); gs0.appendChild(esteEl('b', '', 'Tu regalo ya está en el carrito')); if (gn) gs0.appendChild(esteEl('small', '', gn)); gd.appendChild(gs0); w.appendChild(gd); }
        else if (gu) {
          if (gi) { var im = esteEl('img'); im.src = gi; im.alt = ''; im.width = 56; im.height = 56; im.loading = 'lazy'; im.decoding = 'async'; gd.appendChild(im); }
          var gs = esteEl('span'); gs.appendChild(esteEl('b', '', 'Sumá tu regalo')); if (gn) gs.appendChild(esteEl('small', '', gn)); gd.appendChild(gs);
          var gb = esteEl('a', 'sc-rg-bt', 'Elegir mi regalo'); gb.href = gu; gd.appendChild(gb); w.appendChild(gd);   /* no se agrega solo: lleva a la ficha del regalo */
        }
      }
      if (!w.firstChild) { sacar(); return; }
    }
    var fi = q('.sc-pg-bar>i', w);
    if (fi && w.getAttribute('data-f') !== String(frac)) {
      w.setAttribute('data-f', String(frac));
      var pb = q('.sc-pg-bar', w); if (pb) pb.setAttribute('aria-valuenow', String(Math.round(frac * 100)));
      (window.requestAnimationFrame || setTimeout)(function () { fi.style.transform = 'scaleX(' + frac + ')'; });
    }
    var ref = q('.sc-of-carro', raiz); if (!ref || ref.parentNode !== lista.parentNode) ref = lista;   /* antes del aviso de 1.13: ese aviso compara su vecino con la lista */
    if (w.parentNode !== ref.parentNode || w.nextElementSibling !== ref) ref.parentNode.insertBefore(w, ref);
  }
  /* ficha: "Ahorras $X" (precio tachado menos precio) y "Termina en ..." cuando faltan menos de 72 h */
  function e14Ficha(camps, X) {
    var prev = q('.sc-e14-ah'), m = X.pid && X.reg[X.pid];
    var sacar = function () { if (prev && prev.parentNode) prev.parentNode.removeChild(prev); };
    if (!m || !X.ahoOn) { sacar(); return; }
    var pr = q('#price_display') || q('.js-price-display'), cp = q('.js-compare-price-display'), pc = q('.js-price-container') || (pr && pr.parentNode);
    if (!pr || !pc || !pc.parentNode) { sacar(); return; }
    var p = numero(txt(pr)), o = cp && cp.getClientRects().length ? numero(txt(cp)) : 0, ah = p > 0 && o > p ? o - p : 0;
    var ms = m.c.hasta ? new Date(m.c.hasta).getTime() - Date.now() : 0, fin = ms > 0 ? 'Termina en ' + esteTiempo(m.c.hasta) : '';
    if (!ah && !fin) { sacar(); return; }
    var sig = (ah ? 'a' + ah : '') + '|' + (fin ? 'f' : ''), w = prev || esteEl('div', 'sc-e14-ah');
    w.setAttribute('data-sc-est', '1');
    if (!prev || w.getAttribute('data-sig') !== sig) {
      while (w.firstChild) w.removeChild(w.firstChild); w.setAttribute('data-sig', sig);
      if (ah) { w.appendChild(document.createTextNode('Ahorrás ')); w.appendChild(esteEl('b', '', plata(ah))); }
      if (fin) { var fs = esteEl('span', 'sc-e14-fin', fin); fs.setAttribute('data-sc-fin', m.c.hasta); fs.setAttribute('data-sc-pre', 'Termina en '); w.appendChild(fs); }
    }
    var fe = q('.sc-e14-fin', w); if (fe && fe.textContent !== fin && fin) fe.textContent = fin;
    if (w.previousElementSibling !== pc) pc.parentNode.insertBefore(w, pc.nextSibling);
    if (fin) esteRelojIniciar();   /* 1.16: la cuenta la mueve el reloj unico */
  }
  /* inicio: fila deslizable con los destacados, justo despues de la primera seccion (y del banner de la promo si hay) */
  function e14Seccion(camps) {
    if (location.pathname !== '/') return;
    if (q('.sc-e14-sec')) return;   /* 1.16: una sola fila, pase lo que pase (poner() y fin() la llaman en la misma pasada) */
    var c = null; camps.some(function (k) { if (e14Flag(k.visual.estetica, 'seccion_inicio', false) && k.destacados && k.destacados.length) { c = k; return true; } return false; });
    if (!c) return;
    var hero = q('.js-home-sections-container > .section-slider-home'); if (!hero || !hero.parentNode) return;
    var an = q('.sc-est-home'); if (!an || an.parentNode !== hero.parentNode) an = hero;
    var E = c.visual.estetica, ex = c.extendida, sec = esteEl('section', 'sc-e14-sec'); sec.setAttribute('data-sc-est', '1');
    var tit = e14Cortar(E.seccion_titulo || c.nombre, 60), sub = ex && ex.texto ? e14Cortar(ex.texto, 100) : '';
    var vivo = c.hasta && new Date(c.hasta).getTime() > Date.now();
    sec.setAttribute('aria-label', tit);
    var inn = esteEl('div', 'sc-e14-in'), cab = esteEl('div', 'sc-e14-cab'), tx = esteEl('div', 'sc-e14-tx');
    if (c.hasta) tx.appendChild(esteEl('small', 'sc-e14-kick', 'Hasta el ' + esteFinAR(c.hasta)));
    tx.appendChild(esteEl('h2', '', tit)); if (sub) tx.appendChild(esteEl('p', '', sub));
    var dest = esteSeguro(E.seccion_destino) || esteSeguro(E.cartel_destino) || '/en-oferta/', lado = esteEl('div', 'sc-e14-lado');
    if (vivo) {   /* contador en cajas, lo mueve el reloj unico (data-sc-fin) */
      var cn = esteEl('div', 'sc-e14-cnt'); cn.setAttribute('data-sc-fin', c.hasta); cn.setAttribute('data-sc-cajas', '1'); cn.setAttribute('role', 'timer'); cn.setAttribute('aria-label', 'Tiempo que falta para que termine');
      [['d', 'días'], ['h', 'horas'], ['m', 'min'], ['s', 'seg']].forEach(function (u) { var ca = esteEl('div', 'sc-e14-u'); ca.appendChild(esteEl('b', '', '00')).setAttribute('data-sc-u', u[0]); ca.appendChild(esteEl('small', '', u[1])); cn.appendChild(ca); });
      lado.appendChild(cn);
    }
    var bt = esteEl('a', 'sc-e14-bt', 'Ver todas las ofertas'); bt.href = dest; lado.appendChild(bt);
    cab.appendChild(tx); cab.appendChild(lado); inn.appendChild(cab);
    var fila = esteEl('div', 'sc-e14-fila'), n = 0;
    c.destacados.slice(0, 8).forEach(function (d) {
      var u = esteSeguro(d && d.url), im = esteImg(d && d.imagen); if (!u || !im) return;
      var a = esteEl('a', 'sc-e14-card'); a.href = u;
      var i = esteEl('img'); i.src = im; i.alt = e14Cortar(d.nombre, 80); i.width = 400; i.height = 400; i.loading = 'lazy'; i.decoding = 'async'; a.appendChild(i);
      a.appendChild(esteEl('span', 'sc-e14-nom', e14Cortar(d.nombre, 80)));
      var pr = esteEl('span', 'sc-e14-pr'), pp = +d.precio_promo > 0 && +d.precio > +d.precio_promo;
      if (pp) { pr.appendChild(esteEl('b', '', plata(d.precio_promo))); pr.appendChild(esteEl('s', '', plata(d.precio))); } else if (+d.precio > 0) pr.appendChild(esteEl('b', '', plata(d.precio)));
      a.appendChild(pr); fila.appendChild(a); n++;
    });
    if (!n) return;
    inn.appendChild(fila); sec.appendChild(inn); an.parentNode.insertBefore(sec, an.nextSibling);
    if (vivo) esteRelojIniciar();
    /* entrada: opacidad + 12 px una sola vez al aparecer en pantalla; sin IntersectionObserver (o pestana oculta) entra sola a los 1,5 s para no quedar invisible */
    var entrar = function () { sec.classList.add('sc-in'); };
    try {
      if (typeof IntersectionObserver === 'function') {
        var io = new IntersectionObserver(function (es) { if (es.some(function (e) { return e.isIntersecting; })) { entrar(); io.disconnect(); } }, { threshold: 0.08 });
        io.observe(sec); e14Lim.push(function () { io.disconnect(); });
        var tt = setTimeout(entrar, 1500); e14Lim.push(function () { clearTimeout(tt); });
      } else entrar();
    } catch (e) { entrar(); }
    try { l15RsvSoltar(sec, c.hasta, 'home'); } catch (e) {}
  }
  function e14Bloq() {
    var p = location.pathname.toLowerCase();
    if (/^\/(cart|carrito|checkout|comprar)(\/|$)/.test(p) || /\/checkout(\/|$)/.test(p)) return true;
    var h = document.documentElement, b = document.body;
    if (/modal-open|overflow-none|no-scroll/.test((h.className || '') + ' ' + ((b && b.className) || ''))) return true;
    return qa('.js-modal.modal-show,.modal.modal-show,.modal.show,.js-modal[aria-hidden="false"],[role="dialog"][aria-modal="true"]:not(.sc-cart)').some(function (n) { return n.getClientRects().length > 0; });
  }
  /* cartel de entrada: una vez por campana y visitante; el de la extension, una vez por (campana + numero) aunque ya haya visto el original */
  function e14Cartel(camps) {
    var c = null, ext = false;
    camps.some(function (k) { if (k.extendida && k.extendida.numero != null) { c = k; ext = true; return true; } return false; });
    if (!c) camps.some(function (k) { if (e14Flag(k.visual.estetica, 'cartel_entrada', false)) { c = k; return true; } return false; });
    if (!c) return;
    var E = c.visual.estetica, ex = c.extendida, ko = 'sc_cartel_' + c.slug, kx = ko + '_x' + (ex ? ex.numero : ''), clave = ext ? kx : ko;
    if (e14Vis(clave)) return;
    var kick = ext ? 'Extendido' : '', fin = c.hasta ? esteFinAR(c.hasta) : '';
    var titulo = ext ? e14Cortar(c.nombre, 60) + ' se extendió' : e14Cortar(E.cartel_titulo || c.nombre, 70);
    var texto = ext ? e14Cortar(ex.texto, 100) || (fin ? 'Tenés tiempo hasta el ' + fin + '.' : '') : (e14Cortar(E.cartel_texto, 160) || (fin ? 'Hasta el ' + fin + '.' : ''));
    var boton = e14Cortar(E.cartel_boton, 30) || 'Ver ofertas';
    var dest = esteSeguro(E.cartel_destino) || esteSeguro(E.barra && E.barra.destino) || esteSeguro(E.home && E.home.destino) || '/en-oferta/';
    var intentos = 0, abierto = false, tm = null, poll = null, onScroll = null, t0 = Date.now();
    var mostrar = function () {
      if (abierto) return true;
      if (document.hidden || e14Bloq()) return false;
      abierto = true; if (tm) clearTimeout(tm); if (poll) clearInterval(poll); if (onScroll) window.removeEventListener('scroll', onScroll);
      e14Marca(kx); e14Marca(ko);
      var previo = document.activeElement, H = document.documentElement, ov0 = H.style.overflow;
      var w = esteEl('div', 'sc-cart-w'); w.setAttribute('data-sc-est', '1');
      var fondo = esteEl('div', 'sc-cart-ov'), d = esteEl('div', 'sc-cart'), idt = 'sc-cart-t';
      d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true'); d.setAttribute('aria-labelledby', idt); d.tabIndex = -1;
      var x = esteEl('button', 'sc-cart-x', '×'); x.type = 'button'; x.setAttribute('aria-label', 'Cerrar');
      d.appendChild(x); if (kick) d.appendChild(esteEl('small', 'sc-cart-k', kick));
      var h2 = esteEl('h2', '', titulo); h2.id = idt; d.appendChild(h2); if (texto) d.appendChild(esteEl('p', '', texto));
      if (c.hasta && new Date(c.hasta).getTime() > Date.now()) { var cf = esteEl('p', 'sc-cart-fin', 'Termina en ' + esteTiempo(c.hasta)); cf.setAttribute('data-sc-fin', c.hasta); cf.setAttribute('data-sc-pre', 'Termina en '); cf.setAttribute('data-sc-est', '1'); d.appendChild(cf); esteRelojIniciar(); }
      var bt = esteEl('a', 'sc-cart-bt', boton); bt.href = dest; d.appendChild(bt);
      w.appendChild(fondo); w.appendChild(d); document.body.appendChild(w); H.style.overflow = 'hidden';
      var cerrado = false;
      var cerrar = function () {
        if (cerrado) return; cerrado = true;
        document.removeEventListener('keydown', tecla, true); H.style.overflow = ov0; if (!H.getAttribute('style')) H.removeAttribute('style');
        w.classList.remove('on'); setTimeout(function () { if (w.parentNode) w.parentNode.removeChild(w); }, 280);
        try { if (previo && previo.focus && document.contains(previo)) previo.focus(); } catch (e) {}
      };
      var tecla = function (ev) {
        if (ev.key === 'Escape' || ev.key === 'Esc') { ev.preventDefault(); cerrar(); return; }
        if (ev.key !== 'Tab') return;
        var f = qa('a[href],button', d).filter(function (n) { return n.getClientRects().length; }); if (!f.length) return;
        var a = document.activeElement, i = f.indexOf(a);
        if (ev.shiftKey && (i <= 0)) { ev.preventDefault(); f[f.length - 1].focus(); } else if (!ev.shiftKey && (i === f.length - 1 || i < 0)) { ev.preventDefault(); f[0].focus(); }
      };
      document.addEventListener('keydown', tecla, true);
      x.addEventListener('click', cerrar); fondo.addEventListener('click', cerrar);
      e14Lim.push(function () { cerrar(); if (w.parentNode) w.parentNode.removeChild(w); H.style.overflow = ov0; if (!H.getAttribute('style')) H.removeAttribute('style'); });
      (window.requestAnimationFrame || setTimeout)(function () { (window.requestAnimationFrame || setTimeout)(function () { w.classList.add('on'); try { d.focus(); } catch (e) {} }); });
      return true;
    };
    var intentar = function () { if (Date.now() - t0 < 1200) return; if (mostrar()) return; if (++intentos > 10 && poll) { clearInterval(poll); poll = null; } };
    tm = setTimeout(function () { intentar(); if (!abierto) poll = setInterval(intentar, 2000); }, 4000);
    onScroll = function () { window.removeEventListener('scroll', onScroll); if (Date.now() - t0 < 1200) { setTimeout(intentar, 1200); return; } intentar(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    e14Lim.push(function () { if (tm) clearTimeout(tm); if (poll) clearInterval(poll); window.removeEventListener('scroll', onScroll); });
  }
  /* fin de la campana: se pide el contrato UNA vez sin cache; si sigue viva (extendida) se repinta con el anuncio, si no se limpia. Nunca queda la cuenta en cero ni la promo vencida. */
  function e14Vencio() {
    if (e14Fue) return; e14Fue = true;
    var limpiar = function () { esteLimpiar(); rsvBorrar(); };
    var url = estePrev ? estePrevUrl : CFG.contrato;
    if (!url || typeof fetch !== 'function') { limpiar(); return; }
    try {
      fetch(url, { credentials: 'omit', cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
        if (!d) { limpiar(); return; }
        esteAplicar(d, estePrev);
        setTimeout(function () { if (e14Act.length && e14Act.every(function (c) { return c.hasta && Date.now() >= new Date(c.hasta).getTime(); })) limpiar(); }, 60);
      }).catch(limpiar);
    } catch (e) { limpiar(); }
  }
  /* ---------- 1.17: pagina En oferta tematica + menu con ofertas ----------
     Todo con data-sc-est (se va con esteLimpiar) y las clases/textos que se le ponen al theme se deshacen en e17Limpiar (registrado en e14Lim por e14Instalar). Sin promo: cero nodos, cero clases. */
  var e17Mem = [];
  function e17On(o, k, d) { return o && o[k] !== undefined ? o[k] !== false : d; }
  function e17Camp(camps, clave) { var r = null; camps.some(function (c) { var E = c && c.visual && c.visual.estetica; if (c.en_oferta && E && E[clave] && typeof E[clave] === 'object') { r = c; return true; } return false; }); return r; }
  function e17Ruta(r) { try { var p = new URL(String(r), location.href).pathname.toLowerCase(); return p.replace(/\/+$/, '') + '/'; } catch (e) { return ''; } }
  function e17Path(a) {   /* ruta del link si es de esta tienda; '' si es # u otro sitio */
    var h = a.getAttribute('href'); if (!h || h.charAt(0) === '#' || /^(javascript|mailto|tel):/i.test(h)) return '';
    try { var u = new URL(h, location.href); if (u.hostname.replace(/^www\./, '') !== location.hostname.replace(/^www\./, '')) return ''; return u.pathname.toLowerCase().replace(/\/+$/, '') + '/'; } catch (e) { return ''; }
  }
  function e17Norm(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9à-ÿ]+/g, ''); }
  function e17Lum(c) { var v = c.map(function (x) { x /= 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); }); return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2]; }
  function e17Cont(a, b) { var x = e17Lum(a), y = e17Lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  function e17Arr(h) { return esteRgb(h).split(',').map(Number); }
  function e17Hx(c) { return '#' + c.map(function (x) { return ('0' + Math.max(0, Math.min(255, Math.round(x))).toString(16)).slice(-2); }).join(''); }
  function e17Color(M) {   /* color del menu: rojo de la tienda o el de la campana; si no llega a AA (4,5) sobre blanco y sobre el fondo gris de los subniveles, cae al rojo y se oscurece hasta llegar */
    var H = document.documentElement, rojo = '#c0392b', col = rojo, blanco = [255, 255, 255], gris = [246, 245, 245];
    if (M && M.color === 'campana') { var b = (getComputedStyle(H).getPropertyValue('--of') || '').trim(); if (esteHex(b)) { var a = e17Arr(b); if (e17Cont(a, blanco) >= 4.5 && e17Cont(a, gris) >= 4.5) col = b; } }
    var c = e17Arr(col), i = 0;
    while ((e17Cont(c, blanco) < 4.5 || e17Cont(c, gris) < 4.5) && i++ < 30) c = c.map(function (x) { return x * 0.94; });
    H.style.setProperty('--sc-mof', e17Hx(c));
  }
  /* pagina /en-oferta/: cabecera tematica arriba de la grilla; el h1 nativo queda en el DOM pero recortado (lector de pantalla) */
  function e17Pagina(camps) {
    var c = e17Camp(camps, 'pagina_oferta'); if (!c) return;
    var E = c.visual.estetica, pg = E.pagina_oferta, eo = c.en_oferta;
    if (pg.activa === false || q('.sc-e17-pg')) return;
    if (e17Ruta(location.pathname) !== e17Ruta(eo.ruta || '/en-oferta/')) return;
    var cards = qa('.js-product-table .js-item-product').length, ctl = q('section.js-category-controls'), ant = q('.js-category-controls-prev') || ctl;
    if (!cards || !ant || !ant.parentNode) return;
    var tit = e14Cortar(pg.titulo || c.nombre, 60), vivo = c.hasta && new Date(c.hasta).getTime() > Date.now();
    var sec = esteEl('section', 'sc-e17-pg'); sec.setAttribute('data-sc-est', '1'); sec.setAttribute('aria-label', tit);
    var pc = esteImg(pg.imagen_pc), cel = esteImg(pg.imagen_cel);
    if (pc || cel) {
      sec.classList.add('sc-e17-img');
      var bg = esteEl('div', 'sc-e17-bg'), pic = esteEl('picture'), im = esteEl('img');
      if (pc && cel) { var so = esteEl('source'); so.media = '(min-width:768px)'; so.srcset = pc; pic.appendChild(so); }
      im.src = cel || pc; im.alt = ''; im.decoding = 'async'; pic.appendChild(im); bg.appendChild(pic); sec.appendChild(bg);
    }
    var inn = esteEl('div', 'sc-e17-in'), top = esteEl('div', 'sc-e17-top'), tx = esteEl('div', 'sc-e17-tx'), lado = esteEl('div', 'sc-e17-lado');
    tx.appendChild(esteEl('small', 'sc-e14-kick', c.hasta ? 'Hasta el ' + esteFinAR(c.hasta) : 'Ofertas'));
    tx.appendChild(esteEl('h2', '', tit)); var baj = e14Cortar(pg.bajada, 140); if (baj) tx.appendChild(esteEl('p', '', baj));
    if (vivo && pg.cuenta !== false) {
      var cn = esteEl('div', 'sc-e14-cnt'); cn.setAttribute('data-sc-fin', c.hasta); cn.setAttribute('data-sc-cajas', '1'); cn.setAttribute('role', 'timer'); cn.setAttribute('aria-label', 'Tiempo que falta para que termine');
      [['d', 'días'], ['h', 'horas'], ['m', 'min'], ['s', 'seg']].forEach(function (u) { var ca = esteEl('div', 'sc-e14-u'); ca.appendChild(esteEl('b', '', '00')).setAttribute('data-sc-u', u[0]); ca.appendChild(esteEl('small', '', u[1])); cn.appendChild(ca); });
      lado.appendChild(cn);
    }
    var n = Math.max(+eo.total || 0, cards); lado.appendChild(esteEl('span', 'sc-e17-n', n + (n === 1 ? ' producto' : ' productos')));
    top.appendChild(tx); top.appendChild(lado); inn.appendChild(top);
    var ch = (pg.chips !== false && eo.categorias || []).filter(function (k) { return k.directa && k.ruta && k.nombre; }).slice(0, 8);
    if (ch.length) {
      var nav = esteEl('nav', 'sc-e17-chips'); nav.setAttribute('aria-label', 'Categorías en oferta');
      ch.forEach(function (k) { var a = esteEl('a', 'sc-e17-chip', e14Cortar(k.nombre, 40)); a.href = k.ruta; nav.appendChild(a); });
      inn.appendChild(nav);
    }
    sec.appendChild(inn); ant.parentNode.insertBefore(sec, ant);
    try { var hd = q('header.js-head-main'), cs = getComputedStyle(hd || document.body); if (hd && cs.position === 'fixed') { var off = hd.getBoundingClientRect().bottom - sec.getBoundingClientRect().top; if (off > 0) { sec.style.marginTop = Math.round(off) + 'px'; sec.setAttribute('data-mt0', Math.round(off)); } } } catch (e) {}   /* el header del theme es fijo y transparente: la banda arranca debajo de el, no tapada */
    qa('section.js-category-controls h1,section.js-category-controls .s266-k,[data-store="page-title"] h1,[data-store="page-title"] .s266-k').forEach(function (h) { h.classList.add('sc-e17-oc'); });
    if (vivo && pg.cuenta !== false) esteRelojIniciar();
  }
  function e17Entrada(c, M, a, mov) {   /* viste un link de la campana (clase + "Termina en" en el celular); no cambia su texto */
    if (!a.classList.contains('sc-menu-ent')) a.classList.add('sc-menu-ent');
    a.style.setProperty('color', '#fff', 'important'); a.style.setProperty('background-color', 'var(--sc-mof)', 'important');
    if (mov && c.hasta && new Date(c.hasta).getTime() > Date.now() && !a.querySelector('.sc-e17-tk')) {
      var t = esteEl('span', 'sc-e17-tk'); t.setAttribute('data-sc-est', '1'); t.setAttribute('data-sc-fin', c.hasta); t.setAttribute('data-sc-pre', 'Termina en '); t.textContent = 'Termina en ' + esteTiempo(c.hasta); (q('.n', a) || a).appendChild(t); esteRelojIniciar();
    }
  }
  function e17Menu(camps) {
    var c = e17Camp(camps, 'menu'); if (!c) return;
    var M = c.visual.estetica.menu, eo = c.en_oferta; if (M.activa === false) return;
    var raices = qa('.js-nav-desktop-list,#nav-hamburger'); if (!raices.length) return;
    var res = e17On(M, 'resaltar', true), ent = e17On(M, 'entrada', true), ruta = e17Ruta(eo.ruta || '/en-oferta/');
    var cats = (eo.categorias || []).map(function (k) { return { ruta: e17Ruta(k.ruta), nom: e17Norm(k.nombre), directa: k.directa === true }; }).filter(function (k) { return k.ruta && k.ruta !== '/'; });
    if (res || ent) e17Color(M);
    qa('.js-nav-desktop-list a,#nav-hamburger a').forEach(function (a) {
      if (a.closest('.sc-e17-ent')) return;
      var movil = !!a.closest('#nav-hamburger'), p = e17Path(a);
      if (p && p === ruta) { if (ent) e17Entrada(c, M, a, movil); return; }
      if (!res || !cats.length || !a.textContent.trim()) return;   /* sin texto (foto del menu) no se marca */
      var ex = null, hijo = false;
      if (p) { cats.forEach(function (k) { if (k.ruta === p) ex = ex && ex.directa ? ex : k; else if (k.directa && p.indexOf(k.ruta) === 0) hijo = true; }); }
      else if (a.getAttribute('href') === '#' && a.nextElementSibling) {   /* padre del menu del celular: se reconoce por su "Ver todo" o por el nombre */
        var vt = qa('a.nav-list-link', a.nextElementSibling).filter(function (x) { return /^\s*ver todo/i.test(x.textContent); })[0], pv = vt ? e17Path(vt) : '', nm = e17Norm(a.textContent);
        cats.forEach(function (k) { if ((pv && k.ruta === pv) || (!pv && k.nom && k.nom === nm)) ex = ex && ex.directa ? ex : k; });
      }
      var cl = ex ? (ex.directa ? 'sc-menu-of' : 'sc-menu-of-padre') : hijo ? 'sc-menu-of' : '';
      if (cl && !a.classList.contains(cl)) a.classList.add(cl);
      if (cl === 'sc-menu-of') a.style.setProperty('color', 'var(--sc-mof)', 'important');   /* inline: el theme pone el color del menu con !important y mas especificidad */
      if (((!ex && hijo) || (cl && /^\s*ver todo/i.test(a.textContent))) && !a.classList.contains('sc-menu-of-h')) a.classList.add('sc-menu-of-h');
    });
    if (!ent) return;
    var dest = esteSeguro(eo.ruta) || '/en-oferta/', txt = e14Cortar(M.texto_entrada || c.nombre, 40);
    raices.forEach(function (r) {
      var movil = r.id === 'nav-hamburger';
      if (r.querySelector('.sc-menu-ent,.sc-e17-ent,.sat-tk-of')) return;
      var lista = movil ? q('ul.nav-list', r) : r; if (!lista) return;
      var li = esteEl('li', 'sc-e17-ent' + (movil ? ' nav-item' : ' nav-item-desktop nav-main')); li.setAttribute('data-sc-est', '1');
      var a = esteEl('a', 'sc-menu-ent', txt); a.href = dest; li.appendChild(a);
      if (movil) { lista.insertBefore(li, lista.firstChild); e17Entrada(c, M, a, true); } else lista.appendChild(li);
    });
    qa('.sat-tk-of').forEach(function (m) {   /* mosaico de ofertas (si el menu o la cinta lo traen): tonos y nombre de la campana; el original vuelve en e17Limpiar */
      if (m.classList.contains('sc-e17-tk-of')) return;
      var b = q('b', m); if (b) { e17Mem.push({ el: b, t: b.textContent }); b.textContent = txt; }
      m.classList.add('sc-e17-tk-of');
    });
  }
  function e17Limpiar() {
    ['sc-menu-of', 'sc-menu-of-h', 'sc-menu-of-padre', 'sc-menu-ent', 'sc-e17-oc', 'sc-e17-tk-of'].forEach(function (k) {
      qa('.' + k).forEach(function (n) { if (k === 'sc-menu-of' || k === 'sc-menu-ent') { n.style.removeProperty('color'); n.style.removeProperty('background-color'); if (!n.getAttribute('style')) n.removeAttribute('style'); } n.classList.remove(k); if (n.getAttribute('class') === '') n.removeAttribute('class'); });
    });
    e17Mem.forEach(function (m) { try { m.el.textContent = m.t; } catch (e) {} }); e17Mem = [];
    document.documentElement.style.removeProperty('--sc-mof');
  }
  function e17Css(FJ, AM) {
    var V = 'html.scm ', P = V + '.sc-e17-pg';
    return [
      '@keyframes sc-e17-in{from{opacity:0}to{opacity:1}}',
      P + '{box-sizing:border-box;position:relative;isolation:isolate;overflow:hidden;width:100%;min-height:200px;margin:0;padding:30px 0 22px;font-family:' + FJ + ';color:var(--of-ink);background:var(--of-fondo,#efe9e3);border-top:3px solid var(--of);animation:sc-e17-in .35s ease both}',
      'html.scm.scm-b .sc-e17-pg{color:var(--of-tx);background:var(--of);border-top:0}',
      'html.scm.scm-c:not(.scm-liso) .sc-e17-pg{background:radial-gradient(rgba(255,255,255,.07) 1px,transparent 1.6px) 0 0/7px 7px,linear-gradient(135deg,rgba(var(--of-osc-rgb),0),rgba(var(--of-osc-rgb),.22)),var(--of)}',
      V + '.sc-e17-pg.sc-e17-img{color:#fff;background:var(--of-osc,#2b1a14);border-top:0}',
      V + '.sc-e17-bg{position:absolute;inset:0;z-index:-2}',
      V + '.sc-e17-bg img{display:block;width:100%;height:100%;object-fit:cover}',
      V + '.sc-e17-img::before{content:"";position:absolute;inset:0;z-index:-1;background:rgba(var(--of-osc-rgb),.78)}',
      V + '.sc-e17-in{box-sizing:border-box;max-width:1240px;margin:0 auto;padding:0 16px;display:flex;flex-direction:column;gap:18px}',
      V + '.sc-e17-top{display:flex;flex-direction:column;gap:18px}',
      V + '.sc-e17-lado{display:flex;flex-direction:column;align-items:flex-start;gap:12px}',
      V + '.sc-e17-pg .sc-e14-kick{display:block;font:700 11px/1.2 ' + FJ + ';letter-spacing:.16em;text-transform:uppercase;opacity:.85;margin-bottom:8px}',
      V + '.sc-e17-pg h2{margin:0;padding:0;font:700 clamp(30px,8vw,56px)/1.04 ' + AM + ';color:inherit;letter-spacing:-.02em;text-transform:none}',
      V + '.sc-e17-pg p{margin:8px 0 0;font:500 14px/1.45 ' + FJ + ';opacity:.85;max-width:52ch}',
      V + '.sc-e17-n{font:600 13px/1 ' + FJ + ';letter-spacing:.02em;opacity:.85}',
      V + '.sc-e17-pg .sc-e14-cnt{display:flex;gap:8px}',
      V + '.sc-e17-img .sc-e14-u{background:rgba(255,255,255,.16);color:#fff;box-shadow:inset 0 0 0 1px rgba(255,255,255,.3)}',
      V + '.sc-e17-chips{display:flex;gap:8px;overflow-x:auto;scroll-snap-type:x proximity;margin:0 -16px;padding:2px 16px 4px;scrollbar-width:none;-webkit-overflow-scrolling:touch}',
      V + '.sc-e17-chips::-webkit-scrollbar{display:none}',
      V + '.sc-e17-chip{flex:0 0 auto;scroll-snap-align:start;box-sizing:border-box;display:inline-flex;align-items:center;min-height:44px;padding:0 18px;border-radius:999px;font:600 14px/1 ' + FJ + ';text-decoration:none;white-space:nowrap;background:#fff;color:var(--of-ink);box-shadow:inset 0 0 0 1px rgba(var(--of-rgb),.28)}',
      'html.scm.scm-b .sc-e17-chip{background:rgba(var(--of-tx-rgb),.14);color:var(--of-tx);box-shadow:inset 0 0 0 1px rgba(var(--of-tx-rgb),.3)}',
      V + '.sc-e17-img .sc-e17-chip{background:rgba(255,255,255,.16);color:#fff;box-shadow:inset 0 0 0 1px rgba(255,255,255,.4)}',
      V + '.sc-e17-oc{position:absolute!important;width:1px!important;height:1px!important;margin:-1px!important;padding:0!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;clip-path:inset(50%)!important;white-space:nowrap!important;border:0!important}',
      P + '{padding-top:58px}',
      '@media(min-width:768px){' + P + '{padding:48px 0 36px;min-height:220px}' + V + '.sc-e17-in{padding:0 24px;gap:26px}' + V + '.sc-e17-top{flex-direction:row;justify-content:space-between;align-items:flex-end;gap:32px}' + V + '.sc-e17-lado{align-items:flex-end}' + V + '.sc-e17-chips{flex-wrap:wrap;overflow:visible;margin:0;padding:0}' + V + '.sc-e14-u{min-width:76px}}',
      /* menu */
      V + 'body a.sc-menu-of.sc-menu-of.sc-menu-of{color:var(--sc-mof)!important}',
      V + 'body a.sc-menu-of.rowl .n,body a.sc-menu-of.sc-menu-of .n{color:var(--sc-mof)!important}',
      V + 'body a.sc-menu-of.sc-menu-of:not(.sc-menu-of-h)::after{content:"%"!important;display:inline-block!important;vertical-align:middle;margin-left:6px;padding:2px 5px;border-radius:8px;background:var(--sc-mof)!important;color:#fff!important;font:700 10px/1 ' + FJ + ';letter-spacing:0;text-transform:none;width:auto;height:auto;position:static}',
      V + 'body a.sc-menu-of-padre.sc-menu-of-padre::after{content:""!important;display:inline-block!important;vertical-align:middle;margin-left:7px;width:6px;height:6px;border-radius:50%;background:var(--sc-mof)!important;padding:0;position:static}',
      V + 'body a.sc-menu-ent.sc-menu-ent.sc-menu-ent:not(.rowl){background:var(--sc-mof);color:#fff!important;border-radius:999px;padding:7px 15px;font-weight:700;text-decoration:none}',
      V + '#nav-hamburger a.sc-menu-ent:not(.rowl){display:flex;flex-wrap:wrap;align-items:center;gap:2px 10px;border-radius:14px;padding:14px 16px;margin:8px 0}',
      V + '#nav-hamburger a.sc-menu-ent:not(.rowl)::after{content:"\u2192";margin-left:auto;font-size:18px}',
      V + 'a.sc-menu-ent.rowl{border-radius:14px}',
      V + 'a.sc-menu-ent.rowl .n,' + V + 'a.sc-menu-ent.rowl .thm{color:#fff!important}',
      V + 'a.sc-menu-ent.rowl .thm{background:rgba(255,255,255,.2)!important}',
      V + 'a.sc-menu-ent.rowl .sc-of-chip{background:rgba(255,255,255,.22)!important;color:#fff!important}',
      V + '.sc-e17-tk{display:block;font:600 11px/1.2 ' + FJ + ';opacity:.92;letter-spacing:.02em;font-variant-numeric:tabular-nums}',
      V + 'a>.sc-e17-tk{flex-basis:100%;order:3}',
      V + 'a.sat-tk-of.sc-e17-tk-of{background:var(--of)!important;color:var(--of-tx)!important}',
      V + 'a.sat-tk-of.sc-e17-tk-of *{color:inherit!important}'
    ];
  }
  /* ---------- 1.18 (Web 3a): cinta, botones, cierre, cupon y brillo ----------
     Cada pieza va solo si el contrato la trae activa (estetica.cinta.activa, estetica.botones[], estetica.cierre.activa, campana.cupon, estetica.efecto === 'brillo'). Sin promo: cero nodos, cero clases.
     Todo nodo nuevo lleva data-sc-est="1" (esteLimpiar lo saca); los oyentes y observadores se registran en e14Lim. Textos: solo los del dueño. Animaciones: solo transform / opacity. */
  var e18E = { camps: null, D: null, on: false, med: {}, io: null };
  function e18Datos(camps) {
    if (e18E.camps === camps && e18E.D) return e18E.D;
    var D = { cinta: null, botones: [], cierre: null, cupon: null, brillo: false, tarjeta: null, sello: null, hay: false };
    camps.forEach(function (c) {
      var E = c.visual.estetica;
      if (!D.cinta && E.cinta && typeof E.cinta === 'object' && E.cinta.activa === true) {
        var fr = (Array.isArray(E.cinta.frases) ? E.cinta.frases : []).map(function (f) { return e14Cortar(f, 40); }).filter(Boolean).slice(0, 4);
        if (fr.length) D.cinta = { c: c, frases: fr, lugar: /^(arriba|inicio|pie)$/.test(E.cinta.lugar) ? E.cinta.lugar : 'arriba', seg: E.cinta.velocidad === 'lenta' ? 40 : 25 };
      }
      if (!D.botones.length && Array.isArray(E.botones)) {
        D.botones = E.botones.map(function (b) {
          if (!b || typeof b !== 'object') return null;
          var t = e14Cortar(b.texto, 24), l = esteSeguro(b.link);
          return t && l && /^(seccion_inicio|pagina_oferta|ficha|flotante)$/.test(b.lugar) ? { texto: t, link: l, lugar: b.lugar, estilo: b.estilo === 'borde' ? 'borde' : 'lleno', c: c } : null;
        }).filter(Boolean).slice(0, 3);
      }
      if (!D.cierre && E.cierre && typeof E.cierre === 'object' && E.cierre.activa === true) {
        var ti = e14Cortar(E.cierre.titulo, 50), tx = e14Cortar(E.cierre.texto, 120), bt = e14Cortar(E.cierre.boton_texto, 24), lk = esteSeguro(E.cierre.link);
        if (ti || tx) D.cierre = { c: c, titulo: ti, texto: tx, boton: bt && lk ? { texto: bt, link: lk } : null };
      }
      if (!D.cupon && c.cupon && typeof c.cupon === 'object' && /^[A-Za-z0-9_-]{2,30}$/.test(String(c.cupon.codigo || ''))) D.cupon = { c: c, codigo: String(c.cupon.codigo), texto: e14Cortar(c.cupon.texto, 60) };
      if (!D.tarjeta && E.tarjeta_grilla && typeof E.tarjeta_grilla === 'object' && E.tarjeta_grilla.activa === true) {
        var tg = E.tarjeta_grilla, tt = e14Cortar(tg.titulo, 40), tx2 = e14Cortar(tg.texto, 90), pos = Math.round(+tg.posicion) || 5;
        if (tt) D.tarjeta = { c: c, titulo: tt, texto: tx2, img: esteImg(tg.imagen), link: esteSeguro(tg.link), pos: Math.max(2, Math.min(12, pos)) };
      }
      if (!D.sello && E.sello && typeof E.sello === 'object' && E.sello.activa === true) { var st = e14Cortar(E.sello.texto, 14); if (st) D.sello = { c: c, texto: st, forma: E.sello.forma === 'cinta' ? 'cinta' : 'circulo' }; }
      if (E.efecto === 'brillo') D.brillo = true;
    });
    D.hay = !!(D.tarjeta || D.sello || D.cinta || D.botones.length || D.cierre || D.cupon || D.brillo);
    e18E.camps = camps; e18E.D = D; return D;
  }
  function e18Excl() { return /^\/(carrito|cart|checkout|comprar)(\/|$)/i.test(location.pathname) || !!q('#shoppingCartPage'); }
  function e18Visible(n) { try { return !!(n && n.getClientRects().length && getComputedStyle(n).visibility !== 'hidden'); } catch (e) { return false; } }
  function e18Boton(b, extra) { var a = esteEl('a', 'sc-e18-bt sc-e18-' + b.estilo + (extra ? ' ' + extra : ''), b.texto); a.href = b.link; a.setAttribute('data-sc-est', '1'); return a; }
  function e18Copiar(t, ok) {
    var fb = function () {
      try { var ta = esteEl('textarea'); ta.value = t; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0'; document.body.appendChild(ta); ta.select(); var r = document.execCommand('copy'); document.body.removeChild(ta); ok(!!r); } catch (e) { ok(false); }
    };
    try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(function () { ok(true); }, fb); else fb(); } catch (e) { fb(); }
  }
  function e18Cupon(k) {   /* pastilla "Cupon XXXX · Copiar"; al copiar dice "Copiado" (y lo anuncia por aria-live) */
    var w = esteEl('span', 'sc-e18-cup'); w.setAttribute('data-sc-est', '1');
    var b = esteEl('button', 'sc-e18-cupb'); b.type = 'button'; b.setAttribute('aria-label', 'Copiar el cupón ' + k.codigo);
    var cc = esteEl('span', 'sc-e18-cc', 'Copiar'), av = esteEl('span', 'sc-e18-av'); av.setAttribute('role', 'status'); av.setAttribute('aria-live', 'polite');
    b.appendChild(document.createTextNode('Cupón ')); b.appendChild(esteEl('b', '', k.codigo)); b.appendChild(esteEl('i', '', '·')); b.appendChild(cc);
    var tm = 0;
    b.addEventListener('click', function () {
      e18Copiar(k.codigo, function (ok) {
        if (!ok) return;
        cc.textContent = 'Copiado'; av.textContent = 'Copiado'; w.classList.add('sc-e18-hecho');
        if (tm) clearTimeout(tm);
        tm = setTimeout(function () { cc.textContent = 'Copiar'; av.textContent = ''; w.classList.remove('sc-e18-hecho'); }, 2200);
      });
    });
    w.appendChild(b); w.appendChild(av);
    if (k.texto) w.appendChild(esteEl('small', 'sc-e18-cut', k.texto));
    return w;
  }
  function e18Llenar(g, fr, n) {
    while (g.firstChild) g.removeChild(g.firstChild);
    for (var i = 0; i < n; i++) fr.forEach(function (f) { g.appendChild(esteEl('span', 'sc-e18-f', f)); var p = esteEl('span', 'sc-e18-pt', '·'); p.setAttribute('aria-hidden', 'true'); g.appendChild(p); });
  }
  function e18Rep(el, fr) {   /* cuantas veces repetir las frases para que un grupo llene el ancho de la pantalla (el bucle va de 0 a -50 %: dos grupos iguales) */
    var gs = qa('.sc-e18-g', el); if (gs.length < 2) return;
    var w1 = gs[0].offsetWidth || 1, n0 = +el.getAttribute('data-n') || 1;
    var n = Math.max(1, Math.min(14, Math.ceil(window.innerWidth * 1.1 / (w1 / n0))));
    if (n !== n0 || !el.getAttribute('data-n')) { gs.forEach(function (g) { e18Llenar(g, fr, n); }); el.setAttribute('data-n', n); }
    q('.sc-e18-pista', el).classList.add('sc-e18-ok');
  }
  function e18Ancla(lugar) {
    if (lugar === 'arriba') {   /* dentro del encabezado fijo, justo debajo de la barra superior y a todo el ancho */
      var ab = q('.js-adbar'); if (!ab || !ab.parentNode) return null;
      var hd = ab.closest ? ab.closest('header') : null, nd = ab; while (hd && nd.parentNode && nd.parentNode !== hd) nd = nd.parentNode;
      return hd && nd.parentNode === hd ? { p: hd, r: nd.nextSibling } : { p: ab.parentNode, r: ab.nextSibling };
    }
    if (lugar === 'inicio') {
      if (location.pathname !== '/') return null;
      var s = q('.sc-e14-sec') || q('.sc-est-home') || q('.js-home-sections-container > .section-slider-home'); return s && s.parentNode ? { p: s.parentNode, r: s.nextSibling } : null;
    }
    var f = q('.sc-e18-cierre') || q('footer.js-footer') || q('footer'); return f && f.parentNode ? { p: f.parentNode, r: f } : null;
  }
  function e18Cinta(D) {
    var ci = D.cinta, el = q('.sc-e18-cinta');
    if (!ci || e18Excl()) { if (el && el.parentNode) el.parentNode.removeChild(el); return; }
    if (el) {   /* ya esta: solo mantener el orden (pie antes del pie/cierre, inicio despues de la seccion de la campana) */
      var sec = q('.sc-e14-sec'), ci2 = q('.sc-e18-cierre');
      if (ci.lugar === 'inicio' && sec && el.previousElementSibling !== sec) sec.parentNode.insertBefore(el, sec.nextSibling);
      if (ci.lugar === 'pie' && ci2 && el.nextElementSibling !== ci2) ci2.parentNode.insertBefore(el, ci2);
      return;
    }
    var a = e18Ancla(ci.lugar); if (!a) return;
    el = esteEl('div', 'sc-e18-cinta'); el.setAttribute('data-sc-est', '1'); el.setAttribute('role', 'region'); el.setAttribute('aria-label', 'Mensajes de la promoción');
    el.style.setProperty('--e18-d', ci.seg + 's');
    var pista = esteEl('div', 'sc-e18-pista'), g1 = esteEl('div', 'sc-e18-g'), g2 = esteEl('div', 'sc-e18-g'); g2.setAttribute('aria-hidden', 'true');
    e18Llenar(g1, ci.frases, 1); e18Llenar(g2, ci.frases, 1); pista.appendChild(g1); pista.appendChild(g2); el.appendChild(pista);
    var pp = function (v) { return function () { el.classList.toggle('sc-e18-pp', v); }; };
    el.addEventListener('touchstart', pp(true), { passive: true }); el.addEventListener('touchend', pp(false), { passive: true }); el.addEventListener('touchcancel', pp(false), { passive: true });
    a.p.insertBefore(el, a.r);
    e18Rep(el, ci.frases);
    try { e19Bajar(); } catch (e) {}
  }
  function e18Inicio(D) {   /* boton de la seccion del inicio, junto a "Ver todas las ofertas" */
    var b = D.botones.filter(function (x) { return x.lugar === 'seccion_inicio'; })[0], lado = q('.sc-e14-sec .sc-e14-lado');
    if (!b || !lado || q('.sc-e18-fila', lado)) return;
    var bt = q('a.sc-e14-bt', lado); if (!bt) return;
    var fila = esteEl('div', 'sc-e18-fila'); fila.setAttribute('data-sc-est', '1'); lado.insertBefore(fila, bt); fila.appendChild(bt); fila.appendChild(e18Boton(b));
  }
  function e18Pagina(D) {   /* encabezado de /en-oferta/: cupon y botones de la pagina */
    var lado = q('.sc-e17-pg .sc-e17-lado'); if (!lado || q('.sc-e18-pgx', lado)) return;
    var bs = D.botones.filter(function (x) { return x.lugar === 'pagina_oferta'; });
    if (!D.cupon && !bs.length) return;
    var w = esteEl('div', 'sc-e18-pgx'); w.setAttribute('data-sc-est', '1');
    if (D.cupon) w.appendChild(e18Cupon(D.cupon));
    bs.forEach(function (b) { w.appendChild(e18Boton(b)); });
    lado.appendChild(w);
  }
  function e18Ficha(D, X) {   /* ficha de un producto alcanzado: cupon y boton justo debajo de "Ahorras / Termina en" (en la misma pasada que lo pone e14Ficha, asi no se corre nada despues) */
    var m = X && X.pid && X.reg && X.reg[X.pid], w = q('.sc-e18-fx');
    var b = D.botones.filter(function (x) { return x.lugar === 'ficha'; })[0];
    var bt = q('#product_form input.js-addtocart.cart, #product_form .js-addtocart.cart'), ah = bt && bt.closest('.form-row');   /* 1.19: debajo del boton de compra, para que el boton y la eleccion de modelo/color no se muevan */
    if (!ah) ah = q('.sc-e14-ah') || q('.js-price-container');
    if (!m || !ah || !ah.parentNode || (!b && !D.cupon)) { if (w && w.parentNode) w.parentNode.removeChild(w); return; }
    if (!w) {
      w = esteEl('div', 'sc-e18-fx'); w.setAttribute('data-sc-est', '1');
      if (D.cupon) w.appendChild(e18Cupon(D.cupon));
      if (b) w.appendChild(e18Boton(b));
    }
    if (w.previousElementSibling !== ah || w.parentNode !== ah.parentNode) ah.parentNode.insertBefore(w, ah.nextSibling);
  }
  function e18Grilla(D) {   /* tarjeta de la grilla: del tamano de un producto, en /en-oferta/ y en categorias con oferta directa; una sola, en su posicion */
    var t = D.tarjeta, tb = t && q('.js-product-table'), eo = t && t.c.en_oferta, rp = e17Ruta(location.pathname), aqui = false;
    if (t && eo) { aqui = rp === e17Ruta(eo.ruta || '/en-oferta/'); (eo.categorias || []).forEach(function (k) { if (k && k.directa === true && e17Ruta(k.ruta) === rp) aqui = true; }); }
    var ex = qa('.sc-e18-tg');
    if (!t || !tb || !aqui || e18Excl()) { ex.forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); }); return; }
    var el = ex.filter(function (n) { return n.parentNode === tb; })[0];
    ex.forEach(function (n) { if (n !== el && n.parentNode) n.parentNode.removeChild(n); });
    var items = [].filter.call(tb.children, function (n) { return n.classList.contains('js-item-product'); });
    if (!items.length) return;
    if (!el) {
      el = esteEl('div', 'col-6 col-md-4 item sc-e18-tg'); el.setAttribute('data-sc-est', '1');
      var a = esteEl(t.link ? 'a' : 'div', 'sc-e18-tgi'); if (t.link) a.href = t.link;
      if (t.img) { var im = esteEl('img', 'sc-e18-tgm'); im.src = t.img; im.alt = ''; im.loading = 'lazy'; im.decoding = 'async'; a.appendChild(im); }
      var cu = esteEl('div', 'sc-e18-tgc'); cu.appendChild(esteEl('strong', 'sc-e18-tgt', t.titulo)); if (t.texto) cu.appendChild(esteEl('span', 'sc-e18-tgx', t.texto)); a.appendChild(cu);
      el.appendChild(a);
    }
    var idx = Math.min(t.pos - 1, items.length), ref = items[idx] || null;   /* menos productos que la posicion: va al final */
    var actual = [].filter.call(tb.children, function (n) { return n === el || n.classList.contains('js-item-product'); }).indexOf(el);
    if (el.parentNode !== tb || actual !== idx) tb.insertBefore(el, ref && ref !== el ? ref : (idx >= items.length ? items[items.length - 1].nextSibling : ref));
  }
  function e18Sello(D, X) {   /* sello sobre la foto principal de la ficha de un producto en oferta */
    var s = D.sello, m = X && X.pid && X.reg && X.reg[X.pid], host = s && m && q('.product-image-container'), w = q('.sc-e18-sello');
    if (!s || !m || !host || e18Excl()) { if (w && w.parentNode) w.parentNode.removeChild(w); return; }
    if (w && w.parentNode === host) return;
    if (w && w.parentNode) w.parentNode.removeChild(w);
    if (getComputedStyle(host).position === 'static') { host.style.position = 'relative'; host.setAttribute('data-sc-e18-pos', '1'); }
    w = esteEl('div', 'sc-e18-sello sc-e18-sl-' + s.forma); w.setAttribute('data-sc-est', '1'); w.setAttribute('aria-hidden', 'true');
    w.appendChild(esteEl('span', 'sc-e18-slt', s.texto));
    host.appendChild(w);
  }
  function e18Cierre(D) {   /* franja antes del pie: en el inicio y en /en-oferta/ */
    var ci = D.cierre, el = q('.sc-e18-cierre');
    var eo = ci && ci.c.en_oferta, aqui = location.pathname === '/' || (ci && e17Ruta(location.pathname) === e17Ruta((eo && eo.ruta) || '/en-oferta/'));
    if (!ci || !aqui || e18Excl()) { if (el && el.parentNode) el.parentNode.removeChild(el); return; }
    if (el) return;
    var f = q('footer.js-footer') || q('footer'); if (!f || !f.parentNode) return;
    el = esteEl('section', 'sc-e18-cierre'); el.setAttribute('data-sc-est', '1'); el.setAttribute('aria-label', ci.titulo || 'Promoción');
    if (ci.titulo) el.appendChild(esteEl('h2', '', ci.titulo));
    if (ci.texto) el.appendChild(esteEl('p', '', ci.texto));
    if (ci.boton) el.appendChild(e18Boton({ texto: ci.boton.texto, link: ci.boton.link, estilo: 'lleno' }));
    f.parentNode.insertBefore(el, f);
  }
  var E18_X = 'sc_e18_x';
  function e18Cerrada(b) { try { return sessionStorage.getItem(E18_X) === b.link + '|' + b.texto; } catch (e) { return false; } }
  function e18Flot(D) {   /* pastilla fija; cruz recordada en sessionStorage; nunca en carrito, checkout ni en la pagina a la que lleva */
    var b = D.botones.filter(function (x) { return x.lugar === 'flotante'; })[0], el = q('.sc-e18-flot');
    var no = !b || e18Excl() || e17Ruta(b.link) === e17Ruta(location.pathname) || e18Cerrada(b);
    if (no) { if (el && el.parentNode) el.parentNode.removeChild(el); return; }
    if (!el) {
      el = esteEl('div', 'sc-e18-flot sc-e18-' + b.estilo); el.setAttribute('data-sc-est', '1'); el.setAttribute('role', 'group'); el.setAttribute('aria-label', 'Acceso a la promoción');
      var a = esteEl('a', 'sc-e18-fl-a', b.texto); a.href = b.link; var x = esteEl('button', 'sc-e18-fl-x', '×'); x.type = 'button'; x.setAttribute('aria-label', 'Cerrar');
      x.addEventListener('click', function () { try { sessionStorage.setItem(E18_X, b.link + '|' + b.texto); } catch (e) {} if (el.parentNode) el.parentNode.removeChild(el); });
      el.appendChild(a); el.appendChild(x); document.body.appendChild(el);
    }
    e18Pos();
  }
  function e18Pos() {   /* se acomoda para no tapar WhatsApp, la barra de compra fija, el aviso de cookies ni el carrito */
    var el = q('.sc-e18-flot'); if (!el) return;
    var vw = window.innerWidth, vh = window.innerHeight, mov = vw < 768;
    var cart = q('#modal-cart'); el.classList.toggle('sc-e18-oculta', !!(cart && cart.classList.contains('modal-show')));
    el.style.bottom = ''; el.style.right = ''; el.style.left = '';
    var obs = qa('.satine-wa-fab,#whatsapp,#satine-sticky-cta,#sh26-help-btn,.js-notification-cookie-banner').filter(e18Visible);
    for (var pasada = 0; pasada < 4; pasada++) {
      var r = el.getBoundingClientRect(), pisa = null;
      obs.some(function (o) { var s = o.getBoundingClientRect(); if (s.width && s.height && r.left < s.right + 8 && r.right > s.left - 8 && r.top < s.bottom + 8 && r.bottom > s.top - 8) { pisa = s; return true; } return false; });
      if (!pisa) break;
      if (!mov && pisa.width < 140 && pisa.left > vw / 2) { el.style.right = Math.round(vw - pisa.left + 12) + 'px'; }   /* compu: a la izquierda del boton de WhatsApp */
      else el.style.bottom = Math.round(vh - pisa.top + 12) + 'px';   /* celular (o barra ancha): encima */
    }
  }
  function e18Brillo(D) {
    if (!D.brillo) return;
    qa('.sc-e14-sec h2,.sc-e17-pg h2').forEach(function (h) {
      if (h.classList.contains('sc-e18-br')) return;
      h.classList.add('sc-e18-br');
      try {
        if (typeof IntersectionObserver !== 'function') { h.classList.add('sc-e18-go'); return; }
        if (!e18E.io) e18E.io = new IntersectionObserver(function (es) { es.forEach(function (e) { e.target.classList.toggle('sc-e18-go', e.isIntersecting); }); }, { threshold: 0.4 });
        e18E.io.observe(h);
      } catch (e) { h.classList.add('sc-e18-go'); }
    });
  }
  var e19Dt = [];
  var e19Bd = false, e19Iv = 0;
  function e19Bajar() {   /* 1.19: con una cinta en el encabezado (ofertas o lanzamiento) el encabezado crece; Filtrar / Ordenar del theme (fijos) bajan lo mismo (margin-top) para no quedar sobre el carrito ni el menu */
    var hd = q('header.js-head-main'), c = hd && q('.sc-e18-cinta,.lz-cinta', hd), h = c ? c.offsetHeight + 4 : 0, bd = document.body;
    if (!c && e19Iv) { clearInterval(e19Iv); e19Iv = 0; }
    if (c && !e19Iv) e19Iv = setInterval(function () { try { e19Bajar(); } catch (e) {} }, 250);   /* la cinta puede nacer antes que su CSS: se vuelve a medir enseguida */
    if (bd) {   /* el encabezado es fijo: la pagina baja lo mismo que crece (misma distancia encabezado-contenido que sin vista previa). Va en una hoja propia: el theme borra el style inline del body */
      var cp = c ? c.offsetHeight : 0, st = q('#sc-e19-st');
      if (cp) {
        if (!st) { st = esteEl('style'); st.id = 'sc-e19-st'; st.setAttribute(c.classList.contains('lz-cinta') ? 'data-sc-lz' : 'data-sc-est', '1'); document.head.appendChild(st); }
        var tx = 'body{padding-top:' + cp + 'px!important}'; if (st.textContent !== tx) st.textContent = tx;
        e19Bd = true;
      } else if (st) { st.parentNode.removeChild(st); e19Bd = false; }
    }
    ['#satine-filtrar-dock', '#satine-ordenar-dock'].forEach(function (sel) {
      var d = q(sel); if (!d || d.classList.contains('sc-e18-dk')) return;
      var tiene = d.style.getPropertyPriority('margin-top') === 'important' && e19Dt.indexOf(d) > -1;
      if (h && (!tiene || d.style.marginTop !== h + 'px')) { d.style.setProperty('margin-top', h + 'px', 'important'); if (e19Dt.indexOf(d) < 0) e19Dt.push(d); }
      else if (!h && tiene) { d.style.removeProperty('margin-top'); if (!d.getAttribute('style')) d.removeAttribute('style'); e19Dt.splice(e19Dt.indexOf(d), 1); }
    });
  }
  function e19Soltar() {
    if (e19Iv) { clearInterval(e19Iv); e19Iv = 0; }
    var st0 = q('#sc-e19-st'); if (st0 && st0.parentNode) st0.parentNode.removeChild(st0); e19Bd = false;
    e19Dt.forEach(function (d) { try { d.style.removeProperty('margin-top'); if (!d.getAttribute('style')) d.removeAttribute('style'); } catch (e) {} });
    e19Dt = [];
  }
  var e18Dk = [];
  function e18Fila(sec) {   /* 1.19: Filtrar / Ordenar del theme (fijos) pasan a su propia fila debajo de la banda, a la derecha; nunca sobre el encabezado, el carrito ni la banda */
    var docks = ['#satine-filtrar-dock', '#satine-ordenar-dock'].map(function (x) { return q(x); }).filter(Boolean), fila = q('.sc-e18-fil');
    if (!sec || !docks.length) { if (fila && !fila.children.length && fila.parentNode) fila.parentNode.removeChild(fila); return; }
    if (!fila) { fila = esteEl('div', 'sc-e18-fil'); fila.setAttribute('data-sc-est', '1'); sec.parentNode.insertBefore(fila, sec.nextSibling); }
    else if (fila.previousElementSibling !== sec) sec.parentNode.insertBefore(fila, sec.nextSibling);
    docks.sort(function (a, b) { return a.id === 'satine-ordenar-dock' ? -1 : 1; }).forEach(function (d) {
      if (d.parentNode === fila) return;
      if (!e18Dk.some(function (r) { return r.el === d; })) e18Dk.push({ el: d, p: d.parentNode, n: d.nextSibling });
      d.classList.add('sc-e18-dk'); fila.appendChild(d);
    });
  }
  function e18FilaDeshacer() {
    e18Dk.forEach(function (r) { try { r.el.classList.remove('sc-e18-dk'); if (!r.el.getAttribute('class')) r.el.removeAttribute('class'); if (r.p && r.p.isConnected) r.p.insertBefore(r.el, r.n && r.n.parentNode === r.p ? r.n : null); } catch (e) {} });
    e18Dk = [];
  }
  function e18Dock() {   /* el boton Filtrar / Ordenar del theme es fijo: la banda de /en-oferta/ arranca debajo de el, no por detras */
    var sec = q('.sc-e17-pg'); if (sec) { var cc = q('.js-category-controls'); if (cc && !cc.classList.contains('sc-e18-ctl')) cc.classList.add('sc-e18-ctl'); }
    e18Fila(sec); e19Bajar();
    if (!sec || window.pageYOffset > 5) return;
    var dk = ['#satine-filtrar-dock', '#satine-ordenar-dock'].map(function (s) { return q(s); }).filter(function (d) { return d && e18Visible(d) && getComputedStyle(d).position === 'fixed'; })[0];
    var base = +sec.getAttribute('data-mt0') || 0, m = parseFloat(sec.style.marginTop) || 0, top0 = sec.getBoundingClientRect().top - m;
    var hd = q('header.js-head-main'), hb = hd && getComputedStyle(hd).position === 'fixed' ? hd.getBoundingClientRect().bottom + 4 - top0 : 0;
    var nuevo = Math.max(base, dk ? Math.ceil(dk.getBoundingClientRect().bottom + 6 - top0) : 0, Math.ceil(hb));
    if (Math.abs(nuevo - m) > 1) sec.style.marginTop = nuevo + 'px';
  }
  function e18Medir(camps) {   /* alto de la banda de /en-oferta/ para que el head del theme reserve el hueco en la visita siguiente (registro sc_est_reserva, mismo mecanismo que los banners) */
    var sec = q('.sc-e17-pg'); if (!sec || estePrev) return;
    var ruta = e17Ruta(location.pathname), cs = getComputedStyle(sec), ctl = q('.js-category-controls'), m0 = 0, m1 = 0;
    if (ctl) { var tr0 = ctl.style.transition; ctl.style.transition = 'none'; m1 = parseFloat(getComputedStyle(ctl).marginTop) || 0; ctl.classList.remove('sc-e18-ctl'); m0 = parseFloat(getComputedStyle(ctl).marginTop) || 0; ctl.classList.add('sc-e18-ctl'); void ctl.offsetHeight; ctl.style.transition = tr0; }   /* m0 = margen que el theme le da a los controles sin nuestra banda */
    var h = Math.max(0, Math.round(sec.getBoundingClientRect().height + (parseFloat(cs.marginTop) || 0) + (parseFloat(cs.marginBottom) || 0) + m1 - m0));   /* cuanto empuja la banda a la grilla */
    if (!(h > 40) || Math.abs((e18E.med[ruta] || 0) - h) < 3) return;
    e18E.med[ruta] = h; rsvGuardar(camps, [{ k: 'cat', ruta: ruta, h: h }]);
  }
  function e18Pendiente(camps) {   /* la banda de /en-oferta/ todavia no esta: el hueco del head se queda hasta que se inserte (o a los 4 s) */
    var c = e17Camp(camps, 'pagina_oferta'); if (!c || c.visual.estetica.pagina_oferta.activa === false || estePrev) return false;
    return e17Ruta(location.pathname) === e17Ruta((c.en_oferta && c.en_oferta.ruta) || '/en-oferta/') && !q('.sc-e17-pg');
  }
  function e18Init() {
    if (e18E.on) return; e18E.on = true;
    var raf = 0, f = function () { if (raf) return; raf = requestAnimationFrame(function () { raf = 0; try { e18Pos(); e18Dock(); e19Bajar(); var ci = q('.sc-e18-cinta'); if (ci && e18E.D && e18E.D.cinta) e18Rep(ci, e18E.D.cinta.frases); } catch (e) {} }); };
    window.addEventListener('resize', f); window.addEventListener('scroll', f, { passive: true });
    var iv = setInterval(function () { try { e19Bajar(); } catch (e) {} if (q('.sc-e18-flot') || q('#satine-filtrar-dock') || q('.sc-e18-cinta')) f(); }, 500);   /* la barra de compra y el chat aparecen despues de un retraso propio: se revisa de nuevo */
    e14Lim.push(function () { e18FilaDeshacer(); e19Soltar(); clearInterval(iv); qa('[data-sc-e18-pos]').forEach(function (n) { n.style.position = ''; n.removeAttribute('data-sc-e18-pos'); if (!n.getAttribute('style')) n.removeAttribute('style'); }); qa('.sc-e18-ctl,.sc-e18-br,.sc-e18-go').forEach(function (n) { n.classList.remove('sc-e18-ctl', 'sc-e18-br', 'sc-e18-go'); }); window.removeEventListener('resize', f); window.removeEventListener('scroll', f); if (raf) cancelAnimationFrame(raf); if (e18E.io) { e18E.io.disconnect(); e18E.io = null; } e18E.on = false; e18E.camps = null; e18E.D = null; });
  }
  function e18Poner(camps, X) {   /* el pulido de 1.17 (dock, hueco, reserva) corre siempre; las piezas nuevas solo si vienen activas */
    var D = e18Datos(camps);
    e18Init();
    var gs = [function () { e18Dock(); }, function () { e18Medir(camps); }];
    if (D.hay) gs = [function () { e18Cierre(D); }, function () { e18Cinta(D); }, function () { e18Inicio(D); }, function () { e18Pagina(D); }, function () { e18Ficha(D, X); }, function () { e18Grilla(D); }, function () { e18Sello(D, X); }, function () { e18Flot(D); }, function () { e18Brillo(D); }].concat(gs);
    gs.forEach(function (g) { try { g(); } catch (e) {} });
  }
  function e18Css(FJ, AM) {
    var V = 'html.scm ', B = 'html.scm.scm-b ';
    return [
      '@keyframes sc-e18-run{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}',
      '@keyframes sc-e18-sh{0%{transform:translate3d(-130%,0,0);opacity:0}4%{opacity:1}16%{transform:translate3d(260%,0,0);opacity:1}18%,100%{transform:translate3d(260%,0,0);opacity:0}}',
      '@keyframes sc-e18-in{from{opacity:0;transform:translate3d(0,10px,0)}to{opacity:1;transform:translate3d(0,0,0)}}',
      /* cinta: alto fijo (se reserva solo, no empuja nada despues de pintar) */
      V + '.sc-e18-cinta{box-sizing:border-box;position:relative;z-index:1;width:100%;height:36px;overflow:hidden;contain:layout paint;font:600 11.5px/36px ' + FJ + ';letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;background:var(--of-fondo,#efe9e3);color:var(--of-ink);border-bottom:1px solid rgba(var(--of-rgb),.18)}',
      B + '.sc-e18-cinta{background:var(--of);color:var(--of-tx);border-bottom:0}',
      V + '.sc-e18-pista{display:flex;width:max-content;will-change:transform}',
      V + '.sc-e18-pista.sc-e18-ok{animation:sc-e18-run var(--e18-d,25s) linear infinite}',
      V + '.sc-e18-g{display:flex;flex:0 0 auto;align-items:center}',
      V + '.sc-e18-f{padding:0 16px}',
      V + '.sc-e18-pt{opacity:.5}',
      '@media(hover:hover){' + V + '.sc-e18-cinta:hover .sc-e18-pista{animation-play-state:paused}}',
      V + '.sc-e18-pp .sc-e18-pista{animation-play-state:paused}',
      /* botones */
      V + '.sc-e18-bt{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 22px;border-radius:999px;border:2px solid var(--of);font:700 14px/1 ' + FJ + ';text-decoration:none;white-space:nowrap;cursor:pointer;transition:transform .2s ease,opacity .2s ease}',
      V + '.sc-e18-lleno{background:var(--of);color:var(--of-tx)!important}',
      V + '.sc-e18-borde{background:transparent;color:var(--of)!important}',
      B + '.sc-e17-pg .sc-e18-lleno,' + B + '.sc-e14-sec .sc-e18-lleno,' + B + '.sc-e18-cierre .sc-e18-lleno{background:var(--of-tx);border-color:var(--of-tx);color:var(--of)!important}',
      B + '.sc-e17-pg .sc-e18-borde,' + B + '.sc-e14-sec .sc-e18-borde{border-color:var(--of-tx);color:var(--of-tx)!important}',
      V + '.sc-e17-img .sc-e18-lleno{background:#fff;border-color:#fff;color:var(--of-osc,#2b1a14)!important}',
      V + '.sc-e17-img .sc-e18-borde{border-color:#fff;color:#fff!important}',
      '@media(hover:hover){' + V + '.sc-e18-bt:hover{transform:translate3d(0,-1px,0)}}',
      V + '.sc-e18-bt:active{transform:scale(.98)}',
      V + '.sc-e18-bt:focus-visible,' + V + '.sc-e18-cupb:focus-visible,' + V + '.sc-e18-fl-a:focus-visible,' + V + '.sc-e18-fl-x:focus-visible{outline:2px solid currentColor;outline-offset:3px}',
      V + '.sc-e18-fila{display:flex;flex-wrap:wrap;align-items:center;gap:10px}',
      V + '.sc-e18-pgx{display:flex;flex-wrap:wrap;align-items:center;gap:10px}',
      V + '.sc-e18-fil{box-sizing:border-box;display:flex;justify-content:flex-end;align-items:center;gap:8px;padding:0 12px;margin:0 0 8px;min-height:44px}',
      V + '.sc-e18-fil .sc-e18-dk{position:static!important;top:auto!important;right:auto!important;left:auto!important;transform:none!important;opacity:1!important;pointer-events:auto!important;display:flex!important;min-height:44px;margin:0!important;z-index:1!important}',
      V + '.sc-e18-tg{padding:0 6px;margin-bottom:12px}',
      V + '.sc-e18-tgi{box-sizing:border-box;position:relative;display:flex;flex-direction:column;justify-content:flex-end;width:100%;height:100%;min-height:200px;aspect-ratio:3/4;overflow:hidden;border-radius:12px;background:var(--of);color:var(--of-tx)!important;text-decoration:none;font-family:' + FJ + '}',
      V + '.sc-e18-tgm{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;opacity:.55}',
      V + '.sc-e18-tgc{position:relative;display:flex;flex-direction:column;gap:6px;padding:14px;background:linear-gradient(to top,var(--of) 55%,transparent)}',
      V + '.sc-e18-tgt{font:800 17px/1.15 ' + FJ + ';letter-spacing:-.01em;color:var(--of-tx)!important}',
      V + '.sc-e18-tgx{font:500 12.5px/1.35 ' + FJ + ';color:var(--of-tx)!important;opacity:.9}',
      V + 'a.sc-e18-tgi{transition:transform .25s cubic-bezier(.22,1,.36,1)}@media(hover:hover){' + V + 'a.sc-e18-tgi:hover{transform:translate3d(0,-2px,0)}}',
      V + '.sc-e18-sello{position:absolute;z-index:3;pointer-events:none;left:12px;top:12px}',
      V + '.sc-e18-sl-circulo{width:68px;height:68px;border-radius:50%;display:flex;align-items:center;justify-content:center;text-align:center;transform:rotate(-8deg);background:var(--of);color:var(--of-tx);box-shadow:0 0 0 3px #fff,0 4px 12px rgba(0,0,0,.18)}',
      V + '.sc-e18-sl-circulo .sc-e18-slt{font:800 11px/1.1 ' + FJ + ';letter-spacing:.02em;text-transform:uppercase;padding:0 6px;overflow-wrap:anywhere}',
      V + '.sc-e18-sl-cinta{left:0;top:0;width:96px;height:96px;overflow:hidden}',
      V + '.sc-e18-sl-cinta .sc-e18-slt{position:absolute;left:-30px;top:18px;width:132px;transform:rotate(-45deg);background:var(--of);color:var(--of-tx);text-align:center;font:800 11px/22px ' + FJ + ';letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      V + '.sc-e18-fx{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:12px 0 4px}',
      /* cupon */
      V + '.sc-e18-cup{display:inline-flex;flex-direction:column;align-items:flex-start;gap:4px;position:relative}',
      V + '.sc-e18-cupb{box-sizing:border-box;display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 18px;border-radius:999px;border:1.5px dashed rgba(var(--of-rgb),.6);background:#fff;color:var(--of-ink);font:600 13px/1 ' + FJ + ';cursor:pointer;transition:transform .2s ease}',
      V + '.sc-e18-cupb b{font-weight:800;letter-spacing:.06em}',
      V + '.sc-e18-cupb i{font-style:normal;opacity:.5}',
      V + '.sc-e18-cc{color:var(--of);font-weight:700}',
      V + '.sc-e18-hecho .sc-e18-cupb{border-style:solid}',
      V + '.sc-e18-cupb:active{transform:scale(.98)}',
      V + '.sc-e18-cut{font:500 11.5px/1.3 ' + FJ + ';opacity:.8}',
      V + '.sc-e18-av{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}',
      B + '.sc-e17-pg .sc-e18-cupb{background:rgba(var(--of-tx-rgb),.14);color:var(--of-tx);border-color:rgba(var(--of-tx-rgb),.6)}',
      B + '.sc-e17-pg .sc-e18-cc{color:var(--of-tx)}',
      V + '.sc-e17-img .sc-e18-cupb{background:rgba(255,255,255,.16);color:#fff;border-color:rgba(255,255,255,.7)}',
      V + '.sc-e17-img .sc-e18-cc{color:#fff}',
      /* cierre */
      V + '.sc-e18-cierre{box-sizing:border-box;width:100%;padding:44px 16px;text-align:center;font-family:' + FJ + ';color:var(--of-ink);background:var(--of-fondo,#efe9e3);border-top:3px solid var(--of)}',
      B + '.sc-e18-cierre{color:var(--of-tx);background:var(--of);border-top:0}',
      V + '.sc-e18-cierre h2{margin:0 auto;padding:0;font:700 clamp(24px,6.4vw,38px)/1.1 ' + AM + ';max-width:24ch;letter-spacing:-.02em;text-transform:none;color:inherit}',
      V + '.sc-e18-cierre p{margin:10px auto 0;font:500 15px/1.5 ' + FJ + ';max-width:46ch;opacity:.88;color:inherit}',
      V + '.sc-e18-cierre .sc-e18-bt{margin-top:22px}',
      /* flotante */
      V + '.sc-e18-flot{position:fixed;z-index:9000;left:12px;bottom:calc(16px + env(safe-area-inset-bottom,0px));display:flex;align-items:center;border-radius:999px;font-family:' + FJ + ';box-shadow:0 12px 30px -12px rgba(30,18,12,.5);animation:sc-e18-in .35s ease both;transition:opacity .2s ease}',
      V + '.sc-e18-flot.sc-e18-lleno{background:var(--of);color:var(--of-tx)}',
      V + '.sc-e18-flot.sc-e18-borde{background:#fff;color:var(--of);box-shadow:inset 0 0 0 2px var(--of),0 12px 30px -12px rgba(30,18,12,.4)}',
      V + '.sc-e18-fl-a{display:inline-flex;align-items:center;min-height:44px;padding:0 6px 0 20px;font:700 14px/1 ' + FJ + ';color:inherit!important;text-decoration:none;white-space:nowrap}',
      V + '.sc-e18-fl-x{box-sizing:border-box;width:44px;height:44px;border:0;background:transparent;color:inherit;font:400 24px/1 ' + FJ + ';cursor:pointer;border-radius:999px;padding:0}',
      V + '.sc-e18-oculta{opacity:0;pointer-events:none}',
      '@media(min-width:768px){' + V + '.sc-e18-flot{left:auto;right:24px;bottom:24px}}',
      /* /en-oferta/: el theme deja 105 px sobre los controles para librar el encabezado; con la banda arriba sobra */
      'html.scm body .js-category-controls.sc-e18-ctl.sc-e18-ctl{margin-top:16px!important}',
      '@media(min-width:768px){' + 'html.scm body .js-category-controls.sc-e18-ctl.sc-e18-ctl{margin-top:24px!important}}',
      /* brillo */
      V + 'h2.sc-e18-br{position:relative;overflow:hidden;width:fit-content;max-width:100%;padding-bottom:.1em}',
      V + '.sc-e18-br::after{content:"";position:absolute;top:0;bottom:0;left:0;width:45%;pointer-events:none;background:linear-gradient(105deg,transparent,rgba(var(--of-rgb),.3),transparent);transform:translate3d(-130%,0,0);opacity:0}',
      B + '.sc-e18-br::after,' + V + '.sc-e17-img .sc-e18-br::after{background:linear-gradient(105deg,transparent,rgba(255,255,255,.6),transparent)}',
      V + '.sc-e18-br.sc-e18-go::after{animation:sc-e18-sh 6s ease-in-out infinite}',
      /* quieto: sin movimiento, la primera frase centrada, sin destello */
      '@media(prefers-reduced-motion:reduce){' + V + '.sc-e18-pista{animation:none!important;width:100%;justify-content:center}' + V + '.sc-e18-g{width:100%;justify-content:center}' + V + '.sc-e18-g+.sc-e18-g{display:none}' + V + '.sc-e18-f~*{display:none}' + V + '.sc-e18-f{padding:0 16px;overflow:hidden;text-overflow:ellipsis}' + V + '.sc-e18-br::after{display:none}' + V + '.sc-e18-flot{animation:none}' + V + '.sc-e18-bt,' + V + '.sc-e18-cupb{transition:none}}'
    ];
  }
  function e14Instalar(camps, X) {
    e14Act = camps; e14Lim.push(e17Limpiar);
    var t = Infinity; camps.forEach(function (c) { var h = c.hasta ? new Date(c.hasta).getTime() : 0; if (h && h < t) t = h; });
    if (isFinite(t) && t > Date.now()) {
      e14Fue = false;
      var ms = t - Date.now(), tf = ms < 2e9 ? setTimeout(e14Vencio, Math.max(0, ms) + 400) : null, vf = function () { if (!document.hidden && Date.now() >= t) e14Vencio(); };
      document.addEventListener('visibilitychange', vf);
      e14Lim.push(function () { if (tf) clearTimeout(tf); document.removeEventListener('visibilitychange', vf); });
    }
    return { fin: function () { [function () { e14Seccion(camps); }, function () { e14Cartel(camps); }, function () { e18Poner(camps, X); }].forEach(function (f) { try { f(); } catch (e) {} }); },
      poner: function () {
      try { if (!q('.sc-e14-sec')) e14Seccion(camps); } catch (e) {}
      try { e17Pagina(camps); } catch (e) {}
      try { e17Menu(camps); } catch (e) {}
      try { X.ahoOn = e14Algun(camps, 'ahorro_visible', true); e14Ficha(camps, X); } catch (e) {}
      try { e18Poner(camps, X); } catch (e) {}
      try { ['#modal-cart', '#shoppingCartPage'].forEach(function (s) { var r = q(s); if (r) e14Cart(camps, X, r); }); } catch (e) {}
    } };
  }
  function e14Css(FJ, AM) {
    var V = 'html.scm ';
    return [
      V + '.sc-e14-cart{display:flex;flex-direction:column;gap:8px;margin:12px 0 6px;font-family:' + FJ + ';text-align:left}',
      V + '.sc-pg{background:#fff;border:1px solid rgba(var(--of-rgb),.22);border-radius:16px;padding:12px 14px;color:var(--of-ink)}',
      V + '.sc-pg b{display:block;font:700 13.5px/1.3 ' + FJ + ';color:inherit}',
      V + '.sc-pg small{display:block;font:500 11.5px/1.35 ' + FJ + ';color:inherit;opacity:.75;margin-top:2px}',
      V + '.sc-pg small.sc-pg-ah{opacity:1;margin-top:8px}',
      V + '.sc-pg small.sc-pg-ah b{display:inline;font-size:inherit;color:var(--of)}',
      V + '.sc-pg-bar{position:relative;height:6px;border-radius:99px;background:rgba(var(--of-rgb),.14);margin-top:10px;overflow:hidden}',
      V + '.sc-pg-bar>i{position:absolute;left:0;top:0;bottom:0;width:100%;border-radius:99px;background:var(--of);transform-origin:0 50%;transform:scaleX(0);transition:transform .35s cubic-bezier(.22,1,.36,1)}',
      V + '.sc-pg-bar>s{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:#fff;text-decoration:none}',
      V + '.sc-rg{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid rgba(var(--of-rgb),.22);border-radius:16px;padding:10px 12px;color:var(--of-ink)}',
      V + '.sc-rg>img{flex:none;width:56px;height:56px;border-radius:12px;object-fit:cover;background:#f3f1ee}',
      V + '.sc-rg>i{flex:none;width:28px;height:28px;border-radius:50%;background:var(--of);color:var(--of-tx);display:grid;place-items:center;font:700 13px/1 system-ui,sans-serif;font-style:normal}',
      V + '.sc-rg>span{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}',
      V + '.sc-rg b{font:700 13.5px/1.25 ' + FJ + '}',
      V + '.sc-rg small{font:500 11.5px/1.3 ' + FJ + ';opacity:.75;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      V + '.sc-rg .sc-rg-bt{flex:none;background:var(--of);color:var(--of-tx)!important;font:700 12px/1 ' + FJ + ';padding:10px 14px;border-radius:999px;text-decoration:none}',
      V + '.sc-e14-ah{margin:8px 0 4px;display:flex;flex-wrap:wrap;align-items:center;gap:8px;font:600 14px/1.3 ' + FJ + ';color:var(--of-ink)}',
      V + '.sc-e14-ah b{color:var(--of);font-weight:800}',
      V + '.sc-e14-fin{font:700 11.5px/1 ' + FJ + ';padding:6px 10px;border-radius:999px;background:rgba(var(--of-rgb),.1);color:var(--of)}',
      /* 1.16: seccion del inicio. Banda de ancho completo con los tonos de la campana (--of*); la intensidad la dan las clases de <html>: sin scm-b = sobrio, scm-b = destacado, scm-c = total (scm-liso = sin grano) */
      V + '.sc-e14-sec{box-sizing:border-box;width:100%;margin:0;padding:36px 0 30px;min-height:600px;font-family:' + FJ + ';color:var(--of-ink);background:var(--of-fondo,#efe9e3);border-top:3px solid var(--of);opacity:0;transform:translateY(12px);transition:opacity .3s ease,transform .3s ease}',
      V + '.sc-e14-sec.sc-in{opacity:1;transform:none}',
      'html.scm.scm-b .sc-e14-sec{color:var(--of-tx);background:var(--of);border-top:0}',
      'html.scm.scm-c:not(.scm-liso) .sc-e14-sec{background:radial-gradient(rgba(255,255,255,.07) 1px,transparent 1.6px) 0 0/7px 7px,linear-gradient(135deg,rgba(var(--of-osc-rgb),0),rgba(var(--of-osc-rgb),.22)),var(--of)}',
      V + '.sc-e14-in{max-width:1240px;margin:0 auto}',
      V + '.sc-e14-cab{display:flex;flex-direction:column;gap:20px;padding:0 16px 22px}',
      V + '.sc-e14-kick{display:block;font:700 11px/1.2 ' + FJ + ';letter-spacing:.16em;text-transform:uppercase;opacity:.8;margin-bottom:8px}',
      V + '.sc-e14-cab h2{margin:0;font:700 clamp(28px,7vw,52px)/1.04 ' + AM + ';color:inherit;letter-spacing:-.02em}',
      V + '.sc-e14-cab p{margin:8px 0 0;font:500 14px/1.4 ' + FJ + ';opacity:.8}',
      V + '.sc-e14-lado{display:flex;flex-direction:column;align-items:flex-start;gap:16px}',
      V + '.sc-e14-cnt{display:flex;gap:8px}',
      V + '.sc-e14-u{box-sizing:border-box;min-width:62px;padding:10px 4px 8px;border-radius:14px;text-align:center;background:#fff;color:var(--of-ink);box-shadow:0 1px 0 rgba(0,0,0,.04)}',
      'html.scm.scm-b .sc-e14-u{background:rgba(var(--of-tx-rgb),.14);color:var(--of-tx);box-shadow:inset 0 0 0 1px rgba(var(--of-tx-rgb),.22)}',
      V + '.sc-e14-u b{display:block;font:800 26px/1 ' + FJ + ';font-variant-numeric:tabular-nums;letter-spacing:-.01em}',
      V + '.sc-e14-u small{display:block;margin-top:5px;font:600 9.5px/1 ' + FJ + ';letter-spacing:.12em;text-transform:uppercase;opacity:.7}',
      V + '.sc-e14-bt{display:inline-block;padding:14px 24px;border-radius:999px;background:var(--of);color:var(--of-tx)!important;font:700 14px/1 ' + FJ + ';text-decoration:none;white-space:nowrap}',
      'html.scm.scm-b .sc-e14-bt{background:var(--of-tx);color:var(--of)!important}',
      V + '.sc-e14-fila{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;padding:4px 16px 8px;scrollbar-width:none}',
      V + '.sc-e14-fila::-webkit-scrollbar{display:none}',
      V + '.sc-e14-card{flex:0 0 150px;box-sizing:border-box;scroll-snap-align:start;scroll-margin-left:16px;display:flex;flex-direction:column;gap:6px;padding:8px 8px 12px;border-radius:18px;background:#fff;text-decoration:none;color:#34211b}',
      V + '.sc-e14-card img{display:block;width:100%;height:auto;aspect-ratio:1/1;object-fit:cover;border-radius:12px;background:#f3f1ee}',
      V + '.sc-e14-nom{padding:0 4px;font:600 13px/1.25 ' + FJ + ';display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}',
      V + '.sc-e14-pr{padding:0 4px;display:flex;flex-wrap:wrap;align-items:baseline;gap:6px;font:500 12px/1.2 ' + FJ + '}',
      V + '.sc-e14-pr b{font:800 14px/1.2 ' + FJ + ';color:var(--of)}',
      V + '.sc-e14-pr s{opacity:.55}',
      '@media(min-width:768px){' + V + '.sc-e14-sec{padding:56px 0 48px;min-height:560px}' + V + '.sc-e14-cab{flex-direction:row;justify-content:space-between;align-items:flex-end;padding:0 24px 32px}' + V + '.sc-e14-lado{align-items:flex-end}' + V + '.sc-e14-u{min-width:76px}' + V + '.sc-e14-u b{font-size:32px}' + V + '.sc-e14-fila{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;overflow:visible;padding:4px 24px 8px}' + V + '.sc-e14-card{flex:none}' + V + '.sc-e14-card:nth-child(n+5){display:none}}',
      '@media (prefers-reduced-motion:reduce){html.scm .sc-e14-sec{opacity:1;transform:none;transition:none}}',
      V + '.sc-e14-fin{font-variant-numeric:tabular-nums}',
      V + '.sc-cart-fin{font-variant-numeric:tabular-nums;font-weight:700}',
      V + '.sc-est-barra .sc-e14-ext{flex:none!important;overflow:visible!important;text-overflow:clip!important;max-width:none!important;display:inline-block;margin:0 6px;padding:2px 8px;border:1px solid currentColor;border-radius:99px;font:700 9.5px/1.5 ' + FJ + ';letter-spacing:.06em;text-transform:uppercase;vertical-align:middle;white-space:nowrap}',
      'html .sc-cart-w{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;font-family:' + FJ + '}',
      'html .sc-cart-ov{position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(30,18,12,.5);opacity:0;transition:opacity .25s ease}',
      'html .sc-cart{position:absolute;left:0;right:0;bottom:0;box-sizing:border-box;background:#fff;color:#34211b;border-radius:22px 22px 0 0;padding:30px 22px calc(26px + env(safe-area-inset-bottom,0px));text-align:center;transform:translateY(100%);opacity:0;transition:transform .32s cubic-bezier(.22,1,.36,1),opacity .25s ease;outline:none;box-shadow:0 -12px 40px -12px rgba(30,18,12,.35)}',
      'html .sc-cart-w.on .sc-cart-ov{opacity:1}',
      'html .sc-cart-w.on .sc-cart{transform:translateY(0);opacity:1}',
      'html .sc-cart-x{position:absolute;top:8px;right:10px;width:44px;height:44px;border:0;border-radius:50%;background:transparent;color:#34211b;font:400 28px/1 system-ui,sans-serif;cursor:pointer}',
      'html .sc-cart-k{display:inline-block;margin-bottom:10px;padding:4px 10px;border:1px solid rgba(var(--of-rgb,52,33,27),.4);border-radius:99px;font:700 10px/1.4 ' + FJ + ';letter-spacing:.07em;text-transform:uppercase;color:var(--of,#34211b)}',
      'html .sc-cart h2{margin:0 24px;font:700 24px/1.15 ' + AM + ';color:#34211b;letter-spacing:-.01em}',
      'html .sc-cart p{margin:10px 0 0;font:500 14px/1.45 ' + FJ + ';color:#34211b;opacity:.78}',
      'html .sc-cart-bt{display:block;margin-top:20px;padding:15px 22px;border-radius:999px;background:var(--of,#34211b);color:var(--of-tx,#fff)!important;font:700 14px/1 ' + FJ + ';text-decoration:none}',
      '@media(min-width:768px){html .sc-cart{left:50%;right:auto;bottom:auto;top:50%;width:420px;max-width:calc(100% - 48px);border-radius:24px;padding:38px 32px 30px;transform:translate(-50%,calc(-50% + 18px));box-shadow:0 30px 70px -20px rgba(30,18,12,.45)}html .sc-cart-w.on .sc-cart{transform:translate(-50%,-50%)}}',
      '@media (prefers-reduced-motion:reduce){html .sc-cart-ov,html .sc-cart,html.scm .sc-pg-bar>i{transition:none}}'
    ];
  }
  function estePintar(camps) {
    esteLimpiar();
    if (!camps.length) { rsvBorrar(); rsvSoltar(); return; }
    var medidas = [];
    var pri = camps[0], E0 = pri.visual.estetica, P = E0.paleta || {}, css = [];
    document.documentElement.setAttribute('data-sc-est', '1');
    /* 1.13: intensidad, acabado y color base salen de la primera campana con acento valido (si no hay: rojo SATINE, destacado, onda) */
    var base = null;
    camps.some(function (c) { var E = c.visual.estetica, a = E.acento && E.paleta && E.paleta[E.acento]; if (a && esteHex(a.fondo) && esteHex(a.texto)) { base = { E: E, col: a }; return true; } return false; });
    if (!base) base = { E: E0, col: { fondo: '#c0392b', texto: '#ffffff' } };
    var niv = base.E.intensidad === 'sobrio' || base.E.intensidad === 'total' ? base.E.intensidad : 'destacado', liso = base.E.acabado === 'liso';
    var Hh = document.documentElement; Hh.classList.add('scm'); if (niv !== 'sobrio') Hh.classList.add('scm-b'); if (niv === 'total') Hh.classList.add('scm-c'); if (liso) Hh.classList.add('scm-liso');
    ofPonerVars(Hh, ofTonos(base.col), true);
    var pid = window.LS && LS.product && LS.product.id;
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
      '.sc-est-barra{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;align-items:center;justify-content:center;gap:10px;z-index:10001;font:600 11px/1.2 var(--cy-sans,system-ui,sans-serif);letter-spacing:.04em;text-transform:uppercase;text-align:center;padding:0 16px;overflow:hidden;white-space:nowrap;border-radius:inherit}',
      '.sc-est-barra>a,.sc-est-barra>div{color:inherit;text-decoration:none;display:flex;gap:10px;align-items:center;justify-content:center;max-width:100%;min-width:0}',
      /* 1.12.1: el theme le fuerza un color a los textos de la franja: sin esto el dorado salia con letra clara */
      '.sc-est-barra *{color:inherit!important}',
      '.sc-est-barra span{overflow:hidden;text-overflow:ellipsis}',
      '.sc-est-cuenta{font-variant-numeric:tabular-nums;opacity:.85;flex:none}',
      'html .sc-pill-on .js-offer-label-private,html .sc-pill-on .js-offer-label,html .sc-pill-on .js-promotion-label-private{display:none!important}',
      '.sc-est-pill{position:absolute;left:8px;top:8px;z-index:3;padding:3px 9px;border-radius:999px;font:700 11px/1.3 var(--cy-sans,system-ui,sans-serif);pointer-events:none;letter-spacing:.02em}',
      '.sc-est-banner{display:block;margin:0 12px 16px;border-radius:18px;overflow:hidden;text-decoration:none;position:relative}',
      '.sc-est-banner-img{aspect-ratio:2/1;background:rgba(0,0,0,.04)}@media(min-width:768px){.sc-est-banner-img{aspect-ratio:4/1}}',
      '.sc-est-banner picture,.sc-est-banner img{display:block;width:100%;height:100%;object-fit:cover}',
      '.sc-est-banner-txt{padding:20px 18px;min-height:96px;display:flex;flex-direction:column;justify-content:center;gap:4px}',
      '.sc-est-banner-txt b{font:700 20px/1.2 var(--cy-serif,system-ui,sans-serif)}',
      '.sc-est-banner-txt span{font:500 13px/1.4 var(--cy-sans,system-ui,sans-serif);opacity:.9}',
      '.sc-est-banner-txt i{font:700 12px/1 var(--cy-sans,system-ui,sans-serif);font-style:normal;text-decoration:underline;margin-top:4px}',
      '.sc-est-ficha{display:block;margin:10px 0 16px;padding:10px 12px;border-radius:12px;font:600 13px/1.35 var(--cy-sans,system-ui,sans-serif);text-decoration:none}',
      /* 1.11: portada. Ancho = min(100% - 24px, 1200px) y proporcion 4/3 en celular, 3/1 en compu (el head del theme reserva con la misma cuenta) */
      '.sc-est-home{display:block;position:relative;box-sizing:border-box;width:min(100% - 24px,1200px);margin:16px auto 20px;border-radius:18px;overflow:hidden;text-decoration:none;color:#f5f0e5;background:#34211b}',
      '.sc-est-home-img{aspect-ratio:4/3}@media(min-width:768px){.sc-est-home-img{aspect-ratio:3/1}}',
      '.sc-est-home picture,.sc-est-home img{display:block;width:100%;height:100%;object-fit:cover}',
      '.sc-est-home-tx{display:flex;flex-direction:column;gap:6px;padding:24px 20px;align-items:flex-start}',
      '.sc-est-home-img .sc-est-home-tx{position:absolute;left:0;right:0;bottom:0;padding:56px 20px 18px;color:#f5f0e5;background:linear-gradient(to top,rgba(52,33,27,.86),rgba(52,33,27,0))}',
      '.sc-est-home-tx small{font:700 11px/1.2 var(--cy-sans,system-ui,sans-serif);letter-spacing:.08em;text-transform:uppercase;opacity:.85}',
      '.sc-est-home-tx b{font:700 22px/1.15 var(--cy-serif,system-ui,sans-serif);max-width:26em}',
      '.sc-est-home-tx span{font:500 13px/1.4 var(--cy-sans,system-ui,sans-serif);opacity:.92;max-width:34em;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}',
      '.sc-est-home-tx i{font:700 13px/1 var(--cy-sans,system-ui,sans-serif);font-style:normal;margin-top:6px;padding:0 20px;min-height:44px;display:inline-flex;align-items:center;border-radius:999px;background:#f5f0e5;color:#34211b}',
      '@media(min-width:768px){.sc-est-home{margin:24px auto}.sc-est-home-tx{padding:32px 40px}.sc-est-home-img .sc-est-home-tx{padding:72px 40px 28px}.sc-est-home-tx b{font-size:30px}.sc-est-home-tx span{font-size:15px}}',
      /* 1.11: ficha. Franja de imagen debajo del boton de compra, 4/1 en celular y 5/1 en compu */
      '.sc-est-fbn{display:block;margin:12px 0 0;border-radius:12px;overflow:hidden;text-decoration:none;aspect-ratio:4/1;background:rgba(0,0,0,.04)}@media(min-width:768px){.sc-est-fbn{aspect-ratio:5/1}}',
      '.sc-est-fbn picture,.sc-est-fbn img{display:block;width:100%;height:100%;object-fit:cover}'
    );
    /* 1.13: modo oferta. Todo cuelga de html.scm (lo pone esta funcion) y se va con esteLimpiar. Los tonos llegan como variables (--of, --of-osc, ...) puestas en cada pieza con SU color. */
    var O = 'html.scm:not(.scm-liso) ', FJ = '"Plus Jakarta Sans",system-ui,sans-serif', AM = '"Arca Majora 3","Arca Majora",system-ui,sans-serif';
    css.push(
      /* comun a los dos acabados: estructura, linea de ahorro, avisos, fichas chicas */
      'html.scm .sc-est-ficha{display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:14px;position:relative;isolation:isolate;overflow:hidden}',
      'html.scm .sc-est-ficha::before{content:"%";flex:none;width:26px;height:26px;border-radius:50%;background:rgba(var(--of-tx-rgb),.2);display:grid;place-items:center;font:700 13px/1 system-ui,sans-serif;position:relative;z-index:1}',
      'html.scm .sc-est-ficha>span{position:relative;z-index:1;display:flex;flex-direction:column;gap:2px}',
      'html.scm .sc-est-ficha>span small{font:500 12px/1.3 ' + FJ + ';opacity:.92}',
      'html.scm .sc-est-linea{font:600 12px/1.3 ' + FJ + ';color:var(--of-ink);margin:5px 0 0;order:1;flex:0 0 100%}',
      'html.scm .sc-est-linea b{font-weight:800}',
      'html.scm .sc-of-carro{position:relative;isolation:isolate;overflow:hidden;display:flex;align-items:center;gap:10px;margin:12px 0 6px;padding:12px 14px;border-radius:16px;background:var(--of);color:var(--of-tx);font-family:' + FJ + ';text-align:left}',
      'html.scm .sc-of-carro>i{flex:none;width:28px;height:28px;border-radius:50%;background:rgba(var(--of-tx-rgb),.2);display:grid;place-items:center;font:700 13px/1 system-ui,sans-serif;font-style:normal}',
      'html.scm .sc-of-carro>span{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;position:relative;z-index:1}',
      'html.scm .sc-of-carro b{font:700 13.5px/1.25 ' + FJ + ';color:inherit}',
      'html.scm .sc-of-carro small{font:500 11.5px/1.3 ' + FJ + ';opacity:.9;color:inherit}',
      'html.scm .sc-of-carro em{display:block;height:4px;border-radius:99px;background:rgba(var(--of-tx-rgb),.25);margin-top:6px;overflow:hidden}',
      'html.scm .sc-of-carro em u{display:block;height:100%;border-radius:99px;background:var(--of-tx);transition:width .3s}',
      'html.scm .sc-of-carro .sc-of-mas{flex:none;position:relative;z-index:1;background:var(--of-tx);color:var(--of)!important;font:700 12px/1 ' + FJ + ';padding:9px 13px;border-radius:999px;text-decoration:none}',
      'html.scm .sc-of-tag{display:inline-block;margin-top:5px;font:700 10.5px/1 ' + FJ + ';letter-spacing:.02em;color:var(--of-ink);background:var(--of-t10);padding:4px 8px;border-radius:999px}',
      'html.scm .sc-of-chip{margin-left:auto;margin-right:8px;font:700 10.5px/1 ' + FJ + ';color:var(--of-tx);background:var(--of);padding:5px 9px;border-radius:999px;white-space:nowrap}',
      'html.scm #nav-hamburger a.rowl.of .sc-of-chip+*{margin-left:0!important}',
      'html.scm .sc-of-pest{position:absolute;left:18px;bottom:100%;font:700 10.5px/1 ' + FJ + ';color:var(--of-tx);background:var(--of);padding:6px 10px 5px;border-radius:10px 10px 0 0;white-space:nowrap}',
      /* onda: cuero + grano + % gigante */
      O + '.sc-est-barra{background:linear-gradient(90deg,var(--of-osc),var(--of) 32%,var(--of-cla) 50%,var(--of) 68%,var(--of-osc))!important;color:var(--of-tx)!important}',
      O + '.sc-est-home:not(.sc-est-home-img),' + O + '.sc-est-banner:not(.sc-est-banner-img),' + O + '.sc-est-ficha{background:' + OF_CUERO + '!important;color:var(--of-tx)!important;position:relative;overflow:hidden;isolation:isolate}',
      O + '.sc-est-home:not(.sc-est-home-img)::before,' + O + '.sc-est-banner:not(.sc-est-banner-img)::before,' + O + '.sc-est-ficha::after,' + O + '.sc-of-carro::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:' + OF_GRANO + ';opacity:.3;mix-blend-mode:overlay;pointer-events:none;z-index:0}',
      O + '.sc-est-home:not(.sc-est-home-img)::after,' + O + '.sc-est-banner:not(.sc-est-banner-img)::after{content:"%";position:absolute;right:-14px;bottom:-66px;font:700 240px/1 ' + AM + ';color:rgba(255,255,255,.11);transform:rotate(-10deg);pointer-events:none;z-index:0}',
      O + '.sc-est-banner:not(.sc-est-banner-img)::after{font-size:170px;bottom:-48px}',
      O + '.sc-est-home:not(.sc-est-home-img) .sc-est-home-tx,' + O + '.sc-est-banner:not(.sc-est-banner-img) .sc-est-banner-txt{position:relative;z-index:1}',
      O + '.sc-est-home:not(.sc-est-home-img) .sc-est-home-tx{padding:26px 22px 24px;gap:8px}',
      O + '.sc-est-home:not(.sc-est-home-img) .sc-est-home-tx small{border:1px solid rgba(var(--of-tx-rgb),.5);padding:4px 10px;border-radius:999px;opacity:1;font-size:10px;letter-spacing:.14em;margin-bottom:4px}',
      O + '.sc-est-home:not(.sc-est-home-img) .sc-est-home-tx b{font:700 31px/1.02 ' + AM + '!important;letter-spacing:-.01em;max-width:9.5em;text-wrap:balance}',
      O + '.sc-est-home:not(.sc-est-home-img) .sc-est-home-tx span{font-size:14px;opacity:.92;max-width:15em}',
      O + '.sc-est-home:not(.sc-est-home-img) .sc-est-home-tx i{margin-top:8px;box-shadow:0 8px 18px -8px rgba(var(--of-osc-rgb),.7)}',
      O + '.sc-est-banner:not(.sc-est-banner-img) .sc-est-banner-txt b{font:700 24px/1.05 ' + AM + '!important;max-width:10em;text-wrap:balance}',
      O + '.sc-est-ficha{box-shadow:0 10px 22px -12px rgba(var(--of-osc-rgb),.75)}',
      O + '.sc-of-carro{background:' + OF_CUERO + ';box-shadow:0 10px 22px -12px rgba(var(--of-osc-rgb),.75)}',
      O + '.sc-of-chip,' + O + '.sc-of-pest{background:' + OF_PILDORA + '}',
      /* destacado y total: ambiente arriba, tile de Ofertas, menu, marco y linea de color en las cards de la promo */
      'html.scm-b::before{content:"";position:absolute;left:0;right:0;top:0;height:560px;z-index:-1;pointer-events:none;background:radial-gradient(120% 70% at 50% 0%,rgba(var(--of-rgb),.17),rgba(var(--of-rgb),0) 74%)}',
      'html.scm-b .sat-tk-of{border-color:transparent!important;box-shadow:0 14px 26px -14px rgba(var(--of-osc-rgb),.8)!important}',
      'html.scm-b:not(.scm-liso) .sat-tk-of{background:' + OF_PILDORA + '!important}',
      'html.scm-b.scm-liso .sat-tk-of{background:var(--of)!important}',
      'html.scm-b .sat-tk-of::before,html.scm-b .sat-tk-of::after{background:none!important}',
      'html.scm-b .sat-tk-of,html.scm-b .sat-tk-of *{color:var(--of-tx)!important;stroke:var(--of-tx)}',
      'html.scm-b #nav-hamburger a.rowl.of{color:var(--of-ink)!important;font-weight:700!important}',
      'html.scm-b body .sc-of-fr{position:relative}',
      'html.scm-b body .sc-of-fr::after{content:"";position:absolute;inset:0;border:1.5px solid rgba(var(--of-rgb),.7);border-radius:inherit;pointer-events:none;z-index:1000;box-sizing:border-box}',
      'html.scm-b .js-item-product.sc-of-card .js-item-description.item-description::after{background:var(--of)!important}',
      /* total: la pagina entera toma un tinte del color */
      'html.scm-c{background-color:var(--of-fondo)!important}',
      'html.scm-c::before{height:1200px;background:radial-gradient(130% 60% at 50% 10%,rgba(var(--of-rgb),.3),rgba(var(--of-rgb),0) 75%)}',
      'html.scm-c .js-item-product.sc-of-card .js-item-description.item-description{background:linear-gradient(#fff 0,var(--of-t18) 100%)!important}',
      '@media(min-width:768px){' + O + '.sc-est-home:not(.sc-est-home-img) .sc-est-home-tx{max-width:60%;padding:34px 44px;gap:10px}' + O + '.sc-est-home:not(.sc-est-home-img) .sc-est-home-tx b{max-width:none;font-size:40px}' + O + '.sc-est-home:not(.sc-est-home-img) .sc-est-home-tx span{max-width:none;font-size:16px}' + O + '.sc-est-banner:not(.sc-est-banner-img) .sc-est-banner-txt{max-width:60%;padding:26px 32px}' + O + '.sc-est-banner:not(.sc-est-banner-img) .sc-est-banner-txt b{max-width:none;font-size:30px}' + O + '.sc-est-banner:not(.sc-est-banner-img) .sc-est-banner-txt span{font-size:15px}}',
      '@media (prefers-reduced-motion:reduce){html.scm .sc-of-carro em u{transition:none}}'
    );
    try { Array.prototype.push.apply(css, e14Css(FJ, AM)); } catch (e) {}
    try { Array.prototype.push.apply(css, e17Css(FJ, AM)); } catch (e) {}
    try { Array.prototype.push.apply(css, e18Css(FJ, AM)); } catch (e) {}
    var st = esteEl('style'); st.id = 'sc-est-css'; st.setAttribute('data-sc-est', '1'); st.textContent = css.join('\n'); document.head.appendChild(st);

    /* barra: encima de la franja existente (sin mover nada de la pagina) */
    camps.some(function (c) {
      var e = c.visual.estetica, ad = q('section.js-adbar');
      if (!(e.barra && e.barra.activa && e.barra.mensaje && ad)) return false;
      var col = esteCol(c, e.paleta, 'x', 'marron'); var k = e.barra.fondo; if (e.paleta && e.paleta[k]) col = e.paleta[k];
      /* 1.12.1: la barra va ADENTRO de la capsula de la franja (misma forma redondeada, unida al menu) y con la letra de la franja; antes cubria todo el ancho con esquinas rectas y rompia la capsula flotante */
      var host = q('.container-fluid', ad) || ad, msj = q('.satine-adbar-message,.adbar-message', ad);
      if (getComputedStyle(host).position === 'static') { host.style.position = 'relative'; host.setAttribute('data-sc-est-pos', '1'); }
      var b = esteEl('div', 'sc-est-barra'); b.setAttribute('data-sc-est', '1'); b.style.background = col.fondo; b.style.setProperty('color', col.texto, 'important'); ofPonerVars(b, ofTonos(col));   /* 1.12.1: con important: una regla del theme pisaba el color y el dorado salia con letra clara */
      if (msj) { try { var mcs = getComputedStyle(msj); b.style.fontFamily = mcs.fontFamily; b.style.fontSize = mcs.fontSize; b.style.letterSpacing = mcs.letterSpacing; b.style.textTransform = mcs.textTransform; } catch (e) {} }
      var dest = esteSeguro(e.barra.destino), cont = esteEl(dest ? 'a' : 'div'); if (dest) cont.href = dest;
      var ex14 = c.extendida && c.extendida.texto ? e14Cortar(c.extendida.texto, 100) : '';
      cont.appendChild(esteEl('span', '', ex14 || e.barra.mensaje));
      if (c.extendida && e.barra.cuenta && c.hasta) cont.appendChild(esteEl('span', 'sc-e14-ext', 'Extendido'));
      if (e.barra.cuenta && c.hasta) {
        var cu = esteEl('span', 'sc-est-cuenta', esteTiempo(c.hasta)); cu.setAttribute('data-sc-fin', c.hasta); cu.setAttribute('data-sc-est', '1'); cont.appendChild(cu);   /* 1.16: lo mueve el reloj unico */
        esteRelojIniciar();
      }
      [cont].concat([].slice.call(cont.children)).forEach(function (n) { n.style.setProperty('color', 'inherit', 'important'); n.style.setProperty('-webkit-text-fill-color', 'currentColor', 'important'); });
      b.appendChild(cont); host.appendChild(b);
      return true;
    });

    /* etiquetas en las fotos: una por producto, gana el mayor descuento */
    var mapa = {}, reg = {};   /* reg (1.13): producto -> regla que gana (con o sin etiqueta en la foto): de ahi salen marco, linea de ahorro, pestana y avisos del carrito */
    camps.forEach(function (c) {
      var e = c.visual.estetica;
      (c.reglas || []).forEach(function (r) {
        var peso = +r.etiqueta_peso || 0, ids = r.alcance && r.alcance.productos_resueltos;
        if (!ids || !ids.length) return;
        var et = String(r.etiqueta || (e.etiqueta && e.etiqueta.texto) || c.nombre || '').slice(0, 40), mec = ofMec(r);
        ids.forEach(function (id) { if (!reg[id] || reg[id].peso < peso) reg[id] = { c: c, r: r, peso: peso, et: et, mec: mec, nom: String(r.nombre || c.nombre || '').slice(0, 50) }; });
        if (!(e.etiqueta && e.etiqueta.activa)) return;
        var txt = (e.etiqueta.texto || r.etiqueta || '').slice(0, 24); if (!txt) return;
        var col = (e.acento && e.paleta && e.paleta[e.acento]) || (e.paleta && e.paleta.rojo) || { fondo: '#c0392b', texto: '#fff' };
        ids.forEach(function (id) { if (!mapa[id] || mapa[id].peso < peso) mapa[id] = { txt: txt, peso: peso, col: col }; });
      });
    });
    var hayReg = false, etMenu = '', pesoMenu = -1; for (var k0 in reg) { hayReg = true; if (reg[k0].et && reg[k0].peso > pesoMenu) { pesoMenu = reg[k0].peso; etMenu = reg[k0].et; } }
    etMenu = etMenu.slice(0, 26);
    var ponerLinea = function (it, rg) {   /* linea de ahorro de la card: justo despues del precio, antes de transferencia y cuotas */
      var pr = q('.js-price-display', it); if (!pr) return;
      var precio = numero(txt(pr)), ln = ofLinea(rg.mec, precio), ex = q('.sc-est-linea', it);
      if (!ln) { if (ex && ex.parentNode) ex.parentNode.removeChild(ex); return; }
      if (ex) { if (ex.getAttribute('data-p') === String(precio)) return; while (ex.firstChild) ex.removeChild(ex.firstChild); }
      var l = ex || esteEl('div', 'sc-est-linea');
      l.setAttribute('data-sc-est', '1'); l.setAttribute('data-p', String(precio));
      l.appendChild(document.createTextNode(ln.pre)); l.appendChild(esteEl('b', '', ln.b));
      if (!ex) pr.insertAdjacentElement('afterend', l);
    };
    var fichaAhorro = function () {   /* ficha: el ahorro concreto, con el precio de la ficha en este momento (cambia con la variante) */
      if (!pid) return;
      var l = q('.sc-est-ficha'), m = reg[pid]; if (!l || !m) return;
      var sp = l.firstChild, pr = q('#price_display') || q('.js-price-display'), ln = ofLinea(m.mec, pr ? numero(txt(pr)) : 0), sm = q('small', l);
      if (!ln) { if (sm && sm.parentNode) sm.parentNode.removeChild(sm); return; }
      if (!sm) { sm = esteEl('small'); if (sp && sp.nodeType === 1) sp.appendChild(sm); else l.appendChild(sm); }
      if (sm.textContent !== ln.ficha) sm.textContent = ln.ficha;
    };
    var pestana = function () {   /* barra fija de compra: pestana con la promo, solo si el producto de la ficha esta en ella */
      var st = q('#satine-sticky-cta'); if (!st || !pid) return;
      var m = reg[pid], ex = q('.sc-of-pest', st);
      if (!m) { if (ex && ex.parentNode) ex.parentNode.removeChild(ex); return; }
      if (ex) { if (ex.textContent !== m.et) ex.textContent = m.et; return; }
      if (getComputedStyle(st).position === 'static') { st.style.position = 'relative'; st.setAttribute('data-sc-est-pos', '1'); }
      var t = esteEl('span', 'sc-of-pest', m.et); t.setAttribute('data-sc-est', '1'); st.appendChild(t);
    };
    var menuChip = function () {   /* menu del celular: chip con la promo antes de la flechita (que es lo ultimo de la fila) */
      var a = q('#nav-hamburger a.rowl.of'); if (!a || !etMenu) return;
      var ch = q('.sc-of-chip', a); if (ch) { if (ch.textContent !== etMenu) ch.textContent = etMenu; return; }
      ch = esteEl('span', 'sc-of-chip', etMenu); ch.setAttribute('data-sc-est', '1');
      var ult = a.lastElementChild; if (ult && txt(ult).length < 3) a.insertBefore(ch, ult); else a.appendChild(ch);
    };
    /* carrito (cajon y pagina): chip bajo cada producto en promo y un aviso. NO se tocan cantidades, subtotales ni totales, y no se agrega fila de descuento propia. */
    var carroOcupado = false;
    var nomUtil = function (nom, tit, et) {   /* nombre de la campana como linea chica, solo si no repite lo que ya dice el titulo o la etiqueta */
      var n = function (x) { return String(x || '').toLowerCase().replace(/[^a-z0-9\u00e0-\u00ff]+/g, ''); }, a = n(nom);
      var resto = String(nom || '').toLowerCase().replace(/\d+(?:[.,]\d+)?\s?%|\b(?:segund[oa]s?|vidrios?|fundas?|productos?|unidad(?:es)?|off|descuento|al|la|el|de|te|sale|y|con|en|las|los|2\.?\u00aa?)\b/g, '').replace(/[^a-z\u00e0-\u00ff]+/g, '');
    return a && resto && a !== n(et) && a !== n(tit) && n(tit).indexOf(a) < 0 ? String(nom) : '';
    };
    var carroLeer = function (raiz, lista) {
      var grupos = {}, hay = false;
      qa('.js-cart-item', lista).forEach(function (it) {
        var pidI = String(it.getAttribute('data-store') || '').replace(/^cart-item-/, ''), rg = reg[pidI]; if (!rg) return;
        var inp = q('.js-cart-quantity-input', it), cant = inp ? parseInt(inp.value, 10) : 1; if (!(cant > 0)) cant = 1;
        var sub = q('.js-cart-item-subtotal', it), unit = sub ? numero(txt(sub)) / cant : 0;
        var g = grupos[pidI] || (grupos[pidI] = { rg: rg, cant: 0, unit: unit, items: [] });
        g.cant += cant; g.items.push({ el: it, cant: cant }); hay = true;
      });
      return hay ? grupos : null;
    };
    var carroDescuentoReal = function (raiz) {   /* descuento que de verdad aplico el carrito (promocion de Tienda Nube); 0 si no se puede leer */
      var e = q('.js-cart-discount[data-priceraw]', raiz) || q('.js-cart-discount[data-priceraw]'), v = e ? parseFloat(e.getAttribute('data-priceraw')) : 0;
      if (!(v > 0)) { var f = q('.js-total-promotions-detail-row [data-priceraw]', raiz); v = f ? parseFloat(f.getAttribute('data-priceraw')) : 0; }
      return v > 0 ? v : 0;
    };
    var carroPintar = function () {
      ['#modal-cart', '#shoppingCartPage'].forEach(function (sel) {
        var raiz = q(sel); if (!raiz) return;
        var lista = q('.js-ajax-cart-list', raiz), grupos = lista ? carroLeer(raiz, lista) : null, previos = qa('.sc-of-carro', raiz);
        if (!grupos) {   /* carrito vacio o sin productos de la promo: no queda nada nuestro */
          previos.forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); });
          qa('.sc-of-tag', raiz).forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); });
          return;
        }
        qa('.js-cart-item', lista).forEach(function (it) {
          var pidI = String(it.getAttribute('data-store') || '').replace(/^cart-item-/, ''), rg = reg[pidI], ex = q('.sc-of-tag', it);
          if (!rg) { if (ex && ex.parentNode) ex.parentNode.removeChild(ex); return; }
          if (ex) { if (ex.textContent !== rg.et) ex.textContent = rg.et; return; }
          var nm = q('.cart-item-name', it) || qa('a', it).filter(function (a) { return !a.querySelector('img') && txt(a).length > 8; })[0];
          if (!nm || !nm.parentNode) return;
          var tg = esteEl('span', 'sc-of-tag', rg.et); tg.setAttribute('data-sc-est', '1'); nm.insertAdjacentElement('afterend', tg);
        });
        /* 1.15: con progreso_carrito apagado tampoco queda el aviso viejo (cabo de 1.14) */
        if (!e14Algun(camps, 'progreso_carrito', true)) { previos.forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); }); return; }
        /* el aviso: se arma segun lo que hay en el carrito y la regla de la promo */
        var gs = Object.keys(grupos).map(function (k) { return grupos[k]; }), cond = gs.filter(function (g) { return g.rg.mec.n; });
        var prim = gs[0], falta = 0, cumple = false;
        if (cond.length) {
          cumple = cond.some(function (g) { return g.cant >= g.rg.mec.n; });
          if (!cumple) { prim = cond.slice().sort(function (a, b) { return b.cant / b.rg.mec.n - a.cant / a.rg.mec.n; })[0]; falta = prim.rg.mec.n - prim.cant; }
          else prim = cond.filter(function (g) { return g.cant >= g.rg.mec.n; })[0];
        }
        var mec = prim.rg.mec, tit, sub = '', icono = '%', pasos = 0, boton = null;
        if (cond.length && !cumple) {
          var pm = prim.rg.et.match(/\d+(?:[.,]\d+)?\s?%/), pt = pm ? pm[0] : mec.pct + '%';   /* el porcentaje con la misma forma que trae la etiqueta */
          tit = mec.k === 'seg' ? 'Sumá ' + falta + ' más y la 2.ª te sale ' + pt + ' OFF' : 'Sumá ' + falta + ' más: llevás ' + mec.l + ' y pagás ' + mec.p;
          sub = nomUtil(prim.rg.nom, tit, prim.rg.et); pasos = Math.round(prim.cant / mec.n * 100);
          var mejor = prim.items.slice().sort(function (a, b) { return b.cant - a.cant; })[0];
          if (mejor && q('[data-component="quantity.plus"]', mejor.el)) boton = mejor.el;
        } else {
          tit = 'Promoción SATINE'; sub = nomUtil(prim.rg.nom, tit, prim.rg.et) || prim.rg.et;
          if (cond.length && cumple) {   /* "aplicada" solo si el carrito real descuenta lo que la regla dice (mismo criterio que Cyber, +-1,5) */
            var real = carroDescuentoReal(raiz), esp = 0;
            cond.forEach(function (g) {
              if (g.cant < g.rg.mec.n) return;
              esp += g.rg.mec.k === 'seg' ? Math.floor(g.cant / 2) * g.unit * g.rg.mec.pct / 100 : Math.floor(g.cant / g.rg.mec.l) * g.unit * (g.rg.mec.l - g.rg.mec.p);
            });
            if (real > 0 && esp > 0 && Math.abs(real - esp) <= 1.5) { tit = 'Promoción aplicada: ahorrás ' + plata(real); icono = '✓'; sub = nomUtil(prim.rg.nom, tit, prim.rg.et); }
          }
        }
        var sig = [tit, sub, pasos, boton ? 1 : 0].join('|');
        if (previos.length === 1 && previos[0].getAttribute('data-sig') === sig && previos[0].nextElementSibling === lista) return;
        previos.forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); });
        var av = esteEl('div', 'sc-of-carro'); av.setAttribute('data-sc-est', '1'); av.setAttribute('data-sig', sig);
        av.appendChild(esteEl('i', '', icono));
        var sp = esteEl('span'); sp.appendChild(esteEl('b', '', tit)); if (sub) sp.appendChild(esteEl('small', '', sub));
        if (pasos) { var em = esteEl('em'), u = esteEl('u'); u.style.width = pasos + '%'; em.appendChild(u); sp.appendChild(em); }
        av.appendChild(sp);
        if (boton) {
          var bt = esteEl('a', 'sc-of-mas', 'Sumar'); bt.href = '#'; bt.setAttribute('role', 'button');
          bt.addEventListener('click', function (ev) {   /* usa el control real de cantidad del carrito: no inventa nada */
            ev.preventDefault(); if (carroOcupado) return; carroOcupado = true; setTimeout(function () { carroOcupado = false; }, 1500);
            var mas = q('[data-component="quantity.plus"]', boton); if (mas) mas.click();
          });
          av.appendChild(bt);
        }
        lista.parentNode.insertBefore(av, lista);
      });
    };
    var e14h = null;
    var poner = function () {
      try {
        /* 1.13.1: primero se LEE todo (getComputedStyle) y despues se ESCRIBE. Antes cada card leia estilos justo despues de que la anterior escribiera (pill, clases, linea): un recalculo de estilo y layout por card, hasta ~1,3 s con la portada todavia cargando, y la estetica aparecia recien al terminar. */
        var plan = [];
        qa('.js-item-product[data-product-id]').forEach(function (it) {
          var id = it.getAttribute('data-product-id'), m = mapa[id], rg = reg[id], x = { it: it, rg: rg };
          if (m && !it.querySelector('.sc-est-pill')) {
            var img = it.querySelector('.item-image, .js-item-image-container, picture, img'); var host = img && (img.tagName === 'IMG' ? img.parentNode : img);
            if (host) { x.m = m; x.host = host; x.pos = getComputedStyle(host).position === 'static'; }
          }
          if (rg && !it.classList.contains('sc-of-card')) { var pc = it.querySelector('.js-product-container'); x.fr = pc && parseFloat(getComputedStyle(pc).borderTopLeftRadius) > 0 ? pc : it; }
          plan.push(x);
        });
        plan.forEach(function (x) {
          var it = x.it, rg = x.rg, m = x.m, host = x.host;
          if (m) {
            if (x.pos) { host.style.position = 'relative'; host.setAttribute('data-sc-est-pos', '1'); }
            var p = esteEl('span', 'sc-est-pill', m.txt); p.setAttribute('data-sc-est', '1');
            var tp = ofTonos(m.col); ofPonerVars(p, tp);
            p.style.setProperty('background', liso ? m.col.fondo : OF_PILDORA, 'important'); p.style.setProperty('color', m.col.texto, 'important');   /* con important, porque la portada deja transparente todo lo que va sobre la foto */
            if (!liso) { p.style.boxShadow = '0 6px 12px -4px rgba(' + tp.oscRgb + ',.6),inset 0 1px 0 rgba(255,255,255,.25)'; p.style.padding = '4px 10px'; }
            host.appendChild(p); it.classList.add('sc-pill-on');   /* 1.16: con nuestra pastilla se oculta la etiqueta nativa de descuento (un solo cartel) */
          }
          if (!rg) return;
          if (!it.classList.contains('sc-of-card')) it.classList.add('sc-of-card');
          if (x.fr && !x.fr.classList.contains('sc-of-fr')) x.fr.classList.add('sc-of-fr');
          ponerLinea(it, rg);
        });
        fichaAhorro(); pestana(); menuChip(); carroPintar();
        if (e14h) e14h.poner();
      } catch (e) {}
    };
    e14h = e14Instalar(camps, { reg: reg, real: carroDescuentoReal, pid: pid });
    if (hayReg || camps.length) {
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
        b.style.background = col.fondo; b.style.color = col.texto; ofPonerVars(b, ofTonos(col));
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
        var hcol = (hac && esteHex(hac.fondo) && esteHex(hac.texto) && (!esteClaro(hac.fondo) || !liso) && hac) || (hm.e.paleta && hm.e.paleta.marron) || { fondo: '#34211b', texto: '#f5f0e5' };   /* 1.13: en onda un acento claro (dorado) tambien vale: el texto es el que define la paleta */
        if (hm.im.pc || hm.im.cel) {
          hel.className += ' sc-est-home-img';
          hel.appendChild(esteFoto(hm.im.pc, hm.im.cel, vh.titulo, { pw: 1200, ph: 400, cw: 800, ch: 600, alta: true }));
          if (htx.childNodes.length) hel.appendChild(htx);
        } else { hel.style.background = hcol.fondo; hel.style.color = hcol.texto; ofPonerVars(hel, ofTonos(hcol)); hel.appendChild(htx); }
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
        var l = esteEl('div', 'sc-est-ficha'); l.appendChild(esteEl('span', '', fiTx)); l.setAttribute('data-sc-est', '1'); l.style.background = col.fondo; l.style.color = col.texto; ofPonerVars(l, ofTonos(col));
        var ancla = fo && fo.parentNode ? fo : pr; ancla.parentNode.insertBefore(l, ancla);
        fichaAhorro();
      }
      return true;
    });
    if (e14h) e14h.fin();
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
  function esteMin(c) {   /* solo lo que usa estePintar (1.14: tambien lo del progreso, el regalo, los destacados y la extension) */
    var ex = c.extendida && typeof c.extendida === 'object' ? { fin_original: c.extendida.fin_original, hasta: c.extendida.hasta, texto: String(c.extendida.texto == null ? '' : c.extendida.texto).slice(0, 100), numero: c.extendida.numero } : null;
    var de = Array.isArray(c.destacados) ? c.destacados.slice(0, 8).map(function (d) { return d && { id: d.id, nombre: d.nombre, url: d.url, imagen: d.imagen, precio: d.precio, precio_promo: d.precio_promo }; }).filter(Boolean) : [];
    var rg = function (g) { return g && typeof g === 'object' ? { producto_id: g.producto_id, nombre: g.nombre, url: g.url, imagen: g.imagen, minimo: g.minimo, unidades_minimas: g.unidades_minimas } : null; };
    return { slug: c.slug, nombre: c.nombre, estado: c.estado, desde: c.desde, hasta: c.hasta, extendida: ex, destacados: de, cupon: c.cupon && typeof c.cupon === 'object' && c.cupon.codigo ? { codigo: String(c.cupon.codigo).slice(0, 30), texto: String(c.cupon.texto == null ? '' : c.cupon.texto).slice(0, 60) } : null, visual: { estetica: c.visual.estetica, home: esteHomeMin(c.visual.home) },
      reglas: (c.reglas || []).filter(function (r) { var ids = r && r.alcance && r.alcance.productos_resueltos, cd = r && r.condicion || {}; return (ids && ids.length) || (r && (r.regalo || +r.minimo_compra > 0 || +cd.carrito_minimo > 0 || +cd.minimo > 0)); })
        .map(function (r) {
          var cd = r.condicion || {};
          return { nombre: r.nombre, etiqueta: r.etiqueta, etiqueta_peso: r.etiqueta_peso, tipo: r.tipo, minimo_compra: r.minimo_compra, regalo: rg(r.regalo), tn: r.tn && { estado: r.tn.estado }, limites: r.limites && { tope_descuento: r.limites.tope_descuento },
            condicion: { lleva: cd.lleva, paga: cd.paga, sobre: cd.sobre, minimo: cd.minimo, carrito_minimo: cd.carrito_minimo, unidades_minimas: cd.unidades_minimas, tiers: (cd.tiers || []).map(function (t) { return { minimo: t.minimo, pct: t.pct, descuento: t.descuento, etiqueta: t.etiqueta }; }) },
            alcance: { productos_resueltos: (r.alcance && r.alcance.productos_resueltos) || [] } };
        }) };
  }
  function e17EnOferta(d) {   /* contrato: d.en_oferta = {ruta, total, categorias:[{nombre, ruta, directa}]}; sin esa clave (ERP viejo) no se pinta nada de 1.17 */
    var o = d && d.en_oferta; if (!o || typeof o !== 'object') return null;
    return { ruta: typeof o.ruta === 'string' ? o.ruta.slice(0, 120) : '/en-oferta/', total: +o.total > 0 ? Math.floor(+o.total) : 0,
      categorias: (Array.isArray(o.categorias) ? o.categorias : []).slice(0, 40).filter(function (k) { return k && typeof k.ruta === 'string' && typeof k.nombre === 'string'; })
        .map(function (k) { return { nombre: k.nombre.slice(0, 80), ruta: k.ruta.slice(0, 160), directa: k.directa === true }; }) };
  }
  function esteSigDe(camps) { return JSON.stringify(camps); }
  function esteGuardar(camps) {
    if (estePrev) return;
    try { if (camps.length) sessionStorage.setItem(EST_CLAVE, JSON.stringify({ v: 5, t: Date.now(), c: camps })); else sessionStorage.removeItem(EST_CLAVE); } catch (e) {}
  }
  function esteLeerCache() {
    if (estePrev) return null;
    try {
      var j = JSON.parse(sessionStorage.getItem(EST_CLAVE) || 'null'), ahora = Date.now();
      if (!j || j.v !== 5 || !(ahora - j.t < 600e3) || !j.c || !j.c.length) return null;
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
    try { if (!(estePrev && deVista !== true)) l15Aplicar(d); } catch (e) {}   /* 1.15: lanzamientos (su propio camino, no depende de las promos) */
    try {
      if (estePrev && deVista !== true) return;   /* en vista previa manda la promocion pedida, no la activa */
      if (!d || typeof d !== 'object' || !('campana' in d)) { rsvSoltar(); return; }   /* respuesta rara o HTTP con error: se conserva lo ultimo bueno (y el hueco del head se libera) */
      esteCachePend = false;   /* llego el contrato: manda el fetch, no la cache */
      var camps = ((d && typeof d === 'object') ? esteCampanas(d) : []).map(esteMin);
      var eo17 = e17EnOferta(d); camps.forEach(function (c) { if (eo17) c.en_oferta = eo17; });   /* 1.17: pagina En oferta y menu */
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
      estePrevUrl = CFG.contrato + '?vista=' + encodeURIComponent(t.slice(0, i)) + '&clave=' + encodeURIComponent(t.slice(i + 1));
      var fz = location.search.match(/[?&]satine_fase=(anticipo|disponible)/); if (fz) estePrevUrl += '&fase=' + fz[1];   /* 1.15: ver los dos momentos de un lanzamiento en borrador */
      fetch(estePrevUrl, { credentials: 'omit', cache: 'no-store' })
        .then(function (r) { return r.ok ? r.json() : null; }).then(function (d) { esteAplicar(d, true); }).catch(function () {});
    } catch (e) {}
  }

  /* ---------- 1.15: LANZAMIENTOS (productos nuevos que se anuncian antes y se destacan despues) ----------
     Leen d.lanzamientos del mismo contrato (cero pedidos extra). Sin esa clave no se crea ni un nodo. Nodos propios (data-sc-lz, clase lz-, estilo #lz-css): esteLimpiar() de las promos no los toca.
     Cada pieza va en su try/catch. Prioridad con las promos: UNA sola barra (gana la de la promo; el lanzamiento conserva etiqueta, seccion y formulario) y UN solo cartel de entrada por visita (gana el de la promo si todavia no se vio). */
  var L15 = { lista: [], sig: '', skew: 0, tim: null, obs: null, od: 0, vis: null, tms: [], undo: [], n: 0, pbarra: false, pcart: false, fue: 0, vuelo: false, sig2: 0, cod: {}, rsvTocado: 0, rsvKind: '', rsvT: 0, rsvO: null };
  var L15_RSV = 'sc_l15_rsv', L15_COLOR = '#34211b', L15_CREMA = '#f5f0e5';
  function l15Num(n) { n = +n; return isFinite(n) ? n : 0; }
  function l15Base() { try { return new URL(CFG.contrato).origin; } catch (e) { return ''; } }
  function l15Z(n) { return (n < 10 ? '0' : '') + n; }
  function l15Fecha(ms) {   /* hora de Argentina (UTC-3, sin horario de verano): 14/11 · 18:00 h */
    var t = new Date(ms - 3 * 3600000);
    return l15Z(t.getUTCDate()) + '/' + l15Z(t.getUTCMonth() + 1) + ' · ' + l15Z(t.getUTCHours()) + ':' + l15Z(t.getUTCMinutes()) + ' h';
  }
  function l15Resta(ms) {
    if (ms <= 0) return 'Ya disponible';
    var s = Math.floor(ms / 1000), d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60);
    return d ? d + 'd ' + l15Z(h) + 'h ' + l15Z(m) + 'm' : l15Z(h) + 'h ' + l15Z(m) + 'm ' + l15Z(s % 60) + 's';
  }
  function l15Ahora() { return Date.now() + L15.skew; }
  function l15Fuera(n) {   /* nunca un formulario adentro de otro (el de compra): se sube hasta quedar afuera */
    var f = n;
    while (f && f.parentNode && f.parentNode.closest) { var up = f.parentNode.closest('form'); if (!up) break; f = up; }
    return f;
  }
  function l15Quitar(n) { if (n && n.parentNode) n.parentNode.removeChild(n); }
  function l15Marca(n) { n.setAttribute('data-sc-lz', '1'); return n; }
  function l15Min(l) {   /* solo lo que se usa, validado y acotado */
    if (!l || typeof l !== 'object' || !l.id || (l.fase !== 'anticipo' && l.fase !== 'disponible')) return null;
    var P = l.piezas && typeof l.piezas === 'object' ? l.piezas : {};
    var o = function (k) { return P[k] && typeof P[k] === 'object' ? P[k] : null; };
    var sale = Date.parse(l.sale), nh = Date.parse(l.nuevo_hasta);
    var m = { id: String(l.id).slice(0, 64), nombre: e14Cortar(l.nombre, 80), fase: l.fase, sale: isFinite(sale) ? sale : 0, hasta: isFinite(nh) ? nh : 0, prods: [], p: {}, a: null };
    (Array.isArray(l.productos) ? l.productos : []).slice(0, 40).forEach(function (p) {
      if (!p || typeof p !== 'object') return;
      m.prods.push({ id: String(p.id == null ? '' : p.id), nombre: e14Cortar(p.nombre, 80), url: esteSeguro(p.url), img: esteImg(p.imagen), precio: l15Num(p.precio), promo: l15Num(p.precio_promo), stock: p.stock == null ? null : l15Num(p.stock) });
    });
    var b = o('barra'); if (b && b.texto) m.p.barra = { texto: e14Cortar(b.texto, 90) };
    var c = o('cartel'); if (c && (c.titulo || c.texto)) m.p.cartel = { titulo: e14Cortar(c.titulo, 70), texto: e14Cortar(c.texto, 160), boton: e14Cortar(c.boton, 30), destino: esteSeguro(c.destino) };
    var s = o('seccion'); if (s && (s.titulo || s.texto)) m.p.seccion = { titulo: e14Cortar(s.titulo, 60), texto: e14Cortar(s.texto, 200), imagen: esteImg(s.imagen), cuenta: s.cuenta_regresiva === true };
    var e = o('etiqueta'); if (e && e.texto) m.p.etiqueta = e14Cortar(e.texto, 24);
    var mn = o('menu'); if (mn && mn.texto) m.p.menu = { texto: e14Cortar(mn.texto, 30) };
    var ci = o('cinta'); if (ci && Array.isArray(ci.frases)) { var fr = ci.frases.map(function (x) { return e14Cortar(x, 60); }).filter(Boolean).slice(0, 6); if (fr.length) m.p.cinta = { frases: fr }; }
    var u = o('pocas_unidades'); if (u) m.p.pocas = { umbral: l15Num(u.umbral) || 3, texto: e14Cortar(u.texto, 40) || 'Quedan pocas' };
    var y = o('leyenda_precio'); if (y && y.texto) m.p.leyenda = { texto: e14Cortar(y.texto, 60), hasta: Date.parse(y.hasta) || 0 };
    var a = l.anotarse && typeof l.anotarse === 'object' ? l.anotarse : null;
    if (a) m.a = { titulo: e14Cortar(a.titulo, 70), texto: e14Cortar(a.texto, 160), boton: e14Cortar(a.boton, 30) || 'Avisame', pide: a.pide === 'mail' || a.pide === 'whatsapp' ? a.pide : 'ambos', consent: e14Cortar(a.consentimiento, 200), regalo: !!a.regalo };
    m.rg = l.regalo_anotados === true || !!(m.a && m.a.regalo);
    return m;
  }
  /* ficha del anotado (se guarda en el navegador; en vista previa, solo en la pestana) */
  function l15FiGet(id) { try { return (estePrev ? sessionStorage : localStorage).getItem('sc_lz_' + id) || ''; } catch (e) { return ''; } }
  function l15FiSet(id, f) { try { (estePrev ? sessionStorage : localStorage).setItem('sc_lz_' + id, String(f)); } catch (e) {} }
  function l15Cuenta(m) {
    var s = esteEl('span', 'lz-cuenta', l15Resta(m.sale - l15Ahora()));
    s.setAttribute('data-lz-cuenta', String(m.sale)); return s;
  }
  function l15Tic() {
    if (document.hidden) return;
    var ya = l15Ahora(), fin = false;
    qa('[data-lz-cuenta]').forEach(function (n) {
      var r = +n.getAttribute('data-lz-cuenta') - ya, x = l15Resta(r);
      if (n.textContent !== x) n.textContent = x;
      if (r <= 0) fin = true;
    });
    if (fin) { qa('[data-lz-kick]').forEach(function (n) { if (n.textContent !== 'Nuevo') n.textContent = 'Nuevo'; }); l15Salio(); }
  }
  function l15Salio() {   /* llego la hora: se vuelve a pedir el contrato (hasta 5 veces, cada ~7 s, por si el servidor aun no cambio de fase) */
    if (L15.vuelo || L15.fue >= 5 || Date.now() < L15.sig2) return;
    var url = estePrev ? estePrevUrl : CFG.contrato; if (!url || typeof fetch !== 'function') return;
    L15.vuelo = true; L15.fue++; L15.sig2 = Date.now() + 6500;
    try {
      fetch(url, { credentials: 'omit', cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) { L15.vuelo = false; if (d) esteAplicar(d, estePrev); }).catch(function () { L15.vuelo = false; });
    } catch (e) { L15.vuelo = false; }
  }
  /* ---- formulario "Avisame cuando salga" ---- */
  function l15Form(m) {
    var A = m.a, w = l15Marca(esteEl('div', 'lz-fw')), uid = 'lz' + (++L15.n);
    if (A.titulo) w.appendChild(esteEl('p', 'lz-ft', A.titulo));
    if (A.texto) w.appendChild(esteEl('p', 'lz-fx', A.texto));
    var f = esteEl('form', 'lz-form'); f.setAttribute('novalidate', ''); f.setAttribute('aria-label', A.titulo || 'Avisame cuando salga');
    var st = esteEl('p', 'lz-st'); st.setAttribute('role', 'status'); st.setAttribute('aria-live', 'polite'); st.id = uid + 's'; st.tabIndex = -1;
    var inp = {};
    var campo = function (k, tipo, rotulo, auto, modo) {
      var d = esteEl('div', 'lz-c'), l = esteEl('label', '', rotulo); l.setAttribute('for', uid + k);
      var i = esteEl('input'); i.type = tipo; i.id = uid + k; i.name = k; i.autocomplete = auto; i.setAttribute('inputmode', modo); i.setAttribute('aria-describedby', st.id);
      d.appendChild(l); d.appendChild(i); f.appendChild(d); inp[k] = i;
    };
    if (A.pide !== 'whatsapp') campo('mail', 'email', 'Tu mail', 'email', 'email');
    if (A.pide !== 'mail') campo('telefono', 'tel', 'Tu WhatsApp', 'tel', 'tel');
    var hp = esteEl('div', 'lz-hp'); hp.setAttribute('aria-hidden', 'true');
    var hi = esteEl('input'); hi.type = 'text'; hi.name = 'sitio'; hi.tabIndex = -1; hi.autocomplete = 'off'; hp.appendChild(hi); f.appendChild(hp);
    var bt = esteEl('button', 'lz-btn', A.boton); bt.type = 'submit'; f.appendChild(bt);
    if (A.consent) f.appendChild(esteEl('p', 'lz-cons', A.consent));
    f.appendChild(st); w.appendChild(f);
    var decir = function (t, err) { st.textContent = t; st.className = 'lz-st' + (err ? ' lz-err' : ''); };
    var cerrar = function (t) {   /* anotado: se queda solo el mensaje, sin cambiar la altura */
      try { w.style.minHeight = w.offsetHeight + 'px'; } catch (e) {}
      w.className += ' lz-ok'; decir(t, false);
    };
    if (l15FiGet(m.id)) cerrar('Ya estás anotado. Te avisamos cuando salga.');
    f.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (bt.disabled) return;
      var mail = inp.mail ? inp.mail.value.trim() : '', tel = inp.telefono ? inp.telefono.value.trim() : '';
      var okM = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail), nT = tel.replace(/[\s()+\-.]/g, ''), okT = /^\d{8,15}$/.test(nT);
      Object.keys(inp).forEach(function (k) { inp[k].removeAttribute('aria-invalid'); });
      var mal = null;
      if (A.pide === 'mail' && !okM) mal = inp.mail;
      else if (A.pide === 'whatsapp' && !okT) mal = inp.telefono;
      else if (A.pide === 'ambos') { if (mail && !okM) mal = inp.mail; else if (tel && !okT) mal = inp.telefono; else if (!mail && !tel) mal = inp.mail; }
      if (mal) { mal.setAttribute('aria-invalid', 'true'); decir(mal === inp.mail ? 'Revisá el mail: tiene que ser algo como nombre@correo.com.' : 'Revisá el número: usá solo números, con código de área.', true); try { mal.focus(); } catch (e) {} return; }
      var body = { lanzamiento: m.id, pagina: location.pathname.slice(0, 120), sitio: hi.value || '' };
      if (okM) body.mail = mail;
      if (okT) body.telefono = tel;
      bt.disabled = true; bt.setAttribute('aria-busy', 'true'); decir('Enviando…', false);
      var fin = function () { bt.disabled = false; bt.removeAttribute('aria-busy'); };
      if (typeof fetch !== 'function') { fin(); decir('No pudimos enviarlo. Probá de nuevo en un rato.', true); return; }
      fetch(l15Base() + '/api/tienda/lanzamientos/anotarse', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), credentials: 'omit' })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { s: r.status, j: j || {} }; }); })
        .then(function (x) {
          fin();
          if (x.s === 200 && x.j.ok !== false) { if (x.j.ficha) l15FiSet(m.id, x.j.ficha); cerrar('Listo, te anotamos. Te avisamos cuando salga.'); try { st.focus(); } catch (e) {} return; }
          if (x.s === 422) decir('Revisá el dato que cargaste: no pudimos leerlo.', true);
          else if (x.s === 429) decir('Hiciste muchos intentos. Probá de nuevo en un rato.', true);
          else if (x.s === 409) { decir('Este lanzamiento ya no está abierto para anotarse.', true); l15Salio(); }
          else decir('No pudimos anotarte ahora. Probá de nuevo en un rato.', true);
        })
        .catch(function () { fin(); decir('Sin conexión. Revisá tu internet y probá de nuevo.', true); });
    });
    return w;
  }
  /* ---- regalo por anotarse: el codigo viene de mi-codigo (nunca del contrato) ---- */
  function l15Codigo(m, cb, ko) {
    if (!(m.rg && m.fase === 'disponible' && typeof fetch === 'function')) { if (ko) ko(); return; }
    var f = l15FiGet(m.id); if (!f) { if (ko) ko(); return; }
    var c = L15.cod[m.id];
    if (c === false) { if (ko) ko(); return; }
    if (c && c.codigo) { cb(c); return; }
    if (c && c.cbs) { c.cbs.push(cb); if (ko) c.kos.push(ko); return; }
    var e = L15.cod[m.id] = { cbs: [cb], kos: ko ? [ko] : [] };
    try {
      fetch(l15Base() + '/api/tienda/lanzamientos/mi-codigo?lanzamiento=' + encodeURIComponent(m.id) + '&ficha=' + encodeURIComponent(f), { credentials: 'omit' })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (j) {
          if (j && j.ok && j.codigo) {
            var v = { codigo: String(j.codigo).slice(0, 40), pct: l15Num(j.pct), hasta: j.hasta ? Date.parse(j.hasta) || 0 : 0 }, cbs = e.cbs;
            L15.cod[m.id] = v; cbs.forEach(function (fn) { try { fn(v); } catch (_) {} });
          } else { L15.cod[m.id] = false; e.kos.forEach(function (fn) { try { fn(); } catch (_) {} }); }
        }).catch(function () { L15.cod[m.id] = false; e.kos.forEach(function (fn) { try { fn(); } catch (_) {} }); });
    } catch (x) { L15.cod[m.id] = false; }
  }
  function l15Copiar(t, btn, live) {
    var ok = function () { btn.textContent = 'Copiado'; live.textContent = 'Código copiado'; setTimeout(function () { btn.textContent = 'Copiar'; live.textContent = ''; }, 2000); };
    var fb = function () {
      try { var a = document.createElement('textarea'); a.value = t; a.setAttribute('readonly', ''); a.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0'; document.body.appendChild(a); a.select(); var r = document.execCommand('copy'); document.body.removeChild(a); if (r) ok(); } catch (e) {}
    };
    try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t).then(ok, fb); return; } } catch (e) {}
    fb();
  }
  function l15RegaloLlenar(box, v) {
    box.textContent = '';
    var tx = esteEl('div', 'lz-rt');
    tx.appendChild(esteEl('b', '', 'Te anotaste: este es tu código'));
    tx.appendChild(esteEl('span', 'lz-cod', v.codigo));
    tx.appendChild(esteEl('small', '', (v.pct ? v.pct + '% OFF' : 'Descuento') + (v.hasta ? ' · válido hasta ' + l15Fecha(v.hasta).split(' · ')[0] : '')));
    tx.appendChild(esteEl('small', 'lz-uso', 'Pegalo en el campo de cupón al finalizar la compra.'));
    var bt = esteEl('button', 'lz-btn lz-copy', 'Copiar'); bt.type = 'button';
    var live = esteEl('span', 'lz-sr'); live.setAttribute('role', 'status'); live.setAttribute('aria-live', 'polite');
    bt.addEventListener('click', function () { l15Copiar(v.codigo, bt, live); });
    box.appendChild(tx); box.appendChild(bt); box.appendChild(live); box.hidden = false;
    return bt;
  }
  /* «¿Te anotaste? Buscá tu código»: para quien se anoto en otro navegador. Pide el mismo dato y consulta. */
  function l15Buscar(m) {
    var box = l15Marca(esteEl('div', 'lz-reg lz-bus')), uid = 'lzb' + (++L15.n);
    box.setAttribute('aria-live', 'polite');
    var lk = esteEl('button', 'lz-lnk', '¿Te anotaste? Buscá tu código'); lk.type = 'button'; lk.setAttribute('aria-expanded', 'false'); box.appendChild(lk);
    lk.addEventListener('click', function () {
      lk.setAttribute('aria-expanded', 'true'); lk.hidden = true;
      var f = esteEl('form', 'lz-form'); f.setAttribute('novalidate', ''); f.setAttribute('aria-label', 'Buscá tu código');
      var st = esteEl('p', 'lz-st'); st.setAttribute('role', 'status'); st.setAttribute('aria-live', 'polite'); st.id = uid + 's'; st.tabIndex = -1;
      var inp = {};
      [['mail', 'email', 'El mail con el que te anotaste', 'email', 'email'], ['telefono', 'tel', 'O tu WhatsApp', 'tel', 'tel']].forEach(function (c) {
        var d = esteEl('div', 'lz-c'), l = esteEl('label', '', c[2]); l.setAttribute('for', uid + c[0]);
        var i = esteEl('input'); i.type = c[1]; i.id = uid + c[0]; i.name = c[0]; i.autocomplete = c[3]; i.setAttribute('inputmode', c[4]); i.setAttribute('aria-describedby', st.id);
        d.appendChild(l); d.appendChild(i); f.appendChild(d); inp[c[0]] = i;
      });
      var hp = esteEl('div', 'lz-hp'); hp.setAttribute('aria-hidden', 'true');
      var hi = esteEl('input'); hi.type = 'text'; hi.name = 'sitio'; hi.tabIndex = -1; hi.autocomplete = 'off'; hp.appendChild(hi); f.appendChild(hp);
      var bt = esteEl('button', 'lz-btn', 'Buscar mi código'); bt.type = 'submit'; f.appendChild(bt); f.appendChild(st);
      box.appendChild(f); try { inp.mail.focus(); } catch (e) {}
      var decir = function (t, err) { st.textContent = t; st.className = 'lz-st' + (err ? ' lz-err' : ''); };
      f.addEventListener('submit', function (ev) {
        ev.preventDefault(); if (bt.disabled) return;
        var mail = inp.mail.value.trim(), tel = inp.telefono.value.trim(), nT = tel.replace(/[\s()+\-.]/g, '');
        var okM = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail), okT = /^\d{8,15}$/.test(nT);
        inp.mail.removeAttribute('aria-invalid'); inp.telefono.removeAttribute('aria-invalid');
        var mal = (mail && !okM) ? inp.mail : (tel && !okT) ? inp.telefono : (!mail && !tel) ? inp.mail : null;
        if (mal) { mal.setAttribute('aria-invalid', 'true'); decir(mal === inp.telefono ? 'Revisá el número: usá solo números, con código de área.' : (mail ? 'Revisá el mail: tiene que ser algo como nombre@correo.com.' : 'Escribí el mail o el WhatsApp con el que te anotaste.'), true); try { mal.focus(); } catch (e) {} return; }
        if (typeof fetch !== 'function') { decir('No pudimos buscarlo. Probá de nuevo en un rato.', true); return; }
        var body = { lanzamiento: m.id, recuperar: true, pagina: location.pathname.slice(0, 120), sitio: hi.value || '' };
        if (okM) body.mail = mail; if (okT) body.telefono = tel;
        bt.disabled = true; bt.setAttribute('aria-busy', 'true'); decir('Buscando…', false);
        var fin = function () { bt.disabled = false; bt.removeAttribute('aria-busy'); };
        fetch(l15Base() + '/api/tienda/lanzamientos/anotarse', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), credentials: 'omit' })
          .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { s: r.status, j: j || {} }; }); })
          .then(function (x) {
            fin();
            if (x.s === 200 && x.j.ok !== false && x.j.ficha) {
              l15FiSet(m.id, x.j.ficha); delete L15.cod[m.id];
              l15Codigo(m, function (v) { var b2 = l15RegaloLlenar(box, v); try { b2.focus(); } catch (e) {} l15Pasada(); },
                function () { decir('Te encontramos, pero tu código todavía no está listo. Probá de nuevo en unos minutos.', true); });
            } else if (x.s === 404) decir('No encontramos ese dato entre los anotados. Revisá que sea el mismo.', true);
            else if (x.s === 422) decir(x.j.error || 'Revisá el dato que cargaste.', true);
            else if (x.s === 429) decir('Hiciste muchos intentos. Probá de nuevo en un rato.', true);
            else decir('No pudimos buscarlo ahora. Probá de nuevo en un rato.', true);
          })
          .catch(function () { fin(); decir('Sin conexión. Revisá tu internet y probá de nuevo.', true); });
      });
    });
    return box;
  }
  function l15Regalo(m) {   /* tarjeta oculta hasta que el codigo llega */
    if (!(m.rg && m.fase === 'disponible')) return null;
    if (!l15FiGet(m.id)) return l15Buscar(m);
    var box = l15Marca(esteEl('div', 'lz-reg')); box.hidden = true; box.setAttribute('aria-live', 'polite');
    l15Codigo(m, function (v) { l15RegaloLlenar(box, v); });
    return box;
  }
  /* ---- piezas ---- */
  function l15Barra(m) {
    var ad = q('section.js-adbar'); if (!ad || !m.p.barra) return false;
    var host = q('.container-fluid', ad) || ad, msj = q('.satine-adbar-message,.adbar-message', ad);
    if (getComputedStyle(host).position === 'static') { host.style.position = 'relative'; host.setAttribute('data-lz-pos', '1'); }
    var b = l15Marca(esteEl('div', 'lz-barra'));
    if (msj) { try { var cs = getComputedStyle(msj); b.style.fontFamily = cs.fontFamily; b.style.fontSize = cs.fontSize; b.style.letterSpacing = cs.letterSpacing; b.style.textTransform = cs.textTransform; } catch (e) {} }
    var con = m.fase === 'disponible' ? m.prods.filter(function (p) { return p.url; }) : [], url = con.length === 1 ? con[0].url : '';
    var cont = esteEl(url ? 'a' : 'div'); if (url) cont.href = url;
    cont.appendChild(esteEl('span', '', m.p.barra.texto));
    if (m.fase === 'anticipo' && m.sale) cont.appendChild(l15Cuenta(m));
    b.appendChild(cont); host.appendChild(b); return true;
  }
  function l15Cartel(m) {
    var C = m.p.cartel; if (!C || L15.pcart) return false;
    var clave = 'sc_lzc_' + m.id + '_' + m.fase; if (e14Vis(clave)) return false;
    var hecho = false, previo = null;
    var mostrar = function () {
      if (hecho || e14Bloq()) return; hecho = true; e14Marca(clave);
      try { previo = document.activeElement; } catch (e) {}
      var ov = l15Marca(esteEl('div', 'lz-ov')), dlg = esteEl('div', 'lz-dlg'), uid = 'lzd' + (++L15.n);
      dlg.setAttribute('role', 'dialog'); dlg.setAttribute('aria-modal', 'true'); dlg.setAttribute('aria-labelledby', uid);
      dlg.appendChild(esteEl('span', 'lz-kick', m.fase === 'anticipo' ? 'Próximamente' : (m.p.etiqueta || 'Nuevo')));
      var h = esteEl('h2', '', C.titulo || m.nombre); h.id = uid; dlg.appendChild(h);
      if (C.texto) dlg.appendChild(esteEl('p', '', C.texto));
      if (m.fase === 'anticipo' && m.sale) dlg.appendChild(esteEl('p', 'lz-fe', 'Sale el ' + l15Fecha(m.sale)));
      var ac = esteEl('div', 'lz-ac'), btn = null;
      if (C.destino) { btn = esteEl('a', 'lz-btn', C.boton || 'Ver más'); btn.href = C.destino; ac.appendChild(btn); }
      var ce = esteEl('button', C.destino ? 'lz-btn2' : 'lz-btn', C.destino ? 'Ahora no' : (C.boton || 'Entendido')); ce.type = 'button'; ac.appendChild(ce);
      dlg.appendChild(ac); ov.appendChild(dlg); document.body.appendChild(ov);
      var cerrar = function () { document.removeEventListener('keydown', tecla, true); l15Quitar(ov); try { if (previo && previo.focus) previo.focus(); } catch (e) {} };
      var tecla = function (ev) {
        if (ev.key === 'Escape') { ev.preventDefault(); cerrar(); return; }
        if (ev.key !== 'Tab') return;
        var fo = qa('a[href],button', dlg); if (!fo.length) return;
        var pri = fo[0], ult = fo[fo.length - 1];
        if (ev.shiftKey && document.activeElement === pri) { ev.preventDefault(); ult.focus(); }
        else if (!ev.shiftKey && document.activeElement === ult) { ev.preventDefault(); pri.focus(); }
      };
      document.addEventListener('keydown', tecla, true);
      ce.addEventListener('click', cerrar); ov.addEventListener('click', function (ev) { if (ev.target === ov) cerrar(); });
      L15.undo.push(function () { document.removeEventListener('keydown', tecla, true); });
      try { (btn || ce).focus(); } catch (e) {}
    };
    L15.tms.push(setTimeout(mostrar, 4000));
    var sc = function () { window.removeEventListener('scroll', sc); mostrar(); };
    window.addEventListener('scroll', sc, { passive: true }); L15.undo.push(function () { window.removeEventListener('scroll', sc); });
    return true;
  }
  function l15Tarjeta(m, p) {
    var a = esteEl('a', 'lz-card'); a.href = p.url;
    var i = esteEl('img'); i.src = p.img; i.alt = p.nombre; i.width = 300; i.height = 300; i.loading = 'lazy'; i.decoding = 'async'; a.appendChild(i);
    a.appendChild(esteEl('span', 'lz-pill', m.p.etiqueta || 'Nuevo'));
    a.appendChild(esteEl('span', 'lz-nom', p.nombre));
    var pr = esteEl('span', 'lz-pr');
    if (p.promo > 0 && p.precio > p.promo) { pr.appendChild(esteEl('b', '', plata(p.promo))); pr.appendChild(esteEl('s', '', plata(p.precio))); } else if (p.precio > 0) pr.appendChild(esteEl('b', '', plata(p.precio)));
    a.appendChild(pr);
    if (m.p.pocas && p.stock != null && p.stock > 0 && p.stock <= m.p.pocas.umbral) a.appendChild(esteEl('span', 'lz-poc', m.p.pocas.texto));
    return a;
  }
  function l15Seccion(m) {
    var S = m.p.seccion; if (!S || location.pathname !== '/') return false;
    var hero = q('.js-home-sections-container > .section-slider-home'); if (!hero || !hero.parentNode) return false;
    var an = q('.sc-e14-sec') || q('.sc-est-home'); if (!an || an.parentNode !== hero.parentNode) an = hero;
    var sec = l15Marca(esteEl('section', 'lz-sec')), anti = m.fase === 'anticipo', cuerpo = esteEl('div', 'lz-in');
    var tit = S.titulo || m.nombre; sec.setAttribute('aria-label', tit);
    var tx = esteEl('div', 'lz-tx');
    var kick = esteEl('span', 'lz-kick', anti ? 'Próximamente' : (m.p.etiqueta || 'Nuevo')); if (anti) kick.setAttribute('data-lz-kick', '1'); tx.appendChild(kick);
    tx.appendChild(esteEl('h2', '', tit));
    if (S.texto) tx.appendChild(esteEl('p', '', S.texto));
    var n = 0;
    if (anti) {
      if (m.sale) { var fe = esteEl('p', 'lz-fe', 'Sale el ' + l15Fecha(m.sale)); if (S.cuenta) { fe.appendChild(document.createTextNode(' · ')); fe.appendChild(l15Cuenta(m)); } tx.appendChild(fe); }
      if (m.a) tx.appendChild(l15Form(m));
      if (S.imagen) { var im = esteEl('img', 'lz-img'); im.src = S.imagen; im.alt = ''; im.width = 800; im.height = 600; im.decoding = 'async'; cuerpo.className += ' lz-dos'; cuerpo.appendChild(im); }
      cuerpo.appendChild(tx); sec.appendChild(cuerpo);
    } else {
      sec.appendChild(tx);
      var fila = esteEl('div', 'lz-fila');
      m.prods.slice(0, 8).forEach(function (p) { if (p.url && p.img) { fila.appendChild(l15Tarjeta(m, p)); n++; } });
      if (n) sec.appendChild(fila);
      var rg = l15Regalo(m); if (rg) sec.appendChild(rg);
      if (!n && !rg) return false;
    }
    an.parentNode.insertBefore(sec, an.nextSibling);
    l15RsvSoltar(sec, anti ? m.sale : (m.hasta || Date.now() + 3 * 86400000), 'home');
    return true;
  }
  function l15PidActual() { try { return String(window.LS && window.LS.product && window.LS.product.id || ''); } catch (e) { return ''; } }
  function l15Producto(ls) {
    var pid = l15PidActual(), form = q('form#product_form'); if (!pid || !form) return false;
    var m = null, pr = null;
    ls.some(function (x) { var p = x.prods.filter(function (y) { return y.id === pid; })[0]; if (p) { m = x; pr = p; return true; } return false; });
    if (!m) return false;
    var ref = l15Fuera(form), hay = false;
    if (m.fase === 'anticipo') {
      if (!(m.a || m.p.barra || m.p.seccion)) return false;
      var bl = l15Marca(esteEl('div', 'lz-pp')); bl.setAttribute('role', 'group'); bl.setAttribute('aria-label', 'Próximo lanzamiento');
      bl.appendChild(esteEl('span', 'lz-kick', 'Próximamente'));
      if (m.sale) { var fe = esteEl('p', 'lz-fe', 'Sale el ' + l15Fecha(m.sale) + ' · '); fe.appendChild(l15Cuenta(m)); bl.appendChild(fe); }
      if (m.a) bl.appendChild(l15Form(m));
      ref.parentNode.insertBefore(bl, ref);
      l15RsvSoltar(bl, m.sale, 'prod', [pid]);
      return true;
    }
    var h1 = q('.js-product-name') || q('h1'), puntos = [];
    var et = m.p.etiqueta && h1 && h1.parentNode ? l15Marca(esteEl('span', 'lz-et', m.p.etiqueta)) : null;
    if (et) { h1.parentNode.insertBefore(et, h1); hay = true; }
    var pc = q('.js-price-container') || (q('#price_display') && q('#price_display').parentNode);
    if (m.p.leyenda && pr.promo > 0 && pr.precio > pr.promo && (!m.p.leyenda.hasta || m.p.leyenda.hasta > l15Ahora()) && pc && pc.parentNode) {
      var le = l15Marca(esteEl('p', 'lz-ley', m.p.leyenda.texto)); pc.parentNode.insertBefore(le, pc.nextSibling); hay = true; puntos.push(le);
    }
    if (m.p.pocas && pr.stock != null && pr.stock > 0 && pr.stock <= m.p.pocas.umbral && pc && pc.parentNode) {
      var po = l15Marca(esteEl('p', 'lz-poc lz-poc-f', m.p.pocas.texto)); pc.parentNode.insertBefore(po, pc.nextSibling); hay = true;
    }
    var rg = l15Regalo(m); if (rg) { ref.parentNode.insertBefore(rg, ref); hay = true; }
    return hay;
  }
  /* repasa lo que Tienda Nube vuelve a dibujar (listados que cargan mas, carrito que se re-arma) sin repetir nada */
  function l15Menu() {   /* entrada destacada del lanzamiento en el menu: debajo de la de ofertas si existe; nunca mas de dos nuestras */
    var m = L15.lista.filter(function (x) { return x.p.menu; })[0];
    qa('.js-nav-desktop-list,#nav-hamburger').forEach(function (r) {
      var movil = r.id === 'nav-hamburger', lista = movil ? q('ul.nav-list', r) : r; if (!lista) return;
      var mio = q('li.lz-ment', lista);
      if (!m) { if (mio) l15Quitar(mio); return; }
      var of = q('li.sc-e17-ent', lista);
      if (!mio) {
        var dest = (m.p.cartel && m.p.cartel.destino) || (m.prods[0] && m.prods[0].url) || '', dst = esteSeguro(dest); if (!dst) return;
        mio = l15Marca(esteEl('li', 'lz-ment' + (movil ? ' nav-item' : ' nav-item-desktop nav-main')));
        var a = esteEl('a', 'lz-ment-a', m.p.menu.texto); a.href = dst; mio.appendChild(a);
      }
      var bien = mio.parentNode === lista && (of ? mio.previousSibling === of : (movil ? lista.firstChild === mio : lista.lastChild === mio));
      if (!bien) { if (of) lista.insertBefore(mio, of.nextSibling); else if (movil) lista.insertBefore(mio, lista.firstChild); else lista.appendChild(mio); }
    });
  }
  function l15Cinta() {   /* cinta de frases del lanzamiento; si ya hay una de ofertas, gana la de ofertas */
    var m = L15.lista.filter(function (x) { return x.p.cinta; })[0], el = q('.lz-cinta');
    if (!m || q('.sc-e18-cinta') || /^\/(carrito|cart|checkout|comprar)(\/|$)/i.test(location.pathname) || q('#shoppingCartPage')) { if (el) l15Quitar(el); return; }
    var fr = m.p.cinta.frases;
    if (!el) {
      var a = e18Ancla('arriba'); if (!a) return;
      el = l15Marca(esteEl('div', 'lz-cinta')); el.setAttribute('role', 'region'); el.setAttribute('aria-label', 'Lanzamiento');
      var pista = esteEl('div', 'lz-pista'), g1 = esteEl('div', 'lz-g'), g2 = esteEl('div', 'lz-g'); g2.setAttribute('aria-hidden', 'true');
      pista.appendChild(g1); pista.appendChild(g2); el.appendChild(pista); a.p.insertBefore(el, a.r);
      var ll = function (k) { [g1, g2].forEach(function (g) { while (g.firstChild) g.removeChild(g.firstChild); for (var i = 0; i < k; i++) fr.forEach(function (f) { g.appendChild(esteEl('span', 'lz-cf', f)); var d = esteEl('span', 'lz-cp', '\u00b7'); d.setAttribute('aria-hidden', 'true'); g.appendChild(d); }); }); };
      ll(1); var w1 = g1.offsetWidth || 1, n = Math.max(1, Math.min(14, Math.ceil(window.innerWidth * 1.1 / w1))); if (n > 1) ll(n);
      pista.classList.add('lz-ok');
    }
  }
  function l15Pasada() {
    try {
      l15Menu(); l15Cinta(); if (q('.lz-cinta')) { e19Bajar(); if (!L15.dk) { L15.dk = function () { e19Bajar(); }; window.addEventListener('resize', L15.dk); window.addEventListener('scroll', L15.dk, { passive: true }); var ivd = setInterval(L15.dk, 500); L15.undo.push(function () { clearInterval(ivd); window.removeEventListener('resize', L15.dk); window.removeEventListener('scroll', L15.dk); L15.dk = null; e19Soltar(); }); } }
      var mapa = {}, hay = false;
      L15.lista.forEach(function (m) { if (m.fase === 'disponible' && m.p.etiqueta) m.prods.forEach(function (p) { mapa[p.id] = m.p.etiqueta; hay = true; }); });
      if (hay) qa('.js-item-product[data-product-id]').forEach(function (it) {
        var t = mapa[it.getAttribute('data-product-id')]; if (!t || it.querySelector('.lz-pill')) return;
        var img = it.querySelector('.item-image, .js-item-image-container, picture, img'), host = img && (img.tagName === 'IMG' ? img.parentNode : img);
        if (!host) return;
        if (getComputedStyle(host).position === 'static') { host.style.position = 'relative'; host.setAttribute('data-lz-pos', '1'); }
        host.appendChild(l15Marca(esteEl('span', 'lz-pill', t)));
      });
      L15.lista.forEach(function (m) {
        var v = L15.cod[m.id]; if (!(v && v.codigo)) return;
        ['#modal-cart', '#shoppingCartPage'].forEach(function (sel) {
          var raiz = q(sel); if (!raiz || q('.lz-reg', raiz)) return;
          var lista = q('.js-ajax-cart-list', raiz); if (!lista || !lista.parentNode) return;
          var box = l15Marca(esteEl('div', 'lz-reg')); l15RegaloLlenar(box, v); lista.parentNode.insertBefore(box, lista);
        });
      });
    } catch (e) {}
  }
  function l15Limpiar() {
    qa('[data-sc-lz]').forEach(l15Quitar); l15Quitar(document.getElementById('lz-css'));
    qa('[data-lz-pos]').forEach(function (n) { n.style.position = ''; n.removeAttribute('data-lz-pos'); });
    if (L15.tim) { clearInterval(L15.tim); L15.tim = null; }
    if (L15.vis) { document.removeEventListener('visibilitychange', L15.vis); L15.vis = null; }
    if (L15.obs) { L15.obs.disconnect(); L15.obs = null; }
    if (L15.od) { clearTimeout(L15.od); L15.od = 0; }
    L15.tms.forEach(clearTimeout); L15.tms = [];
    L15.undo.forEach(function (f) { try { f(); } catch (e) {} }); L15.undo = [];
  }
  function l15Css() {
    var FJ2 = '"Plus Jakarta Sans",system-ui,sans-serif', C = L15_COLOR, K = L15_CREMA, B = 'rgba(52,33,27,.14)';
    return [
      '.lz-cinta{box-sizing:border-box;position:relative;z-index:1;width:100%;height:34px;overflow:hidden;contain:layout paint;font:600 11px/34px ' + FJ2 + ';letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;background:' + C + ';color:' + K + '}',
      '.lz-pista{display:flex;width:max-content;will-change:transform}.lz-pista.lz-ok{animation:lz-run 26s linear infinite}',
      '.lz-g{display:flex;flex:0 0 auto;align-items:center}.lz-cf{padding:0 14px}.lz-cp{opacity:.6}',
      '@keyframes lz-run{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}',
      '@media(prefers-reduced-motion:reduce){.lz-pista{animation:none!important;width:100%;justify-content:center}.lz-g{width:100%;justify-content:center}.lz-g+.lz-g{display:none}.lz-cf~*{display:none}}',
      '.lz-ment-a{font-weight:700!important;color:' + C + '!important;background:' + K + ';border-radius:999px;padding:4px 12px!important;text-decoration:none}',
      '.lz-barra{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;align-items:center;justify-content:center;z-index:10001;font:600 11px/1.2 ' + FJ2 + ';letter-spacing:.04em;text-transform:uppercase;text-align:center;padding:0 16px;overflow:hidden;white-space:nowrap;border-radius:inherit;background:' + C + ';color:' + K + '}',
      '.lz-barra>a,.lz-barra>div{display:flex;gap:10px;align-items:center;justify-content:center;max-width:100%;min-width:0;text-decoration:none}',
      '.lz-barra,.lz-barra *{color:' + K + '!important}.lz-barra span{overflow:hidden;text-overflow:ellipsis}',
      '.lz-barra a:focus-visible{outline:2px solid ' + K + ';outline-offset:3px}',
      '.lz-cuenta{font-variant-numeric:tabular-nums;white-space:nowrap}',
      '.lz-kick{display:inline-block;font:700 11px/1.3 ' + FJ2 + ';letter-spacing:.08em;text-transform:uppercase;color:#7a5a4a}',
      '.lz-sec{box-sizing:border-box;margin:16px 12px;padding:24px 18px;background:#fff;border:1px solid ' + B + ';border-radius:16px;color:' + C + ';font-family:' + FJ2 + '}',
      '@media(min-width:768px){.lz-sec{margin:24px auto;max-width:1100px;padding:32px 36px}}',
      '.lz-in{display:flex;flex-direction:column;gap:16px}@media(min-width:768px){.lz-in.lz-dos{flex-direction:row;align-items:center}.lz-in.lz-dos>*{flex:1 1 0;min-width:0}}',
      '.lz-img{display:block;width:100%;height:auto;aspect-ratio:4/3;object-fit:cover;border-radius:12px;background:' + K + '}',
      '.lz-sec h2,.lz-dlg h2{font:700 22px/1.2 ' + FJ2 + ';margin:4px 0 8px;color:' + C + '}',
      '.lz-sec p,.lz-dlg p,.lz-pp p{margin:0 0 10px;font:400 14px/1.5 ' + FJ2 + ';color:' + C + '}',
      '.lz-fe{font-weight:600!important}',
      '.lz-fila{display:flex;gap:12px;overflow-x:auto;padding:4px 0;margin-top:12px}',
      '.lz-card{position:relative;flex:0 0 150px;display:flex;flex-direction:column;gap:4px;text-decoration:none;color:' + C + '}',
      '.lz-card img{display:block;width:100%;height:auto;aspect-ratio:1;object-fit:cover;border-radius:12px;background:' + K + '}',
      '.lz-nom{font:600 13px/1.3 ' + FJ2 + '}.lz-pr{font:400 13px/1.3 ' + FJ2 + '}.lz-pr b{font-weight:700}.lz-pr s{margin-left:6px;opacity:.6}',
      '.lz-card:focus-visible,.lz-copy:focus-visible,.lz-btn:focus-visible,.lz-btn2:focus-visible,.lz-form input:focus-visible{outline:2px solid ' + C + ';outline-offset:2px}',
      '.lz-pill{position:absolute;right:8px;top:8px;z-index:3;padding:3px 9px;border-radius:999px;background:' + C + ';color:' + K + ';font:700 11px/1.3 ' + FJ2 + ';letter-spacing:.02em;pointer-events:none}',
      '.lz-poc{font:700 12px/1.3 ' + FJ2 + ';color:#9b2c1d}.lz-poc-f{margin:4px 0}',
      '.lz-et{display:inline-block;padding:3px 10px;margin:0 0 6px;border-radius:999px;background:' + C + ';color:' + K + ';font:700 11px/1.4 ' + FJ2 + ';letter-spacing:.06em;text-transform:uppercase}',
      '.lz-ley{margin:4px 0;font:600 12.5px/1.3 ' + FJ2 + ';color:' + C + '}',
      '.lz-pp{box-sizing:border-box;margin:14px 0;padding:16px;background:#fff;border:1px solid ' + B + ';border-radius:16px;color:' + C + ';font-family:' + FJ2 + '}',
      '.lz-fw{margin:12px 0;font-family:' + FJ2 + ';color:' + C + '}',
      '.lz-ft{margin:0 0 4px!important;font:700 15px/1.3 ' + FJ2 + '!important}.lz-fx{margin:0 0 8px!important}',
      '.lz-form{position:relative;display:flex;flex-direction:column;gap:10px;margin:0}',
      '.lz-form label{display:block;margin-bottom:4px;font:600 12px/1.3 ' + FJ2 + ';color:' + C + '}',
      '.lz-form input[type=email],.lz-form input[type=tel]{display:block;width:100%;box-sizing:border-box;height:46px;padding:0 14px;border:1px solid rgba(52,33,27,.35);border-radius:12px;background:#fff;color:' + C + ';font:400 16px ' + FJ2 + '}',
      '.lz-form input[aria-invalid=true]{border-color:#9b2c1d}',
      '.lz-hp{position:absolute!important;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}',
      '.lz-btn,.lz-btn2{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-height:46px;padding:0 22px;border-radius:999px;border:1px solid ' + C + ';background:' + C + ';color:' + K + '!important;font:700 14px ' + FJ2 + ';text-decoration:none;cursor:pointer}',
      '.lz-btn2{background:transparent;color:' + C + '!important}.lz-btn[disabled]{opacity:.6;cursor:default}',
      '.lz-cons{margin:0!important;font:400 11.5px/1.4 ' + FJ2 + '!important;opacity:.8}',
      '.lz-st{min-height:20px;margin:0!important;font:600 13px/1.4 ' + FJ2 + '!important;outline:0}.lz-st.lz-err{color:#9b2c1d!important}',
      '.lz-ok .lz-form>:not(.lz-st){display:none}',
      '.lz-reg{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:12px 0;padding:14px 16px;border:1px dashed rgba(52,33,27,.4);border-radius:16px;background:' + K + ';color:' + C + ';font-family:' + FJ2 + '}',
      '.lz-reg[hidden]{display:none}.lz-rt{display:flex;flex-direction:column;gap:2px;flex:1 1 160px}.lz-rt b{font:700 13px/1.3 ' + FJ2 + '}.lz-rt small{font:400 12px/1.3 ' + FJ2 + '}',
      '.lz-cod{font:700 18px/1.2 ui-monospace,Menlo,monospace;letter-spacing:.06em}.lz-copy{min-height:40px}',
      '.lz-bus{display:block;padding:8px 2px;border:0;background:transparent}.lz-bus .lz-form{margin-top:8px;max-width:420px}',
      '.lz-lnk{padding:0;border:0;background:none;color:' + C + ';font:400 13px/1.4 ' + FJ2 + ';text-decoration:underline;text-underline-offset:3px;cursor:pointer;opacity:.85}.lz-lnk:focus-visible{outline:2px solid ' + C + ';outline-offset:2px}',
      '.lz-reg.lz-bus:has(.lz-rt){display:flex;padding:14px 16px;border:1px dashed rgba(52,33,27,.4);background:' + K + '}',
      '.lz-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}',
      '.lz-ov{position:fixed;left:0;right:0;top:0;bottom:0;z-index:100000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(52,33,27,.5)}',
      '.lz-dlg{box-sizing:border-box;width:100%;max-width:380px;padding:24px;background:#fff;border-radius:16px;color:' + C + ';font-family:' + FJ2 + ';animation:lz-in .3s ease-out}',
      '.lz-ac{display:flex;flex-direction:column;gap:8px;margin-top:12px}',
      '@keyframes lz-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}',
      '@media(prefers-reduced-motion:reduce){.lz-dlg{animation:none}.lz-fila{scroll-behavior:auto}}'
    ].join('\n');
  }
  function l15Pintar() {
    l15Limpiar();
    var ls = L15.lista; if (!ls.length) return;
    var st = document.createElement('style'); st.id = 'lz-css'; st.textContent = l15Css(); (document.head || document.documentElement).appendChild(st);
    var pri = function (fn) { for (var i = 0; i < ls.length; i++) { try { if (fn(ls[i])) return true; } catch (e) {} } return false; };
    if (!L15.pbarra) pri(function (m) { return m.p.barra ? l15Barra(m) : false; });
    pri(function (m) { return m.p.seccion ? l15Seccion(m) : false; });
    try { l15Producto(ls); } catch (e) {}
    pri(function (m) { return m.p.cartel ? l15Cartel(m) : false; });
    ls.forEach(function (m) { try { l15Codigo(m, function () { l15Pasada(); }); } catch (e) {} });
    l15Pasada();
    if (qa('[data-lz-cuenta]').length) {
      L15.tim = setInterval(l15Tic, 1000);
      document.addEventListener('visibilitychange', L15.vis = function () { if (!document.hidden) l15Tic(); });
      l15Tic();
    }
    if (typeof MutationObserver === 'function' && document.body) {
      L15.obs = new MutationObserver(function () { if (L15.od) return; L15.od = setTimeout(function () { L15.od = 0; l15Pasada(); }, 250); });
      L15.obs.observe(document.body, { childList: true, subtree: true });
    }
  }
  function l15Aplicar(d) {
    if (!d || typeof d !== 'object' || !('campana' in d)) return;
    var cru = Array.isArray(d.lanzamientos) ? d.lanzamientos : [];
    var ah = Date.parse(d.ahora); if (isFinite(ah)) L15.skew = ah - Date.now();
    var lista = cru.slice(0, 6).map(l15Min).filter(Boolean);
    if (!lista.length && !L15.sig) { l15HintAjustar(); return; }   /* sin lanzamientos y nada pintado: no se hace nada */
    var camps = []; try { camps = esteCampanas(d) || []; } catch (e) {}
    var pb = false, pc = false;
    try {
      pb = camps.some(function (c) { var e = c && c.visual && c.visual.estetica; return !!(e && e.barra && e.barra.activa && e.barra.mensaje); });
      pc = camps.some(function (k) {
        var e = k && k.visual && k.visual.estetica; if (!e) return false;
        var ko = 'sc_cartel_' + k.slug;
        if (k.extendida && k.extendida.numero != null) return !e14Vis(ko + '_x' + k.extendida.numero);
        return e14Flag(e, 'cartel_entrada', false) && !e14Vis(ko);
      });
    } catch (e) {}
    var sig = JSON.stringify([lista, pb, pc]);
    L15.pbarra = pb; L15.pcart = pc;
    if (sig !== L15.sig) {
      L15.sig = sig; L15.lista = lista;
      var go = function () { try { l15Pintar(); } catch (e) { try { l15Limpiar(); } catch (_) {} } };
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
    }
    /* sigue en anticipo con la hora ya pasada: reintentar el contrato */
    if (lista.some(function (m) { return m.fase === 'anticipo' && m.sale && m.sale <= l15Ahora(); })) L15.tms.push(setTimeout(l15Salio, 7000));
    l15HintAjustar();
  }
  /* ---- 1.15: el hueco de las secciones del inicio / ficha se reserva ANTES de pintar (sin saltos) ----
     Se guarda la altura medida de la seccion pintada (por tamano de pantalla) y, en la visita siguiente, se pone un espaciador que se va al pintar la real. Sin dato guardado no hay nodo. */
  function l15RsvGuardar(kind, nodo, hasta, ids) {
    if (estePrev || !nodo) return;
    try {
      var cs = getComputedStyle(nodo), h = Math.round(nodo.offsetHeight + (parseFloat(cs.marginTop) || 0) + (parseFloat(cs.marginBottom) || 0)); if (!(h > 40)) return;
      var o = null; try { o = JSON.parse(localStorage.getItem(L15_RSV) || 'null'); } catch (e) {}
      if (!o || typeof o !== 'object' || !o.h) o = { h: {} };
      o.h[kind + rsvClase()] = h; if (ids) o.ids = ids;
      o.hasta = Math.max(+o.hasta > Date.now() ? +o.hasta : 0, typeof hasta === 'string' ? Date.parse(hasta) || 0 : (+hasta || 0), Date.now() + 3600000);
      localStorage.setItem(L15_RSV, JSON.stringify(o)); L15.rsvTocado = 1; L15.rsvKind = kind;
    } catch (e) {}
  }
  function l15RsvSoltar(nodo, hasta, kind, ids) {
    qa('[data-lz-rsv]').forEach(l15Quitar);
    if (L15.rsvT) { clearTimeout(L15.rsvT); L15.rsvT = 0; }
    if (L15.rsvO) { L15.rsvO.disconnect(); L15.rsvO = null; }
    if (nodo && kind) l15RsvGuardar(kind, nodo, hasta, ids);
  }
  function l15HintAjustar() {   /* si ya no hay seccion que reservar, se borra el dato para que la proxima visita no deje un hueco */
    if (!L15.rsvTocado || estePrev) return;
    setTimeout(function () {
      try {
        var kind = L15.rsvKind, hay = kind === 'home' ? q('.sc-e14-sec,.lz-sec') : q('.lz-pp');
        if (hay) return;
        var o = JSON.parse(localStorage.getItem(L15_RSV) || 'null');
        if (o && o.h) { delete o.h[kind + 'c']; delete o.h[kind + 'p']; localStorage.setItem(L15_RSV, JSON.stringify(o)); }
        l15RsvSoltar();
      } catch (e) {}
    }, 500);
  }
  function l15RsvBoot() {
    try {
      if (estePrev) return;
      var o = JSON.parse(localStorage.getItem(L15_RSV) || 'null'); if (!o) return;
      if (!(o.hasta > Date.now())) { localStorage.removeItem(L15_RSV); return; }
      var kind = location.pathname === '/' ? 'home' : /^\/productos\//.test(location.pathname) ? 'prod' : ''; if (!kind) return;
      var h = o.h && o.h[kind + rsvClase()]; if (!(h > 40 && h < 1400)) return;
      if (kind === 'prod') { var pid = l15PidActual(); if (!pid || !Array.isArray(o.ids) || o.ids.indexOf(pid) < 0) return; }
      L15.rsvTocado = 1; L15.rsvKind = kind;
      var poner = function () {
        if (q('[data-lz-rsv]')) return true;
        var ref = null, antes = false;
        if (kind === 'home') { ref = q('.js-home-sections-container > .section-slider-home'); }
        else { var f = q('form#product_form'); if (f) { ref = l15Fuera(f); antes = true; } }
        if (!ref || !ref.parentNode) return false;
        var sp = document.createElement('div'); sp.setAttribute('data-lz-rsv', '1'); sp.setAttribute('aria-hidden', 'true'); sp.style.minHeight = h + 'px';
        ref.parentNode.insertBefore(sp, antes ? ref : ref.nextSibling); return true;
      };
      if (!poner() && typeof MutationObserver === 'function') {
        L15.rsvO = new MutationObserver(function () { if (poner() && L15.rsvO) { L15.rsvO.disconnect(); L15.rsvO = null; } });
        L15.rsvO.observe(document.documentElement, { childList: true, subtree: true });
      }
      L15.rsvT = setTimeout(function () { l15RsvSoltar(); }, 6000);   /* red de seguridad: el hueco nunca queda mas de 6 s */
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
  try { l15RsvBoot(); } catch (e) {}
  sincronizarContrato();
  estePreview();
  if (activo() || vista) arrancar();
  else { var falta = new Date(CFG.desde).getTime() - Date.now(); if (falta > 0 && falta < 4 * 3600e3) setTimeout(arrancar, falta + 500); }
})();
