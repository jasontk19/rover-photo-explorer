import 'babel-polyfill';
import 'typeface-roboto';
import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { loadAllManifests } from '../state/actions.manifests';
import { retrieveBookmarkedPhotos } from '../state/actions.photos';
import {
  manifestsReducer as manifests,
  photosReducer as photos,
  bookmarkPhotosReducer as bookmarkedPhotos
} from '../state/reducers';

import { Header } from '../components/Header';
import RoversPage from '../components/RoversPage';
import BookmarksPage from '../components/BookmarksPage';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#263238",
      main: "#263238",
      dark: "#263238",
    },
    secondary: {
      light: "#bf360c",
      main: "#bf360c",
      dark: "#bf360c"
    },
    text: {
      primary: "#000000",
      secondary: "#ffc107"
    },
    background: {
      paper: "#a1887f",
      default: "#a1887f"
    },
    action: {
      disabled: "rgba(255, 255, 255, 0.54)"
    },
  }
});

const styles = theme => ({
});

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
          <MuiThemeProvider theme={theme}>
            <div className={this.props.classes.root}>
              <Header/>
              <Route exact={true} path='/' render={ (props) => <RoversPage {...props} /> }/>
              <Route exact={true} path='/bookmarks' render={ (props) => <BookmarksPage {...props} /> }/>
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    )
  }
}

export default withStyles(styles)(App);
