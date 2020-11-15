import React from 'react';

interface Props {
    headers: string[],
    filteredData: any
}

const Table: React.FC<Props> = ({headers, filteredData}): JSX.Element => {
    const Style: any = {
        table:{
            fontFamily: 'Arial, Helvetica, sans-serif',
            borderCollapse: 'collapse',
            width:' 100%'
          },
        HeadTr:{
            backgroundColor: '#f2f2f2',
            height: '40px'
        },
        td:{
          padding: '15px'  ,
          backgroundColor: '#f2f2f2',
      }
    }; 

    return(
        <table style={Style.table}>
          <thead>
            <tr style={Style.HeadTr}>
            { headers &&
                headers.map((header: any, idx: number) => 
                    <th key={idx}>{header}</th>
                )
            }
            </tr>
          </thead>
          <tbody>
            { filteredData &&
                filteredData.map((place: any) => 
                    <tr key={place.id}>
                        <td style={Style.td}>{place.name}</td>
                        <td>{place.city}</td>
                        <td style={Style.td}>{place.state}</td>
                        <td>{place.telephone}</td>
                        <td style={Style.td}>{place.genre}</td>
                        <td>{place.attire}</td>
                    </tr>
                )
            }
          </tbody>
        </table>
    )
} 

export default Table