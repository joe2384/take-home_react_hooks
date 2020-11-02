import * as actionTypes from "../types/actionTypes"

const initialState = {
  data: [],
  error: false,
  loading: false,
  message: ''
};

export default (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case actionTypes.DATA_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.DATA_REQUEST_FULFILLED:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    case actionTypes.DATA_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        message: `Error:  Could not receive family preferences`
      };
    default:
      return state;
  }
};
