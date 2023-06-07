import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../dictionaries/translationEN.json';
import translationUK from '../dictionaries/translationUK.json';
import { loadActivePage } from './page-save';

const refs = {
  language: document.querySelector('.language'),
  EN: document.querySelector('.language-EN'),
  UA: document.querySelector('.language-UA'),
  serchFilms: document.querySelector('.header-input'),
};

//i18next - бібліотека для автоматичного визначення мови користувача в браузері та перекладу
i18next.use(LanguageDetector);
i18next.init({
  debug: false,
  resources: {
    en: {
      translation: translationEN,
    },
    uk: {
      translation: translationUK,
    },
  },
});
// Визначимо мову інтерфейсу сайта
let lang = 'en';
if (i18next.language === 'uk-UA' || i18next.language === 'uk') {
  lang = 'uk';
  refs.UA.style.fontWeight = '900';
} else {
  refs.EN.style.fontWeight = '900';
}
refs.serchFilms.placeholder = lang === 'uk' ? 'Пошук фільму' : 'Movie search';

const i18nextInstance = i18next.createInstance(
  {
    lng: lang,
    resources: {
      en: {
        translation: translationEN,
      },
      uk: {
        translation: translationUK,
      },
    },
  },
  (err, t) => {
    if (err) return console.log('something went wrong loading', err);

    if (lang === 'uk') {
      refs.language.value = '2';
    } else {
      refs.language.value = '1';
    }
    const refsTranslate = document.querySelectorAll('[data-translate]');
    refsTranslate.forEach(ref => {
      ref.innerHTML = t(ref.textContent.trim());
    });
  }
);

// Логіка зміни мови
refs.language.addEventListener('input', e => {
  if (e.target.value === '2') {
    translateSite('uk');
    refs.UA.style.fontWeight = '900';
    refs.EN.style.fontWeight = 'normal';
  } else {
    translateSite('en');
    refs.EN.style.fontWeight = '900';
    refs.UA.style.fontWeight = 'normal';
  }
  loadActivePage();
});

function translateSite(language) {
  i18nextInstance.changeLanguage(language, (err, t) => {
    if (err) return console.log('something went wrong loading', err);

    lang = language;
    refs.serchFilms.placeholder =
      lang === 'uk' ? 'Пошук фільму' : 'Movie search';
    const refsTranslate = document.querySelectorAll('[data-translate]');
    refsTranslate.forEach(ref => {
      ref.innerHTML = t(ref.textContent.trim());
    });
  });
}

export { i18nextInstance, lang };
