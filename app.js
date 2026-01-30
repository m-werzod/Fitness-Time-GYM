// ================== CONFIG (your real contacts) ==================
const CONTACTS = {
  phone: "+998946162929",
  telegramUsername: "MirjalolovMirsaid",
  instagramHandle: "fitnesstimetashkent",
};
// ==============================================================

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// ---------- Contacts links ----------
const tgUrl = `https://t.me/${CONTACTS.telegramUsername}`;
const igUrl = `https://instagram.com/${CONTACTS.instagramHandle}`;
const telUrl = `tel:${CONTACTS.phone}`;

const tgLink = $("#tgLink");
const igLink = $("#igLink");
const callLink = $("#callLink");

const tgCard = $("#tgCard");
const igCard = $("#igCard");
const phoneCard = $("#phoneCard");

if (tgLink) tgLink.href = tgUrl;
if (igLink) igLink.href = igUrl;
if (callLink) callLink.href = telUrl;

if (tgCard) tgCard.href = tgUrl;
if (igCard) igCard.href = igUrl;
if (phoneCard) phoneCard.href = telUrl;

// ---------- Year ----------
const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Toast ----------
const toast = $("#toast");
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2500);
}

// ================== LANGUAGE (NEW) ==================
// 1) HTML'da 3ta button qo'yasan:
// <button class="btn btnGhost langBtn" data-lang="uz" id="langUz">UZ</button>
// <button class="btn btnGhost langBtn" data-lang="ru" id="langRu">RU</button>
// <button class="btn btnGhost langBtn" data-lang="en" id="langEn">EN</button>
//
// 2) Translate bo'ladigan elementlarga data-i18n qo'yasan, masalan:
// <a href="#services" data-i18n="nav.services">Xizmatlar</a>
// <h2 data-i18n="services.title">Xizmatlar</h2>
// <p data-i18n="services.sub">Professional yondashuv...</p>

const I18N = {
  uz: {
    "nav.services": "Xizmatlar",
    "nav.pricing": "Tariflar",
    "nav.gallery": "Galereya",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",

    "hero.pill": "🔥 Kuch • Kardio • Yoga • Crossfit",
    "hero.title": "Formangni o‘zgartir. Bugun boshlang.",
    "hero.lead":
      "Fitness Time — trenerlar, zamonaviy uskunalar va real natija. Birinchi konsultatsiya bepul.",
    "hero.btnPricing": "Tariflarni ko‘rish",
    "hero.btnVideo": "Zal videosi",

    "services.title": "Xizmatlar",
    "services.sub": "Professional yondashuv: reja, nazorat, natija.",

    "pricing.title": "Tariflar",
    "pricing.sub": "Oddiy va tushunarli. Hidden fee yo‘q.",

    "gallery.title": "Galereya",
    "gallery.sub": "Video va atmosfera.",

    "faq.title": "FAQ",
    "faq.sub": "Ko‘p so‘raladigan savollar.",

    "contact.title": "Kontakt",
    "contact.sub": "Tez aloqa: Telegram yoki qo‘ng‘iroq. Formani ham ishlat.",
  },

  ru: {
    "nav.services": "Услуги",
    "nav.pricing": "Тарифы",
    "nav.gallery": "Галерея",
    "nav.faq": "FAQ",
    "nav.contact": "Контакты",

    "hero.pill": "🔥 Сила • Кардио • Йога • Кроссфит",
    "hero.title": "Измени форму. Начни сегодня.",
    "hero.lead":
      "Fitness Time — тренеры, современное оборудование и реальный результат. Первая консультация бесплатна.",
    "hero.btnPricing": "Посмотреть тарифы",
    "hero.btnVideo": "Видео зала",

    "services.title": "Услуги",
    "services.sub": "Профессиональный подход: план, контроль, результат.",

    "pricing.title": "Тарифы",
    "pricing.sub": "Просто и понятно. Без скрытых платежей.",

    "gallery.title": "Галерея",
    "gallery.sub": "Видео и атмосфера.",

    "faq.title": "FAQ",
    "faq.sub": "Частые вопросы.",

    "contact.title": "Контакты",
    "contact.sub": "Быстрая связь: Telegram или звонок. Можно через форму.",
  },

  en: {
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",

    "hero.pill": "🔥 Strength • Cardio • Yoga • Crossfit",
    "hero.title": "Transform your body. Start today.",
    "hero.lead":
      "Fitness Time — professional coaches, modern equipment, real results. First consultation is free.",
    "hero.btnPricing": "View pricing",
    "hero.btnVideo": "Gym video",

    "services.title": "Services",
    "services.sub": "Professional approach: plan, control, results.",

    "pricing.title": "Pricing",
    "pricing.sub": "Clear and simple. No hidden fees.",

    "gallery.title": "Gallery",
    "gallery.sub": "Video & vibe.",

    "faq.title": "FAQ",
    "faq.sub": "Frequently asked questions.",

    "contact.title": "Contact",
    "contact.sub": "Fast reach: Telegram or call. Use the form too.",
  },
};

function setLang(lang) {
  const dict = I18N[lang] || I18N.uz;

  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (!val) return;

    // If element is input/textarea -> placeholder
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = val;
      return;
    }

    el.textContent = val;
  });

  localStorage.setItem("lang", lang);

  // Optional: toast
  const label = lang === "uz" ? "UZ" : lang === "ru" ? "RU" : "EN";
  showToast(`Language: ${label}`);
}

function initLang() {
  const saved = localStorage.getItem("lang") || "uz";
  setLang(saved);

  // Bind buttons
  document.querySelectorAll(".langBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLang(lang);
    });
  });
}

