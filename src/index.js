import './index.css';
import displayScores from './modules/displayScrores.js';
import { getScores } from './modules/getScore.js';
import submitForm from './modules/form.js';

submitForm();
const refresh = () => {
  const refreshButton = document.querySelector('#refresh');
  refreshButton.addEventListener('click', async () => {
    const scores = await getScores();
    displayScores(scores);
    window.location.reload();
  });
};

refresh();
getScores();