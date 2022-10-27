import {
  setItemToLocalStorage,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
} from '../utils/localStorage';

const setURL = (token) => {
  const URL = `https://opentdb.com/api.php?amount=5&token=${token}`;
  return URL;
};

const getTokenFromAPI = async () => {
  try {
    const token = await fetch(
      'https://opentdb.com/api_token.php?command=request',
    );
    const tokenJson = await token.json();
    setItemToLocalStorage('token', tokenJson.token);
    return tokenJson.token;
  } catch (err) {
    console.err(err);
  }
};

export const getQuestionsFromAPI = async () => {
  try {
    const userToken = getItemFromLocalStorage('token');
    const url = setURL(userToken);
    const questions = await fetch(url);
    const questionsJson = await questions.json();
    const INVALID_RESPONSE_CODE = 3;

    if (questionsJson.response_code === INVALID_RESPONSE_CODE) {
      removeItemFromLocalStorage('token');
      const newToken = await getTokenFromAPI();
      setItemToLocalStorage('token', newToken);
      const localToken = getItemFromLocalStorage('token');
      const getQuestionsAgain = await fetch(setURL(localToken));
      const newQuestionsAsJSON = await getQuestionsAgain.json();
      return newQuestionsAsJSON;
    }

    return questionsJson;
  } catch (err) {
    console.err(err);
  }
};

export default getTokenFromAPI;
