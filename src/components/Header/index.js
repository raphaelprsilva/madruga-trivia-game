import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import madrugaGameLogo from '../../assets/images/madruga-game-logo.png';
import { getItemFromLocalStorage } from '../../utils/localStorage';

import * as S from './styled';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      gravatarURL: '',
    };
  }

  componentDidMount() {
    const playerData = getItemFromLocalStorage('user');
    const { name, gravatarURL } = playerData;
    this.setState({
      username: name,
      gravatarURL,
    });
  }

  render() {
    const { username, gravatarURL } = this.state;
    const { score } = this.props;

    return (
      <S.HeaderWrapper>
        <S.LogoImg src={ madrugaGameLogo } alt="Madruga Game Logo" />
        <S.UserDataWrapper>
          <S.UserDataWrapperItem>
            <S.ProfileImg
              src={ gravatarURL }
              alt="User Gravatar Profile"
              data-testid="header-profile-picture"
            />
            <span data-testid="header-player-name">{username}</span>
          </S.UserDataWrapperItem>
          <S.UserDataWrapperItem>
            <span>Score:</span>
            <span data-testid="header-score">{score}</span>
          </S.UserDataWrapperItem>
        </S.UserDataWrapper>
      </S.HeaderWrapper>
    );
  }
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
  score: state.player.score,
});

export default connect(mapStateToProps, null)(Header);
