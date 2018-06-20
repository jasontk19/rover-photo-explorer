import 'babel-polyfill';
import 'typeface-roboto';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { loadAllManifests } from './state/actions.manifests';
import { retrieveBookmarkedPhotos } from './state/actions.photos';
import {
  manifestsReducer as manifests,
  photosReducer as photos,
  bookmarkPhotosReducer as bookmarkedPhotos
} from './state/reducers';

import { Header } from './components/Header';
import RoversPage from './components/RoversPage';
import BookmarksPage from './components/BookmarksPage';

const store = createStore(
  combineReducers({
    manifests,
    photos,
    bookmarkedPhotos
  }),
  applyMiddleware(thunk)
);

class App extends Component {
  componentDidMount() {
    store.dispatch(loadAllManifests());
    store.dispatch(retrieveBookmarkedPhotos());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header/>
            <Route exact={true} path='/' render={ (props) => <RoversPage {...props} /> }/>
            <Route exact={true} path='/bookmarks' render={ (props) => <BookmarksPage {...props} /> }/>
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
