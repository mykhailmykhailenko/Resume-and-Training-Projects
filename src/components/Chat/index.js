import React, { useEffect, useRef } from 'react';
import styles from './Chat.module.css';
import Message from './Message';

const Chat = (props) => {
    const messageRef = useRef(null);

    const scrollToBottom = () => {
        messageRef.current.scrollIntoView({behaviour : 'smooth'})
    }

    useEffect(() => {
        scrollToBottom();
    }, [props.messages])

    return (
        <div className={styles.container}>
           {props.messages.map(elem => <Message message = {elem} key = {elem.id}/>)} 
           <div ref={messageRef}></div>
        </div>
    );
}

export default Chat;
