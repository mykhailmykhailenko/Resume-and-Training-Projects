import React from 'react';
// import styles from './OurComponent.module.css'

const OurComponent = () => {
    const userObj = {
        "id": 2,
        "name": "Josh",
        "description": "programmer",
        "profilePicture": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        };

        const consoleConnect = () => {
            console.log('Connected')
        }
    
    return (
        
        <div>
            <img src={userObj.profilePicture} alt=''/>
            <h1>{userObj.name}</h1>
            <p>{userObj.description}</p>
            <button onClick={consoleConnect}>Connect</button>
        </div>
        
    );
}

export default OurComponent;
