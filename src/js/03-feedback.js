import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('form'),
  textarea: document.querySelector('form textarea'),
  email: document.querySelector('form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(messageSubmit, 500));

populateTextarea();

refs.form.addEventListener('input', evt => {
  console.log(evt.target.name);
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
});

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function messageSubmit(evt) {
  evt.preventDefault();
  const message = evt.target.value;
  console.log(message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    message = JSON.parse(savedMessage);
    if (message.email) {
      refs.email.value = message.email;
    }
    if (message.message) {
      refs.textarea.value = message.message;
    }
  }
}
