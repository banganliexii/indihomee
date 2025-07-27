// IMPROVED JS: Matches HTML improvisasi terbaru
// - Tidak render gambar promo utama, package-card sudah termasuk promo utama (jika ada)
// - Badge "Verified Customer" HANYA satu, di bawah avatar, tidak di dalam figcaption

const packagesData = {
  id: [
    {
      icon: "icon-digital.png",
      name: "Paket Digital Jitu 1",
      speed: "30 / 50 / 100 Mbps",
      price: "Mulai dari Rp265.000/bulan",
      desc: "Cocok untuk rumah kecil & streaming santai",
      cta: "Daftar Sekarang",
      link: "https://wa.me/6282315321424",
    },
    {
      icon: "icon-dynamic.png",
      name: "Paket Dynamic 1P",
      speed: "50–300 Mbps",
      price: "Mulai dari Rp370.000/bulan",
      desc: "Termasuk paket suara & SMS. Ideal untuk rumah aktif & gamer",
      cta: "Konsultasi Gratis",
      link: "https://wa.me/6282315321424",
    },
    {
      icon: "icon-movie.png",
      name: "Paket Movie 1P",
      speed: "30–100 Mbps",
      price: "Mulai dari Rp379.000/bulan",
      desc: "Gratis Netflix + Disney+ Hotstar. Untuk pecinta film",
      cta: "Daftar Sekarang",
      link: "https://wa.me/6282315321424",
    },
    {
      icon: "icon-complete.png",
      name: "Paket Complete 1P",
      speed: "50–100 Mbps",
      price: "Mulai dari Rp405.000/bulan",
      desc: "Berbagi data keluarga + suara & SMS. Pas untuk keluarga besar",
      cta: "Konsultasi Gratis",
      link: "https://wa.me/6282315321424",
    },
  ],
  en: [
    {
      icon: "icon-digital.png",
      name: "Digital Jitu 1 Package",
      speed: "30 / 50 / 100 Mbps",
      price: "Starts from Rp265,000/month",
      desc: "Ideal for small homes & casual streaming",
      cta: "Register Now",
      link: "https://wa.me/6282315321424",
    },
    {
      icon: "icon-dynamic.png",
      name: "Dynamic 1P Package",
      speed: "50–300 Mbps",
      price: "Starts from Rp370,000/month",
      desc: "Includes voice & SMS. Perfect for active homes & gamers",
      cta: "Free Consultation",
      link: "https://wa.me/6282315321424",
    },
    {
      icon: "icon-movie.png",
      name: "Movie 1P Package",
      speed: "30–100 Mbps",
      price: "Starts from Rp379,000/month",
      desc: "Free Netflix + Disney+ Hotstar. For movie lovers",
      cta: "Register Now",
      link: "https://wa.me/6282315321424",
    },
    {
      icon: "icon-complete.png",
      name: "Complete 1P Package",
      speed: "50–100 Mbps",
      price: "Starts from Rp405,000/month",
      desc: "Family data sharing + voice & SMS. Great for big families",
      cta: "Free Consultation",
      link: "https://wa.me/6282315321424",
    },
  ],
};

