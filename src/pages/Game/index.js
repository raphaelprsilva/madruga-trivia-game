import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';

const RANDON_FACTOR = 0.5;

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAnswerCorrect: null,
    };
  }

  handleClick = (event) => {
    const answerTestId = event.target.dataset.testid;
    if (answerTestId === 'correct-answer') {
      this.setState({
        isAnswerCorrect: true,
      });
    } else {
      this.setState({
        isAnswerCorrect: false,
      });
    }
  };

  render() {
    const { isAnswerCorrect } = this.state;
    const { questions, isFetching } = this.props;

    return (
      <Layout>
        <h1>Game</h1>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          questions
            .filter((question, index) => index === 0)
            .map((question) => (
              <div key={ question.question }>
                <div>
                  <p data-testid="question-category">{question.category}</p>
                  <p>{question.difficulty}</p>
                </div>
                <div>
                  <p data-testid="question-text">{question.question}</p>
                </div>
                <div data-testid="answer-options">
                  {[question.correct_answer, ...question.incorrect_answers]
                    .sort(() => Math.random() - RANDON_FACTOR)
                    .map((answer, index) => {
                      const correctAnswer = question.correct_answer === answer;
                      const questionStyle = correctAnswer
                        ? '3px solid rgb(6, 240, 15)'
                        : '3px solid rgb(255, 0, 0)';
                      return (
                        <button
                          type="button"
                          data-testid={
                            correctAnswer
                              ? 'correct-answer'
                              : `wrong-answer-${index}`
                          }
                          key={ answer }
                          style={ {
                            border:
                              isAnswerCorrect === null
                                ? '3px solid rgb(0, 0, 0)'
                                : questionStyle,
                          } }
                          onClick={ (event) => this.handleClick(event) }
                        >
                          {answer}
                        </button>
                      );
                    })}
                </div>
              </div>
            ))
        )}
      </Layout>
    );
  }
}

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: state.questionsData.isFetching,
  questions: state.questionsData.questions.results,
});

export default connect(mapStateToProps, null)(Game);
