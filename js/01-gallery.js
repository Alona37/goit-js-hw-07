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
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt=${description}"
    />
  </a>
</div>`;
		})
		.join("");
}

galleryContainer.addEventListener("click", event => {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}

	const modal = basicLightbox.create(`
	<img src="${event.target.dataset.source}">
	`);
	modal.show();

	document.addEventListener("keydown", e => {
		console.log(e.code);
		if (e.code === "Escape") {
			modal.close();
			document.removeEventListener("keydown", galleryContainer);
		}
	});
});
