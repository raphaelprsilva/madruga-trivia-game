import React, { Component } from 'react';
import Button from '../Button';
import Form from '../Form';
import Input from '../Input';

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
        />
        {usernameError && (
          <p>O nome do usuário deve ter pelo menos 5 caracteres</p>
        )}
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Seu email aqui"
          value={ email }
          onChange={ this.handleChange }
          testId="input-gravatar-email"
        />
        {emailError && <p>Email Inválido</p>}
        <Button name="Play" testId="btn-play" isDisabled={ isDisabled } />
      </Form>
    );
  }
}

export default LoginForm;
