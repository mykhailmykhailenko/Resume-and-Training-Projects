import React from 'react';
import styles from './Message.module.css';
import { format } from 'date-fns';



const Message = (props) => {

    const {message: {body, user}} = props;
    const date = new Date();

    const cnames = user.username === 'John Doe' ? styles.reverse : styles.container;

    return (
        <div className={cnames}>
            <img src='./placeholder.png' alt='' className={styles.image}/>
            <div className= {styles['message-container']}>
                <span className={styles['user-name']}>{user.username}</span>
                <span className={styles['user-message']}>{body}</span>
                <span className={styles.date}>{format(date, 'H:mm')}</span>
            </div>
        </div>
    );
}

export default Message;
