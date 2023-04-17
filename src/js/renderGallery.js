import { fetchFilmsById } from './fetchAPI';
import { renderMovieModal } from './modalFilm';
import { putEventListenersToAll } from './modal';
import { alertSearchModalFailure } from './alerts';
import { spinnerHandler } from './spinner';

const galleryList = document.querySelector('.list');
const IS_FROM_FETCH = true;

const refModalFilmContainer = document.querySelector('.backdrop-container');

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

    //Коли розмітка модалки фільму пуста, щаповнимо її дамини першого фільму
    if (!refModalFilmContainer.innerHTML) {
      renderFirstMovieModal(collection[0].id, collection[0]);
    }
    putEventListenersToAll(); //навішуємо слухачів для відкриття модалки фільму
  } else {
    galleryList.innerHTML = '';
  }
}
galleryList.addEventListener('click', spinnerHandler);
galleryList.addEventListener('click', async event => {
  event.preventDefault();
  const filmCard = event.target.closest('.film-link');
  if (!filmCard) return;
  const filmId = filmCard.dataset.id;
  const objectCard = getDataCard(filmCard);
  try {
    const movieDetails = await fetchFilmsById(filmId);
    renderMovieModal(movieDetails, objectCard);
    refModalFilmContainer.style.display = 'block';
  } catch (error) {
    refModalFilmContainer.style.display = 'none';
    alertSearchModalFailure();
  }
});

function getDataCard(element) {
  const poster_path = element.href;
  const id = element.dataset.id;
  const title = element.querySelector('.film-name').textContent;
  const genres = element.querySelector('.film-ganre').textContent;
  const year = element.querySelector('.film-year').textContent;

  return { poster_path, id, title, genres, year };
}

async function renderFirstMovieModal(filmId, objectCard) {
  try {
    const movieDetails = await fetchFilmsById(filmId);
    renderMovieModal(movieDetails, objectCard);
    // refModalFilmContainer.style.display = 'block';
  } catch (error) {
    // refModalFilmContainer.style.display = 'none';
    alertSearchModalFailure();
  }
}

export { IS_FROM_FETCH, renderCollection };
