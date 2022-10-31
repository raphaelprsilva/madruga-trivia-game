import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

class Answer extends Component {
  render() {
    const {
      question,
      answers,
      isButtonsDisabled,
      isAnswerCorrect,
      handleClick,
    } = this.props;
    const questionCategoryAndDifficulty = (
      <S.QuestionHeader>
        <S.QuestionItem>
          <p>Question Category:</p>
          <p data-testid="question-category">{question.category}</p>
        </S.QuestionItem>
        <S.QuestionItem>
          <p>Question Difficulty:</p>
          <p>{question.difficulty}</p>
        </S.QuestionItem>
      </S.QuestionHeader>
    );
    const questionText = (
      <S.Question>
        <p data-testid="question-text">{question.question}</p>
      </S.Question>
    );
    const greenBorder = '3px solid rgb(6, 240, 15)';
    const redBorder = '3px solid rgb(255, 0, 0)';

    return (
      <S.TimerContainer key={ question.question }>
        {questionCategoryAndDifficulty}
        {questionText}
        <S.AnswerContainer
          data-testid="answer-options"
          data-difficulty={ question.difficulty }
        >
          {answers.map((answer, index) => {
            const correctAnswer = question.correct_answer === answer;
            const questionStyle = correctAnswer ? greenBorder : redBorder;
            const answerTestId = correctAnswer
              ? 'correct-answer'
              : `wrong-answer-${index}`;
            const borderStyle = isAnswerCorrect === null
              ? '1px solid blue' : questionStyle;

            return (
              <S.AnswerItem
                type="button"
                disabled={ isButtonsDisabled }
                data-testid={ answerTestId }
                key={ answer }
                style={ { border: borderStyle } }
                onClick={ (event) => handleClick(event) }
              >
                {answer}
              </S.AnswerItem>
            );
          })}
        </S.AnswerContainer>
      </S.TimerContainer>
    );
  }
}

Answer.defaultProps = {
  isAnswerCorrect: null,
  isButtonsDisabled: false,
};

Answer.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  question: PropTypes.shape({
    category: PropTypes.string,
    correct_answer: PropTypes.string,
    difficulty: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
    question: PropTypes.string,
  }).isRequired,
  isButtonsDisabled: PropTypes.bool,
  isAnswerCorrect: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default Answer;
