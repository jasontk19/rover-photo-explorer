import axios from 'axios';
import * as actionTypes from './action.constants';
import { roverNames, apiKey, baseUrl } from '../constants';

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
  /* TODO store in local storage after first request */
  return dispatch => {
    const requestUrl = baseUrl + 'manifests/';
    let config = {
      params: { api_key: apiKey }
    };
    let allRequests = roverNames.map(rover => ( axios.get(requestUrl + rover, config) ));
    return axios.all(allRequests).then(response => {
      let formattedResponse = formatManifests(response);
      return dispatch(receiveAllManifests(formattedResponse));
    });
  }
}