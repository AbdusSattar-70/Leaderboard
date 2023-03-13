import './index.css';
import { getDataFromAPI, displayOnUI } from './modules/getDisplay.js';
import postDataOnAPI from './modules/post.js';

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { user, score } = form.elements;
  postDataOnAPI(user.value, score.value);
  displayOnUI();
  form.reset();
});

const refresh = () => {
  const refresh = document.querySelector('#refresh');
  refresh.addEventListener('click', () => {
    getDataFromAPI();
    displayOnUI();
  });
};
refresh();
displayOnUI();
