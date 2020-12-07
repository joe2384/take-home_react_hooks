import React, { Fragment, useEffect, useState } from 'react';
import Table from '../components/table';
import DropDown from '../components/dropDown';
import Pagination from '../components/pagination';
import '../styles/App.css';
import UpdatedComponent from './containerWrap';

const TableContainer: React.FC<TableContainerProps> = ({
  getData,
  filterByValue,
  filterByState,
  filterByGenre,
  filterByAttire,
  data,
  filteredData,
  error,
  search,
  stateSelectedTest,
  genre,
  attire,
}) => {
  const [pageNumber, paginationHandler] = useState<number | any>(0);
  const [value, handleChange] = useState<string>('');

  useEffect(() => {
    getData(`/api/restaurants`);
  }, [getData, data.length]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterByValue(value);
    paginationHandler(0);
  };

  const handleStateSelected = (
    e: React.ChangeEvent<HTMLSelectElement> | any
  ) => {
    filterByState(e);
  };

  const handleGenreSelected = (
    e: React.ChangeEvent<HTMLSelectElement> | any
  ) => {
    filterByGenre(e);
  };

  const handleAttireSelected = (
    e: React.ChangeEvent<HTMLSelectElement> | any
  ) => {
    filterByAttire(e);
  };

  const Style: any = {
    form: {
      backgroundColor: '#333EEB',
      width: ' 100%',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    },
    input: {
      width: '200px',
      margin: '0 12px',
    },
  };
  const filterStates = data.map((location) => location.state);
  const filterGenre = data.map((food) => food.genre.split(',')).flat();
  const filterAttire = data.map((attire) => attire.attire);
  return (
    <Fragment>
      <form style={Style.form} onSubmit={(e) => handleSubmit(e)}>
        <DropDown
          search={search}
          value={stateSelectedTest}
          data={filterStates}
          filterType={'State'}
          handleSelected={handleStateSelected}
        />

        <DropDown
          search={search}
          value={genre}
          data={filterGenre}
          filterType={'Genre'}
          handleSelected={handleGenreSelected}
        />

        <DropDown
          search={search}
          value={attire}
          data={filterAttire}
          filterType={'Attire'}
          handleSelected={handleAttireSelected}
        />
        <input
          style={Style.input}
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search Name, City, or Genre"
        />

        <button type="submit" value="Submit">
          Search
        </button>
      </form>
      {filteredData[0] || (filteredData[pageNumber.selected] && !error) ? (
        <Table
          rows={['Name', 'City', 'State', 'Phone number', 'Genres', 'Attire']}
          columns={['name', 'city', 'state', 'telephone', 'genre', 'attire']}
          filteredData={
            filteredData[pageNumber.selected] === undefined
              ? filteredData[0]
              : filteredData[pageNumber.selected]
          }
        />
      ) : (
        <div>No restaurants</div>
      )}
      <Pagination
        paginationHandler={paginationHandler}
        pageCount={filteredData.length}
      />
    </Fragment>
  );
};

export default UpdatedComponent(TableContainer);
