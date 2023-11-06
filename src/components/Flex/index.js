import React from 'react';
import FlexContainer from './FlexContainer';
import styles from './Flex.module.css';

const Flex = (props) => {
    return (

        <FlexContainer fd="row" jc="center" ai="center">
           <div className={styles.box}> 1 </div>
           <div className={styles.box}> 2 </div>
           <div className={styles.box}> 3 </div>
           <div className={styles.box}> 4 </div>
           <div className={styles.box}> 5 </div>
        </FlexContainer>
       )
}

export default Flex;
