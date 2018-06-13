import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { loadAllManifests } from './state/actions';
import {
  manifestsReducer as manifests,
  photosReducer as photos
} from './state/reducers';

import Header from './components/Header';
import HomePage from './components/HomePage';
import RoversPage from './components/RoversPage';

const store = createStore(
  combineReducers({
    manifests,
    photos
  }),
  applyMiddleware(thunk)
);

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    store.dispatch(loadAllManifests());
  }
  render() {
    return (

      <Provider store={store}>
        <Router>
          <div>
            <Header/>
            <Route exact={true}
                   path='/'
                   render={ (props) => <HomePage {...props} /> }/>
            <Route path="/photoSearch/"
                   render={ (props) => <RoversPage {...props} /> }/>
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render (
  <App/>,
  document.getElementById('root')
);
