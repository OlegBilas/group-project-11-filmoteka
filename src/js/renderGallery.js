import * as basicLightbox from 'basiclightbox';

const galleryList = document.querySelector('.list');

export function renderCollection(collection) {
  const films = collection.results
    .map(film => {
      return `<li class="film-card" data-id="${film.id}">
      <a class="film-link" href="${film.link}">
        <img src="${film.poster_path}" alt="${film.title}" loading="lazy" />
        <div class="film-meta">
          <span class="film-name">${film.title}</span>
          <div class="film-info">
            <span class="film-ganre">${film.genres}</span>
            <span class="film-year">${film.year}</span>
          </div>
        </div>
      </a>
      </li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', films);
}

galleryList.addEventListener('click', onMovieClick);

function onMovieClick(event) {
  event.preventDefault();

  const instance = basicLightbox.create(`
    <div class="modal">

    </div>
`);

  instance.show();
}
