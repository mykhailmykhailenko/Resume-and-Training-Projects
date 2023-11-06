import React from 'react';

const Sibling = (props) => {
    return (
        <p>This Lamp is {props.togglerText ? 'on' : 'off'}</p>
    );
}

export default Sibling;
