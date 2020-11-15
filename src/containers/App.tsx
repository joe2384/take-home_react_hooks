import React from 'react';
import TableContainer from './tableContainer';
import '../styles/App.css';

const App: React.FC = () => {
  const Style: any = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '90%',
    },
  };
  return (
    <div style={Style.wrapper}>
      <TableContainer />
    </div>
  );
};

export default App;
