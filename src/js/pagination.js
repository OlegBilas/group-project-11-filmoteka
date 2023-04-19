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
    document.querySelector(".tui-ico-last").textContent = totalItems / 20;

  instance.on('afterMove', event => {
    const currentPage = event.page;
    [...galleryList.children].forEach(element => element.remove());
      fetchAndRender(filmName, currentPage);
      document.querySelector(".tui-ico-first").textContent = currentPage === 1 ? "first" : "1";
      document.querySelector(".tui-ico-first").textContent = currentPage <= 3 ? "first" : "1";
      document.querySelector(".tui-ico-last").textContent = totalItems / 20 - currentPage < 3 ? "last" : totalItems / 20;

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
