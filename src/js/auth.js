import { alertEmptyFields } from './alerts';

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
};

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
  //   refs.signUpBtn.addEventListener(`click`, signFunction); // signFunction - це функція ,яка відправлятиме дані
  //   refs.logInBtn.removeEventListener(`click`, logFunction);
};

// Перемикач логінізації
const logInWindow = () => {
  refs.logInBtn.classList.add(`active`);
  refs.signUpBtn.classList.remove(`active`);
  refs.formTitle.textContent = `Log in`;
  refs.inputEmail.placeholder = `email`;
  refs.inputPassword.placeholder = `password`;
  //   refs.logInBtn.addEventListener(`click`, logFunction); // logFunction - це функція ,яка відправлятиме дані
  //   refs.signUpBtn.removeEventListener(`click`, lognFunction);
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
refs.authForm.addEventListener(`submit`, submitValidForm);
refs.authBtn.addEventListener(`click`, openAuthWindow);
refs.closeBtn.addEventListener(`click`, closeAiuthWindow);
refs.signUpBtn.addEventListener(`click`, signUpWindow);
refs.logInBtn.addEventListener(`click`, logInWindow);
refs.lockBtn.addEventListener(`click`, btnPassOnClick);

export { openAuthWindow };
