import axios from 'axios';
import * as actionTypes from './action.constants';
import { apiKey, baseUrl } from '../constants';

const bookmarkedPhotosKey = 'bookmarkedPhotos';

function receivePhotos (photos) {
  return {
    type: actionTypes.RECEIVE_PHOTOS,
    photos: photos
  }
}

export function clearPhotos () {
  return {
    type: actionTypes.CLEAR_PHOTOS
  }
}

function bookmarkPhotoState (photoToBookmark) {
  return {
    type: actionTypes.BOOKMARK_PHOTO,
    photo: photoToBookmark
  }
}

function loadBookmarkedPhotos (photos) {
  return {
    type: actionTypes.RETRIEVE_BOOKMARKED_PHOTOS,
    bookmarkedPhotos: photos
  }
  
}

export function requestPhotos (rover, params) {
  return dispatch => {
    const requestUrl = baseUrl + 'rovers/' + rover.toLowerCase() + '/photos';
    let config = {
      params: { api_key: apiKey }
    };
    Object.assign(config.params, params);
    return axios.get(requestUrl, config).then(response => {
      return dispatch(receivePhotos(response.data.photos));
    })
  }
}

export function retrieveBookmarkedPhotos () {
  return dispatch => {
    const bookmarkedPhotos = JSON.parse(localStorage.getItem(bookmarkedPhotosKey)) || [];
    return dispatch(loadBookmarkedPhotos(bookmarkedPhotos))
  }
}

export function bookmarkPhoto (photo) {
  return dispatch => {
    const savedPhotos = localStorage.getItem(bookmarkedPhotosKey);
    const parsedPhotos = JSON.parse(savedPhotos) || [];
    const newSavedPhotos = [...parsedPhotos].concat(photo);
    localStorage.setItem(bookmarkedPhotosKey, JSON.stringify(newSavedPhotos));
    return dispatch(loadBookmarkedPhotos(newSavedPhotos));
  }
}