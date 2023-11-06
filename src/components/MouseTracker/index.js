import React, { useEffect, useState } from 'react';

const MouseTracker = () => {
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0
    });
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.body.addEventListener('mousemove' , mouseMoveHandler)
        return () => {
            document.body.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    const mouseMoveHandler = ({clientX, clientY}) => {
        setCoordinates({
            x : clientX,
            y : clientY
        })
    }

    const clickHandler = () => {
        setCount(count + 1)
    }

    return (
        <div>
             <p>X: {coordinates.x}</p>
             <p>Y: {coordinates.y}</p> 
             <p>Count: {count}</p>
             <button onClick={clickHandler}>+</button>
        </div>
    );
}

export default MouseTracker;
