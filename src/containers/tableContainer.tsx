import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getData, filterByValue, filterByState, filterByGenre, filterByAttire } from '../store/actions/action';
import Table from '../components/table';
import DropDown from '../components/dropDown';
import ReactPaginate from 'react-paginate';
import '../styles/App.css';

import { FaWindowClose } from 'react-icons/fa';

interface TableContainerState {
  value: string,
  pageNumber: number
}

const mapStateToProps = (state: ReduxState) => {
  const { data, filteredData, error, search, stateSelectedTest, genre, attire } = state.dataReducers
  return { data, filteredData, error, search, stateSelectedTest, genre, attire }
};

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({ 
    getData: getData,
    filterByValue: filterByValue,
    filterByState: filterByState,
    filterByGenre: filterByGenre,
    filterByAttire: filterByAttire
  },dispatch);
  

type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>


export class TableContainer extends React.Component<Props, TableContainerState> {
  constructor(props:Props) {
    super(props);
    this.state = { 
      value: '',
      pageNumber: 0
    }
  };

  componentDidMount(){
    this.props.getData(`/api/restaurants`)
  }
  
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    this.props.filterByValue(this.state.value)
    this.setState({
      pageNumber: 0
    })
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value
    })
  }

  handleStateSelected = (e: React.ChangeEvent<HTMLSelectElement> | any) => {
    this.props.filterByState(e)
    this.setState({
      pageNumber: 0
    })
  }

  handleGenreSelected = (e: React.ChangeEvent<HTMLSelectElement> | any) => {
    this.props.filterByGenre(e)
    this.setState({
      pageNumber: 0
    })
  }

  handleAttireSelected = (e: React.ChangeEvent<HTMLSelectElement> | any) => {
    this.props.filterByAttire(e)
    this.setState({
      pageNumber: 0
    })
  }

  paginationHandler = (pageNumber: any) => {
    this.setState({
      pageNumber: pageNumber.selected
    })
  }

  render(){
    const Style: any = {
      form:{
          backgroundColor: '#333EEB',
          width:' 100%',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        },
      input:{
        width: '200px',
        margin:'0 12px'
      }
    }; 
    const { data, filteredData, error, search, stateSelectedTest, genre, attire } = this.props;
    const { value, pageNumber } = this.state;
    const filterStates = data.map(location => location.state);
    const filterGenre = data.map(food => food.genre.split(',')).flat();
    const filterAttire = data.map(attire => attire.attire);
    return (
      <Fragment>
        <form style={Style.form} onSubmit={e => this.handleSubmit(e)}>
          State {stateSelectedTest !== 'all' && <FaWindowClose onClick={()=> this.handleStateSelected('all')}/>}
          <DropDown value={stateSelectedTest} data={filterStates} handleSelected={this.handleStateSelected}/>
          Genres {genre !== 'all' && <FaWindowClose onClick={()=> this.handleGenreSelected('all')}/>}
          <DropDown value={genre} data={filterGenre} handleSelected={this.handleGenreSelected}/>
          Attire {attire !== 'all' && <FaWindowClose onClick={()=> this.handleAttireSelected('all')}/>}
          <DropDown value={attire} data={filterAttire} handleSelected={this.handleAttireSelected}/>
          <input style={Style.input} type="text" value={value} onChange={e => this.handleChange(e)} placeholder="Search State and Genre"/>
          <button type="submit" value="Submit">Search</button>
        </form>
        {filteredData[pageNumber]?
         <Table headers={['Name','City','State','Phone number','Genres','Attire']} filteredData={filteredData[pageNumber]}/>
        :
         <div>No restaurants</div>
        }
        
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={filteredData.length}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.paginationHandler}
          containerClassName={'paginationContainer'}
          pageClassName={'pageClassName'}
          activeClassName={'active'}
          previousClassName={'previous'}
          nextClassName={'next'}
        />
      </Fragment>
    );
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);