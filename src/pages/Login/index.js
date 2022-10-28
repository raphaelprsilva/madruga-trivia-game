import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';
import Button from '../../components/Button';
import Img from '../../components/Img';

import madrguaTriviaGameLogo from '../../assets/images/madruga-game-pink-logo.png';

import * as S from './styled';

class Login extends Component {
  redirectToSettingsPage = () => {
    const { history } = this.props;
    history.push('/settings');
  };

  render() {
    const { props } = this;
    return (
      <S.FormPageWrapper>
        <Img
          src={ madrguaTriviaGameLogo }
          alt="Logo"
        />
        <S.FormButtonWrapper>
          <LoginForm { ...props } />
          <Button
            name="Configurações"
            testId="btn-settings"
            onClick={ this.redirectToSettingsPage }
          />
        </S.FormButtonWrapper>
      </S.FormPageWrapper>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
