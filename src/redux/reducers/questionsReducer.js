import {
  REQUEST_QUESTION_SUCCESS,
  REQUEST_QUESTION_FAILURE,
  REQUEST_QUESTION,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
};

const questionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_QUESTION:
    return {
      ...state,
      isFetching: true,
    };
  case REQUEST_QUESTION_SUCCESS:
    return {
      ...state,
      isFetching: false,
      questions: action.questions,
    };
  case REQUEST_QUESTION_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default questionsReducer;
