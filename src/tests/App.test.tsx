import React from 'react';
import { render } from '@testing-library/react';
import TableContainer from '../containers/App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

// test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
// });

describe('<TableContainer />', () => {
  configure({adapter: new Adapter()});

  it('should render TableContainer', () => {
    const wrapper = shallow(<TableContainer />);
    console.log("Wrapper = ",wrapper)
    // expect(wrapper.find(table)).to.have.length(3);
  });

  
});