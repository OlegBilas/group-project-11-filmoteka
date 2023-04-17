import { fetchFilmsById } from './fetchAPI';
import { renderMovieModal } from './modalFilm';
import { putEventListeners } from './modal';
import { alertSearchModalFailure } from './alerts';

const galleryList = document.querySelector('.list');
let IS_FROM_STORADGE = false;

function renderCollection(collection, IS_FROM_STORADGE = false) {
  collection = IS_FROM_STORADGE ? collection : collection.results;
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
    putEventListeners(); //навішуємо слухачів для відкриття модалки фільму
  } else {
    galleryList.innerHTML = '';
  }
}

galleryList.addEventListener('click', async event => {
  event.preventDefault();
  const filmCard = event.target.closest('.film-link');
  if (!filmCard) return;
  const filmId = filmCard.dataset.id;
  try {
    const movieDetails = await fetchFilmsById(filmId);
    renderMovieModal(movieDetails);
  } catch (error) {
    const refContainer = document.querySelector('.backdrop-container');
    refContainer.innerHTML = '';
    alertSearchModalFailure();
  }
});

export { IS_FROM_STORADGE, renderCollection };
