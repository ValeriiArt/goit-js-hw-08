// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
// Change code below this line


// console.log(galleryItems);

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

// console.log(galleryRef)

const galleryList = galleryItems.map((image) => {
    const { preview, original, description } = image;
    return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
}).join('');

// console.log(galleryList)

galleryRef.insertAdjacentHTML("beforeend", galleryList);

var lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: "alt", captionPosition: 'bottom', captionDelay: 250,
});


