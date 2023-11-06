import React, { useState } from 'react';
import Parent from './Parent';
import UserContext from '../../contexts/UserContext';
import Header from '../Header';
import ThemeContext from '../../contexts/ThemesContext';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;


function Tree (props) {
   
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'mail.fdsdf@fsddf',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jFqy72BnOtX9KZVGFax-w-D2GrrN-j_qpfG6K_U5SDhbFA-AJP7oXWdGWsi_amI8bsY&usqp=CAU' 
    });

    const [theme, setTheme] = useState(THEMES.LIGHT)
            
          
    const userLogOut = () => {
        setUser({})
    }
    
    const themeSwitch = () => {
        const switchTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        setTheme(switchTheme)
    }

        return ( 
            <ThemeContext.Provider value = {[theme, themeSwitch]}>
                <UserContext.Provider value = {[user, userLogOut]}>
                    <Header />  
                    <Parent />
                </UserContext.Provider>
            </ThemeContext.Provider>
            
        );
    
}

export default Tree;
