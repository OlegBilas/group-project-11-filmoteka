import { getGenresById } from './genres';

const observer = new IntersectionObserver(intersectingHandler);
observer.observe(document.querySelector('footer'));

function intersectingHandler(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      //fetchImages();
    }
  });
}
