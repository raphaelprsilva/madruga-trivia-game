import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import Answer from '../../components/Answer';
import Button from '../../components/Button';

import { getQuestionsFromAPI } from '../../services/API';
import { updateScore } from '../../redux/actions';
import { getItemFromLocalStorage } from '../../utils/localStorage';

import * as S from './styled';

const difficulty = {
  easy: 1,
  medium: 2,
  hard: 3,
};
const SCORE_CONSTANT = 10;

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAnswerCorrect: null,
      hasUserAnswered: false,
      questionTimer: 30,
      isButtonsDisabled: false,
      questions: [],
      isNextQuestionRendered: false,
      currentQuestion: 0,
    };
  }

  async componentDidMount() {
    this.getQuestions();
    this.setQuestionTimer();
  }

  sortAnswers = (answers) => {
    const RANDON_FACTOR = 0.5;
    return answers.sort(() => Math.random() - RANDON_FACTOR);
  };

  getQuestions = async () => {
    const playerSettings = getItemFromLocalStorage('settings');
    const questionsFromAPI = await getQuestionsFromAPI(playerSettings);
    const questionsResult = questionsFromAPI.results;
    const questions = questionsResult.map((question) => ({
      ...question,
      answers: this.sortAnswers(
        question.incorrect_answers.concat(question.correct_answer),
      ),
    }));
    this.setState({ questions });
  };

  updateUserScore = (questionDifficulty) => {
    const { questionTimer: currentTimer } = this.state;
    const { score, assertions, updateScore: updateScoreAction } = this.props;
    const currentQuestionScore = SCORE_CONSTANT
      + (currentTimer + difficulty[questionDifficulty]);
    const userScore = score + currentQuestionScore;
    const userAssertions = assertions + 1;

    updateScoreAction(userScore, userAssertions);
  };

  handleClick = (event) => {
    const answerTestId = event.target.dataset.testid;
    const questionDifficulty = event.target.parentNode.dataset.difficulty;
    const isAnswerCorrect = answerTestId === 'correct-answer';

    if (isAnswerCorrect) {
      this.updateUserScore(questionDifficulty);

      this.setState({
        isAnswerCorrect: true,
        isButtonsDisabled: true,
        hasUserAnswered: true,
        isNextQuestionRendered: true,
      });
    } else {
      this.setState({
        isAnswerCorrect: false,
        isButtonsDisabled: true,
        hasUserAnswered: true,
        isNextQuestionRendered: true,
      });
    }
  };

  setQuestionTimer = () => {
    const ONE_SECOND = 1000;
    const ZERO_SECONDS = 0;
    const timer = setInterval(() => {
      const { questionTimer, hasUserAnswered } = this.state;
      if (questionTimer === ZERO_SECONDS || hasUserAnswered) {
        clearInterval(timer);
        this.setState({
          isAnswerCorrect: false,
          isButtonsDisabled: true,
          isNextQuestionRendered: true,
        });
      } else {
        this.setState((prevState) => ({
          questionTimer: prevState.questionTimer - 1,
        }));
      }
    }, ONE_SECOND);
  };

  renderQuestions = () => {
    const { isAnswerCorrect, isButtonsDisabled, currentQuestion } = this.state;
    const { questions } = this.state;

    const questionsToRender = questions
      ? questions
        .filter((question, index) => index === currentQuestion)
        .map((question) => (
          <Answer
            key={ question.question }
            question={ question }
            answers={ question.answers }
            isAnswerCorrect={ isAnswerCorrect }
            isButtonsDisabled={ isButtonsDisabled }
            handleClick={ this.handleClick }
          />
        ))
      : null;
    return questionsToRender;
  };

  handleNextQuestion = () => {
    const { currentQuestion, questions } = this.state;
    const isLastQuestion = currentQuestion === questions.length - 1;

    if (isLastQuestion) {
      const { history } = this.props;
      history.push('/feedbacks');
    } else {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        isAnswerCorrect: null,
        hasUserAnswered: false,
        questionTimer: 30,
        isButtonsDisabled: false,
        isNextQuestionRendered: false,
      }));
      this.setQuestionTimer();
    }
  };

  render() {
    const { questionTimer, isNextQuestionRendered } = this.state;
    const questionsToRender = this.renderQuestions();

    return (
      <Layout>
        <S.GameContainer>
          <S.TimerContainer>
            <S.TimerElement>Timer</S.TimerElement>
            <S.TimerCount>{questionTimer}</S.TimerCount>
          </S.TimerContainer>
          {questionsToRender}
          {isNextQuestionRendered ? (
            <Button
              type="button"
              onClick={ this.handleNextQuestion }
              data-testid="btn-next"
              name="Next"
            />
          ) : null}
        </S.GameContainer>
      </Layout>
    );
  }
}

Game.propTypes = {
  assertions: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  score: PropTypes.number.isRequired,
  updateScore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  updateScore: (score, assertions) => dispatch(updateScore(score, assertions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
