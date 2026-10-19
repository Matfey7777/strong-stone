import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.css";

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".projects__grid");

  if (!gallery) return;

  const lightbox = new SimpleLightbox(
    ".projects__grid a.project-lightbox-link",
    {
      captions: true,
      captionsData: "data-caption",
      captionDelay: 150,
      animationSpeed: 250,
      fadeSpeed: 250,
      disableScroll: true,
      loop: true,
      nav: true,
      close: true,
      docClose: true,
      alertError: false,
    },
  );

  document.addEventListener("ssc:languagechange", () => {
    lightbox.refresh();
  });
});
