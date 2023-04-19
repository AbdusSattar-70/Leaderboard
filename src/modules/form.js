import { postScore, getScores } from './getScore.js';

const submitForm = () => {
  const form = document.querySelector('.form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { user, score } = form.elements;
    await postScore(user.value, score.value);
    await getScores();
    form.reset();
  });
};

export default submitForm;