import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryItemsEl = document.querySelector('ul.gallery');
galleryItemsEl.innerHTML = addGalleryEl(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function addGalleryEl(items) {
    return items
        .map(({ preview, original, description }) => {
            return `<a class = "gallery__item" 
            href = "${original}">
    <img
    class = "gallery__image"
    src = "${preview}"
    alt = "${description}"
    />
</a>`;
        }).join('');
};

