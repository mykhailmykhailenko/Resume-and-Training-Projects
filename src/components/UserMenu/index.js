import React, { useContext } from 'react';
import styles from './UserMenu.module.css';
import UserContext from '../../contexts/UserContext';


const UserMenu = (props) => {
    const [user, setUser] = useContext(UserContext);

    if (Object.keys(user).length === 0) {
        return null
    }
    return ( 
        <div className={styles.userContainer}>
            <img src={user.avatar}
            alt='' 
            className={styles.logo}/>
            <div>
                <p>{user.firstName} {user.lastName}</p>
                <button onClick={setUser}>LogOut</button>
            </div>
        </div>
    )
}


export default UserMenu;