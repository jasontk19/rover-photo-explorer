import * as actionTypes from './action.constants';
import { roverNames } from '../constants';

const initialManifests = roverNames.reduce((manifests, rover) => {
  manifests[rover] = {};
  return manifests;
}, {});

export function manifestsReducer (state = initialManifests, action) {
  switch (action.type) {
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

export function bookmarkPhotosReducer (state = [], action) {
  switch (action.type) {
    case actionTypes.BOOKMARK_PHOTO: {
      return state = [...state].concat(action.photo);
    }
    case actionTypes.RETRIEVE_BOOKMARKED_PHOTOS: {
      if (!action.bookmarkedPhotos) {
        return state;
      }
      return state = [...action.bookmarkedPhotos];
    }
    default: {
      return state;
    }
  }
}