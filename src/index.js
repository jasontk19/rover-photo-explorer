import 'babel-polyfill'; //Need for Object.assign used with Redux
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './state/configureStore';

import {HomePage} from './components/HomePage'
import {RoverDetails} from './components/RoverDetails';

const store = configureStore();
// store.dispatch(loadCourses());

ReactDOM.render (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact={true} path='/' component={HomePage}/>
        <Route path="/rover/:name" component={RoverDetails} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
