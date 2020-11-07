import * as actionTypes from "../types/actionTypes"

const initialState = {
  data: [],
  filteredData: [],
  error: false,
  loading: false,
  message: '',
};

let stateSelected = 'all';
let genre = 'all';
let search = '';

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
        filteredData: action.payload,
        data: action.payload
      };
    case actionTypes.DATA_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
        message: `Error:  Could not retrieve data`
      };
    case actionTypes.FILTER_BY_VALUE:
      search = action.payload;
      return {
        ...state,
        search: action.payload,
        filteredData: allFilter(state, action.payload, 'search')
      };
    case actionTypes.FILTER_BY_STATE:
      stateSelected = action.payload;
      return {
        ...state,
        filteredData: allFilter(state, action.payload, 'state') 
      };
    case actionTypes.FILTER_BY_GENRE:
      genre = action.payload;
      return {
        ...state,
        filteredData: allFilter(state, action.payload, 'genre') 
      };
    default:
      return state;
  }
};

function allFilter(state: IData, value: string, type: string){

  let { data } = state;
  
  let newData = data;

  if((type === 'state' && value !== 'all') || stateSelected !== 'all') {
      newData = filterByState(newData, type === 'state' ? value : stateSelected)
  }
  if((type === 'genre' && value !== 'all') || genre !== 'all') {
    newData = filterByGenre(newData, type === 'genre' ? value : genre)
  }
  if(type === 'search' || search !== '') {
    newData = filterBySearch(newData, value)
  }
  return newData;
}

function filterByState(state: dataObject[], value: string){
  let newValue = value.toLowerCase()
  let filteredValues = state.filter(rest => {
    return rest.state.toLowerCase().includes(newValue);
  });
  return filteredValues
}

function filterByGenre(state: dataObject[], value: string){
  let newValue = value.toLowerCase()
  let filteredValues = state.filter(rest => {
    return rest.genre.toLowerCase().includes(newValue);
  });
  return filteredValues
}

function filterBySearch(state: dataObject[], value: string){
  let newValue = value.toLowerCase()

  let filteredValues = state.filter(rest => {
    return rest.name.toLowerCase().includes(newValue) ||
        rest.city.toLowerCase().includes(newValue) || 
        rest.genre.toLowerCase().includes(newValue);
  });
  return filteredValues
}