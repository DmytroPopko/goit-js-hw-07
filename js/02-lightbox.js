import { galleryItems } from './gallery-items.js';

function makeGallery() {
  const galleryContainer = document.querySelector('.gallery');
  const cardsMarkup = createGallery(galleryItems);

  galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  function createGallery(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div>
        `;
      })
      .join('');
  }
}
makeGallery();
