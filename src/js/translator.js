import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../dictionaries/translationEN.json';
import translationUK from '../dictionaries/translationUK.json';

//i18next - бібліотека для автоматичного визначення мови користувача в браузері та перекладу
i18next.use(LanguageDetector);
i18next.init({
  // lng: 'uk', // if you're using a language detector, do not define the lng option
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

const refs = document.querySelectorAll('[data-translate]');
refs.forEach(ref => {
  ref.innerHTML = i18next.t(ref.textContent.trim());
});
export default i18next;
