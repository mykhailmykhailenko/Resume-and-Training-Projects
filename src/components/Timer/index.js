import React, { useEffect, useState } from 'react';
import { addSeconds, format } from 'date-fns';
import styles from './Timer.module.css';

function Timer (props) {

const [date, setDate] = useState(new Date(0,0,0,0,0,0));
const [isRunning, setRunning] = useState(false);

useEffect(() => {
    let timerId = null;
    if (isRunning) {
       timerId = setTimeout(() => {
            setDate(addSeconds(date, 1))
        }, 1000)
    }
    return () => {
            clearTimeout(timerId)
        }
    
})
    
    const clearTimer = () => {
        setDate(new Date(0,0,0,0,0,0))
    }

    const clickHandler = () => {
        setRunning(!isRunning)
    }

    const cnames = isRunning ? 'red-btn' : 'green-btn';

    return (
        <div className={styles.container}>
            <h1>{format(date, 'HH:mm:ss')}</h1>
            <div>
                <button className={styles[cnames]} onClick={clickHandler}>{isRunning ? 'Stop' : 'Start'}</button>
                <button className={styles.btn} onClick={clearTimer}>Reset</button>
            </div>
        </div>
        );
    }


export default Timer;

