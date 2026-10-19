const refs = {
  burgerBtn: document.querySelector(".burger"),
  mobileMenu: document.querySelector(".mobile-menu"),
  mobileLinks: document.querySelectorAll(".mobile-menu a"),
};

const menuLabels = {
  en: {
    open: "Open navigation menu",
    close: "Close navigation menu",
  },
  fr: {
    open: "Ouvrir le menu de navigation",
    close: "Fermer le menu de navigation",
  },
  nl: {
    open: "Navigatiemenu openen",
    close: "Navigatiemenu sluiten",
  },
};

function getCurrentLanguage() {
  const savedLanguage = localStorage.getItem("ssc-language");

  return ["en", "fr", "nl"].includes(savedLanguage) ? savedLanguage : "en";
}

function updateMenuLabels() {
  const language = getCurrentLanguage();
  const labels = menuLabels[language];
  const isOpen = refs.burgerBtn.getAttribute("aria-expanded") === "true";

  refs.burgerBtn.setAttribute(
    "aria-label",
    isOpen ? labels.close : labels.open,
  );
}

function openMenu() {
  refs.mobileMenu.classList.add("is-open");
  refs.burgerBtn.setAttribute("aria-expanded", "true");

  updateMenuLabels();
}

function closeMenu() {
  refs.mobileMenu.classList.remove("is-open");
  refs.burgerBtn.setAttribute("aria-expanded", "false");

  updateMenuLabels();
}

function onBurgerClick() {
  const isOpen = refs.burgerBtn.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

function onMobileLinkClick() {
  closeMenu();
}

function onDocumentKeydown(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

function onDocumentClick(event) {
  const clickedInsideMenu = refs.mobileMenu.contains(event.target);

  const clickedBurger = refs.burgerBtn.contains(event.target);

  if (!clickedInsideMenu && !clickedBurger) {
    closeMenu();
  }
}

function initHeader() {
  if (!refs.burgerBtn || !refs.mobileMenu) {
    return;
  }

  refs.burgerBtn.addEventListener("click", onBurgerClick);

  refs.mobileLinks.forEach((link) => {
    link.addEventListener("click", onMobileLinkClick);
  });

  document.addEventListener("keydown", onDocumentKeydown);
  document.addEventListener("click", onDocumentClick);

  document.addEventListener("ssc:languagechange", updateMenuLabels);

  updateMenuLabels();
}

initHeader();
