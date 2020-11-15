import restCall from '../../helpers/fetch-util';
import * as actionTypes from '../types/actionTypes';
import { Dispatch } from 'redux';

export const getData = (url: string) => {
  return async function (dispatch: Dispatch) {
    await restCall({
      url: url,
      method: 'get',
      successType: actionTypes.DATA_REQUEST_FULFILLED,
      errorType: actionTypes.DATA_REJECTED,
      dispatch,
    });
  };
};

export const filterByValue = (value: string) => ({
  type: actionTypes.FILTER_BY_VALUE,
  payload: value,
});

export const filterByState = (value: string) => ({
  type: actionTypes.FILTER_BY_STATE,
  payload: value,
});

export const filterByGenre = (value: string) => ({
  type: actionTypes.FILTER_BY_GENRE,
  payload: value,
});

export const filterByAttire = (value: string) => ({
  type: actionTypes.FILTER_BY_ATTIRE,
  payload: value,
});
