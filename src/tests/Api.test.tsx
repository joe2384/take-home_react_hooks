import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { getData } from '../store/actions/action'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';


configure({adapter: new Adapter()});
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('<TableContainer />', () => {

  let store: any, actions: any;

  beforeEach( async () => {
    const initialState = {
      data: [], 
      filteredData: []
    };

    store = mockStore(initialState);

    actions = store.getActions();

  })

  it("should return correct action type", async () => {
    await store.dispatch(getData(`/api/restaurants`));
    expect(actions[0].type).toEqual("DATA_REQUEST_FULFILLED")
  });

  it("should return correct restaurant object", async () => {
    await store.dispatch(getData(`/api/restaurants`));
    expect(actions[0].payload[0]).toEqual({
      id: 'f223fdd0-4adc-423e-9747-980a66c256ca',
      name: 'Old Hickory Steakhouse',
      address1: '201 Waterfront St',
      city: 'Oxon Hill',
      state: 'MD',
      zip: '20745',
      lat: '38.782098',
      long: '-77.017492',
      telephone: '(301) 965-4000',
      tags: 'Social,Food and Dining,Restaurants,Steakhouses',
      website: 'http://www.gaylordnational.com',
      genre: 'Steak,American,Contemporary,Seafood,Cafe',
      hours: 'Open Daily 5:30 PM-10:00 PM',
      attire: 'business casual'
    })
  });

  it("data array length should = 38", async () => {
    await store.dispatch(getData(`/api/restaurants`));
    expect(actions[0].payload.length).toEqual(38)
  });

});


