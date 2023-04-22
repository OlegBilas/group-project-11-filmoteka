const QUE = 'gue';
const WATCHED = 'watched';

function getFromLocalstorage(key) {
  const dataJSON = localStorage.getItem(`${key}`);
  const localData = JSON.parse(dataJSON);
  return localData ? localData : [];
}

function addToLocalstorage(key, dataAboutFilm) {
  const arrayByKey = getFromLocalstorage(key);

  if (arrayByKey.some(obj => obj.id === dataAboutFilm.id)) {
    return;
  }
  arrayByKey.push(dataAboutFilm);
  const data = JSON.stringify(arrayByKey);
  localStorage.setItem(`${key}`, data);
}

function removeFromLocalstorage(key, dataAboutFilm) {
  const arrayByKey = getFromLocalstorage(key);

  const index = arrayByKey.findIndex(obj => obj.id === dataAboutFilm.id);
  if (index === -1) {
    return;
  }
  arrayByKey.splice(index, 1);
  const data = JSON.stringify(arrayByKey);
  localStorage.setItem(`${key}`, data);
}

export {
  QUE,
  WATCHED,
  getFromLocalstorage,
  addToLocalstorage,
  removeFromLocalstorage,
};
