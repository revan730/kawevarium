import axios from 'axios';
import backend  from '../config/Backend';
import { loadToken } from './token';

export const GET_EXCHANGES = 'kv/exchanges/LOAD';
export const GET_EXCHANGES_SUCCESS = 'kv/exchanges/LOAD_SUCCESS';
export const GET_EXCHANGES_FAIL = 'kv/exchanges/LOAD_FAIL';

export const GET_FABRICATIONS = 'kv/fabrications/LOAD';
export const GET_FABRICATIONS_SUCCESS = 'kv/fabrications/LOAD_SUCCESS';
export const GET_FABRICATIONS_FAIL = 'kv/fabrications/LOAD_FAIL';

export const GET_LOCATIONS = 'kv/locations/LOAD';
export const GET_LOCATIONS_SUCCESS = 'kv/locations/LOAD_SUCCESS';
export const GET_LOCATIONS_FAIL = 'kv/locations/LOAD_FAIL';

export default function reducer(state = { exchanges: [],
 fabs: [], locations: [] }, action) {
  switch (action.type) {
    case GET_EXCHANGES: 
      return { ...state, loadingEx: true };
    case GET_EXCHANGES_SUCCESS:
      return { ...state, loadingEx: false,
       exchanges: action.payload.data.results };
    case GET_EXCHANGES_FAIL:
      return { ...state, loadingEx: false, errorEx: 'Failed to load :(' };
    case GET_FABRICATIONS: 
      return { ...state, loadingFabs: true };
    case GET_FABRICATIONS_SUCCESS:
      return { ...state, loadingFabs: false,
       fabs: action.payload.data.results };
    case GET_FABRICATIONS_FAIL:
      console.log('wtf:', action);
      return { ...state, loadingFabs: false, errorFabs: 'Failed to load :(' };
    case GET_LOCATIONS: 
      return { ...state, loadingLocs: true };
    case GET_LOCATIONS_SUCCESS:
      return { ...state, loadingLocs: false,
       locations: action.payload.data.results };
    case GET_LOCATIONS_FAIL:
      return { ...state, loadingLocs: false, errorLocs: 'Failed to load :(' };
    default:
      return state;
  }
};

export function listExchanges(token, locationId) {
  let location = '';
  if (locationId && locationId !== -1) {
    console.log('selected location: ', locationId);
    location = `?location=${locationId}`;
  }
  return {
    type: GET_EXCHANGES,
    payload: {
      request: {
        url: 'exchanges/' + location,
        headers: {
          'Authorization': `FICT ${token}`
        }
      }
    }
  }
}

export function listFabs(token, locationId) {
  let location = '';
  if (locationId && locationId !== -1) {
    console.log('selected location: ', locationId);
    location = `?location=${locationId}`;
  }
  return {
    type: GET_FABRICATIONS,
    payload: {
      request: {
        url: 'fabrications/' + location,
        headers: {
          'Authorization': `FICT ${token}`
        }
      }
    }
  }
}

export function listLocations(token) {
  return {
    type: GET_LOCATIONS,
    payload: {
      request: {
        url: 'locations'
      }
    }
  }
}