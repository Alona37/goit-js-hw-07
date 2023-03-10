import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

const galleryMarkup = createGalleryItems(galleryItems);
console.log(galleryMarkup);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItems(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
		})
		.join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
	captions: true,
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
});
