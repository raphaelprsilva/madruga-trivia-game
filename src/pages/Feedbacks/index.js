import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import Feedback from '../../components/Feedback/index';
import Button from '../../components/Button';

import { getItemFromLocalStorage, setItemToLocalStorage } from '../../utils/localStorage';

import * as S from './styled';

const CORRECTS_ANSWERS = 3;

class Feedbacks extends Component {
  renderFeedback = (assertions) => {
    if (assertions < CORRECTS_ANSWERS) {
      return (
        <Feedback
          message="Could be better..."
          imageSrc="https://media.giphy.com/media/1qhAeOZnZUm8oEauce/giphy.gif"
        />
      );
    }
    if (assertions >= CORRECTS_ANSWERS) {
      return (
        <Feedback
          message="Well Done!"
          imageSrc="https://media.giphy.com/media/d31w24psGYeekCZy/giphy.gif"
        />
      );
    }
  };

  setPlayerDataToRanking = () => {
    const { assertions, score } = this.props;
    const playerData = getItemFromLocalStorage('user');
    const { name, gravatarURL } = playerData;
    const userDataToRanking = {
      name,
      score,
      picture: gravatarURL,
      assertions,
    };
    const ranking = getItemFromLocalStorage('ranking');

    if (!ranking) {
      setItemToLocalStorage('ranking', [userDataToRanking]);
    } else {
      const userAlreadyExists = ranking.some((user) => user.name === name);
      if (userAlreadyExists) {
        const newRanking = ranking.map((user) => {
          if (user.name === name) {
            return userDataToRanking;
          }
          return user;
        });
        setItemToLocalStorage('ranking', newRanking);
      } else {
        const rankingUpdated = [...ranking, userDataToRanking];
        setItemToLocalStorage('ranking', rankingUpdated);
      }
    }
  };

  redirectToRanking = () => {
    const { history } = this.props;
    this.setPlayerDataToRanking();
    history.push('/ranking');
  };

  render() {
    const { assertions, score, history } = this.props;
    const feedback = this.renderFeedback(assertions);
    return (
      <Layout>
        <S.FeedbackContainer>
          <S.FeedbackHeader data-testid="feedback-text">
            <h1>Feedbacks</h1>
          </S.FeedbackHeader>
          <div>
            <S.FeedbackItemContainer
              data-testid="feedback-total-score"
              title="user score"
            >
              <S.FeedbackItemElement>Final Score:</S.FeedbackItemElement>
              <S.FeedbackItemElement>{score}</S.FeedbackItemElement>
            </S.FeedbackItemContainer>
            <S.FeedbackItemContainer
              data-testid="feedback-total-question"
              title="user assertions"
            >
              <S.FeedbackItemElement>Player Assertions:</S.FeedbackItemElement>
              <S.FeedbackItemElement>{assertions}</S.FeedbackItemElement>
            </S.FeedbackItemContainer>
          </div>
          <div>{feedback}</div>
          <div>
            <Button
              type="button"
              data-testid="btn-play-again"
              onClick={ () => history.push('/') }
              name="Play Again"
            />
            <Button
              type="button"
              data-testid="btn-ranking"
              onClick={ () => this.redirectToRanking() }
              name="Ranking"
            />
          </div>
        </S.FeedbackContainer>
      </Layout>
    );
  }
}

Feedbacks.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps, null)(Feedbacks);
