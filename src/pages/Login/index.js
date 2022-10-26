import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';

class Login extends Component {
  render() {
    const { props } = this;
    return <LoginForm { ...props } />;
  }
}

export default Login;
