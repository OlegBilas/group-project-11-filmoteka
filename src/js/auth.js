import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { app } from './firebaseConfig';

import {
  alertEmptyFields,
  alertSuccessRegistrationLogIn,
  alertFailedRegistrationLogIn,
  alertInfo
} from './alerts';

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
      alertSuccessRegistrationLogIn(
        `Your account has been created with login ${signUpEmail}`
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
        `Your registration has been failed. Reason: ${error.message}`
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
      alertSuccessRegistrationLogIn(
        `You have been logged in with e-mail ${user.email}`
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
        `Your log in has been failed. Reason: ${error.message}`
      );
    });
};

const toggleLogInButton = () => {
  const inner = refs.authBtn.innerHTML;
  if (refs.authBtn.textContent.includes('Log in')) {
    refs.authBtn.innerHTML = inner.replace('Log in', 'Log out');
  } else {
    refs.authBtn.innerHTML = inner.replace('Log out', 'Log in');
  }
};

// Відкриття вікна авторизації
const openAuthWindow = () => {
  if (refs.authBtn.textContent.includes('Log in')) {
    refs.authBox.classList.add('active');
    logInWindow();
  }
  if (refs.authBtn.textContent.includes('Log out')) {
    // Розлогінізація
    signOut(auth)
      .then(() => {
        toggleLogInButton();
        alertInfo('You have been logged out');
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
  refs.formTitle.textContent = `Sign up`;
  refs.inputEmail.placeholder = `Enter your e-mail`;
  refs.inputPassword.placeholder = `Enter password`;
};

// Перемикач логінізації
const logInWindow = () => {
  refs.logInBtn.classList.add(`active`);
  refs.signUpBtn.classList.remove(`active`);
  refs.formTitle.textContent = `Log in`;
  refs.inputEmail.placeholder = `e-mail`;
  refs.inputPassword.placeholder = `password`;
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

export { openAuthWindow, closeMobileMenu };
