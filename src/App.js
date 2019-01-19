import React, { Component } from 'react';

import {
  Route,
  BrowserRouter, 
  Switch 
} from 'react-router-dom';

import Login from './views/Login';
import Profile from './views/Profile';
import Home from './views/Home';

import ProtectedRoute from './AppComponent/ProtectedRoute';
import AnonymousRoute from './AppComponent/AnonymousRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AnonymousRoute exact path="/login" name="Login" component={Login} />
          <ProtectedRoute path="/profile" name="Profile" component={Profile} />
          <Route exact path="/" name="Home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
