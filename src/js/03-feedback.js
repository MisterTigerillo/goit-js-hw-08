import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const FEEDBACK_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

let storageInfo = {};

dataStorageReturn();

function onFormInput(evt) {
  storageInfo[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(storageInfo));
}
function onFormSubmit(evt) {
  evt.preventDefault();
  if (storageInfo.email !== undefined || storageInfo.message !== undefined) {
    console.log(storageInfo);
  }
  storageInfo = {};
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}
function dataStorageReturn() {
  const returnedInfo = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  if (returnedInfo) {
    const keys = Object.keys(returnedInfo);

    for (const key of keys) {
      storageInfo[key] = returnedInfo[key];
      form[key].value = returnedInfo[key];
    }
  }
}