const texts = {
  id: {
    heroTitle:
      "Internet Cepat, Hiburan Tanpa Batas — Pilih Paket IndiHome Terbaik untukmu!",
    heroSubtitle:
      "Nikmati koneksi internet stabil berkecepatan tinggi, gratis Disney+ Hotstar, Netflix, IndiHome TV, serta berbagi data keluarga. Daftar sekarang dan rasakan kemudahan langsung terhubung!",
    packagesHeading: "Pilih Paket Internet Sesuai Gaya Hidup Anda",
    benefitHeading: "Keunggulan IndiHome Membership",
    benefit1: "Internet berkecepatan hingga <strong>300 Mbps</strong>",
    benefit2: "Streaming legal: <strong>Disney+ Hotstar & Netflix</strong>",
    benefit3: "IndiHome TV dengan <strong>channel premium</strong>",
    benefit4: "Berbagi data keluarga & <strong>SMS gratis</strong>",
    benefit5: "<strong>Layanan pelanggan 24/7</strong>",
    ctaHeading: "Gabung Sekarang & Nikmati Internet Unlimited di Rumah!",
    faqHeading: "Pertanyaan yang Sering Diajukan",
    testimonialsHeading: "Ulasan Pengguna",
    contactFormName: "Nama Anda",
    contactFormPhone: "Nomor Telepon",
    contactFormSelect: "Pilih Paket",
    contactFormBtn: "Klaim Promo Hari Ini",
    faq: [
      {
        q: "Berapa lama proses aktivasi?",
        a: "Aktivasi maksimal 24 jam setelah pendaftaran.",
      },
      {
        q: "Apakah ada biaya pemasangan?",
        a: "Pemasangan gratis selama periode promo.",
      },
      {
        q: "Bagaimana cara pembayaran?",
        a: "Pembayaran via autodebit, transfer bank, atau e-wallet.",
      },
    ],
    testimonials: [
      {
        stars: "★★★★★",
        text: "Internet stabil, streaming Netflix & Disney+ lancar banget. Layanan pelanggan cepat tanggap!",
        reviewer: "— Bapak A",
        avatar: "BAPAK1.png",
      },
      {
        stars: "★★★★★",
        text: "Harga masuk akal, pemasangan cepat, cocok untuk keluarga kecil atau besar. Recommended!",
        reviewer: "— Ibu B",
        avatar: "IBUK 1.png",
      },
      {
        stars: "★★★★★",
        text: "Saya suka bisa berbagi data keluarga, TV channel premium juga banyak pilihan.",
        reviewer: "— Bapak D",
        avatar: "BAPAK2.png",
      },
      {
        stars: "★★★★★",
        text: "Customer service sangat baik dan pemasangan cepat. Cocok untuk keluarga!",
        reviewer: "— Ibu F",
        avatar: "IBUK2.png",
      },
    ],
  },
  en: {
    heroTitle:
      "Fast Internet, Unlimited Entertainment — Choose Your Best IndiHome Package!",
    heroSubtitle:
      "Enjoy stable high-speed internet, free Disney+ Hotstar, Netflix, IndiHome TV, and family data sharing. Sign up now for seamless connection!",
    packagesHeading: "Choose the Internet Package That Fits Your Lifestyle",
    benefitHeading: "IndiHome Membership Advantages",
    benefit1: "Internet speeds up to <strong>300 Mbps</strong>",
    benefit2: "Legal streaming: <strong>Disney+ Hotstar & Netflix</strong>",
    benefit3: "IndiHome TV with <strong>premium channels</strong>",
    benefit4: "Family data sharing & <strong>free SMS</strong>",
    benefit5: "<strong>24/7 customer service</strong>",
    ctaHeading: "Join Now & Enjoy Unlimited Internet At Home!",
    faqHeading: "Frequently Asked Questions",
    testimonialsHeading: "User Reviews",
    contactFormName: "Your Name",
    contactFormPhone: "Phone Number",
    contactFormSelect: "Choose Package",
    contactFormBtn: "Claim Today’s Promo",
    faq: [
      {
        q: "How long is the activation process?",
        a: "Activation within 24 hours after registration.",
      },
      {
        q: "Is there an installation fee?",
        a: "Installation is free during promo period.",
      },
      {
        q: "How do I pay?",
        a: "Payments via autodebit, bank transfer, or e-wallet.",
      },
    ],
    testimonials: [
      {
        stars: "★★★★★",
        text: "Stable internet, Netflix & Disney+ streaming is super smooth. Responsive customer service!",
        reviewer: "— Mr A",
        avatar: "BAPAK1.png",
      },
      {
        stars: "★★★★★",
        text: "Reasonable price, fast installation, perfect for all families. Highly recommended!",
        reviewer: "— Ms B",
        avatar: "IBUK 1.png",
      },
      {
        stars: "★★★★★",
        text: "Love the family data sharing, premium TV channels have many choices.",
        reviewer: "— Mr D",
        avatar: "BAPAK2.png",
      },
      {
        stars: "★★★★★",
        text: "Customer service is excellent and the installation was fast. Highly recommended for families!",
        reviewer: "— Ms F",
        avatar: "IBUK2.png",
      },
    ],
  },
};

let currentLang = "id";

