import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divGallery = document.querySelector(".gallery");
const photoMarkup = createPhotoMarkup();

divGallery.insertAdjacentHTML("beforeend", photoMarkup);
divGallery.addEventListener("click", gellaryImgClick);

function createPhotoMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
      `;
    })
    .join("");
}

function gellaryImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const modal = basicLightbox.create(
    `<img  src="${e.target.dataset.source}" width="1300" height="800">`,
    {
      onShow: (modal) => {
        document.addEventListener("keydown", closeKeyDownKeyEsc);
      },
      onClose: (modal) => {
        document.removeEventListener("keydown", closeKeyDownKeyEsc);
      },
    }
  );

  function closeKeyDownKeyEsc(ev) {
    if (ev.code === "Escape") {
      modal.close();
    }
  }
  modal.show();
}
