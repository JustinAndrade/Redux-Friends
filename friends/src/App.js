import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Friends from './components/Friends'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
        </ul>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friends' component={Friends} />
      </div>
    );
  }
}

export default App;
