import { putEventListenersToOverlay } from './modal';
import { YoutubeVideo } from './youtubevideo';
import {
  QUE,
  WATCHED,
  addToLocalstorage,
  removeFromLocalstorage,
  getFromLocalstorage,
} from './localAPI';
import { onWatchedClick, onQueueClick } from '../js/header';
import {
  getFromFirebase,
  addToFirebase,
  removeFromFirebase,
} from './firebaseStoradge';
import { i18nextInstance, lang } from './translator';

const NAME_BUTTON = {
  Add_to_watched: 'Add to watched',
  Remove_from_watched: 'Remove from watched',
  Add_to_queue: 'Add to queue',
  Remove_from_queue: 'Remove from queue',
  Add_to_watched_UK: 'Додати до перегляду',
  Remove_from_watched_UK: 'Вилучити з перегляду',
  Add_to_queue_UK: 'Додати до черги',
  Remove_from_queue_UK: 'Вилучити з черги',
};

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
                            <p class="form__info-name" data-translate>Vote / Votes</p>
                            <p class="form__info-details"> <span class="film__rating">${vote_average}</span>/<span class="film__voice">${vote_count}</span></p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name" data-translate>Popularity</p>
                            <p class="form__info-details">${popularity}</p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name" data-translate>Original Title</p>
                            <p class="form__info-details details-title">${original_title}</p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name" data-translate>Genre</p>
                            <p class="form__info-details">${genres}</p>
                        </li>
                    </ul>
                    <div class="form__about">
                        <h3 class="form__about-name" data-translate>About</h3>
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
                          <p class="form__info-name" data-translate>Vote / Votes</p>
                          <p class="form__info-details"> <span class="film__rating">${vote_average}</span>/<span class="film__voice">${vote_count}</span></p>
                      </li>
                      <li class="form__info-item">
                          <p class="form__info-name" data-translate>Popularity</p>
                          <p class="form__info-details">${popularity}</p>
                      </li>
                      <li class="form__info-item">
                          <p class="form__info-name" data-translate>Original Title</p>
                          <p class="form__info-details details-title">${original_title}</p>
                      </li>
                      <li class="form__info-item">
                          <p class="form__info-name" data-translate>Genre</p>
                          <p class="form__info-details">${genres}</p>
                      </li>
                  </ul>
                  <div class="form__about">
                      <h3 class="form__about-name" data-translate>About</h3>
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

  const refs = refModalFilmContainer.querySelectorAll('[data-translate]');
  refs.forEach(ref => (ref.innerHTML = i18nextInstance.t(ref.textContent)));

  putEventListenersToOverlay(refModalFilmContainer); //навішуємо слухачів для закриття модалки фільму
  APIInteraction(objectCard); // навішування обробників на кнопки додавання до/видалення з бази firebase/локального сховища

  async function APIInteraction(objectCard) {
    const watchedBtn = document.getElementById('watched');
    const queueBtn = document.getElementById('queue');

    //кнопки навігації
    const activeNaviganionBtn = document.querySelector('.active-btn');
    const headerWatchedBtn = document.querySelector('.watched-btn');
    const headerQueueBtn = document.querySelector('.queue-btn');

    // Перевірка на наявність фільму у локальному сховищі
    let filmsArray;
    if (localStorage.getItem('fireBaseAuthorized')) {
      filmsArray = await getFromFirebase(WATCHED);
    } else {
      filmsArray = getFromLocalstorage(WATCHED);
    }
    if (filmsArray.find(film => film.id === objectCard.id)) {
      watchedBtn.textContent =
        lang === 'uk'
          ? NAME_BUTTON.Remove_from_watched_UK
          : NAME_BUTTON.Remove_from_watched;
    } else {
      watchedBtn.textContent =
        lang === 'uk'
          ? NAME_BUTTON.Add_to_watched_UK
          : NAME_BUTTON.Add_to_watched;
    }

    if (localStorage.getItem('fireBaseAuthorized')) {
      filmsArray = await getFromFirebase(QUE);
    } else {
      filmsArray = getFromLocalstorage(QUE);
    }
    if (filmsArray.find(film => film.id === objectCard.id)) {
      queueBtn.textContent =
        lang === 'uk'
          ? NAME_BUTTON.Remove_from_queue_UK
          : NAME_BUTTON.Remove_from_queue;
    } else {
      queueBtn.textContent =
        lang === 'uk' ? NAME_BUTTON.Add_to_queue_UK : NAME_BUTTON.Add_to_queue;
    }

    watchedBtn.addEventListener('click', () => {
      if (
        watchedBtn.textContent === NAME_BUTTON.Remove_from_watched ||
        watchedBtn.textContent === NAME_BUTTON.Remove_from_watched_UK
      ) {
        if (localStorage.getItem('fireBaseAuthorized')) {
          removeFromFirebase(WATCHED, objectCard);
        } else {
          removeFromLocalstorage(WATCHED, objectCard);
        }
        toggleText(watchedBtn);
      } else if (
        watchedBtn.textContent === NAME_BUTTON.Add_to_watched ||
        watchedBtn.textContent === NAME_BUTTON.Add_to_watched_UK
      ) {
        if (localStorage.getItem('fireBaseAuthorized')) {
          addToFirebase(WATCHED, objectCard);
        } else {
          addToLocalstorage(WATCHED, objectCard);
        }
        toggleText(watchedBtn);
      }

      if (activeNaviganionBtn.classList.contains('my-library-btn')) {
        onWatchedClick();
        headerWatchedBtn.classList.add('active-library-btn');
        headerQueueBtn.classList.remove('active-library-btn');
      }
    });

    queueBtn.addEventListener('click', () => {
      if (
        queueBtn.textContent === NAME_BUTTON.Remove_from_queue ||
        queueBtn.textContent === NAME_BUTTON.Remove_from_queue_UK
      ) {
        if (localStorage.getItem('fireBaseAuthorized')) {
          removeFromFirebase(QUE, objectCard);
        } else {
          removeFromLocalstorage(QUE, objectCard);
        }
        toggleText(queueBtn);
      } else if (
        queueBtn.textContent === NAME_BUTTON.Add_to_queue ||
        queueBtn.textContent === NAME_BUTTON.Add_to_queue_UK
      ) {
        if (localStorage.getItem('fireBaseAuthorized')) {
          addToFirebase(QUE, objectCard);
        } else {
          addToLocalstorage(QUE, objectCard);
        }
        toggleText(queueBtn);
      }
      if (activeNaviganionBtn.classList.contains('my-library-btn')) {
        onQueueClick();
        headerWatchedBtn.classList.remove('active-library-btn');
        headerQueueBtn.classList.add('active-library-btn');
      }
    });
  }

  function toggleText(btn) {
    switch (btn.textContent) {
      case NAME_BUTTON.Add_to_watched:
        btn.textContent = NAME_BUTTON.Remove_from_watched;
        break;

      case NAME_BUTTON.Remove_from_watched:
        btn.textContent = NAME_BUTTON.Add_to_watched;
        break;

      case NAME_BUTTON.Add_to_queue:
        btn.textContent = NAME_BUTTON.Remove_from_queue;
        break;

      case NAME_BUTTON.Remove_from_queue:
        btn.textContent = NAME_BUTTON.Add_to_queue;
        break;

      case NAME_BUTTON.Add_to_watched_UK:
        btn.textContent = NAME_BUTTON.Remove_from_watched_UK;
        break;

      case NAME_BUTTON.Remove_from_watched_UK:
        btn.textContent = NAME_BUTTON.Add_to_watched_UK;
        break;

      case NAME_BUTTON.Add_to_queue_UK:
        btn.textContent = NAME_BUTTON.Remove_from_queue_UK;
        break;

      case NAME_BUTTON.Remove_from_queue_UK:
        btn.textContent = NAME_BUTTON.Add_to_queue_UK;
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
