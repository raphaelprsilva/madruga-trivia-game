import { LOGIN, UPDATE_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      name: action.name,
      gravatarEmail: action.gravatarEmail,
    };
  case UPDATE_SCORE:
    return { ...state, score: action.score, assertions: action.assertions };
  default:
    return state;
  }
};

export default playerReducer;
