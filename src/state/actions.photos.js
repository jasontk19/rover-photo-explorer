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
    let bookmarkedPhotos = localStorage.getItem(bookmarkedPhotosKey);
    let parsedPhotos = bookmarkedPhotos ? JSON.parse(bookmarkedPhotos) : [];
    return dispatch(loadBookmarkedPhotos(parsedPhotos))
  }
}

function addBookmark (bookmarkedPhotos, photo) {
  return [...bookmarkedPhotos].concat(photo);
}

function removeBookmark (bookmarkedPhotos, removePhoto) {
  return [...bookmarkedPhotos].filter(photo => removePhoto.id !== photo.id);
}

export function toggleBookmark (photo) {
  return dispatch => {
    let bookmarkedPhotos = localStorage.getItem(bookmarkedPhotosKey);
    let parsedPhotos = bookmarkedPhotos ? JSON.parse(bookmarkedPhotos) : [];
    let photoIsBookmarked = parsedPhotos.find(bookmarkedPhoto => photo.id === bookmarkedPhoto.id);
    let photos = photoIsBookmarked ? removeBookmark(parsedPhotos, photo) : addBookmark(parsedPhotos, photo);
    localStorage.setItem(bookmarkedPhotosKey, JSON.stringify(photos));
    return dispatch(loadBookmarkedPhotos(photos));
  }
}

export function clearBookmarks () {
  return dispatch => {
    localStorage.setItem(bookmarkedPhotosKey, '');
    return dispatch(loadBookmarkedPhotos([]))
  }
}