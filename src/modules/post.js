import URL from './url.js';

/* post or create player on API */
const postDataOnAPI = async (user, score) => {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  };
  const response = await fetch(URL, option);
  const data = await response.json();
  return data;
};

export default postDataOnAPI;