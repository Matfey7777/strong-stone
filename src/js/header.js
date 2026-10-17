const refs = {
  burgerBtn: document.querySelector(".burger"),
  mobileMenu: document.querySelector(".mobile-menu"),
  mobileLinks: document.querySelectorAll(".mobile-menu a"),
};

function openMenu() {
  refs.mobileMenu.classList.add("is-open");
  refs.burgerBtn.setAttribute("aria-expanded", "true");
  refs.burgerBtn.setAttribute("aria-label", "Close navigation menu");
}

function closeMenu() {
  refs.mobileMenu.classList.remove("is-open");
  refs.burgerBtn.setAttribute("aria-expanded", "false");
  refs.burgerBtn.setAttribute("aria-label", "Open navigation menu");
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

refs.burgerBtn.addEventListener("click", onBurgerClick);

refs.mobileLinks.forEach((link) => {
  link.addEventListener("click", onMobileLinkClick);
});

document.addEventListener("keydown", onDocumentKeydown);
document.addEventListener("click", onDocumentClick);
