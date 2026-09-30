/* ============================================================================
   SATINE - Boton dinamico sobre los banners del home  (satine-banner-cta.js)
   ----------------------------------------------------------------------------
   QUE HACE
   Los banners del home son SOLO una foto: el texto ("Leather Case Cherry",
   "iPhone 18 Pro Max", etc.) esta quemado en el pixel. No hay link ni boton.
   Este archivo le pone a cada banner un boton de verdad, que:
     1) lleva al destino que corresponde a lo que dice esa foto, y
     2) se ubica debajo del texto de la foto, del lado donde esta el texto.

   DE DONDE SACA ESO
   De un archivo de datos chiquito (banners.json) que arma n8n una sola vez por
   banner, leyendo la foto con IA de vision. El navegador NUNCA analiza la foto:
   solo lee un JSON de menos de 1 KB con el resultado ya masticado.

   POR QUE NO ROMPE LA VELOCIDAD
   - El boton es position:absolute sobre la foto -> no empuja nada -> CLS 0.
   - Los datos se guardan en localStorage: de la 2da visita en adelante el boton
     aparece al instante, sin pedir nada por red.
   - La 1ra visita pide el JSON recien DESPUES del load (cola __satLuego), asi no
     compite con la primera pintada ni con el LCP.
   - No hay setInterval, no hay observers eternos, no se toca el lazy-load ni el
     fetchpriority del slide 1.

   OJO CON EL RECORTE DE LA FOTO
   .slider-image usa object-fit:cover -> la foto se RECORTA para llenar el hueco.
   Entonces un 30% medido sobre la foto original NO es el 30% del contenedor.
   La funcion ubicar() rehace la cuenta del cover para clavar el boton en el
   punto correcto en cualquier ancho de pantalla.
   ========================================================================== */
