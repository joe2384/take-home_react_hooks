interface ReduxAction {
  type: string;
  payload?: any;
  message?: string;
}

interface ReduxState {
  dataReducers: IData;
}

interface IData {
  data: dataObject[];
  filteredData: dataObject[];
  message: string;
  error: boolean;
  search: string;
  stateSelectedTest: string;
  genre: string;
  attire: string;
}

interface dataObject {
  address1: string;
  attire: string;
  city: string;
  genre: string;
  hours: string;
  id: string;
  lat: string;
  long: string;
  name: string;
  state: string;
  tags: string;
  telephone: string;
  website: string;
  zip: string;
}

interface TableContainerProps {
  getData: Function;
  filterByValue: Function;
  filterByState: Function;
  filterByGenre: Function;
  filterByAttire: Function;
  data: dataObject[];
  filteredData: dataObject[];
  message: string;
  error: boolean;
  search: string;
  stateSelectedTest: string;
  genre: string;
  attire: string;
}
