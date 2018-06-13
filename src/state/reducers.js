import * as actionTypes from './action.constants';
import { roverNames } from '../constants';

const initialManifests = roverNames.reduce((manifests, rover) => {
  manifests[rover] = {};
  return manifests;
}, {});

export function manifestsReducer (state = initialManifests, action) {
  switch (action.type) {
    case actionTypes.REQUEST_ALL_MANIFESTS: {
      return state;
    }
    case actionTypes.RECEIVE_ALL_MANIFESTS: {
      return Object.assign({}, state, action.manifests);
    }
    default: {
      return state;
    }
  }
}

export function photosReducer (state = [], action) {
  switch (action.type) {
    case actionTypes.RECEIVE_PHOTOS: {
      return state = [].concat(action.photos);
    }
    case actionTypes.CLEAR_PHOTOS: {
      return state = []
    }
    default: {
      return state;
    }
  }
}