import { onSpinner } from './spinner';
import { alertEndOfCollection } from './alerts';
import { IS_FROM_FETCH, renderCollection } from './renderGallery';
import { getFromLocalstorage } from './localAPI';
import { CARDS_PER_PAGE } from '../index';

import {
  getFromFirebase,
} from './firebaseStoradge';

let library;
let observer;

function startObservering(QUE_WATCHED) {
  
    library = new RenderLibrary(QUE_WATCHED);
    library.renderingCollectionByPage();
  
  // if (!observer) {
    observer = new IntersectionObserver(intersectingHandler);
    observer.observe(document.querySelector('footer'));
  // }
}

function intersectingHandler(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      library.renderingCollectionByPage();
    }
  });
}

function stopObservering() {
  observer && observer.disconnect();
}

// RenderLibrary - клас для нескінченного рендерингу карток бібліотеки
// QUE_WATCHED - вхідний параметр конструктора класу, дорівнює одному із значень:
// QUE чи WATCHED із скрипта localAPI.js (вказує на відповідну активну кнопку хедера)
class RenderLibrary {
  constructor(QUE_WATCHED) {
    this.index = 0;
    this.currentLibrary = QUE_WATCHED;
  }

  async renderingCollectionByPage() {
    onSpinner('start');
    let collection;
    if (localStorage.getItem('fireBaseAuthorized')) {
      collection = await getFromFirebase(this.currentLibrary);
      // console.log(collection);
    } else {
      collection = getFromLocalstorage(this.currentLibrary);
    }

    const collectionPart = this.getCollectionBox(collection);

    if (collectionPart.length === 0) {
      stopObservering();
      onSpinner('stop');
      return alertEndOfCollection();
    }

    renderCollection(collectionPart, !IS_FROM_FETCH);
    onSpinner('stop');
    this.index += CARDS_PER_PAGE;
  }

  getCollectionBox(collection) {
    return collection.slice(this.index, this.index + CARDS_PER_PAGE);
  }
}

export { startObservering, stopObservering, observer };
