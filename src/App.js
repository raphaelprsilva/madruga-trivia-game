import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
      </Switch>
    );
  }
}

export default App;
