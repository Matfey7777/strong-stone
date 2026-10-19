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
  detailsView: document.querySelector(".service-modal__details"),
  formView: document.querySelector(".service-modal__form-view"),

  number: document.querySelector(".service-modal__number"),
  title: document.querySelector(
    ".service-modal__details .service-modal__title",
  ),
  description: document.querySelector(
    ".service-modal__details .service-modal__description",
  ),
  features: document.querySelector(".service-modal__features"),

  contactButton: document.querySelector(".service-modal__contact"),
  backButton: document.querySelector(".service-modal__back"),

  form: document.querySelector("#service-request-form"),
  serviceSelect: document.querySelector("#service-form-service"),
  formStatus: document.querySelector(".service-modal__form-status"),
};

const translations = {
  en: {
    contact: "Contact us",
    back: "← Back",
    send: "Send request",
    formSuccess:
      "The form is valid, but email delivery has not been connected yet.",
    services: {
      design: {
        title: "Interior & Exterior Design",
        description:
          "We create elegant, functional and personalised interiors and exteriors, carefully considering your needs, materials and architectural details.",
        features: [
          "Personalised interior concepts",
          "Exterior and facade design",
          "Material and finish selection",
          "Functional layouts and attention to detail",
        ],
      },
      construction: {
        title: "Construction & Finishing",
        description:
          "Construction and finishing solutions focused on quality, practical decisions and a carefully coordinated process.",
        features: [
          "Construction and renovation work",
          "Interior finishing",
          "Project coordination",
          "Turnkey project solutions",
        ],
      },
      restoration: {
        title: "Building Restoration",
        description:
          "Restoration work focused on preserving a building's character, improving its condition and respecting architectural details.",
        features: [
          "Facade restoration",
          "Building renovation",
          "Protective improvements",
          "Preservation of architectural details",
        ],
      },
      decoration: {
        title: "Artistic Painting & Wall Decor",
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
        title: "Windows & Doors",
        description:
          "Window and door solutions selected for appearance, practicality, durability and security.",
        features: [
          "Window and door selection",
          "Modern frame and glazing options",
          "Installation coordination",
          "Solutions tailored to your property",
        ],
      },
      sculptures: {
        title: "Sculptures & Artistic Creations",
        description:
          "Sculptural and artistic elements that bring character to residential, commercial and architectural spaces.",
        features: [
          "Decorative sculptural elements",
          "Artistic concepts for interiors",
          "Architectural statement pieces",
          "Custom project discussions",
        ],
      },
    },
  },

  fr: {
    contact: "Contactez-nous",
    back: "← Retour",
    send: "Envoyer la demande",
    formSuccess:
      "Le formulaire est valide, mais l'envoi des e-mails n'est pas encore configuré.",
    services: {
      design: {
        title: "Design intérieur et extérieur",
        description:
          "Nous créons des intérieurs et extérieurs élégants, fonctionnels et personnalisés, en tenant compte de vos besoins, des matériaux et des détails architecturaux.",
        features: [
          "Concepts d'intérieur personnalisés",
          "Design extérieur et de façade",
          "Sélection des matériaux et des finitions",
          "Agencements fonctionnels et souci du détail",
        ],
      },
      construction: {
        title: "Construction et finitions",
        description:
          "Des solutions de construction et de finition axées sur la qualité, des choix pratiques et une coordination rigoureuse du projet.",
        features: [
          "Travaux de construction et de rénovation",
          "Finitions intérieures",
          "Coordination du projet",
          "Solutions clés en main",
        ],
      },
      restoration: {
        title: "Restauration de bâtiments",
        description:
          "Des travaux de restauration qui préservent le caractère du bâtiment, améliorent son état et respectent les détails architecturaux.",
        features: [
          "Restauration de façades",
          "Rénovation de bâtiments",
          "Améliorations de protection",
          "Préservation des détails architecturaux",
        ],
      },
      decoration: {
        title: "Peinture artistique et décoration murale",
        description:
          "Des finitions décoratives et des détails artistiques qui donnent du caractère et une identité unique aux intérieurs.",
        features: [
          "Finitions murales décoratives",
          "Concepts de peinture artistique",
          "Effets de textures",
          "Solutions décoratives sur mesure",
        ],
      },
      windows: {
        title: "Fenêtres et portes",
        description:
          "Des solutions de fenêtres et de portes choisies pour leur esthétique, leur fonctionnalité, leur durabilité et leur sécurité.",
        features: [
          "Sélection de fenêtres et de portes",
          "Options modernes de cadres et de vitrages",
          "Coordination de l'installation",
          "Solutions adaptées à votre propriété",
        ],
      },
      sculptures: {
        title: "Sculptures et créations artistiques",
        description:
          "Des éléments sculpturaux et artistiques qui apportent du caractère aux espaces résidentiels, commerciaux et architecturaux.",
        features: [
          "Éléments sculpturaux décoratifs",
          "Concepts artistiques pour les intérieurs",
          "Pièces architecturales remarquables",
          "Étude de projets personnalisés",
        ],
      },
    },
  },

  nl: {
    contact: "Contacteer ons",
    back: "← Terug",
    send: "Aanvraag versturen",
    formSuccess:
      "Het formulier is geldig, maar het verzenden van e-mails is nog niet ingesteld.",
    services: {
      design: {
        title: "Binnen- en buitendesign",
        description:
          "We creëren elegante, functionele en persoonlijke interieurs en exterieurs, met aandacht voor uw behoeften, materialen en architecturale details.",
        features: [
          "Persoonlijke interieurconcepten",
          "Exterieur- en gevelontwerp",
          "Selectie van materialen en afwerkingen",
          "Functionele indelingen en oog voor detail",
        ],
      },
      construction: {
        title: "Bouw en afwerking",
        description:
          "Bouw- en afwerkingsoplossingen met aandacht voor kwaliteit, praktische keuzes en een zorgvuldig gecoördineerd proces.",
        features: [
          "Bouw- en renovatiewerken",
          "Binnenafwerking",
          "Projectcoördinatie",
          "Turnkey-projectoplossingen",
        ],
      },
      restoration: {
        title: "Gebouwrestauratie",
        description:
          "Restauratiewerken die het karakter van een gebouw behouden, de staat verbeteren en architecturale details respecteren.",
        features: [
          "Gevelrestauratie",
          "Gebouwrenovatie",
          "Beschermende verbeteringen",
          "Behoud van architecturale details",
        ],
      },
      decoration: {
        title: "Artistiek schilderwerk en wanddecoratie",
        description:
          "Decoratieve afwerkingen en artistieke details die interieurs karakter en een eigen uitstraling geven.",
        features: [
          "Decoratieve wandafwerkingen",
          "Artistieke schilderconcepten",
          "Getextureerde oppervlakken",
          "Decoratieve oplossingen op maat",
        ],
      },
      windows: {
        title: "Ramen en deuren",
        description:
          "Oplossingen voor ramen en deuren die geselecteerd zijn op uitstraling, gebruiksgemak, duurzaamheid en veiligheid.",
        features: [
          "Selectie van ramen en deuren",
          "Moderne kozijn- en beglazingsopties",
          "Coördinatie van de installatie",
          "Oplossingen op maat van uw woning",
        ],
      },
      sculptures: {
        title: "Beeldhouwwerken en artistieke creaties",
        description:
          "Artistieke en sculpturale elementen die karakter toevoegen aan woningen, commerciële ruimtes en architecturale omgevingen.",
        features: [
          "Decoratieve sculpturale elementen",
          "Artistieke interieurconcepten",
          "Opvallende architecturale kunstwerken",
          "Bespreking van projecten op maat",
        ],
      },
    },
  },
};

