import getTokenFromAPI from '../../services/API';

export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const REQUEST_TOKEN_FAILURE = 'REQUEST_TOKEN_FAILURE';
export const LOGIN = 'LOGIN';

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

export const login = (userData) => ({
  type: LOGIN,
  name: userData.name,
  gravatarEmail: userData.gravatarEmail,
});
