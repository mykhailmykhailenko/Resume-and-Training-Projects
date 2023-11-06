import React from 'react';
import useWindowResize from '../../hooks/useWindowResize';

const WindowResizer = () => {

   const {x, y} = useWindowResize();

    return (
        <>
            <p>X: {x}</p>
            <p>Y: {y}</p>
        </>
    )
    
}

export default WindowResizer;
