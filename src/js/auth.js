import { alertEmptyFields } from './alerts';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./firebaseConfig";

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
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert('Account created')
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
      })
  })
}

// Функція авторизації зареєстрованого користувача
const userLogIn = async () => {
  const signInEmail = refs.inputEmail.value;
  const signInPassword = refs.inputPassword.value;
  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(userCredential.user)
      alert(`You signed in as ${user.email}`)
  })
}

// Відкриття вікна авторизації
const openAuthWindow = () => {
  if (refs.authBox.classList.contains(` active`)) {
    return;
  }
  refs.authBox.classList.add(`active`);
  logInWindow();
};
// Закриття вікна авторизації
const closeAiuthWindow = () => {
  refs.authBox.classList.remove(`active`);
  return;
};

// Перемикач реєстрації
const signUpWindow = () => {
  refs.logInBtn.classList.remove(`active`);
  refs.signUpBtn.classList.add(`active`);
  refs.formTitle.textContent = `Sign up`;
  refs.inputEmail.placeholder = `Create an Email`;
  refs.inputPassword.placeholder = `Create Password`;
    refs.signUpBtn.addEventListener(`click`, userSignUp);
    refs.logInBtn.removeEventListener(`click`, userLogIn);
};

// Перемикач логінізації
const logInWindow = () => {
  refs.logInBtn.classList.add(`active`);
  refs.signUpBtn.classList.remove(`active`);
  refs.formTitle.textContent = `Log in`;
  refs.inputEmail.placeholder = `email`;
  refs.inputPassword.placeholder = `password`;
    refs.logInBtn.addEventListener(`click`, userLogIn);
    refs.signUpBtn.removeEventListener(`click`, userSignUp);
};

// Перевірка на пусті форми
const submitValidForm = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' && password.value === '') {
    return alertEmptyFields();
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  refs.authForm.reset();
};

//Зробити видимим\невидимим пароль по кліку на кнопку
const btnPassOnClick = () => {
  console.log(refs.lockSvg.href);
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
refs.authForm.addEventListener(`submit`, submitValidForm);
refs.authBtn.addEventListener(`click`, openAuthWindow);
refs.closeBtn.addEventListener(`click`, closeAiuthWindow);
refs.signUpBtn.addEventListener(`click`, signUpWindow);
refs.logInBtn.addEventListener(`click`, logInWindow);
refs.lockBtn.addEventListener(`click`, btnPassOnClick);

export { openAuthWindow };
export { closeMobileMenu };
