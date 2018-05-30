import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import NewMenu from './pages/NewMenu';
import Header from './components/Header';
// import SavedMenu from './components/SavedMenu';
import Save from './pages/Save';

import {Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>

      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/newmenu' component={NewMenu} />
      <Route path='/saved' component={Save} />
      </Switch>
      </div>
    );
  }
}

export default App;
