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
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
        `;
      })
      .join('');
  }

  function onGalleryContainerClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName.toUpperCase() !== 'IMG') {
      return;
    }

    instance = basicLightbox.create(
      `<img src="${evt.target.dataset.source}" width="1280" height="800">`,
      {
        onShow: () => {
          document.addEventListener('keydown', onKeyEscClose);
        },
        onClose: () => {
          document.removeEventListener('keydown', onKeyEscClose);
        },
      },
    );

    instance.show();
  }

  function onKeyEscClose(evt) {
    if (evt.code === 'Eccape') {
      return;
    }
    instance.close();
  }
}

makeGallery();
