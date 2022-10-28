import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { Login, Game, Settings, Ranking } from './pages';
import Feedbacks from './pages/Feedbacks';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route path="/game" render={ (props) => <Game { ...props } /> } />
        <Route path="/settings" render={ (props) => <Settings { ...props } /> } />
        <Route path="/feedbacks" render={ (props) => <Feedbacks { ...props } /> } />
        <Route path="/ranking" render={ (props) => <Ranking { ...props } /> } />
      </Switch>
    );
  }
}

export default App;