initLang();

// ---------- Theme ----------
const themeBtn = $("#themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (themeBtn) themeBtn.textContent = savedTheme === "light" ? "☀️" : "🌙";
}
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeBtn.textContent = next === "light" ? "☀️" : "🌙";
  });
}

// ---------- Mobile nav ----------
const burger = $("#burger");
const mobileNav = $("#mobileNav");
if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    const open = mobileNav.style.display === "block";
    mobileNav.style.display = open ? "none" : "block";
    mobileNav.setAttribute("aria-hidden", open ? "true" : "false");
  });

  mobileNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobileNav.style.display = "none";
      mobileNav.setAttribute("aria-hidden", "true");
    }
  });
}

// ---------- Smooth scroll with header offset ----------
$$('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    const header = $(".header");
    const headerH = header ? header.offsetHeight : 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerH + 6;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

// ================== VIDEO MODAL (fixed) ==================
const modal = $("#modal");
const modalVideo = $("#modalVideo");
const modalClose = $("#modalClose");
const modalBackdrop = $("#modalBackdrop");

function openVideo(src) {
  if (!modal || !modalVideo) return;
  if (!src) return showToast("Video topilmadi (src yo‘q).");

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");

  modalVideo.src = src;
  modalVideo.currentTime = 0;
  modalVideo.play().catch(() => {});
}

function closeVideo() {
  if (!modal || !modalVideo) return;
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();

  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

if (modalClose) modalClose.addEventListener("click", closeVideo);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeVideo);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && modal.classList.contains("show")) closeVideo();
});

// Hero triggers (unique IDs)
const watchHeroBtn = $("#watchHeroBtn");
const watchHeroPlay = $("#watchHeroPlay");
if (watchHeroBtn) {
  watchHeroBtn.addEventListener("click", () => openVideo(watchHeroBtn.dataset.video));
}
if (watchHeroPlay) {
  watchHeroPlay.addEventListener("click", () => openVideo(watchHeroPlay.dataset.video));
}

// Gallery buttons
$$(".mediaCard").forEach((btn) => {
  btn.addEventListener("click", () => openVideo(btn.getAttribute("data-video")));
});

// ---------- FAQ accordion ----------
$$(".faqItem").forEach((btn) => btn.addEventListener("click", () => btn.classList.toggle("active")));

// ---------- Pricing toggle ----------
const billingToggle = $("#billingToggle");
const prices = {
  month: { basic: 299000, pro: 449000, elite: 899000 },
  year: { basic: 299000 * 12 * 0.8, pro: 449000 * 12 * 0.8, elite: 899000 * 12 * 0.8 },
};

function fmtUZ(n) {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function renderPrices() {
  if (!billingToggle) return;
  const mode = billingToggle.checked ? "year" : "month";
  const elBasic = document.querySelector('[data-price="basic"]');
  const elPro = document.querySelector('[data-price="pro"]');
  const elElite = document.querySelector('[data-price="elite"]');
  if (elBasic) elBasic.textContent = fmtUZ(prices[mode].basic);
  if (elPro) elPro.textContent = fmtUZ(prices[mode].pro);
  if (elElite) elElite.textContent = fmtUZ(prices[mode].elite);
}
if (billingToggle) {
  billingToggle.addEventListener("change", renderPrices);
  renderPrices();
}

// Plan select -> scroll contact + toast
$$(".selectPlan").forEach((btn) => {
  btn.addEventListener("click", () => {
    const plan = btn.dataset.plan || "Tarif";
    showToast(`Tanlandi: ${plan}`);
    const contact = $("#contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  });
});

// ---------- Book button (Telegram open with message) ----------
const bookBtn = $("#bookBtn");
if (bookBtn) {
  bookBtn.addEventListener("click", () => {
    const text = encodeURIComponent("Assalomu alaykum! Fitness Time’da bron qilmoqchiman. Bo‘sh vaqtlar bormi?");
    window.open(`${tgUrl}?text=${text}`, "_blank");
  });
}

// ---------- Contact form -> Telegram ----------
const contactForm = $("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (name.length < 2) return showToast("Ismni to‘g‘ri kiriting.");
    if (phone.length < 9) return showToast("Telefonni to‘g‘ri kiriting.");
    if (message.length < 5) return showToast("Xabar juda qisqa.");

    const text = encodeURIComponent(`Yangi so'rov (Fitness Time):\n\nIsm: ${name}\nTelefon: ${phone}\nXabar: ${message}`);
    window.open(`${tgUrl}?text=${text}`, "_blank");
    contactForm.reset();
    showToast("Yuborildi ✅");
  });
}

// ---------- Back to top ----------
const toTop = $("#toTop");
if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ---------- Count-up stats ----------
const statEls = $$(".statNum");
let counted = false;

function countUp(el, target) {
  const duration = 900;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = String(Math.floor(target * p));
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = String(target);
  }
  requestAnimationFrame(tick);
}

const heroStats = $(".heroStats");
if (heroStats && statEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          statEls.forEach((el) => countUp(el, Number(el.dataset.count || 0)));
        }
      });
    },
    { threshold: 0.4 }
  );
  observer.observe(heroStats);
}

// ---------- Preview videos (hero + gallery) ----------
const previewVideos = Array.from(document.querySelectorAll(".mediaPreview, #heroVideo"));
previewVideos.forEach((video) => {
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "auto";

  const tryPlay = () => {
    if (video.readyState >= 2) {
      video.play().catch(() => {});
    }
  };

  video.addEventListener("loadeddata", tryPlay);
  video.addEventListener("canplay", tryPlay);
  tryPlay();
});
