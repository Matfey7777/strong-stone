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
  modalImage: document.querySelector(".service-modal__image"),
  modalNumber: document.querySelector(".service-modal__number"),
  modalTitle: document.querySelector(".service-modal__title"),
  modalDescription: document.querySelector(".service-modal__description"),
  modalFeatures: document.querySelector(".service-modal__features"),
  closeButton: document.querySelector(".service-modal__close"),
  contactButton: document.querySelector(".service-modal__contact"),
};

const services = {
  design: {
    number: "01",
    title: "Interior & Exterior Design",
    image: "/images/service-design.jpg",
    description:
      "We create elegant, functional and personalised interiors and exteriors. Each project considers the client's needs, materials, colours and architectural details.",
    features: [
      "Personalised interior concepts",
      "Exterior and facade design",
      "Material and finish selection",
      "Functional layouts and attention to detail",
    ],
  },

  construction: {
    number: "02",
    title: "Construction & Finishing",
    image: "/images/service-construction.jpg",
    description:
      "Construction and finishing solutions coordinated around quality, practical decisions and a clear process towards the completed space.",
    features: [
      "Construction and renovation work",
      "Interior finishing",
      "Project coordination",
      "Turnkey project solutions",
    ],
  },

  restoration: {
    number: "03",
    title: "Building Restoration",
    image: "/images/service-restoration.jpg",
    description:
      "Restoration work focused on preserving a building's character, improving its condition and respecting architectural details.",
    features: [
      "Facade restoration",
      "Building renovation",
      "Insulation and protective improvements",
      "Preservation of architectural details",
    ],
  },

  decoration: {
    number: "04",
    title: "Artistic Painting & Wall Decor",
    image: "/images/service-decoration.jpg",
    description:
      "Decorative finishes and artistic details that give interiors character and individuality.",
    features: [
      "Decorative wall finishes",
      "Artistic painting concepts",
      "Textured surface effects",
      "Custom decorative solutions",
    ],
  },

  windows: {
    number: "05",
    title: "Windows & Doors",
    image: "/images/service-windows.jpg",
    description:
      "Window and door solutions chosen for appearance, practicality, durability and security.",
    features: [
      "Window and door selection",
      "Modern frame and glazing options",
      "Installation coordination",
      "Solutions tailored to the property",
    ],
  },

  sculptures: {
    number: "06",
    title: "Sculptures & Artistic Creations",
    image: "/images/service-sculptures.jpg",
    description:
      "Sculptural and artistic elements that can become distinctive focal points in residential, commercial and architectural spaces.",
    features: [
      "Decorative sculptural elements",
      "Artistic concepts for interiors",
      "Architectural statement pieces",
      "Custom project discussions",
    ],
  },
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

    allowTouchMove: true,
    simulateTouch: true,
    grabCursor: true,
    touchStartPreventDefault: false,
    threshold: 5,
    touchAngle: 45,
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

function openServiceModal(serviceKey) {
  const service = services[serviceKey];

  if (!service || !refs.modal) return;

  refs.modalImage.src = service.image;
  refs.modalImage.alt = service.title;
  refs.modalNumber.textContent = service.number;
  refs.modalTitle.textContent = service.title;
  refs.modalDescription.textContent = service.description;

  refs.modalFeatures.replaceChildren();

  service.features.forEach((feature) => {
    const item = document.createElement("li");
    item.textContent = feature;
    refs.modalFeatures.append(item);
  });

  refs.contactButton.href = "#contact";

  refs.modal.showModal();
  document.body.classList.add("modal-open");
}

function closeServiceModal() {
  if (!refs.modal?.open) return;

  refs.modal.close();
  document.body.classList.remove("modal-open");
}

function onServiceButtonClick(event) {
  const button = event.target.closest("[data-service]");

  if (!button) return;

  openServiceModal(button.dataset.service);
}

function onModalClick(event) {
  if (event.target === refs.modal) {
    closeServiceModal();
  }
}

function onContactClick() {
  closeServiceModal();
}

function initServiceModal() {
  if (
    !refs.modal ||
    !refs.modalImage ||
    !refs.modalTitle ||
    !refs.modalDescription ||
    !refs.modalFeatures
  ) {
    return;
  }

  document.addEventListener("click", onServiceButtonClick);

  refs.closeButton?.addEventListener("click", closeServiceModal);
  refs.modal.addEventListener("click", onModalClick);
  refs.contactButton?.addEventListener("click", onContactClick);

  refs.modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });
}

initServicesSwiper();
initServiceModal();
