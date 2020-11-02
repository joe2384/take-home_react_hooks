import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getData } from '../store/actions/action';

interface TableContainerState {
  toggle: string
}

const mapStateToProps = (state: ReduxState) => {
  const { data, message, error, loading } = state.dataReducers
  return { data, message, error, loading }
};

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({ getDataRequest: getData},dispatch);
  

type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps>


class TableContainer extends React.Component<Props, TableContainerState>{
  constructor(props:Props) {
    super(props);
    // this.state = {
    //     toggle: 'Starter Boxes',
    // };
  };

  componentDidMount(){
    this.props.getDataRequest()
  }
  
  toggleHandler = (value: string) => {
    this.setState({
      toggle: value 
    })
  }

  render(){
    const { data, message, error, loading } = this.props
    
    return (
      <div>
        <h2>Table</h2>
        <div>
          
        </div>
      </div>
    );
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);