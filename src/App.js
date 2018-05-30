import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import NewMenu from './pages/NewMenu';
import Header from './components/Header';
import {Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
      <Switch>
      <Route path='/' exact component={Homepage} />
      <Route path='/newmenu' component={NewMenu} />
      </Switch>
      </div>
    );
  }
}

export default App;
