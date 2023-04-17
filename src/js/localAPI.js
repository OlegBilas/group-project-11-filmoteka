const QUE = 'gue';
const WATCHED = 'watched';

function getFromLocalstorage(key) {
  const dataJSON = localStorage.getItem(`${key}`);
  return JSON.parse(dataJSON);
}

function addToLocalstorage(key, dataAboutFilm) {
  const localData = getFromLocalstorage(key);
  const arrayByKey = localData ? localData : [];

  if (arrayByKey.some(obj => obj.id === dataAboutFilm.id)) {
    return;
  }
  arrayByKey.push(dataAboutFilm);
  const data = JSON.stringify(arrayByKey);
  localStorage.setItem(`${key}`, data);
}

export { QUE, WATCHED, getFromLocalstorage, addToLocalstorage };
