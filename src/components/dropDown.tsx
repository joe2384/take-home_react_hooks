import React from 'react';

interface DropDownProps {
  value: string;
  data: string[];
  handleSelected: Function;
}

const DropDown: React.FC<DropDownProps> = ({ value, data, handleSelected }) => {
  const Style: any = {
    select: {
      width: ' 100px',
      margin: '0 15px',
    },
  };
  const uniqueValues = [...new Set(data)];
  return (
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
  );
};

export default DropDown;
