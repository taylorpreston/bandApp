console.log('hi')
console.log('what up homie')

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

// import headerSetup from './header-setup'
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import BandList from './components/band-list'

ReactDOM.render((
  <Router>
    <Route path="/" component={Home}>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
      <Route path="band_list" component={BandList}/>
    </Route>
  </Router>
),document.getElementById('app'));
