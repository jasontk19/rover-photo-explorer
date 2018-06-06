import React from 'react';
import {Route} from 'react-router';
import App from './App';
import {HomePage} from './components/HomePage';
import {RoverDetails} from './components/RoverDetails';

export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={HomePage} />
    <Route path="RoverDetails/:name" component={RoverDetails} />
  </Route>
);
