import URL from './url.js';

/* To get data from the API */

const getDataFromAPI = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

/* for displaying on UI */
const displayOnUI = async () => {
  const data = await getDataFromAPI();
  const ul = document.querySelector('.displayScore');
  ul.innerHTML = '';
  data.result.forEach((users) => {
    const li = document.createElement('li');
    li.innerText = ` ${users.user} : ${users.score} `;
    ul.appendChild(li);
  });
};

export { getDataFromAPI, displayOnUI };