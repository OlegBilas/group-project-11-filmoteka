import Pagination from 'tui-pagination';
import { fetchFilms } from './fetchAPI';
import { renderCollection } from './renderGallery';

let instance;
const galleryList = document.querySelector('.list');
const container = document.querySelector('.pagination');
function createPagination(totalItems, filmName) {
  instance = new Pagination(container, {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    usageStatistics: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}" aria-label="next-page">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  });
    document.querySelector(".tui-ico-last").textContent = Math.ceil(totalItems / 20);
    document.querySelector(".tui-first").classList.add("hidden")
    document.querySelector(".tui-last-child").classList.add("mobile-hidden");
    
  instance.on('afterMove', event => {
    const currentPage = event.page;
    [...galleryList.children].forEach(element => element.remove());
      fetchAndRender(filmName, currentPage);
      
      currentPage <= 3 ? document.querySelector(".tui-first").classList.add("hidden") : document.querySelector(".tui-first").classList.remove("hidden");
      document.querySelector(".tui-ico-first").textContent = "1";
      document.querySelector(".tui-ico-last").textContent = Math.ceil(totalItems / 20);
      totalItems / 20 - currentPage >= 2 ? document.querySelector(".tui-last").classList.remove("hidden") : document.querySelector(".tui-last").classList.add("hidden");
      if (window.innerWidth <= 320) {
              document.querySelector(".tui-last-child").classList.add("mobile-hidden");
              document.querySelector(".tui-first-child").classList.add("mobile-hidden");
          if (currentPage <= 3) {
              document.querySelector(".tui-last-child").classList.add("mobile-hidden");
              document.querySelector(".tui-first-child").classList.remove("mobile-hidden");
              document.querySelector(".tui-first-child").nextSibling.classList.remove("mobile-hidden");
          }
          if (totalItems / 20 - currentPage <= 1) {
              document.querySelector(".tui-last-child").classList.remove("mobile-hidden");
              document.querySelector(".tui-first-child").classList.add("mobile-hidden");
          }
      }
  });
}
async function fetchAndRender(name, page) {
  const data = await fetchFilms(name, page);
  renderCollection(data);
}

function hidePagination() {
  container.classList.add('hidden');
}

function showPagination() {
  container.classList.remove('hidden');
}

export { createPagination, hidePagination, showPagination };
