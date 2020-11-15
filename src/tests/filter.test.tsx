import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getData } from '../store/actions/action';
import { TableContainer } from '../containers/tableContainer';
import mapDispatchToProps from '../containers/tableContainer';
import mapStateToProps from '../containers/tableContainer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, ReactWrapper } from 'enzyme';
import { array } from './testHelpers';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<TableContainer />', () => {
  let wrapper: any, store: any, actions: any, data: string[];

  beforeEach(async () => {
    // const initialState = {
    //   data: data,
    //   filteredData: data
    // };

    // type Props = ReturnType<typeof mapStateToProps> &
    // ReturnType<typeof mapDispatchToProps>

    const initialState = {
      data: [],
      filteredData: [],
    };

    store = mockStore(initialState);

    actions = store.getActions();

    // const data = await store.dispatch(getData());

    // wrapper = shallow(
    //   <Provider store={store}>
    //     <TableContainer data={data} filteredData={data} getData={store.dispatch(getData())}/>
    //   </Provider>
    // );

    wrapper = shallow(
      <TableContainer data={[]} filteredData={[]} getData={getData} />
    );

    // wrapper = shallow(<Provider store={store}><TableContainer/></Provider>).dive();

    // console.log("WRAPPER = ",wrapper.debug())
  });

  it('should render TableContainer', () => {
    const container = wrapper.find('h1');
    // expect(container.text()).toContain("Search")
  });

  // it('should render TableContainer', () => {
  //   const container = wrapper.find("h1")
  //   // expect(container.text()).toContain("Search")
  // });

  // it('should render TableContainer', () => {
  //   const dispatch = jest.fn();

  //   // expect(actions).toEqual([expectedPayload])
  // });
});
