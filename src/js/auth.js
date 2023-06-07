import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { app } from './firebaseConfig';

import { onHomeClick } from './header';
import {
  alertEmptyFields,
  alertSuccessRegistrationLogIn,
  alertFailedRegistrationLogIn,
  alertInfo,
} from './alerts';
import { enableBodyScroll } from 'body-scroll-lock';
import { lang } from './translator';

const refs = {
  authBtn: document.querySelector(`.auth-btn`),
  authBox: document.querySelector(`.form-container`),
  closeBtn: document.querySelector(`.exit-button`),
  signUpBtn: document.querySelector(`.sign-up`),
  logInBtn: document.querySelector(`.log-in`),
  formTitle: document.querySelector(`.logForm_title`),
  inputEmail: document.querySelector(`.email`),
  inputPassword: document.querySelector(`.password`),
  authForm: document.querySelector(`.logForm`),
  lockBtn: document.querySelector(`.lock-button`),
  lockSvg: document.querySelector(`.lock-svg`),
  mobileMenuOpenBtn: document.querySelector(`.mobile_menu_btn`),
  mobileMenuCloseBtn: document.querySelector(`.exit-menu_btn`),
  mobileMenuContainer: document.querySelector(`.mobile_menu`),
  navBox: document.querySelector(`.header-nav`),
};

const auth = getAuth(app);

// Функція реєстрації нового користувача
const userSignUp = async () => {
  const signUpEmail = refs.inputEmail.value;
  const signUpPassword = refs.inputPassword.value;
  await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then(userCredential => {
      const user = userCredential.user;
      // console.log(user);
      localStorage.setItem('fireBaseAuthorized', auth.currentUser.uid);
      alertSuccessRegistrationLogIn(
        lang === 'uk'
          ? `Ваш акаунт створено з логіном ${signUpEmail}`
          : `Your account has been created with login ${signUpEmail}`
      );
      refs.authForm.reset();
      toggleLogInButton();
      closeAuthWindow();
    })
    .catch(error => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorCode + errorMessage);
      alertFailedRegistrationLogIn(
        lang === 'uk'
          ? `Your registration has been failed. Reason: ${error.message}`
          : `Ваша реєстрація невдала. Причина: ${error.message}`
      );
    });
};

// Функція авторизації зареєстрованого користувача
const userLogIn = async () => {
  const signInEmail = refs.inputEmail.value;
  const signInPassword = refs.inputPassword.value;
  await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then(userCredential => {
      const user = userCredential.user;
      // console.log(user);
      localStorage.setItem('fireBaseAuthorized', auth.currentUser.uid);
      alertSuccessRegistrationLogIn(
        lang === 'uk'
          ? `Ви ввійшли з електронної пошти ${user.email}`
          : `You have been logged in with e-mail ${user.email}`
      );
      refs.authForm.reset();
      toggleLogInButton();
      closeAuthWindow();
    })
    .catch(error => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorCode + errorMessage);
      alertFailedRegistrationLogIn(
        lang === 'uk'
          ? `Ваш вхід невдалий. Причина: ${error.message}`
          : `Your log in has been failed. Reason: ${error.message}`
      );
    });
};

const toggleLogInButton = () => {
  const inner = refs.authBtn.innerHTML;
  if (refs.authBtn.textContent.includes('Log in')) {
    refs.authBtn.innerHTML = inner.replace('Log in', 'Log out');
  } else if (refs.authBtn.textContent.includes('Log out')) {
    refs.authBtn.innerHTML = inner.replace('Log out', 'Log in');
  } else if (refs.authBtn.textContent.includes('Вхід')) {
    refs.authBtn.innerHTML = inner.replace('Вхід', 'Вихід');
  } else if (refs.authBtn.textContent.includes('Вихід')) {
    refs.authBtn.innerHTML = inner.replace('Вихід', 'Вхід');
  }
};

