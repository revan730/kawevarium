import axios from 'axios';
import backend  from '../config/Backend';
import { loadToken } from './token';

export const GET_EXCHANGES = 'kv/exchanges/LOAD';
export const GET_EXCHANGES_SUCCESS = 'kv/exchanges/LOAD_SUCCESS';
export const GET_EXCHANGES_FAIL = 'kv/exchanges/LOAD_FAIL';

export default function reducer(state = { exchanges: [] }, action) {
  switch (action.type) {
    case GET_EXCHANGES: 
      return { ...state, loading: true };
    case GET_EXCHANGES_SUCCESS:
      return { ...state, loading: false,
       exchanges: action.payload.data.results };
    case GET_EXCHANGES_FAIL:
      return { ...state, loading: false, error: 'Failed to load :(' };
    default:
      return state;
  }
};

export function listExchanges(token) {
  console.log('token', token);
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