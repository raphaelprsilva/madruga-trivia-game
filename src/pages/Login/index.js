import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';
import Button from '../../components/Button';

class Login extends Component {
  redirectToSettingsPage = () => {
    const { history } = this.props;
    history.push('/settings');
  };

  render() {
    const { props } = this;
    return (
      <>
        <LoginForm { ...props } />
        <Button
          name="Configurações"
          testId="btn-settings"
          onClick={ this.redirectToSettingsPage }
        />
      </>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
