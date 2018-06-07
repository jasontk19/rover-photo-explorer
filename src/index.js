import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { loadAllManifests } from './state/actions';
import { manifestsReducer as manifests } from './state/reducers';

import HomePage from './components/HomePage';
import { RoverDetails } from './components/RoverDetails';

const store = createStore(
  combineReducers({
    manifests
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
            <Route exact={true} path='/' component={HomePage}/>
            <Route path="/rover/:name" component={RoverDetails} />
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
