import { REQUEST_TOKEN_FAILURE, REQUEST_TOKEN_SUCCESS } from '../actions';

const INITIAL_STATE = '';

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_TOKEN_SUCCESS: {
    return action.token;
  }
  case REQUEST_TOKEN_FAILURE:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default tokenReducer;
