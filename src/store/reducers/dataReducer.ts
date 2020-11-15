import * as actionTypes from "../types/actionTypes"

const initialState = {
  data: [],
  filteredData: [],
  error: false,
  message: '',
  search: '',
  stateSelectedTest: 'all',
  genre: 'all',
  attire: 'all'

};

let stateSelected: string = 'all';
let genre: string = 'all';
let attire: string = 'all';
let search: string = '';
let filtered: any = null;


export default (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case actionTypes.DATA_REQUEST_FULFILLED:
      return {
        ...state,
        data: action.payload,
        filteredData: allFilter(action.payload, '', ''),
      };
    case actionTypes.DATA_REJECTED:
      return {
        ...state,
        error: true,
        message: action.message
      };
    case actionTypes.FILTER_BY_VALUE:
      search = action.payload;
      filtered = allFilter(state.data, action.payload, 'search')
      return {
        ...state,
        search: action.payload,
        filteredData: filtered
      };
    case actionTypes.FILTER_BY_STATE:
      stateSelected = action.payload;
      filtered = allFilter(state.data, action.payload, 'state')
      console.log('action.payload',action.payload)
      return {
        ...state,
        stateSelectedTest: action.payload,
        filteredData: filtered 
      };
    case actionTypes.FILTER_BY_GENRE:
      genre = action.payload;
      filtered = allFilter(state.data, action.payload, 'genre')
      return {
        ...state,
        genre: action.payload,
        filteredData: filtered 
      };
    case actionTypes.FILTER_BY_ATTIRE:
      attire = action.payload;
      filtered = allFilter(state.data, action.payload, 'attire')
      return {
        ...state,
        attire: action.payload,
        filteredData: filtered 
      };
    default:
      return state;
  }
};





function allFilter(data: dataObject[], value: string, type: string){

  let newData = [...data];

  if((type === 'state' && value !== 'all') || stateSelected !== 'all') {
      newData = filterByDropDown(newData, 'state', type === 'state' ? value : stateSelected)
  }
  if((type === 'genre' && value !== 'all') || genre !== 'all') {
    newData = filterByDropDown(newData, 'genre', type === 'genre' ? value : genre)
  }
  if((type === 'attire' && value !== 'all') || attire !== 'all') {
    newData = filterByDropDown(newData, 'attire', type === 'attire' ? value : attire)
  }
  if(type === 'search' || search !== '') {
    newData = filterBySearch(newData, value)
  }

  newData = newData.sort((a, b) => a.city.localeCompare(b.city));

  return Array.from({length: Math.ceil(newData.length / 10)}, () => newData.splice(0,10));
}

function filterByDropDown(state: dataObject[], type: string, value: string){
  let newValue = value.toLowerCase()
  let filteredValues = state.filter(rest => rest[type].toLowerCase().includes(newValue));
  return filteredValues
}

function filterBySearch(state: dataObject[], value: string){
  let newValue = value.toLowerCase()

  let filteredValues = state.filter(rest => 
    rest.name.toLowerCase().includes(newValue) ||
    rest.city.toLowerCase().includes(newValue) || 
    rest.genre.toLowerCase().includes(newValue));

  return filteredValues
}