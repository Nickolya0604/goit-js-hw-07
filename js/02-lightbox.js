import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");
const photoMarkup = createPhotoMarkup();

ulGallery.insertAdjacentHTML("beforeend", photoMarkup);

function createPhotoMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>
      `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.8,
  maxZoom: 20,
  fadeSpeed: 500,
});
