import Pagination from 'tui-pagination';
import { fetchFilms } from "./fetchAPI";
import { renderCollection } from "./renderGallery";

let instance
const galleryList = document.querySelector('.list');
const container = document.querySelector(".pagination");
function createPagination(totalItems, filmName){
    instance = new Pagination(container, {
        totalItems,
        itemsPerPage: 20,
        visiblePages: 10,
        page: 1,
        centerAlign: true,
        firstItemClassName: 'tui-first-child',
        lastItemClassName: 'tui-last-child',
        template: {
            page: '<a href="#" class="tui-page-btn">{{page}}</a>',
            currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
            moveButton:
                '<a href="#" class="tui-page-btn tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
                '</a>',
            disabledMoveButton:
                '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
                '</span>',
            moreButton:
                '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                '<span class="tui-ico-ellip">...</span>' +
                '</a>'
        }
    });
    
    instance.on('afterMove', (event) => {
        const currentPage = event.page;
        [...galleryList.children].forEach(element => element.remove());
        renderCollection(fetchFilms(currentPage, filmName));
    });
}

export {createPagination}