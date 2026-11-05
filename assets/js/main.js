/* CherryBeauty — interacciones compartidas (index.html y portafolio.html) */
(function () {
  "use strict";

  const WHATSAPP = "56926038867";
  function waLink(texto) {
    return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto);
  }
  document.querySelectorAll("[data-wa-text]").forEach((el) => {
    el.href = waLink(el.getAttribute("data-wa-text"));
  });

  /* Menú móvil */
  const toggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  const ICON_SPARKLE =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c.6 3.8 1.4 6.3 2.5 7.5S18.2 11.4 22 12c-3.8.6-6.3 1.4-7.5 2.5S12.6 18.2 12 22c-.6-3.8-1.4-6.3-2.5-7.5S5.8 12.6 2 12c3.8-.6 6.3-1.4 7.5-2.5S11.4 5.8 12 2Z"/></svg>';
  const ICON_CHECK =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

  /* ================= Servicios (index.html) ================= */
  const SERVICIOS = [
    {
      categoria: "unas",
      tag: "Manicure",
      nombre: "Esmaltado permanente",
      desc: "Color y brillo de larga duración con nivelación rusa. Ideal para mantener tus uñas naturales prolijas.",
      precio: "$15.000",
      desde: true,
      duracion: "≈ 1 hora",
      img: "assets/images/servicio-esmaltado-permanente.webp",
      alt: "Manos con esmaltado permanente en tono rosado francés con detalles blancos",
      link: "https://cal.com/valentina-mc4iov/esmaltado-permanente?hl=es",
    },
    {
      categoria: "unas",
      tag: "Refuerzo",
      nombre: "Kapping de polygel",
      desc: "Capa protectora y fortalecedora sobre tu uña natural para evitar quiebres y favorecer el crecimiento.",
      precio: "$23.000",
      desde: true,
      duracion: "≈ 1 h 30 min",
      img: "assets/images/servicio-kapping-polygel.webp",
      alt: "Manos con kapping de polygel y diseño rojo",
      link: "https://cal.com/valentina-mc4iov/kapping-de-polygel",
    },
    {
      categoria: "unas",
      tag: "Extensiones",
      nombre: "Extensiones soft gel",
      desc: "Largo personalizado con tips de gel completo, acabado natural, ultraligero y de alta resistencia.",
      precio: "$25.000",
      desde: true,
      duracion: "≈ 2 horas",
      img: "assets/images/servicio-softgel.webp",
      alt: "Manos con extensiones soft gel y diseño floral rosado",
      link: "https://cal.com/valentina-mc4iov/soft-gel?hl=es",
    },
    {
      categoria: "mirada",
      tag: "Pestañas",
      nombre: "Lifting coreano",
      desc: "Curva, levanta y nutre las pestañas naturales en 3 etapas de hidratación profunda, sin dañarlas.",
      precio: "$23.000",
      desde: false,
      duracion: "≈ 1 h 20 min",
      img: "assets/images/servicio-lifting-coreano.webp",
      alt: "Primer plano de pestañas con lifting coreano",
      link: "https://cal.com/valentina-mc4iov/lifting-coreano?hl=es",
    },
    {
      categoria: "mirada",
      tag: "Pestañas",
      nombre: "Lifting coreano + efecto anime",
      desc: "Mismo tratamiento nutritivo que estiliza la mirada creando espigas definidas de tendencia.",
      precio: "$25.000",
      desde: false,
      duracion: "≈ 1 h 30 min",
      img: "assets/images/servicio-lifting-anime.webp",
      alt: "Primer plano de pestañas con lifting coreano y efecto anime",
      link: "https://cal.com/valentina-mc4iov/lifting-coreano-efecto-anime?hl=es",
    },
    {
      categoria: "mirada",
      tag: "Cejas",
      nombre: "Perfilado de cejas",
      desc: "Visagismo y diseño según la proporción de tu rostro, para una mirada limpia y armoniosa.",
      precio: "$8.000",
      desde: false,
      duracion: "30 min",
      img: null,
      link: "https://cal.com/valentina-mc4iov/perfilado-de-cejas",
    },
    {
      categoria: "cabello",
      tag: "Cuidado capilar",
      nombre: "Botox capilar",
      desc: "Rellena la fibra desgastada, restaura brillo y devuelve el movimiento natural al cabello. Incluye corte de puntas.",
      precio: "$38.000",
      desde: true,
      duracion: "≈ 3 horas",
      img: "assets/images/servicio-botox-capilar.jpg",
      alt: "Cabello largo y liso después de un botox capilar",
      link: "https://cal.com/valentina-mc4iov/botox-capilar?hl=es",
    },
    {
      categoria: "cabello",
      tag: "Cuidado capilar",
      nombre: "Alisado permanente",
      desc: "Sellado capilar que disminuye el frizz y otorga suavidad espejo. Incluye corte de puntas.",
      precio: "$45.000",
      desde: true,
      duracion: "≈ 4 horas",
      img: "assets/images/servicio-alisado-permanente.jpg",
      alt: "Cabello largo y liso después de un alisado permanente",
      link: "https://cal.com/valentina-mc4iov/alisado-permanente?hl=es",
    },
  ];

  const serviceGrid = document.getElementById("service-grid");
  if (serviceGrid) {
    function esc(t) {
      return String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    }
    function card(s) {
      return `<article class="service-card" data-cat="${s.categoria}">
        <div class="service-body">
          <span class="service-tag">${esc(s.tag)}</span>
          <h3>${esc(s.nombre)}</h3>
          <p>${esc(s.desc)}</p>
          <div class="service-meta">
            <span class="service-price">${s.desde ? '<span class="desde">desde</span>' : ""}${esc(s.precio)}</span>
            <span class="service-duration">${esc(s.duracion)}</span>
          </div>
          <a class="btn btn-primary" href="${s.link}" target="_blank" rel="noopener">Agendar hora</a>
        </div>
      </article>`;
    }
    serviceGrid.innerHTML = SERVICIOS.map(card).join("");

    const chips = document.querySelectorAll(".filter-chip");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        const cat = chip.getAttribute("data-filter");
        serviceGrid.querySelectorAll(".service-card").forEach((card) => {
          card.style.display = cat === "todos" || card.dataset.cat === cat ? "" : "none";
        });
      });
    });
  }

  /* ================= Portafolio (portafolio.html) ================= */
  const FOTOS = [
    { cat: "softgel", label: "Soft gel", src: "assets/images/servicio-softgel.webp" },
    { cat: "softgel", label: "Soft gel · diseño rojo", src: "assets/images/portfolio-softgel-rojo.webp" },
    { cat: "softgel", label: "Soft gel · flores 3D", src: "assets/images/portfolio-softgel-flores.webp" },
    { cat: "esmaltado", label: "Esmaltado permanente", src: "assets/images/servicio-esmaltado-permanente.webp" },
    { cat: "esmaltado", label: "Esmaltado · brillo", src: "assets/images/portfolio-esmaltado-brillo.webp" },
    { cat: "esmaltado", label: "Esmaltado · cerezas", src: "assets/images/portfolio-esmaltado-cerezas.webp" },
    { cat: "esmaltado", label: "Esmaltado · nail art", src: "assets/images/portfolio-esmaltado-nailart.webp" },
    { cat: "kapping", label: "Kapping de polygel", src: "assets/images/servicio-kapping-polygel.webp" },
    { cat: "kapping", label: "Kapping · detalles", src: "assets/images/portfolio-kapping-detalles.webp" },
    { cat: "kapping", label: "Kapping · brillo", src: "assets/images/portfolio-kapping-brillo.webp" },
    { cat: "lifting", label: "Lifting coreano", src: "assets/images/servicio-lifting-coreano.webp" },
    { cat: "lifting", label: "Lifting coreano + anime", src: "assets/images/servicio-lifting-anime.webp" },
    { cat: "lifting", label: "Lifting coreano · resultado", src: "assets/images/portfolio-lifting-resultado.webp" },
    { cat: "cabello", label: "Botox capilar", src: "assets/images/servicio-botox-capilar.jpg" },
    { cat: "cabello", label: "Alisado permanente", src: "assets/images/servicio-alisado-permanente.jpg" },
  ];

  const galleryGrid = document.getElementById("gallery-grid");
  if (galleryGrid) {
    galleryGrid.innerHTML = FOTOS.map(
      (f, i) => `<button type="button" class="gallery-item" data-cat="${f.cat}" data-index="${i}" aria-label="Ampliar foto: ${f.label}">
        <img src="${f.src}" alt="${f.label}" loading="lazy" width="480" height="640">
        <span class="gallery-caption">${f.label}</span>
      </button>`
    ).join("");

    const filterChips = document.querySelectorAll(".filter-chip");
    filterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        filterChips.forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        const cat = chip.getAttribute("data-filter");
        galleryGrid.querySelectorAll(".gallery-item").forEach((item) => {
          item.hidden = !(cat === "todos" || item.dataset.cat === cat);
        });
      });
    });

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector("img");
    const lightboxCaption = lightbox.querySelector(".lightbox-caption");
    function openLightbox(i) {
      const f = FOTOS[i];
      lightboxImg.src = f.src;
      lightboxImg.alt = f.label;
      lightboxCaption.textContent = f.label;
      lightbox.classList.add("is-open");
      lightbox.querySelector(".lightbox-close").focus();
    }
    galleryGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".gallery-item");
      if (btn) openLightbox(Number(btn.dataset.index));
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.closest(".lightbox-close")) {
        lightbox.classList.remove("is-open");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lightbox.classList.remove("is-open");
    });
  }

  /* Pie de página: ícono check reutilizable para listas de políticas */
  document.querySelectorAll("[data-icon='check']").forEach((el) => (el.innerHTML = ICON_CHECK));
  document.querySelectorAll("[data-icon='sparkle']").forEach((el) => (el.innerHTML = ICON_SPARKLE));

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
