import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Answer from '../../components/Answer';
import { getQuestionsFromAPI } from '../../services/API';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAnswerCorrect: null,
      hasUserAnswered: false,
      questionTimer: 30,
      isButtonsDisabled: false,
      questions: [],
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
    const questionsFromAPI = await getQuestionsFromAPI();
    const questionsResult = questionsFromAPI.results;
    const questions = questionsResult.map((question) => ({
      ...question,
      answers: this.sortAnswers(
        question.incorrect_answers.concat(question.correct_answer),
      ),
    }));
    this.setState({ questions });
  };

  handleClick = (event) => {
    const answerTestId = event.target.dataset.testid;
    if (answerTestId === 'correct-answer') {
      this.setState({
        isAnswerCorrect: true,
        isButtonsDisabled: true,
        hasUserAnswered: true,
      });
    } else {
      this.setState({
        isAnswerCorrect: false,
        isButtonsDisabled: true,
        hasUserAnswered: true,
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
        });
      } else {
        this.setState((prevState) => ({
          questionTimer: prevState.questionTimer - 1,
        }));
      }
    }, ONE_SECOND);
  };

  renderQuestions = () => {
    const { isAnswerCorrect, isButtonsDisabled } = this.state;
    const { questions } = this.state;

    const questionsToRender = questions
      ? questions
        .filter((question, index) => index === 0)
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

  render() {
    const { questionTimer } = this.state;
    const questionsToRender = this.renderQuestions();

    return (
      <Layout>
        <h1>Game</h1>
        <div>
          <div>
            <p>Timer:</p>
            <p>{questionTimer}</p>
          </div>
          <div>{questionsToRender}</div>
        </div>
      </Layout>
    );
  }
}

export default Game;
