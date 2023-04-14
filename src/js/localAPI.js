
export function getFromLocalstorage(key) {
        const dataJSON =  localStorage.getItem(`${key}`);
        return JSON.parse(dataJSON);
}

export function addToLocalstorage(key, dataAboutFilm) {
    const arrayByKey = getFilmsFromLocalstorage(key);

    if (arrayByKey.some(obj => obj.id === dataAboutFilm.id)) {
        return;
    }

    const data = JSON.stringify(arrayByKey.push(dataAboutFilm));
    localStorage.setItem(`${key}`, data);
}