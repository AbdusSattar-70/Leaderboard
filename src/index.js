import './index.css';
import requestAPI from './modules/post.js';

const displayScores = (scores) => {
  const ul = document.querySelector('.displayScore');
  ul.innerHTML = '';
  scores.forEach((user) => {
    const li = document.createElement('li');
    li.innerText = `${user.user}: ${user.score}`;
    ul.appendChild(li);
  });
};

const sortScores = (scores) => scores.sort((a, b) => b.score - a.score);
const getScores = async () => {
  const data = await requestAPI('GET');
  const scores = data.result.map(({ user, score }) => ({ user, score: parseInt(score, 10) }));
  const sortedScores = sortScores(scores);
  displayScores(sortedScores);
  return sortedScores;
};

const postScore = async (user, score) => {
  await requestAPI('POST', { user, score });
};

const form = document.querySelector('.form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { user, score } = form.elements;
  await postScore(user.value, score.value);
  await getScores();
  form.reset();
});

const refreshButton = document.querySelector('#refresh');
refreshButton.addEventListener('click', async () => {
  const scores = await getScores();
  displayScores(scores);
  window.location.reload();
});

getScores();