// Add imports above this line
import { galleryItems } from './gallery-items';
const Lightbox = require('simplelightbox');
// Change code below this line
const gallery_js = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
let instance;

gallery_js.insertAdjacentHTML('beforeend', galleryMarkup);
gallery_js.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  window.addEventListener('keydown', onEscapePress);

  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
  instance.show();
}

function onEscapePress(evt) {
  if (evt.code === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', onEscapePress);
  }
  console.log(evt);
}

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
// console.log(galleryItems);
