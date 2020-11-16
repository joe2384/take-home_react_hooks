import React, { Fragment } from 'react';
import { FaWindowClose } from 'react-icons/fa';

interface DropDownProps {
  filterType: string;
  value: string;
  data: string[];
  handleSelected: Function;
  search: string;
}

const DropDown: React.FC<DropDownProps> = ({
  value,
  data,
  filterType,
  handleSelected,
  search,
}) => {
  const Style: any = {
    select: {
      width: ' 100px',
      margin: '0 15px',
    },
    fa: {
      marginLeft: '15px',
    },
  };
  const uniqueValues = [...new Set(data)];
  return (
    <Fragment>
      {filterType}
      {/* {value !== 'all' && search && ( */}
      {value !== 'all' && (
        <FaWindowClose style={Style.fa} onClick={() => handleSelected('all')} />
      )}
      <select
        style={Style.select}
        value={value}
        onChange={(e) => handleSelected(e.target.value)}>
        <option value="all">All</option>
        {uniqueValues.map((state, idx) => (
          <option key={idx} value={state} placeholder={value}>
            {state}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default DropDown;
