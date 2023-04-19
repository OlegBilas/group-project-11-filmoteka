import { onSpinner } from './spinner';
import { alertEndOfCollection } from './alerts';
import {
  IS_FROM_FETCH,
  ADD_TO_COLLECTION,
  renderCollection,
} from './renderGallery';
import { hidePagination, showPagination } from './pagination';
import { QUE, WATCHED, getFromLocalstorage } from './localAPI';

let currentPage = 1;

const refs = {
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
};

const observer = new IntersectionObserver(intersectingHandler);
observer.observe(document.querySelector('footer'));

function intersectingHandler(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (refs.watchedBtn.classList.contains('active-library-btn')) {
        onWatchedClick();
        currentPage += 1;
      }
      if (refs.queueBtn.classList.contains('active-library-btn')) {
        onQueueClick();
        currentPage += 1;
      }
    }
  });
}

function onWatchedClick() {
  onSpinner('start');
  let collection = getFromLocalstorage(WATCHED);
  collection = getCollectionBox(collection);

  if (collection.length === 0) {
    observer.unobserve(document.querySelector('footer'));
    onSpinner('stop');
    return alertEndOfCollection();
  }

  renderCollection(collection, !IS_FROM_FETCH, !ADD_TO_COLLECTION);
  hidePagination();
  refs.watchedBtn.classList.add('active-library-btn');
  refs.queueBtn.classList.remove('active-library-btn');
  onSpinner('stop');
}

function onQueueClick() {
  onSpinner('start');
  const collection = getFromLocalstorage(QUE);

  if (collection.length === 0) {
    observer.unobserve(document.querySelector('footer'));
    onSpinner('stop');
    return alertEndOfCollection();
  }

  renderCollection(collection, !IS_FROM_FETCH, !ADD_TO_COLLECTION);
  hidePagination();
  refs.watchedBtn.classList.remove('active-library-btn');
  refs.queueBtn.classList.add('active-library-btn');
  onSpinner('stop');
}

function getCollectionBox(collection) {
  return collection.slice(currentPage - 1, 20);
}

export { observer };
