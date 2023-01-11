import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallaryEl = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  gallaryEl.insertAdjacentHTML(
    "beforeend",
    `    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description} " />
</a>`
  );
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});
