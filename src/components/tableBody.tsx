import React, { Fragment } from 'react';

interface TableBodyProps {
    data: dataObject[]
}


class TableBody extends React.Component<TableBodyProps>{
  constructor(props:TableBodyProps) {
    super(props);
    
  };

  render(){
  const { data } = this.props;
    // console.log("LOGGER",data)
    return (
      <Fragment>
          {data.map(place => 
            <tr key={place.id}>
                <td>{place.name}</td>
                <td>{place.city}</td>
                <td>{place.state}</td>
                <td>{place.telephone}</td>
                <td>{place.genre}</td>
            </tr>
            )}
      </Fragment>
    );
  }
};


export default TableBody;