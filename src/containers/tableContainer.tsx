import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getData, filterByValue, filterByState, filterByGenre } from '../store/actions/action';
import TableBody from '../components/tableBody';
import DropDown from '../components/dropDown';
import ReactPaginate from 'react-paginate';

interface TableContainerState {
  value: string
}

const mapStateToProps = (state: ReduxState) => {
  // const { data, filteredData, message, error } = state.dataReducers
  const { data, filteredData } = state.dataReducers
  return { data, filteredData }
};

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({ 
    getData: getData,
    filterByValue: filterByValue,
    filterByState: filterByState,
    filterByGenre: filterByGenre
  },dispatch);
  

type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>


export class TableContainer extends React.Component<Props, TableContainerState> {
  constructor(props:Props) {
    super(props);
    this.state = { 
      value: ''
    }
  };

  componentDidMount(){
    this.props.getData(`/api/restaurants`)
  }
  
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    this.props.filterByValue(this.state.value)
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value
    })
  }

  handleStateSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.filterByState(e.target.value)
  }

  handleGenreSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.filterByGenre(e.target.value)
  }

  paginationHandler = () => {

  }

  render(){
    // const { data, filteredData, message } = this.props;
    const { data, filteredData } = this.props;
    const { value } = this.state;
    const filterStates = data.map(location => location.state);
    const filterGenre = data.map(food => food.genre.split(',')).flat();
    return (
      <Fragment>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" value={value} onChange={e => this.handleChange(e)} placeholder="Search State and Genre"/>
          <button type="submit" value="Submit">Search</button>
          <DropDown data={filterStates} handleSelected={this.handleStateSelected}/>
          <DropDown data={filterGenre} handleSelected={this.handleGenreSelected}/>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Phone number</th>
              <th>Genres</th>
            </tr>
          </thead>
          <tbody>
            <TableBody data={filteredData}/>
          </tbody>
        </table>
      </Fragment>
    );
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);