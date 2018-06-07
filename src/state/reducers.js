import * as actionTypes from './action.constants';
import { roverNames } from '../constants';

const initialManifests = roverNames.reduce((manifests, rover) => {
  manifests[rover] = {};
  return manifests;
}, {});

export function manifestsReducer (state = initialManifests, action) {
  switch (action.type) {
    case actionTypes.REQUEST_ALL_MANIFESTS: {
      return { ...state, loading: true }
    }
    case actionTypes.RECEIVE_ALL_MANIFESTS: {
      return {
        ...state,
        loading: false,
        manifests: action.manifests
      }
    }
    default: {
      return state;
    }
  }
}