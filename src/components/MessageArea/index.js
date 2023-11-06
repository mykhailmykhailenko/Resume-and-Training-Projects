import React, { useEffect, useState } from 'react';
import styles from './MessageArea.module.css';

const MessageArea = (props) => {

    const [inputMessage, setInputMessage] = useState('');

    const changeHandler = ({target: {value}}) => {
        setInputMessage(value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.sendMessage(inputMessage);
        setInputMessage('');
    }

    const keydownHandler = (event) => {
        if (event.keyCode === 13) {
            submitHandler(event)
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', keydownHandler)
        return () => {
            document.body.removeEventListener('keydown', keydownHandler)
        }
    }, [inputMessage])

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className= {styles['form-wrapper']}>
                <textarea 
                className={styles.textarea}
                value={inputMessage}
                onChange={changeHandler}
                placeholder='Enter new message...'/>
                <button className={styles.btn} type='submit'>&#10148;</button>
            </form>
        </div>
    );
}

export default MessageArea;
