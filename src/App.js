import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { Login, Game } from './pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route path="/game" render={ (props) => <Game { ...props } /> } />
      </Switch>
    );
  }
}

export default App;
