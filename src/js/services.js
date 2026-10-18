import Swiper from "swiper";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const refs = {
  swiper: document.querySelector(".services__swiper"),
  prevButton: document.querySelector(".services__arrow--prev"),
  nextButton: document.querySelector(".services__arrow--next"),
  pagination: document.querySelector(".services__pagination"),

  modal: document.querySelector("#service-modal"),
  closeButton: document.querySelector(".service-modal__close"),
  contactForm: document.querySelector("#service-request-form"),
  serviceSelect: document.querySelector("#service-form-service"),
  formStatus: document.querySelector(".service-modal__form-status"),
};

const serviceNames = {
  design: "Interior & Exterior Design",
  construction: "Construction & Finishing",
  restoration: "Building Restoration",
  decoration: "Artistic Painting & Wall Decor",
  windows: "Windows & Doors",
  sculptures: "Sculptures & Artistic Creations",
};

function initServicesSwiper() {
  if (
    !refs.swiper ||
    !refs.prevButton ||
    !refs.nextButton ||
    !refs.pagination
  ) {
    return;
  }

  new Swiper(refs.swiper, {
    modules: [Navigation, Pagination, A11y],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 500,
    watchOverflow: true,
    rewind: true,

    navigation: {
      prevEl: refs.prevButton,
      nextEl: refs.nextButton,
    },

    pagination: {
      el: refs.pagination,
      clickable: true,
    },

    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },

    a11y: {
      enabled: true,
    },
  });
}

function openContactForm(serviceKey = "") {
  if (!refs.modal) {
    console.error('Dialog "#service-modal" was not found.');
    return;
  }

  refs.contactForm?.reset();

  if (refs.serviceSelect) {
    refs.serviceSelect.value = serviceNames[serviceKey] ? serviceKey : "";
  }

  if (refs.formStatus) {
    refs.formStatus.textContent = "";
  }

  if (!refs.modal.open) {
    refs.modal.showModal();
  }

  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    document.querySelector("#service-form-name")?.focus();
  });
}

function closeContactForm() {
  if (refs.modal?.open) {
    refs.modal.close();
  }
}

function onDocumentClick(event) {
  const consultationButton = event.target.closest("[data-open-consultation]");

  if (consultationButton) {
    event.preventDefault();
    openContactForm();
    return;
  }

  const serviceButton = event.target.closest(
    ".service-card__more[data-service]",
  );

  if (serviceButton) {
    event.preventDefault();
    openContactForm(serviceButton.dataset.service);
  }
}

function onModalClick(event) {
  if (event.target === refs.modal) {
    closeContactForm();
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!refs.contactForm?.reportValidity()) {
    return;
  }

  const formData = new FormData(refs.contactForm);

  const request = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    service: serviceNames[String(formData.get("service") || "")] || "",
    message: String(formData.get("message") || "").trim(),
  };

  // Demo only: no email is sent yet.
  console.info("Contact request (demo only):", request);

  if (refs.formStatus) {
    refs.formStatus.textContent =
      "Thank you! Sending requests has not been connected yet.";
  }
}

function initServiceModal() {
  if (!refs.modal) {
    console.error('The dialog "#service-modal" was not found.');
    return;
  }

  document.addEventListener("click", onDocumentClick);

  refs.closeButton?.addEventListener("click", closeContactForm);
  refs.modal.addEventListener("click", onModalClick);

  refs.modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });

  refs.contactForm?.addEventListener("submit", onFormSubmit);
}

initServicesSwiper();
initServiceModal();
