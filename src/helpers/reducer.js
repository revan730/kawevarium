import axios from 'axios';
import backend  from '../config/Backend';
import { loadToken } from './token';

export const GET_EXCHANGES = 'kv/exchanges/LOAD';
export const GET_EXCHANGES_SUCCESS = 'kv/exchanges/LOAD_SUCCESS';
export const GET_EXCHANGES_FAIL = 'kv/exchanges/LOAD_FAIL';

export const GET_FABRICATIONS = 'kv/fabrications/LOAD';
export const GET_FABRICATIONS_SUCCESS = 'kv/fabrications/LOAD_SUCCESS';
export const GET_FABRICATIONS_FAIL = 'kv/fabrications/LOAD_FAIL';

export default function reducer(state = { exchanges: [],
 fabs: [] }, action) {
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
      return { ...state, loadingFabs: false, errorFabs: 'Failed to load :(' };
    default:
      return state;
  }
};

export function listExchanges(token) {
  return {
    type: GET_EXCHANGES,
    payload: {
      request: {
        url: 'exchanges/',
        headers: {
          'Authorization': `FICT ${token}`
        }
      }
    }
  }
}

export function listFabs(token) {
  return {
    type: GET_FABRICATIONS,
    payload: {
      request: {
        url: 'fabrications/',
        headers: {
          'Authorization': `FICT ${token}`
        }
      }
    }
  }
}