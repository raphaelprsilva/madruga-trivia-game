import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import Feedback from '../../components/Feedback/index';

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

  render() {
    const { assertions, score, history } = this.props;
    const feedback = this.renderFeedback(assertions);
    return (
      <Layout>
        <div data-testid="feedback-text">
          <h1>Feedbacks</h1>
        </div>
        <div>
          <div>Placar Final</div>
          <div data-testid="feedback-total-score" title="user score">
            {score}
          </div>
          <div data-testid="feedback-total-question" title="user assertions">
            {assertions}
          </div>
        </div>
        <div>{feedback}</div>
        <div>
          <button
            type="button"
            data-testid="btn-play-again"
            onClick={ () => history.push('/') }
          >
            Play Again
          </button>
          <button
            type="button"
            data-testid="btn-ranking"
            onClick={ () => history.push('/ranking') }
          >
            Ranking
          </button>
        </div>
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
