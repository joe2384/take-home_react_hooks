import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, compose } from 'redux';
import {
  getData,
  filterByValue,
  filterByState,
  filterByGenre,
  filterByAttire,
} from '../store/actions/action';

const mapStateToProps = (state: ReduxState) => {
  const {
    data,
    filteredData,
    error,
    search,
    stateSelectedTest,
    genre,
    attire,
  } = state.dataReducers;
  return {
    data,
    filteredData,
    error,
    search,
    stateSelectedTest,
    genre,
    attire,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getData: getData,
      filterByValue: filterByValue,
      filterByState: filterByState,
      filterByGenre: filterByGenre,
      filterByAttire: filterByAttire,
    },
    dispatch
  );

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const UpdatedComponent = (OriginalComponent: any) => {
  const NewComponent: React.FC<Props> = ({ ...Props }) => {
    return <OriginalComponent {...Props} />;
  };
  return NewComponent;
};

const composeWrapper = compose(
  connect(mapStateToProps, mapDispatchToProps),
  UpdatedComponent
);

export default composeWrapper;
