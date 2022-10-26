import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import getGravatarURL from '../../utils/gravatar';

class Header extends Component {
  render() {
    const { name, gravatarEmail, score } = this.props;

    const gravatarURL = getGravatarURL(gravatarEmail);

    return (
      <header>
        <h1>Trivia Game</h1>
        <img
          src={ gravatarURL }
          alt="User Gravatar Profile"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </header>
    );
  }
}

Header.propTypes = {
  gravatarEmail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
  score: state.player.score,
});

export default connect(mapStateToProps, null)(Header);
