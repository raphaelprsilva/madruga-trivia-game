import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getItemFromLocalStorage } from '../../utils/localStorage';

import * as S from './styled';
import Button from '../../components/Button';

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
      <S.RankingContainer>
        <S.RankingTitle data-testid="ranking-title">Ranking</S.RankingTitle>
        <Button
          type="button"
          data-testid="btn-go-home"
          onClick={ () => history.push('/') }
          name="Go Home"
        />
        <S.RankingItemsContainer>
          {ranking.map((player, index) => (
            <S.RankingItem key={ index }>
              <img src={ player.picture } alt="User Gravatar Profile" />
              <S.RankingItemInfo data-testid={ `player-name-${index}` }>
                <p>player name:</p>
                <p>{player.name}</p>
              </S.RankingItemInfo>
              <S.RankingItemInfo data-testid={ `player-score-${index}` }>
                <p>player score:</p>
                <p>{player.score}</p>
              </S.RankingItemInfo>
            </S.RankingItem>
          ))}
        </S.RankingItemsContainer>
      </S.RankingContainer>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Ranking;