// Render Package Cards with Local Image Icon and Animation
function renderPackageCards() {
  const packageSlider = document.querySelector(".package-slider");
  if (!packageSlider) return;
  packageSlider.innerHTML = "";

  packagesData[currentLang].forEach((pkg, i) => {
    const card = document.createElement("div");
    card.className = "package-card animate__animated";
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", pkg.name);
    card.style.animationDelay = `${i * 0.15}s`;
    card.classList.add("animate__fadeInUp");

    card.innerHTML = `
      <div class="package-icon bounce-icon" aria-hidden="true">
        <img src="${pkg.icon}" alt="" width="42" height="42" loading="lazy"/>
      </div>
      <h3>${pkg.name}</h3>
      <div class="package-speed">${pkg.speed}</div>
      <div class="package-price">${pkg.price}</div>
      <div class="package-desc">${pkg.desc}</div>
      <button class="package-cta btn-main ripple"
        data-link="${pkg.link}"
        data-name="${pkg.name}"
        data-lang="${currentLang}"
        type="button"
      >${pkg.cta}</button>
    `;
    packageSlider.appendChild(card);
  });

  //exposure promo text
  // IMPROVISASI: Promo Exposure Overlay
  document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("promo-exposure-overlay");
    const closeBtn = overlay.querySelector(".promo-exposure-close");
    let overlayTimeout;

    overlay.removeAttribute("hidden");

    overlayTimeout = setTimeout(() => {
      overlay.setAttribute("hidden", "true");
    }, 60000);

    closeBtn.addEventListener("click", () => {
      overlay.setAttribute("hidden", "true");
      clearTimeout(overlayTimeout);
    });

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay && !overlay.hasAttribute("hidden")) {
        overlay.setAttribute("hidden", "true");
        clearTimeout(overlayTimeout);
      }
    });
  });

  // Animate icons on mouseover
  packageSlider.querySelectorAll(".bounce-icon").forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.classList.add("animate__bounce");
    });
    icon.addEventListener("animationend", () => {
      icon.classList.remove("animate__bounce");
    });
  });

  // Ripple effect for buttons
  packageSlider.querySelectorAll(".ripple").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const link = btn.getAttribute("data-link");
      const name = btn.getAttribute("data-name");
      const lang = btn.getAttribute("data-lang");
      let pesan =
        lang === "id"
          ? `Saya ingin berlangganan paket ${name}`
          : `I want to subscribe to the ${name} package`;
      window.open(`${link}?text=${encodeURIComponent(pesan)}`, "_blank");

      // Ripple Animation
      const circle = document.createElement("span");
      circle.className = "ripple-anim";
      circle.style.left = `${e.offsetX}px`;
      circle.style.top = `${e.offsetY}px`;
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
}

// Render Promo Images (tanpa gambar promo utama)
function renderPromoImages() {
  let promoImagesContainer = document.querySelector(".package-images");
  if (!promoImagesContainer) {
    promoImagesContainer = document.createElement("div");
    promoImagesContainer.className = "package-images";
    const paketHeading = document.getElementById("paket-heading");
    if (paketHeading && paketHeading.parentNode) {
      paketHeading.parentNode.insertBefore(
        promoImagesContainer,
        paketHeading.nextSibling
      );
    }
  }
  promoImagesContainer.innerHTML = `
    <img src="Paket Dynamic.jpg" alt="Paket Telkomsel One Dynamic" width="100" loading="lazy" />
    <img src="Paket EZnet.jpg" alt="Paket EZnet by Telkomsel" width="100" loading="lazy" />
    <img src="Paket Indihome Telkomsel.jpg" alt="Paket IndiHome by Telkomsel" width="100" loading="lazy" />
  `;
}

// Slider Paket with Smooth Animation
function initPackageSlider() {
  const packageSlider = document.querySelector(".package-slider");
  const leftArrow = document.querySelector(".slider-arrow.left");
  const rightArrow = document.querySelector(".slider-arrow.right");
  if (!packageSlider || !leftArrow || !rightArrow) return;

  const cardWidth = () => {
    const card = packageSlider.querySelector(".package-card");
    return card ? card.offsetWidth + 28 : 260;
  };

  leftArrow.addEventListener("click", () => {
    packageSlider.scrollBy({ left: -cardWidth(), behavior: "smooth" });
    packageSlider.classList.add("slider-bounce-left");
    setTimeout(() => packageSlider.classList.remove("slider-bounce-left"), 400);
  });

  rightArrow.addEventListener("click", () => {
    packageSlider.scrollBy({ left: cardWidth(), behavior: "smooth" });
    packageSlider.classList.add("slider-bounce-right");
    setTimeout(
      () => packageSlider.classList.remove("slider-bounce-right"),
      400
    );
  });

  [leftArrow, rightArrow].forEach((btn) => {
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") btn.click();
    });
  });
}

// FAQ Accordion Improvement
function initFAQAccordion() {
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", function () {
      const item = btn.parentElement;
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".faq-answer").style.maxHeight = null;
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      if (!isActive) {
        item.classList.add("active");
        const answer = item.querySelector(".faq-answer");
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.classList.add("animate__animated", "animate__fadeInDown");
        btn.setAttribute("aria-expanded", "true");
        answer.removeAttribute("hidden");
      } else {
        btn.setAttribute("aria-expanded", "false");
        item.querySelector(".faq-answer").setAttribute("hidden", "true");
      }
    });
    btn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") btn.click();
    });
  });
}

// Form Submit ke WhatsApp with Button Animation & Sticky CTA
function initContactForm() {
  const form = document.getElementById("promoForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.elements["name"].value.trim();
    const phone = form.elements["phone"].value.trim();
    const packageName = form.elements["package"].value;

    if (!name || !phone || !packageName) {
      form.classList.add("form-error");
      setTimeout(() => form.classList.remove("form-error"), 1200);
      return;
    }

    let waMsg =
      currentLang === "id"
        ? `Halo IndiHome! Saya ${name} (${phone}) ingin klaim promo paket ${packageName}.`
        : `Hello IndiHome! I am ${name} (${phone}) and want to claim the promo for ${packageName} package.`;
    const waLink = `https://wa.me/6282315321424?text=${encodeURIComponent(
      waMsg
    )}`;
    // Animate button
    const btn = form.querySelector('button[type="submit"]');
    btn.classList.add("animate__animated", "animate__pulse");
    setTimeout(() => btn.classList.remove("animate__pulse"), 600);
    window.open(waLink, "_blank");
  });
}

