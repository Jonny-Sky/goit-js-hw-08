// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const containerEl = document.querySelector('.gallery');
containerEl.insertAdjacentHTML('beforeend', markupRender(galleryItems));

function markupRender(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
      <div>
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
