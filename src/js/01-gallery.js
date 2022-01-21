// Add imports above this line

import { galleryMarkup } from './markup';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const gallery_js = document.querySelector('.gallery');

gallery_js.insertAdjacentHTML('beforeend', galleryMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
