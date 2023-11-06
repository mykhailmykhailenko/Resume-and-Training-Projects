import React from 'react';
import styles from './TodoPlan.module.css';
import PropTypes from 'prop-types';

const TodoPlan = (props) => {

    const clickHandler = () => {
        const {sendData, id} = props;
        sendData(id);
    }

    return (
        <div className = {styles.container}>
            <li>{props.text}</li>
            <button onClick={clickHandler}>✘</button>
        </div>
    );
}
TodoPlan.defaultProps = {
    id: 0,
    text: 'default text',
    sendData: () => {}
}

TodoPlan.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string,
    sendData: PropTypes.func.isRequired
}

export default TodoPlan;