(function () {
  'use strict';

  if (!document.querySelector('.section-slider-home')) return;   /* solo el home */

  var DATOS_URL = 'https://cdn.jsdelivr.net/gh/SATINE344/satine-assets@main/data/banners.json';
  var CLAVE_CACHE = 'sat_bcta_v1';
  var MARCA = 'satBcta';              /* dataset flag: este slide ya tiene boton */
  var MARGEN = 16;                    /* px minimos al borde de la foto */

  var datos = null;
  var pintados = [];                  /* [{a, caja, d}] para recolocar en resize */

  /* ---------------------------------------------------------------- estilos */
  function estilos() {
    if (document.getElementById('sat-bcta-css')) return;
    var s = document.createElement('style');
    s.id = 'sat-bcta-css';
    s.textContent =
      /* el contenedor de la foto tiene que ser el marco de referencia del boton.
         Si ya era relative esto no cambia nada; si era static, ahora el boton se
         mide contra la foto y no contra algo de mas arriba. */
      '.section-slider-home .slider-slide{position:relative}' +
      '.sat-bcta{position:absolute;z-index:3;display:inline-flex;align-items:center;gap:7px;' +
      'padding:12px 24px;border-radius:100px;text-decoration:none;white-space:nowrap;' +
      "font:700 13px/1 'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,sans-serif;" +
      'letter-spacing:-.1px;text-transform:none;opacity:0;transform:translateY(6px);' +
      'transition:opacity .45s cubic-bezier(.32,.72,0,1),transform .45s cubic-bezier(.32,.72,0,1),' +
      'box-shadow .25s ease,background .25s ease;will-change:opacity,transform}' +
      '.sat-bcta.is-in{opacity:1;transform:translateY(0)}' +
      /* foto oscura -> boton claro */
      '.sat-bcta--claro{background:#faf6ee;color:#34211b;box-shadow:0 6px 18px -6px rgba(0,0,0,.35)}' +
      '.sat-bcta--claro:hover{background:#fff;box-shadow:0 10px 26px -8px rgba(0,0,0,.45)}' +
      /* foto clara -> boton marron */
      '.sat-bcta--osc{background:#34211b;color:#faf6ee;box-shadow:0 6px 18px -6px rgba(52,33,27,.4)}' +
      '.sat-bcta--osc:hover{background:#231610;box-shadow:0 10px 26px -8px rgba(52,33,27,.5)}' +
      '.sat-bcta svg{flex:0 0 auto}' +
      /* el boton dibujado como span: el clic lo maneja el <a> que envuelve el slide */
      'span.sat-bcta{pointer-events:none}' +
      /* capa invisible que hace clickeable TODA la foto (hoy el banner no lo es).
         Va por debajo del boton para que el boton siga teniendo su propio hover. */
      '.sat-bcapa{position:absolute;inset:0;z-index:2;display:block}' +
      /* el centrado horizontal se resuelve con margin, no con transform, porque el
         transform ya lo usa la animacion de entrada. */
      '@media (max-width:767px){.sat-bcta{padding:11px 20px;font-size:12px}}';
    document.head.appendChild(s);
  }

  /* ------------------------------------------------- identidad de la foto */
  /* De   .../2-slide-1790624403288-5077050398-3fe8...405-480-0.webp?1819
     saca  2-slide-1790624403288-5077050398-3fe8...405
     (el mismo id para los 4 tamanios del srcset). */
  function idDeFoto(img) {
    var fuente = img.getAttribute('data-srcset') || img.getAttribute('srcset') ||
                 img.getAttribute('data-src') || img.getAttribute('src') || '';
    var m = fuente.match(/\/([^\/\s?]+?)-\d+-0\.(webp|jpg|jpeg|png)/i);
    if (m) return m[1];
    m = fuente.match(/\/([^\/\s?]+?)\.(webp|jpg|jpeg|png)/i);
    return m ? m[1] : '';
  }

  /* ------------------------------------------------- la cuenta del cover */
  /* Devuelve donde cae, DENTRO del contenedor, el punto (x%,y%) de la foto. */
  function puntoReal(caja, d) {
    var cw = caja.clientWidth, ch = caja.clientHeight;
    if (!cw || !ch) return null;
    var iw = d.w || 1920, ih = d.h || 900;
    var esc = Math.max(cw / iw, ch / ih);        /* asi funciona object-fit:cover */
    var dw = iw * esc, dh = ih * esc;            /* tamanio real de la foto pintada */
    var ox = (cw - dw) / 2, oy = (ch - dh) / 2;  /* recorte parejo: object-position center */
    return { x: ox + (d.x / 100) * dw, y: oy + (d.y / 100) * dh, cw: cw, ch: ch };
  }

  function ubicar(a, caja, d) {
    var p = puntoReal(caja, d);
    if (!p) return;
    var an = a.offsetWidth || 150, al = a.offsetHeight || 42;

    var izq;
    if (d.al === 'c')      izq = p.x - an / 2;     /* texto centrado -> boton centrado */
    else if (d.al === 'd') izq = p.x - an;         /* texto a la derecha -> pegado a la derecha */
    else                   izq = p.x;              /* texto a la izquierda (default) */

    /* que nunca se escape de la foto */
    izq = Math.max(MARGEN, Math.min(izq, p.cw - an - MARGEN));
    var arr = Math.max(MARGEN, Math.min(p.y, p.ch - al - MARGEN));

    a.style.left = Math.round(izq) + 'px';
    a.style.top  = Math.round(arr) + 'px';
  }

  /* ------------------------------------------------------ pintar un slide */
  function pintarSlide(slide) {
    if (slide.dataset[MARCA]) return;              /* ya tiene (o es clon de Swiper) */
    var img = slide.querySelector('.slider-image');
    if (!img) return;
    var caja = slide.querySelector('.slider-slide') || img.parentNode;
    if (!caja) return;

    var id = idDeFoto(img);
    var d = (datos && datos.banners) ? datos.banners[id] : null;
    if (!d || !d.url) return;                      /* sin dato -> no invento nada */

    slide.dataset[MARCA] = '1';

    /* de paso: alt de verdad para SEO (hoy dice "Carrusel 1") */
    if (d.alt) img.setAttribute('alt', d.alt);

    /* Si Matias cargo un link a mano en el panel de Tienda Nube, el theme ya envolvio
       todo el slide en un <a>. ESE link manda: no lo piso con el que dedujo la IA, y
       el boton se dibuja como <span> para no meter un <a> adentro de otro <a>. */
    var envolvente = null, hijos = slide.children;
    for (var k = 0; k < hijos.length; k++) {
      if (hijos[k].tagName === 'A' && hijos[k].getAttribute('href')) { envolvente = hijos[k]; break; }
    }

    var a = document.createElement(envolvente ? 'span' : 'a');
    a.className = 'sat-bcta sat-bcta--' + (d.fondo === 'claro' ? 'osc' : 'claro');
    if (!envolvente) {
      a.href = d.url;
      /* y de paso la foto entera se vuelve clickeable, que hoy no lo es */
      var capa = document.createElement('a');
      capa.className = 'sat-bcapa';
      capa.href = d.url;
      capa.setAttribute('aria-label', d.alt || d.txt || 'Ver');
      caja.appendChild(capa);
    } else if (d.alt) {
      envolvente.setAttribute('aria-label', d.alt);
    }
    a.setAttribute('data-sat-banner', id);
    a.innerHTML = (d.txt || 'Comprar').replace(/[<>&]/g, '') +
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M5 12h13M12 5l7 7-7 7"/></svg>';

    caja.appendChild(a);
    ubicar(a, caja, d);
    pintados.push({ a: a, caja: caja, d: d });
    requestAnimationFrame(function () { a.classList.add('is-in'); });
  }

  function pintarTodo() {
    var slides = document.querySelectorAll(
      '.js-home-slider .swiper-slide, .js-home-slider-mobile .swiper-slide');
    for (var i = 0; i < slides.length; i++) pintarSlide(slides[i]);
  }

  /* -------------------------------------------------------------- resize */
  var pendiente = false;
  function recolocar() {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(function () {
      pendiente = false;
      for (var i = 0; i < pintados.length; i++) {
        ubicar(pintados[i].a, pintados[i].caja, pintados[i].d);
      }
    });
  }

  /* ------------------------------------------------------------ arranque */
  function arrancar(json) {
    if (!json || !json.banners) return;
    datos = json;
    estilos();
    pintarTodo();
    if (pintados.length) {
      window.addEventListener('resize', recolocar, { passive: true });
      window.addEventListener('orientationchange', recolocar, { passive: true });
      /* Swiper con loop clona slides al vuelo: si aparecen, tambien les toca boton. */
      ['homeSwiper', 'homeMobileSwiper'].forEach(function (n) {
        var sw = window[n];
        if (sw && sw.on) sw.on('slideChangeTransitionEnd', pintarTodo);
      });
    }
  }

  /* 1) lo que quedo de la visita anterior: boton al instante, sin red */
  try {
    var guardado = localStorage.getItem(CLAVE_CACHE);
    if (guardado) arrancar(JSON.parse(guardado));
  } catch (e) {}

  /* 2) recien despues del load, buscar si cambio algo */
  (window.__satLuego || function (f) { window.addEventListener('load', f); })(function () {
    fetch(DATOS_URL, { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (!j || !j.banners) return;
        var antes = datos ? JSON.stringify(datos) : '';
        var ahora = JSON.stringify(j);
        if (antes === ahora) return;                 /* no cambio nada */
        try { localStorage.setItem(CLAVE_CACHE, ahora); } catch (e) {}
        if (!datos) { arrancar(j); return; }
        /* cambio: sacar los viejos y rehacer */
        pintados.forEach(function (p) { if (p.a.parentNode) p.a.parentNode.removeChild(p.a); });
        var capas = document.querySelectorAll('.sat-bcapa');
        for (var c = 0; c < capas.length; c++) capas[c].parentNode.removeChild(capas[c]);
        pintados = [];
        var slides = document.querySelectorAll(
          '.js-home-slider .swiper-slide, .js-home-slider-mobile .swiper-slide');
        for (var i = 0; i < slides.length; i++) delete slides[i].dataset[MARCA];
        datos = j;
        pintarTodo();
      })
      .catch(function () {});
  });
})();
