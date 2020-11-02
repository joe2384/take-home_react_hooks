import restCall from '../../helpers/fetch-util';
import * as actionTypes from "../types/actionTypes"
import { Dispatch } from 'redux';

export const getData = () => {
  return async function(dispatch: Dispatch) {
    await restCall({
      url: ``,
      method: 'get',
      startType: actionTypes.DATA_PENDING,
      successType: actionTypes.DATA_REQUEST_FULFILLED,
      errorType: actionTypes.DATA_REJECTED,
      dispatch
    });
  }
};