// Language Switcher
function initLangSwitcher() {
  document.getElementById("lang-id").addEventListener("click", () => {
    if (currentLang !== "id") {
      currentLang = "id";
      document.getElementById("lang-id").setAttribute("aria-pressed", "true");
      document.getElementById("lang-en").setAttribute("aria-pressed", "false");
      rerenderText();
    }
  });
  document.getElementById("lang-en").addEventListener("click", () => {
    if (currentLang !== "en") {
      currentLang = "en";
      document.getElementById("lang-en").setAttribute("aria-pressed", "true");
      document.getElementById("lang-id").setAttribute("aria-pressed", "false");
      rerenderText();
    }
  });
}

// Rerender all text (hero, headings, benefits, CTA, FAQ, testimonials, form)
function rerenderText() {
  document.getElementById("hero-title").innerHTML =
    texts[currentLang].heroTitle;
  document.getElementById("hero-subtitle").innerHTML =
    texts[currentLang].heroSubtitle;
  document.getElementById("paket-heading").innerText =
    texts[currentLang].packagesHeading;
  document.getElementById("benefit-heading").innerText =
    texts[currentLang].benefitHeading;
  document.getElementById("benefit1").innerHTML = texts[currentLang].benefit1;
  document.getElementById("benefit2").innerHTML = texts[currentLang].benefit2;
  document.getElementById("benefit3").innerHTML = texts[currentLang].benefit3;
  document.getElementById("benefit4").innerHTML = texts[currentLang].benefit4;
  document.getElementById("benefit5").innerHTML = texts[currentLang].benefit5;
  document.getElementById("cta-heading").innerText =
    texts[currentLang].ctaHeading;
  document.getElementById("faq-heading").innerText =
    texts[currentLang].faqHeading;
  document.getElementById("testimonials-heading").innerText =
    texts[currentLang].testimonialsHeading;

  // FAQ
  const faqItems = document.querySelectorAll(".faq-item");
  texts[currentLang].faq.forEach((item, idx) => {
    const btn = faqItems[idx].querySelector(".faq-question");
    const ans = faqItems[idx].querySelector(".faq-answer");
    btn.innerText = item.q;
    ans.innerText = item.a;
    faqItems[idx].classList.remove("active");
    btn.setAttribute("aria-expanded", "false");
    ans.setAttribute("hidden", "true");
    ans.style.maxHeight = null;
  });

  // Testimonials (avatar & badge di bawah avatar)
  const testimonials = document.querySelectorAll(".testimonial");
  texts[currentLang].testimonials.forEach((item, idx) => {
    testimonials[idx].querySelector(".stars").innerText = item.stars;
    testimonials[idx].querySelector(
      "figcaption"
    ).innerHTML = `"${item.text}"<br /><span class="reviewer">${item.reviewer}</span>`;
    testimonials[idx].querySelector("img.avatar").src = item.avatar;
    testimonials[idx].querySelector("img.avatar").alt =
      "Avatar " + item.reviewer;
    // badge tetap satu di bawah avatar, tidak di dalam figcaption
    // tidak perlu update text badge, karena static "Verified Customer"
  });

  // Form
  const form = document.getElementById("promoForm");
  if (form) {
    form.elements["name"].placeholder = texts[currentLang].contactFormName;
    form.elements["phone"].placeholder = texts[currentLang].contactFormPhone;
    form.elements["package"].options[0].text =
      texts[currentLang].contactFormSelect;
    form.querySelector("button[type=submit]").innerText =
      texts[currentLang].contactFormBtn;
  }

  renderPackageCards();
  renderPromoImages();
  initPackageSlider();
}

document.addEventListener("DOMContentLoaded", () => {
  renderPromoImages();
  renderPackageCards();
  initPackageSlider();
  initFAQAccordion();
  initContactForm();
  initLangSwitcher();

  document.getElementById("lang-id").setAttribute("aria-pressed", "true");
  document.getElementById("lang-en").setAttribute("aria-pressed", "false");

  // Testimonials avatar & badge set (first render)
  const testimonials = document.querySelectorAll(".testimonial");
  texts[currentLang].testimonials.forEach((item, idx) => {
    testimonials[idx].querySelector("img.avatar").src = item.avatar;
    testimonials[idx].querySelector("img.avatar").alt =
      "Avatar " + item.reviewer;
    // badge static, tidak perlu update
  });
});
