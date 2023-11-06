import React, {useEffect, useReducer, useState} from 'react';
import Chat from '../Chat';
import MessageArea from '../MessageArea';
import styles from './ChatDashboard.module.css';
import { getMessages } from '../../api/messages';
import UserContext from '../../contexts/UserContext';

const reducer = (state, action) => {
    switch(action.type) {
        case 'DATA_LOAD_SUCCESS' : 
            const {data} = action;
            return {
                ...state,
                messages: data.comments
            }
        case 'DATA_LOAD_ERROR' : 
            const {error} = action;
            return {
                ...state,
                error
            }
        case 'NEW_MESSAGE':
            const {message: {body, user}} = action;
            const newArrayMessage = [...state.messages, {
                body,
                user,
                id: state.messages.length + 1 
            }]
            return {
                ...state,
                messages: newArrayMessage
            }
        default : {
            return state
        }
    }
}

const ChatDashboard = () => {

    const [user, setUser] = useState({
        id: 1,
        username: 'John Doe',
        imageSrc: './placeholder.png'
    })

    const [state, dispatch] = useReducer(reducer, {
        messages: [],
        error: null
    })

    useEffect(() => {
        getMessages()
        .then((data) => {
            const action = {
                data,
                type: 'DATA_LOAD_SUCCESS'
            }
            dispatch(action)
        })
        .catch ((error) => {
            const action = {
                error,
                type: 'DATA_LOAD_ERROR'
            }
            dispatch(action)
        })
    }, [])

    const addNewMessage = (data) => {
        const action = {
            message : {
                body: data,
                user
            },
            type: 'NEW_MESSAGE'
        }
        dispatch(action)    
    }

    const {error, messages} = state;
    return (
        <UserContext.Provider value={[user, setUser]}>
            <main className={styles.container}>
                {error && <div>{error.message}</div>}
                <div className={styles['chat-wrapper']}>
                    <Chat messages = {messages}/>
                    <MessageArea sendMessage = {addNewMessage}/>
                </div>
            </main>
        </UserContext.Provider>
    );
}

export default ChatDashboard;
