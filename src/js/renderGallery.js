import { fetchFilmsById } from './fetchAPI';
import { renderMovieModal } from './modalFilm';
import { putEventListeners } from './modal';

const galleryList = document.querySelector('.list');

export function renderCollection(collection) {
  const films = collection.results
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
  const movieDetails = await fetchFilmsById(filmId);
  renderMovieModal(movieDetails);
});
