import { fetchFilmsById } from './fetchAPI';
import { renderMovieModal } from './modalFilm';
import { putEventListenersToAll } from './modal';
import { alertSearchModalFailure } from './alerts';

const galleryList = document.querySelector('.list');
const IS_FROM_FETCH = true;

function renderCollection(collection, IS_FROM_FETCH = true) {
  collection = IS_FROM_FETCH ? collection.results : collection;
  const films = collection
    .map(film => {
      return `<li class="film-card">
      <a class="film-link js-open-modal" href="${film.poster_path}" data-id="${film.id}" data-modal="2">
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

  if (films) {
    galleryList.innerHTML = films;
    putEventListenersToAll(); //навішуємо слухачів для відкриття модалки фільму
  } else {
    galleryList.innerHTML = '';
  }
}

galleryList.addEventListener('click', async event => {
  event.preventDefault();
  const filmCard = event.target.closest('.film-link');
  if (!filmCard) return;
  const filmId = filmCard.dataset.id;
  const refModalFilmContainer = document.querySelector('.backdrop-container');
  try {
    const movieDetails = await fetchFilmsById(filmId);
    renderMovieModal(movieDetails);
    refModalFilmContainer.style.display = 'block';
  } catch (error) {
    refModalFilmContainer.style.display = 'none';
    alertSearchModalFailure();
  }
});

export { IS_FROM_FETCH, renderCollection };