const serviceNumbers = {
  design: "01",
  construction: "02",
  restoration: "03",
  decoration: "04",
  windows: "05",
  sculptures: "06",
};

let currentLanguage = getCurrentLanguage();
let activeServiceKey = null;

/* ========================================
   LANGUAGE
======================================== */

function getCurrentLanguage() {
  try {
    const savedLanguage = localStorage.getItem("ssc-language");

    return ["en", "fr", "nl"].includes(savedLanguage) ? savedLanguage : "en";
  } catch {
    return "en";
  }
}

function getServiceTranslation(serviceKey) {
  return (
    translations[currentLanguage]?.services[serviceKey] ||
    translations.en.services[serviceKey] ||
    null
  );
}

function updateServiceModalLanguage() {
  if (!refs.modal) return;

  const language = translations[currentLanguage] || translations.en;

  if (refs.contactButton) {
    const arrow = refs.contactButton.querySelector("span");

    refs.contactButton.textContent = language.contact;

    if (arrow) {
      refs.contactButton.append(arrow);
    }
  }

  if (refs.backButton) {
    refs.backButton.textContent = language.back;
  }

  const submitButton = refs.form?.querySelector(".service-modal__submit");

  if (submitButton) {
    const arrow = submitButton.querySelector("span");

    submitButton.textContent = language.send;

    if (arrow) {
      submitButton.append(arrow);
    }
  }

  if (activeServiceKey) {
    renderServiceDetails(activeServiceKey);
  }

  if (refs.formStatus) {
    refs.formStatus.textContent = "";
  }
}

