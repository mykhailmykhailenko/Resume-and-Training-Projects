import React from 'react';
import UserMenu from '../../../../../UserMenu';

 const InnerChild = (props) => {
    
    return (
        
        <div style = {{border: 'inherit', padding: '20px'}}> 
            <UserMenu />
            <p>InnerChild</p>
        </div>
       
    )
}

export default InnerChild;
