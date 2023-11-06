import React, { useContext } from 'react';
import styles from './Header.module.css';
import UserMenu from '../UserMenu';
import ThemeContext from '../../contexts/ThemesContext';


const Header = (props) => {
    const [, setTheme] = useContext(ThemeContext);
    return (
        <div className={styles.header}>
            <img src='./logo192.png' 
                alt='' 
                className={styles.logo}/>
            <button onClick={setTheme}>Change Theme</button>
            <UserMenu />
        </div>
    );    
}

export default Header;




