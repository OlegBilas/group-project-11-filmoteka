import { putEventListenersToOverlay } from './modal';
import { YoutubeVideo } from './youtubevideo';
import {
  QUE,
  WATCHED,
  addToLocalstorage,
  removeFromLocalstorage,
  getFromLocalstorage,
} from './localAPI';
import { spinnerHandler } from './spinner';

const refModalFilmContainer = document.querySelector('.backdrop-container');

export function renderMovieModal(movieData, objectCard) {
  const {
    genres,
    id,
    poster_path,
    original_title,
    overview,
    popularity,
    vote_average,
    vote_count,
    videoId,
  } = movieData;

  let videoIframe = '';
  if (videoId) {
    const youtubeVideo = new YoutubeVideo();
    videoIframe = youtubeVideo.createIframe(videoId);

    refModalFilmContainer.innerHTML = `
      <div class="modal" data-modal="2">
        <button type="button" class="btn-close js-close-modal" id="btn-close">
            <svg class="form__close-icon" width="24px" height="24px" viewBox="0 0 30 30">
              <path data-btn="close" d="M14.734 10.304l-1.504-1.504-5.963 5.962-5.962-5.962-1.504 1.504 5.962 5.962-5.962 5.963 1.504 1.504 5.962-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.962z"></path>
            </svg>
        </button>
        <div id="modal_form">
            <div class="form">
                <div class="form__film-card">
                    <div class="form__film-img">
                        <img class="form-img" src="${poster_path}"
                            alt="${original_title}">
                    </div>
                </div>
                <div class="form__info">
                    <h2 class="form__title">${original_title}</h2>
                    <ul class="form__info-list">
                        <li class="form__info-item">
                            <p class="form__info-name">Vote / Votes</p>
                            <p class="form__info-details"> <span class="film__rating">${vote_average}</span>/<span class="film__voice">${vote_count}</span></p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name">Popularity</p>
                            <p class="form__info-details">${popularity}</p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name">Original Title</p>
                            <p class="form__info-details details-title">${original_title}</p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name">Genre</p>
                            <p class="form__info-details">${genres}</p>
                        </li>
                    </ul>
                    <div class="form__about">
                        <h3 class="form__about-name">About</h3>
                        <p class="form__about-details">${overview}</p>
                    </div>
                    <div class="form__btn-list">
                        <button data-action="add" id="watched" class="form-button form-add-btn" type="button">Add to watched</button>
                        <button data-action="add" id="queue" class="form-button form-queue-btn" type="button">Add to queue</button>
                    </div>
                </div>
            </div>
            <div class="form__film-card">
                <div class="form__film-img">
                    ${videoIframe.outerHTML}
                </div>
              </div>
        </div>
    </div>
`;
  } else {
    refModalFilmContainer.innerHTML = `
    <div class="modal" data-modal="2">
        <button type="button" class="btn-close js-close-modal" id="btn-close">
            <svg class="form__close-icon" width="24px" height="24px" viewBox="0 0 30 30">
              <path data-btn="close" d="M14.734 10.304l-1.504-1.504-5.963 5.962-5.962-5.962-1.504 1.504 5.962 5.962-5.962 5.963 1.504 1.504 5.962-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.962z"></path>
            </svg> 
        </button>
        <div id="modal_form">
          <div class="form">
              <div class="form__film-card">
                  <div class="form__film-img">
                      <img class="form-img" src="${poster_path}"
                          alt="${original_title}">
                  </div>
              </div>
              <div class="form__info">
                  <h2 class="form__title">${original_title}</h2>
                  <ul class="form__info-list">
                      <li class="form__info-item">
                          <p class="form__info-name">Vote / Votes</p>
                          <p class="form__info-details"> <span class="film__rating">${vote_average}</span>/<span class="film__voice">${vote_count}</span></p>
                      </li>
                      <li class="form__info-item">
                          <p class="form__info-name">Popularity</p>
                          <p class="form__info-details">${popularity}</p>
                      </li>
                      <li class="form__info-item">
                          <p class="form__info-name">Original Title</p>
                          <p class="form__info-details details-title">${original_title}</p>
                      </li>
                      <li class="form__info-item">
                          <p class="form__info-name">Genre</p>
                          <p class="form__info-details">${genres}</p>
                      </li>
                  </ul>
                  <div class="form__about">
                      <h3 class="form__about-name">About</h3>
                      <p class="form__about-details">${overview}</p>
                  </div>
                  <div class="form__btn-list">
                      <button data-action="add" id="watched" class="form-button form-add-btn" type="button">Add to watched</button>
                      <button data-action="add" id="queue" class="form-button form-queue-btn" type="button">Add to queue</button>
                  </div>
              </div>
          </div>
        </div>
    </div>
`;
  }

//   refModalFilmContainer.addEventListener('load', spinnerHandler);
  putEventListenersToOverlay(refModalFilmContainer); //навішуємо слухачів для закриття модалки фільму
  localAPIInteraction(objectCard); // навішування обробників на кнопки додавання до локального сховища

  function localAPIInteraction(objectCard) {
    const watchedBtn = document.getElementById('watched');
    const queueBtn = document.getElementById('queue');

    // Перевірка на наявність фільму у локальному сховищі
    let filmsArray = getFromLocalstorage(WATCHED);
    if (filmsArray.find(film => film.id === objectCard.id)) {
      watchedBtn.textContent = 'Remove from watched';
    } else {
      watchedBtn.textContent = 'Add to watched';
    }

    filmsArray = getFromLocalstorage(QUE);
    if (filmsArray.find(film => film.id === objectCard.id)) {
      queueBtn.textContent = 'Remove from queue';
    } else {
      queueBtn.textContent = 'Add to queue';
    }

    watchedBtn.addEventListener('click', () => {
      if (watchedBtn.textContent === 'Remove from watched') {
        removeFromLocalstorage(WATCHED, objectCard);
        toggleText(watchedBtn);
      } else if (watchedBtn.textContent === 'Add to watched') {
        addToLocalstorage(WATCHED, objectCard);
        toggleText(watchedBtn);
      }
    });
    queueBtn.addEventListener('click', () => {
      if (queueBtn.textContent === 'Remove from queue') {
        removeFromLocalstorage(QUE, objectCard);
        toggleText(queueBtn);
      } else if (queueBtn.textContent === 'Add to queue') {
        addToLocalstorage(QUE, objectCard);
        toggleText(queueBtn);
      }
    });
  }

  function toggleText(btn) {
    switch (btn.textContent) {
      case 'Add to watched':
        btn.textContent = 'Remove from watched';
        break;

      case 'Remove from watched':
        btn.textContent = 'Add to watched';
        break;

      case 'Add to queue':
        btn.textContent = 'Remove from queue';
        break;

      case 'Remove from queue':
        btn.textContent = 'Add to queue';
        break;
    }
  }

  // Зупинення відтворення відео при закритті модалки
  if (videoId) {
    const refClickBtn = document.getElementById('btn-close');
    refClickBtn.addEventListener('click', stopModalVideo);
  }

  function stopModalVideo() {
    const innerHTML = refModalFilmContainer.innerHTML;
    innerHTML.replace(videoIframe.outerHTML, '');
    refModalFilmContainer.innerHTML = innerHTML;
  }
}
