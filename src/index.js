// import 'babel-polyfill'; //Need for Object.assign used with Redux
import React from 'react';
import {render} from 'react-dom';
import { Router, BrowserRouter } from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
// import configureStore from './store/configureStore';

// const store = configureStore();
// store.dispatch(loadCourses());

render (
  <Provider>
    <Router routes={routes} />
  </Provider>,
  document.getElementById('root')
);
