import React from 'react';
import './style.css'

function Lamp (props) {
    
    
    const switchHandler = () => {
        props.callBackParent()
    }
   
        const {togglerState} = props;
        const cn = togglerState ? 'lamp-on' : 'lamp-off'
        return (
            <>
            <div className={cn}>

            </div>
            <button onClick={switchHandler}>Switch</button>
            </>
        );
}


export default Lamp;
