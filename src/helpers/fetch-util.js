import axios from 'axios';
import settings from '../settings/settings.development.json';

const instance = axios.create({
  baseURL: settings.restEngine,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default function restCall(params) {
  const {
    url,
    method,
    startType,
    successType,
    errorType,
    dispatch
  } = params;
    if (startType) {
    dispatch({ type: startType });
  }
  axios({
    method: method,
    url: `${settings.restEngine}${url}`,
  })
  .then(resp => {
    dispatch({ type: successType, payload: resp.data })
  })
  .catch(error => {
    if(error.response){
      dispatch({ type: errorType, payload: {} })
    }
  })
}