import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
var i;

for (let child = gallery.firstElementChild, i = 0; child !== null; child = child.nextElementSibling, i++){
    const link = child.firstElementChild;
    const image = link.firstElementChild;
    link.href = galleryItems[i].original;
    image.src = galleryItems[i].preview;
    image.alt = galleryItems[i].description;
}

gallery.addEventListener("click", event => {
    event.preventDefault();
    let simpleGallery = new SimpleLightbox('.gallery a');
    simpleGallery.on('show.simplelightbox', function () {
    });
});

console.log(galleryItems);