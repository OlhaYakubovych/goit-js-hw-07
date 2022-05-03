import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryItemsEl = document.querySelector('.gallery');
galleryItemsEl.innerHTML = addGalleryEl(galleryItems);
galleryItemsEl.addEventListener('click', onImgModalOpen);

let modalInstance;

function addGalleryEl(items) {
    return items
        .map(({ preview, original, description }) => {
            return `<div class = "gallery__item">
<a class = "gallery__link" href = "${original}">
    <img
    class = "gallery__image"
    src = "${preview}"
    data-source = "${original}"
    alt = "${description}"
    />
</a>
</div>`;
        }).join('');
};

function onImgModalOpen(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    event.preventDefault();

    const originalUrl = event.target.dataset.source;

    modalInstance = basicLightbox.create(
        `<img src = "${originalUrl}">`,
        {
        onShow: (modalInstance) => {
            addListener();
        },
        onClose: (modalInstance) => {
            removeListener();
        },
    }

    );
    modalInstance.show();
}

function addListener() {
    window.addEventListener('keydown', onEscClick);
}
function removeListener() {
    window.removeEventListener('keydown', onEscClick);
}
function onEscClick(event) {
    if (event.code === "Escape") {
        modalInstance.close();
    }
}
