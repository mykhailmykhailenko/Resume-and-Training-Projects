import React, {useContext} from 'react';
import Subparent from './Subparent';
import cx from 'classnames';
import styles from './Parent.module.css'
import ThemeContext from '../../../contexts/ThemesContext';
import CONSTANTS from '../../../constants';
const {THEMES} = CONSTANTS;


const Parent = (props) => {

    const [theme]  = useContext(ThemeContext);
    const cnames = cx([styles.container], {
        [styles.lightTheme] : theme === THEMES.LIGHT,
        [styles.darkTheme] : theme === THEMES.DARK                
    })

    // const memoizedFunc = useCallback(() => {
    //     console.log(props.value)
    // } , [props.value])

    // const computedValue = () => {
    //     let sum = 0;
    //     for (let  i = 0; i < 100000000; i++) {
    //         sum = i**15
    //     }
    //     return sum
    // }
    // const memoizedValue = useMemo(computedValue, []);

    return (
        <div className={cnames}>
            <p>Parent</p>
            <Subparent />
        </div>
    )
       
}
   
  
export default Parent;
