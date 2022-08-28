import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('form');
const textarea = document.querySelector('form textarea');
const email = document.querySelector('form input');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(messageSubmit, 500));

populateTextarea();

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
});

function messageSubmit() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  try {
    const parsObjekt = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log('Objekt:', parsObjekt);
  } catch (error) {
    console.log(error.message);
  }

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    const message = savedMessage ? JSON.parse(savedMessage) : {};
    if (message.email) {
      email.value = message.email;
    }
    if (message.message) {
      textarea.value = message.message;
    }
  }
}
