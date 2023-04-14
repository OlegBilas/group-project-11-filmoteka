
export function getFromLocalstorage(key) {
        const dataJSON =  localStorage.getItem(`${key}`);
        return JSON.parse(dataJSON);
}

export function addToLocalstorage(key, dataAboutFilm) {
    const localData = getFromLocalstorage(key);
    const arrayByKey = localData ? localData : [];


    if (arrayByKey.some(obj => obj.id === dataAboutFilm.id)) {
        return;
    }

    const data = JSON.stringify(arrayByKey.push(dataAboutFilm));
    localStorage.setItem(`${key}`, data);
}