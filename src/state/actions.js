import axios from 'axios';
import * as actionTypes from './action.constants';
import { roverNames } from '../constants';

const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/';
const apiKey = 'gicVq2GcghUmvg46UZZUe13R00JrsSYzb63mYbpd';

export function requestAllManifests () {
  return {
    type: actionTypes.REQUEST_ALL_MANIFESTS
  }
}

function receivePhotos (photos) {
  return {
    type: actionTypes.RECEIVE_PHOTOS,
    photos: photos
  }
}

function receiveAllManifests (allManifests) {
  return {
    type: actionTypes.RECEIVE_ALL_MANIFESTS,
    manifests: allManifests
  }
}

function formatManifests (responses) {
  let manifests = {};
  responses.forEach(response => {
    let data = response.data.photo_manifest;
    manifests[data.name] = data;
  });
  return manifests;
}

export function loadAllManifests () {
  return dispatch => {
    const requestUrl = baseUrl + 'manifests/';
    let config = {
      params: { api_key: apiKey }
    };
    let allRequests = roverNames.map(rover => ( axios.get(requestUrl + rover, config) ));
    dispatch(requestAllManifests());
    return axios.all(allRequests).then(response => {
      let formattedResponse = formatManifests(response);
      return dispatch(receiveAllManifests(formattedResponse));
    });
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

