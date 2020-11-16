import React from 'react';

interface Props {
  rows: string[];
  columns: string[];
  filteredData: any;
}

const Table: React.FC<Props> = ({
  rows,
  columns,
  filteredData,
}): JSX.Element => {
  const Style: any = {
    table: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      borderCollapse: 'collapse',
      width: ' 100%',
      border: '1px solid rgb(51, 62, 235)',
    },
    HeadTr: {
      backgroundColor: '#f2f2f2',
      height: '40px',
      borderBottom: '1px solid rgb(51, 62, 235)',
    },
    shadedTd: {
      padding: '15px',
      backgroundColor: '#FBFBFB',
    },
    td: {
      padding: '15px',
    },
  };
  return (
    <table style={Style.table}>
      <thead>
        <tr style={Style.HeadTr}>
          {rows &&
            rows.map((header: any, idx: number) => <th key={idx}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {filteredData &&
          filteredData.map((place: any, idx: number) => (
            <tr key={place.id}>
              {columns.map((titles, idx: number) => (
                <td key={idx} style={idx % 2 ? Style.td : Style.shadedTd}>
                  {place[titles.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
