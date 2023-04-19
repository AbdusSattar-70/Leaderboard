const displayScores = (scores) => {
  const ul = document.querySelector('.displayScore');
  ul.innerHTML = '';
  scores.forEach((user) => {
    const li = document.createElement('li');
    li.innerText = `${user.user}: ${user.score}`;
    ul.appendChild(li);
  });
};

export default displayScores;