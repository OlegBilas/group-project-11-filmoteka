import { onHomeClick } from './header';
import { onLibraryClick } from './header';

//При кліку на кнопку спочатку відпрацьовує функція deleteActivePage і одразу після неї saveActiveBtn. Ці функціїї вже додав до кнопок

// Функція зберігає в локальне сховище активну кнопку
const saveActiveBtn = () => {
  const activeBtn = document.querySelector(`.active-btn`);
  const object = {
    status: `active`,
    id: activeBtn.id,
  };
  localStorage.setItem(`button`, JSON.stringify(object));
  console.log(activeBtn);
};

// Функція видаляє з локального сховища активну кнопку
const deleteActivePage = () => {
  localStorage.removeItem(`button`);
};

// Функція має відпрацьовувати при завантаженні сторінки,якщо гість вперше на сторінці,має відпрацьовувати ф-я onHomeClick()
loadActivePage = () => {
  const pageInfo = JSON.parse(localStorage.getItem(`button`));
  console.log(pageInfo);
  if (pageInfo.id === 1) {
    //   onHomeClick();
  } else if (pageInfo.id === 2) {
    //   onLibraryClick();
  }
  //   onHomeClick()
};

export { saveActiveBtn, loadActivePage, deleteActivePage };
