import React from 'react';
import Child from './Child';

const Subparent = (props) => {
    return (
        <div style = {{border: 'inherit', padding: '20px'}}>
            <p>Subparent</p>
            <Child />
        </div>
    );
}

export default Subparent;
