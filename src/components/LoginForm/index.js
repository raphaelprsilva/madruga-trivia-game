import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../Button';
import Form from '../Form';
import Input from '../Input';

import { fetchToken, login } from '../../redux/actions';
import { setItemToLocalStorage } from '../../utils/localStorage';

import getGravatarURL from '../../utils/gravatar';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      usernameError: false,
      email: '',
      emailError: false,
      isDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => this.validateFormFields(),
    );
  };

  validateEmail = (email) => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const isValidEmail = emailRegex.test(String(email).toLowerCase());
    if (!isValidEmail) {
      this.setState({
        emailError: true,
      });
      return false;
    }
    this.setState({
      emailError: false,
      email: email.toLowerCase(),
    });
    return true;
  };

  validateUsername = () => {
    const { username } = this.state;
    const minLength = 5;
    if (username.length < minLength) {
      this.setState({
        usernameError: true,
      });
      return false;
    }
    this.setState({
      usernameError: false,
      username,
    });
    return true;
  };

  validateFormFields = () => {
    const { username, email } = this.state;
    const isValidUsername = this.validateUsername(username);
    const isValidEmail = this.validateEmail(email);
    const isDisabled = !isValidUsername || !isValidEmail;

    this.setState({
      isDisabled,
    });
  };

  doLogin = async (event) => {
    event.preventDefault();
    const { username, email } = this.state;
    const {
      history,
      fetchToken: fetchTokenAction,
      login: loginAction,
    } = this.props;
    const userData = { name: username, gravatarEmail: email };
    const gravatarURL = getGravatarURL(userData.gravatarEmail);

    setItemToLocalStorage('user', { ...userData, gravatarURL });
    loginAction(userData);

    await fetchTokenAction();
    history.push('/game');
  };

  render() {
    const { username, email, isDisabled, emailError, usernameError } = this.state;

    return (
      <Form>
        <Input
          type="text"
          name="username"
          label="Usuário"
          placeholder="Seu nome aqui"
          value={ username }
          onChange={ this.handleChange }
          testId="input-player-name"
          error={ usernameError }
          errorMessage="O nome do usuário deve ter pelo menos 5 caracteres"
        />
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Seu email aqui"
          value={ email }
          onChange={ this.handleChange }
          testId="input-gravatar-email"
          error={ emailError }
          errorMessage="O email deve ser válido"
        />
        <Button
          name="Play"
          testId="btn-play"
          type="submit"
          isDisabled={ isDisabled }
          onClick={ this.doLogin }
        />
      </Form>
    );
  }
}

LoginForm.propTypes = {
  fetchToken: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(fetchToken()),
  login: (userData) => dispatch(login(userData)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
