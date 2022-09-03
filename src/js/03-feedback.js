import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('form'),
  textarea: document.querySelector('form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(messageSubmit, 500));

populateTextarea();

function messageSubmit(evt) {
  let formData = localStorage.getItem(STORAGE_KEY);
  formData = formData ? JSON.parse(formData) : {};
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const parsObjekt = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log('Objekt:', parsObjekt);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    const message = JSON.parse(savedMessage);
    Object.entries(message).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}
