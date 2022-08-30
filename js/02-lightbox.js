import { galleryItems } from './gallery-items.js';

function makeGallery() {
  const galleryContainer = document.querySelector('.gallery');
  const cardsMarkup = createGallery(galleryItems);
  let instance = undefined;

  galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
  galleryContainer.addEventListener('click', onGalleryContainerClick);

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

  function onGalleryContainerClick(evt) {
    evt.preventDefault();

    let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    gallery.on('show.simplelightbox', function () {});
  }
}
makeGallery();