// Відкриття вікна авторизації
const openAuthWindow = () => {
  if (
    refs.authBtn.textContent.includes('Log in') ||
    refs.authBtn.textContent.includes('Вхід')
  ) {
    refs.authBox.classList.add('active');
    logInWindow();
  }
  if (localStorage.getItem('fireBaseAuthorized')) {
    // Розлогінізація
    signOut(auth)
      .then(() => {
        localStorage.removeItem('fireBaseAuthorized');
        toggleLogInButton();
        alertInfo(
          lang === 'uk' ? 'Ви вийшли з акаунту' : 'You have been logged out'
        );
        enableBodyScroll(document.body);
      })
      .catch(error => console.log(error));
  }
};

// Закриття вікна авторизації
const closeAuthWindow = () => {
  refs.authBox.classList.remove('active');
};

// Перемикач реєстрації
const signUpWindow = () => {
  refs.logInBtn.classList.remove(`active`);
  refs.signUpBtn.classList.add(`active`);
  refs.formTitle.textContent = lang === 'uk' ? 'Реєстрація' : `Sign up`;
  refs.inputEmail.placeholder =
    lang === 'uk' ? 'Введіть Вашу електронну пошту' : `Enter your e-mail`;
  refs.inputPassword.placeholder =
    lang === 'uk' ? 'Введіть пароль' : `Enter password`;
};

// Перемикач логінізації
const logInWindow = () => {
  refs.logInBtn.classList.add(`active`);
  refs.signUpBtn.classList.remove(`active`);
  refs.formTitle.textContent = lang === 'uk' ? 'Вхід' : `Log in`;
  refs.inputEmail.placeholder = lang === 'uk' ? 'електронна пошта' : `e-mail`;
  refs.inputPassword.placeholder = lang === 'uk' ? 'пароль' : `password`;
};

// Перевірка на пусті форми
const submitValidateForm = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' && password.value === '') {
    return alertEmptyFields();
  }

  if (refs.signUpBtn.classList.contains('active')) {
    userSignUp();
  } else {
    userLogIn();
  }
  enableBodyScroll(document.body);
};

//Зробити видимим/невидимим пароль по кліку на кнопку
const btnPassOnClick = () => {
  // console.log(refs.lockSvg.href);
  if (refs.inputPassword.type === `password`) {
    refs.inputPassword.type = `text`;
    refs.lockSvg.href.baseVal = '/icons.adfc4680.svg#icon-unlocked';
  } else {
    refs.inputPassword.type = `password`;
    refs.lockSvg.href.baseVal = '/icons.adfc4680.svg#icon-lock';
  }
};
//

// Відкриття мобільного меню
const openMobileMenu = () => {
  refs.mobileMenuContainer.classList.add(`active`);
  refs.navBox.classList.add(`active`);
};

// Закриття мобільного меню
const closeMobileMenu = () => {
  refs.mobileMenuContainer.classList.remove(`active`);
  refs.navBox.classList.remove(`active`);
};
refs.mobileMenuCloseBtn.addEventListener(`click`, closeMobileMenu);
refs.mobileMenuOpenBtn.addEventListener(`click`, openMobileMenu);
refs.authForm.addEventListener(`submit`, submitValidateForm);
refs.authBtn.addEventListener(`click`, openAuthWindow);
refs.closeBtn.addEventListener(`click`, closeAuthWindow);
refs.signUpBtn.addEventListener(`click`, signUpWindow);
refs.logInBtn.addEventListener(`click`, logInWindow);
refs.lockBtn.addEventListener(`click`, btnPassOnClick);

//Спостерігач зміни стану аутентифікації користувача
onAuthStateChanged(auth, () => {
  const fireBaseAuthorized = localStorage.getItem('fireBaseAuthorized');
  if (!fireBaseAuthorized || fireBaseAuthorized !== auth.currentUser?.uid) {
    onHomeClick();
  }
});

export { openAuthWindow, closeMobileMenu, auth, toggleLogInButton };
