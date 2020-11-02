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
    startType,
    successType,
    errorType,
    dispatch
  } = params;
  if (startType) {
    dispatch({ type: startType });
  }
  const axVars = {
    url: `${settings.restEngine}${url}`,
    method
  };
  return instance(axVars)
  .then(resp => {
    console.log("LOGGER",resp)
    dispatch({ type: successType, payload: resp.data })
  })
  .catch(error => {
    console.log("LOGGER error",error)
    if(error.response){
      dispatch({ type: errorType, payload: {} })
    }
  })
}