import requestAPI from './post.js';
import displayScores from './displayScrores.js';

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

export { getScores, postScore };