import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getItemFromLocalStorage } from '../../utils/localStorage';

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
      <header>
        <h1>Trivia Game</h1>
        <img
          src={ gravatarURL }
          alt="User Gravatar Profile"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{ username }</p>
        <p data-testid="header-score">{ score }</p>
      </header>
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
