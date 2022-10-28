import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getItemFromLocalStorage } from '../../utils/localStorage';

class Ranking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    const ranking = getItemFromLocalStorage('ranking');
    const sortedRanking = ranking
      .sort((a, b) => b.score - a.score)
      .sort((a, b) => b.name - a.name);
    this.setState({
      ranking: sortedRanking,
    });
  }

  render() {
    const { history } = this.props;
    const { ranking } = this.state;

    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <section>
          <div>
            {ranking.map((player, index) => (
              <div key={ index }>
                <img src={ player.picture } alt="User Gravatar Profile" />
                <div data-testid={ `player-name-${index}` }>{ player.name }</div>
                <div data-testid={ `player-score-${index}` }>{ player.score }</div>
              </div>
            ))}
          </div>
        </section>
        <div>
          <button
            type="button"
            data-testid="btn-go-home"
            onClick={ () => history.push('/') }
          >
            Home
          </button>
        </div>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Ranking;
