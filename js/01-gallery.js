import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const gallaryEl = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  gallaryEl.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  );
});

// const imgEl = document.createElement("img").classList.add("gallery__image");

gallaryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const bigImgUrl = e.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${bigImgUrl}" width="800" height="600">
  `);

  instance.show();
}
