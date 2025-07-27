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
