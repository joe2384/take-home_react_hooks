import React from 'react';
import ReactPaginate from 'react-paginate';
import '../styles/App.css';

interface PaginationProps {
  paginationHandler: any;
  pageCount: number;
}

const Pagination: React.FC<PaginationProps> = ({
  paginationHandler,
  pageCount,
}) => {
  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={paginationHandler}
      containerClassName={'paginationContainer'}
      pageClassName={'pageClassName'}
      activeClassName={'active'}
      previousClassName={'previous'}
      nextClassName={'next'}
    />
  );
};

export default Pagination;
