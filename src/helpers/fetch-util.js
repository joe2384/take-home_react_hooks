import axios from 'axios';
import settings from '../settings/settings.development.json';

const instance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Api-Key ${settings.api_key}`  }
});

export default function restCall(params) {
  const {
    url,
    method,
    successType,
    errorType,
    dispatch
  } = params;
  const axVars = {
    url: `${settings.restEngine}${url}`,
    method
  };
  return instance(axVars)
  .then(resp => {
    dispatch({ type: successType, payload: resp.data })
  })
  .catch(error => {
    dispatch({ type: errorType, message: 'Error: No restaurants to return' })
  })
}