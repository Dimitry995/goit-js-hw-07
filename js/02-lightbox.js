import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItems(galleryItems);

function createGalleryItems(items) {
  return items
    .map(item => {
      return `
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
`;
    })
    .join('');
}
galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});