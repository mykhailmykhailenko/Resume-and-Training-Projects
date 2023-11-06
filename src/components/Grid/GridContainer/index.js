import React from 'react';

const GridContainer = (props) => {
    return (
        <div style={{width: "1200px" , textAlign : "center"}}>
            {props.children}
        </div>
    );
}

export default GridContainer;
