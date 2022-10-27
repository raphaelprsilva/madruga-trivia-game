import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div>
        <p data-testid="question-category">{question.category}</p>
        <p>{question.difficulty}</p>
      </div>
    );
    const questionText = (
      <div>
        <p data-testid="question-text">{question.question}</p>
      </div>
    );
    const greenBorder = '3px solid rgb(6, 240, 15)';
    const redBorder = '3px solid rgb(255, 0, 0)';

    return (
      <div key={ question.question }>
        {questionCategoryAndDifficulty}
        {questionText}
        <div data-testid="answer-options">
          {answers.map((answer, index) => {
            const correctAnswer = question.correct_answer === answer;
            const questionStyle = correctAnswer ? greenBorder : redBorder;
            const answerTestId = correctAnswer
              ? 'correct-answer'
              : `wrong-answer-${index}`;
            const borderStyle = isAnswerCorrect === null
              ? '1px solid blue' : questionStyle;

            return (
              <button
                type="button"
                disabled={ isButtonsDisabled }
                data-testid={ answerTestId }
                key={ answer }
                style={ { border: borderStyle } }
                onClick={ (event) => handleClick(event) }
              >
                {answer}
              </button>
            );
          })}
        </div>
      </div>
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