function renderServiceDetails(serviceKey) {
  const service = getServiceTranslation(serviceKey);

  if (!service || !refs.title || !refs.description || !refs.features) {
    return;
  }

  refs.number.textContent = serviceNumbers[serviceKey] || "";
  refs.title.textContent = service.title;
  refs.description.textContent = service.description;

  refs.features.replaceChildren();

  service.features.forEach((feature) => {
    const item = document.createElement("li");
    item.textContent = feature;
    refs.features.append(item);
  });
}

document.addEventListener("ssc:languagechange", (event) => {
  const language = event.detail?.language;

  currentLanguage = ["en", "fr", "nl"].includes(language)
    ? language
    : getCurrentLanguage();

  updateServiceModalLanguage();
});

/* ========================================
   SERVICES SWIPER
======================================== */

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
      600: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
    },

    a11y: { enabled: true },
  });
}

/* ========================================
   SERVICE MODAL
======================================== */

function showDetails() {
  if (!refs.detailsView || !refs.formView) return;

  refs.detailsView.hidden = false;
  refs.formView.hidden = true;
}

function showForm() {
  if (!refs.detailsView || !refs.formView) return;

  refs.detailsView.hidden = true;
  refs.formView.hidden = false;

  if (refs.formStatus) {
    refs.formStatus.textContent = "";
  }

  requestAnimationFrame(() => {
    document.querySelector("#service-form-name")?.focus();
  });
}

function openServiceModal() {
  if (!refs.modal) return;

  if (!refs.modal.open) {
    refs.modal.showModal();
  }

  document.body.classList.add("modal-open");
}

function openServiceInfo(serviceKey) {
  const service = getServiceTranslation(serviceKey);

  if (
    !service ||
    !refs.modal ||
    !refs.number ||
    !refs.title ||
    !refs.description ||
    !refs.features ||
    !refs.form ||
    !refs.serviceSelect
  ) {
    return;
  }

  activeServiceKey = serviceKey;

  renderServiceDetails(serviceKey);

  refs.form.reset();
  refs.serviceSelect.value = serviceKey;

  if (refs.formStatus) {
    refs.formStatus.textContent = "";
  }

  showDetails();
  openServiceModal();
}

function openConsultationForm() {
  if (!refs.modal || !refs.form || !refs.serviceSelect) return;

  activeServiceKey = null;

  refs.form.reset();
  refs.serviceSelect.value = "";

  if (refs.formStatus) {
    refs.formStatus.textContent = "";
  }

  showForm();
  openServiceModal();
}

function closeServiceModal() {
  if (refs.modal?.open) {
    refs.modal.close();
  }
}

function handleDocumentClick(event) {
  const serviceButton = event.target.closest(
    ".service-card__more[data-service]",
  );

  if (serviceButton) {
    event.preventDefault();
    openServiceInfo(serviceButton.dataset.service);
    return;
  }

  const consultationButton = event.target.closest("[data-open-consultation]");

  if (consultationButton) {
    event.preventDefault();
    openConsultationForm();
  }
}

function handleServiceModalClick(event) {
  if (event.target === refs.modal) {
    closeServiceModal();
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (!refs.form?.reportValidity()) return;

  const formData = new FormData(refs.form);
  const selectedServiceKey = String(formData.get("service") || "");
  const selectedService = getServiceTranslation(selectedServiceKey);

  const request = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    service: selectedService?.title || "",
    message: String(formData.get("message") || "").trim(),
  };

  // Demo only: email delivery is not connected yet.
  console.info("Contact request (demo only):", request);

  if (refs.formStatus) {
    refs.formStatus.textContent = (
      translations[currentLanguage] || translations.en
    ).formSuccess;
  }
}

function initServiceModal() {
  if (!refs.modal) {
    console.warn("Service modal was not found.");
    return;
  }

  document.addEventListener("click", handleDocumentClick);

  refs.closeButton?.addEventListener("click", closeServiceModal);
  refs.contactButton?.addEventListener("click", showForm);
  refs.backButton?.addEventListener("click", showDetails);
  refs.form?.addEventListener("submit", handleFormSubmit);

  refs.modal.addEventListener("click", handleServiceModalClick);

  refs.modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });

  updateServiceModalLanguage();
}

/* ========================================
   INITIALIZE
======================================== */

initServicesSwiper();
initServiceModal();
