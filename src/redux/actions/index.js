import getTokenFromAPI, { getQuestionsFromAPI } from '../../services/API';

export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const REQUEST_TOKEN_FAILURE = 'REQUEST_TOKEN_FAILURE';
export const LOGIN = 'LOGIN';
export const REQUEST_QUESTION = 'REQUEST_QUESTION';
export const REQUEST_QUESTION_SUCCESS = 'REQUEST_QUESTION_SUCCESS';
export const REQUEST_QUESTION_FAILURE = 'REQUEST_QUESTION_FAILURE';

export const requestTokenSuccess = (token) => ({
  type: REQUEST_TOKEN_SUCCESS,
  token,
});

export const requestTokenFailure = (error) => ({
  type: REQUEST_TOKEN_FAILURE,
  payload: { error },
});

export const fetchToken = () => async (dispatch) => {
  try {
    const token = await getTokenFromAPI();
    localStorage.setItem('token', JSON.stringify(token));
    dispatch(requestTokenSuccess(token));
  } catch (err) {
    dispatch(requestTokenFailure(err.message));
  }
};

export const getQuestions = () => ({
  type: REQUEST_QUESTION,
  isFetching: true,
});

export const getQuestionsSuccess = (questions) => ({
  type: REQUEST_QUESTION_SUCCESS,
  questions,
});

export const requestQuestionFailure = (error) => ({
  type: REQUEST_QUESTION_FAILURE,
  payload: { error },
});

export const fetchQuestions = () => async (dispatch) => {
  dispatch(getQuestions());
  try {
    const questions = await getQuestionsFromAPI();
    console.log('👉🏾 ~ questions', questions);
    dispatch(getQuestionsSuccess(questions));
  } catch (err) {
    dispatch(requestQuestionFailure(err.message));
  }
};

export const login = (userData) => ({
  type: LOGIN,
  name: userData.name,
  gravatarEmail: userData.gravatarEmail,
});
