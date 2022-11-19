//import * as basicLightbox from 'basiclightbox';
import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach(el => {
    galleryContainer.insertAdjacentHTML(
      'afterbegin',
      `<div class="gallery__item"><a class="gallery__link" href="${el.original}"><img
      class="gallery__image"src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"/></a>'
      </div>`,
    );
  });
  galleryContainer.addEventListener("click", onClickGallery);
  function onClickGallery (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
      }
    const modal = basicLightbox.create(
        `
         <img src="${event.target.dataset.source}">
    `,
    {
        onShow: modal => {
          document.addEventListener('keydown', onPressEscape);
        },
  
        onClose: modal => {
          document.removeEventListener('keydown', onPressEscape);
        },
      },
    );
  
    modal.show();
  
    function onPressEscape(event) {
      if (event.code === 'Escape') {
        modal.close();
      }
    }
  };

