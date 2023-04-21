import { onSpinner } from './spinner';
import { alertEndOfCollection } from './alerts';
import {
  IS_FROM_FETCH,
  ADD_TO_COLLECTION,
  renderCollection,
} from './renderGallery';
import { hidePagination, showPagination } from './pagination';
import { QUE, WATCHED, getFromLocalstorage } from './localAPI';

let library;
let observer;

function startObservering(QUE_WATCHED) {
  library = new RenderLibrary(QUE_WATCHED);
  library.renderingCollectionByPage();
  observer = new IntersectionObserver(intersectingHandler);
  observer.observe(document.querySelector('footer'));
}

function intersectingHandler(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      library.renderingCollectionByPage();
    }
  });
}

function stopObservering() {
  observer.disconnect();
}

// QUE_WATCHED - вхідний параметр конструктора класу, дорівнює одному із значень:
// QUE чи WATCHED із скрипта localAPI.js (вказує на відповідну активну кнопку хедера)
class RenderLibrary {
  constructor(QUE_WATCHED) {
    this.index = 0;
    this.currentLibrary = QUE_WATCHED;
  }

  renderingCollectionByPage() {
    onSpinner('start');
    const collection = getFromLocalstorage(this.currentLibrary);
    console.log(collection);
    const collectionPart = this.getCollectionBox(collection);
    console.log(collectionPart);

    if (collectionPart.length === 0) {
      stopObservering();
      onSpinner('stop');
      return alertEndOfCollection();
    }

    renderCollection(collectionPart, !IS_FROM_FETCH);
    this.index += 20;
    onSpinner('stop');
  }

  getCollectionBox(collection) {
    return collection.slice(this.index, 20);
  }
}

export { startObservering, stopObservering };
