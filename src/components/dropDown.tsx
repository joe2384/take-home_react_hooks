import React from 'react';

interface DropDownProps {
    data: string[],
    handleSelected: Function
}

const DropDown: React.FC<DropDownProps> = ({data, handleSelected}) =>{
    const uniqueValues = [...new Set(data)]
    return (
        <select onChange={ e => handleSelected(e)}>
            <option value="all" >All</option>
            {uniqueValues.map((state, idx) => 
                <option key={idx} value={state}>{state}</option>
            )}
        </select>
    );
 
};

export default DropDown;